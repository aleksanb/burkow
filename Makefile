.PHONY: run
run:
	bundle exec jekyll serve

.PHONY: deploy
deploy:
	bundle exec jekyll build
	scp -r _site/* aleksanb@burkow.no:/var/www/burkow.no/cv/

.PHONY: deploy-local
deploy-local:
	bundle exec jekyll build
	cp -r _site/* /var/www/burkow.no/cv/
