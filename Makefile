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
	rm -rf /var/www/burkow/*
	brunch build --production
	mv public/* /var/www/burkow

