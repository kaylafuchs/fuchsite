package server

import (
	"context"
	"fmt"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"

	"github.com/sirupsen/logrus"
)

// Server is a wrapper for a basic http server intended for serving single page apps.
type Server struct {
	server *http.Server
	logger *logrus.Entry
}

// NewServer returns a new instance of Server.
func NewServer(logger *logrus.Entry) *Server {
	// Port is set automatically by AppEngine
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	logger.Info(fmt.Sprintf("Server using port %s", port))
	return &Server{
		server: &http.Server{
			Addr: fmt.Sprintf(":%s", port),
		},
		logger: logger,
	}
}

// NewRouter initializes routing for an instance of Server. Serves the index page for all paths except /static/.
func (s *Server) NewRouter() {
	router := mux.NewRouter()
	router.Use(handlers.ProxyHeaders)

	router.PathPrefix("/_ah/start").HandlerFunc(s.startHandler)
	router.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("./app/dist/static"))))
	router.PathPrefix("/").HandlerFunc(s.indexPageHandler)

	s.server.Handler = router
}

/*
// HTTPS Redirect middleware. For use with AppEngine flex environment only.
func (s *Server) newHTTPSRedirect(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if !strings.Contains(r.Host, "localhost") && r.Header.Get("X-Forwarded-Proto") != "https" {
			newURL := fmt.Sprintf("https://%s%s", r.Host, r.URL.RequestURI())
			http.Redirect(w, r, newURL, http.StatusMovedPermanently)
			return
		}
		next.ServeHTTP(w, r)
	})
}
*/

func (s *Server) indexPageHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "./app/dist/index.html")
}

// Handles AppEngine start requests. Required for starting instances in standard environment.
func (s *Server) startHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(200)
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
