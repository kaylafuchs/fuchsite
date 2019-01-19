package app

import (
	"net/http"

	"github.com/gorilla/mux"

	"github.com/sirupsen/logrus"
)

type App struct {
	server *http.Server
	Logger *logrus.Entry
}

func NewApp(logger *logrus.Entry) *App {
	server := &http.Server{
		Addr: ":8080",
		// ReadTimeout:  10,
		// WriteTimeout: 10,
	}

	return &App{
		server: server,
		Logger: logger,
	}
}

func (a *App) NewRouter() {
	router := mux.NewRouter()

	// serve static files
	router.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("./public/static/"))))

	router.PathPrefix("/").HandlerFunc(a.ServeHomepage)

	a.server.Handler = router
}

func (a *App) StartServer() error {
	err := a.server.ListenAndServe()
	if err == http.ErrServerClosed {
		return nil
	}

	return err
}
