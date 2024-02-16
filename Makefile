default: help

help:
	@grep -E '^[a-zA-Z0-9 -_]+:.*#' Makefile | while read -r l; do printf "\033[1;32m$$(echo $$l | cut -f 1 -d':')\033[00m:$$(echo $$l | cut -f 2- -d'#')\n"; done

app: # Gets all dependencies for the project
	@echo "Start Svelte App"
	@cd ./portfolio && npm run dev

backend: # Starts the backend server
	@echo "Start Backend Server"
	@cd ./backend && uvicorn main:app --host 0.0.0.0 --port 8000

generate_requirements: # Generates the requirements.txt file
	@echo "Generate requirements.txt"
	@cd ./backend && pip freeze > requirements.txt

install_requirements: # Installs the requirements.txt file
	@echo "Install requirements.txt"
	@cd ./backend && pip install -r requirements.txt