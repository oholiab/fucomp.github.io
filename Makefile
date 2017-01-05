.PHONY: dev-env serve post

default: dev-env

dev-env: vendor

vendor:
	which bundle || gem install bundler
	bundle install --path=vendor

assets/fonts:
	cd assets && wget https://grimmwa.re/files/fonts.tar.gz && tar xvf fonts.tar.gz
	rm assets/fonts.tar.gz

serve: assets/fonts
	bundle exec jekyll serve --config _config.yml,_config_dev.yml

post: | vendor
	bundle exec helpers post

doc: helpers
	bundle exec rdoc helpers
