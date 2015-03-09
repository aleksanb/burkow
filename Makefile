.PHONY: deploy
deploy:
	jekyll build
	cp -r _site/* /var/www/burkow.no/cv/
