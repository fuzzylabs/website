# Introduction

This is the Fuzzy Labs website. We use [Hugo](https://gohugo.io) to generate static HTML, [nginx](http://nginx.org/) -- in [Docker](https://www.docker.com) -- to serve content, and [CircleCI](https://circleci.com) to build and deploy to Google Compute Engine.

# Usage

## Build:

```
docker build . -t fuzzylabs.ai:latest
```

## Run

```
docker run -p 80:80 fuzzylabs.ai
```
