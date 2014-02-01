all: update

.PHONY: update
update:
	npm install
	bower install

.PHONY: setup
setup:
	sudo npm install -g brunch bower

.PHONY: run
run:
	brunch watch --server

.PHONY: deploy
deploy:
	git pull origin master
	rm -rf public/*
	brunch build --production
	rm -rf /var/www/burkow/cv
	cp -r public /var/www/burkow/cv

