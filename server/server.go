package server

import (
	"context"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/gorilla/mux"

	"github.com/sirupsen/logrus"
)

// Server is a wrapper for a basic http server intended for serving single page apps.
type Server struct {
	server *http.Server
	logger *logrus.Entry
}

// NewServer returns a new instance of Server. Always listens on 8080 to enable GCP AppEngine deployment.
func NewServer(logger *logrus.Entry) *Server {
	return &Server{
		server: &http.Server{
			Addr: ":8080",
		},
		logger: logger,
	}
}

// NewRouter initializes routing for an instance of Server. Serves the index page for all paths except /static/.
func (s *Server) NewRouter() {
	router := mux.NewRouter()
	router.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("./app/dist/static"))))
	router.PathPrefix("/").HandlerFunc(s.IndexPageHandler)
	s.server.Handler = router
}

// IndexPageHandler serves the index page for the single page app.
func (s *Server) IndexPageHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "./app/dist/index.html")
}

func (s *Server) initGracefulShutdown() {
	shutdown := make(chan os.Signal, 1)
	signal.Notify(shutdown, os.Interrupt, syscall.SIGINT, syscall.SIGQUIT, syscall.SIGTERM)

	<-shutdown
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	err := s.server.Shutdown(ctx)
	if err != nil {
		s.logger.WithError(err).Error("Error: failed to stop HTTP server")
		return
	}
}

// Start starts server with graceful shutdown.
func (s *Server) Start() error {
	go s.initGracefulShutdown()

	err := s.server.ListenAndServe()
	if err == http.ErrServerClosed {
		return nil
	}

	return err
}
