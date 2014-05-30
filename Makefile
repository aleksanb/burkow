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
	rm -rf public/*
	./node_modules/.bin/brunch build --production
	ssh burkow.no 'rm -rf /var/www/burkow.no/cv && mkdir /var/www/burkow.no/cv'
	scp -r public/* burkow.no:/var/www/burkow.no/cv

