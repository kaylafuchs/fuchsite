package main

import (
	"os"

	"github.com/kaylafuchs/fuchsite/server/app"
	"github.com/sirupsen/logrus"
)

func newLogger(l string) *logrus.Entry {
	logger := logrus.New()

	level, err := logrus.ParseLevel(l)
	if err != nil {
		logger.Errorf("Error: failed to parse log level: %s, using INFO", l)
		level = logrus.InfoLevel
	}

	logger.Formatter = new(logrus.JSONFormatter)
	logger.Out = os.Stdout
	logger.Level = level

	return logrus.NewEntry(logger)
}

func main() {
	logger := newLogger("INFO")
	app := app.NewApp(logger)

	app.NewRouter()

	app.Logger.Info("Starting server...")
	err := app.StartServer()
	if err != nil {
		app.Logger.WithError(err).Error("Fatal: server stopped")
	}
}
