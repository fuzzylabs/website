# Introduction

This is the Fuzzy Labs website. We use [Hugo](https://gohugo.io) to generate static HTML, [nginx](http://nginx.org/) -- in [Docker](https://www.docker.com) -- to serve content, and [CircleCI](https://circleci.com) to build and deploy to Google Compute Engine.

# Usage

## Build:

### Generate static content with Hugo

```
hugo --config="hugo/config.toml" -s hugo -d $PWD/public -b "/website"
```

*n.b. the `-b "/website"` option is a workaround to ensure URLs include the /website prefix which we're using until production-readiness*

### Build Docker image

```
docker build . -t fuzzylabs.ai:latest
```

## Run

```
docker run -p 80:80 fuzzylabs.ai
```

## Clean

```
rm -rf public
```

## Local Hugo test server

After [installing Hugo](https://gohugo.io/getting-started/installing):

```
cd hugo
hugo server
```
