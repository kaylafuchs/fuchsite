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

type Server struct {
	server *http.Server
	logger *logrus.Entry
}

func NewServer(logger *logrus.Entry) *Server {
	return &Server{
		server: &http.Server{
			Addr: ":2424",
		},
		logger: logger,
	}
}

func (s *Server) NewRouter() {
	router := mux.NewRouter()
	router.PathPrefix("/").Handler(http.FileServer(http.Dir("./app/dist")))
	s.server.Handler = router
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

func (s *Server) Start() error {
	go s.initGracefulShutdown()

	err := s.server.ListenAndServe()
	if err == http.ErrServerClosed {
		return nil
	}

	return err
}
