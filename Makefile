.PHONY: run
run:
	bundle exec jekyll serve

.PHONY: deploy
deploy:
	bundle exec jekyll build
	scp -r _site/* aleksanb@burkow.no:/var/www/burkow.no/cv/
