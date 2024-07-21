default: help

help:
	@grep -E '^[a-zA-Z0-9 -_]+:.*#' Makefile | while read -r l; do printf "\033[1;32m$$(echo $$l | cut -f 1 -d':')\033[00m:$$(echo $$l | cut -f 2- -d'#')\n"; done

app: # Gets all dependencies for the project
	@echo "Start Svelte App"
	@cd ./portfolio && npm run dev