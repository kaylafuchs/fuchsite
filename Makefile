release: check-node
	cd app && npm ci && npm run build && cd .. && gcloud app deploy

dev-server: check-node
	cd app && npm install && npm run dev

# Babel 8 is ESM-only; babel-loader needs a Node that can require() ES modules (22.12+ / 20.19+).
check-node:
	@node -e 'if (!process.features.require_module) { console.error("Node " + process.version + " (" + process.execPath + ") is too old for this build. Need 22.18+ or 24.11+. Try: nvm use"); process.exit(1) }'
