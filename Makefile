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
	brunch build
	mv public/* /var/www/burkow

