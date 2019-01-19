package app

import "net/http"

func (a *App) ServeHomepage(w http.ResponseWriter, req *http.Request) {
	http.ServeFile(w, req, "./public/index.html")
}
