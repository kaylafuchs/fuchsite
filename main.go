package main

import (
	"os"

	"github.com/kaylafuchs/fuchsite/server"
	"github.com/sirupsen/logrus"
)

func newLogger() *logrus.Entry {
	logger := logrus.New()
	logger.Formatter = new(logrus.JSONFormatter)
	logger.Out = os.Stdout
	return logrus.NewEntry(logger)
}

func main() {
	logger := newLogger()
	s := server.NewServer(logger)

	s.NewRouter()

	logger.Info("Starting server...")
	err := s.Start()
	if err != nil {
		logger.WithError(err).Error("Fatal: server stopped")
	}
}
