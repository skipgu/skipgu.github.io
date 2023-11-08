## SKIP @ &#x1F310;

Instructions for **local development**. Make sure to install `jekyll` according
to [instructions](https://jekyllrb.com/docs/installation/).

### Install dependencies

```sh
$ bundle install
```

### Run (local level)

```sh
$ bundle exec jekyll serve --config "_config.yml,_config_local.yml"`
```

The `_config_local.yml` file overrides the url, and makes it so the website is
served locally. 
