release: 
	cd app && npm run build && cd .. && gcloud app deploy

dev-server:
	cd app && npm install && npm run dev