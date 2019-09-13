# Introduction

This is the [Fuzzy Labs](http://fuzzylabs.ai) website. We use [Hugo](https://gohugo.io) to generate static HTML and [CircleCI](https://circleci.com) to build and deploy the content to [Firebase Hosting](https://firebase.google.com/docs/hosting)

# Usage

First [install Hugo](https://gohugo.io/getting-started/installing). Check that Hugo is installed correctly with `hugo version` which should output something like `Hugo Static Site Generator v0.56.3 linux/amd64 <etc...>`.

## Local Hugo test server

```
cd hugo
hugo server
```

## Build

### Generate static content with Hugo

```
hugo --config="hugo/config.toml" -s hugo -d $PWD/public
```

## Clean

```
rm -rf public
```

# Editing content

## Creating a new page

Content lives in the [content](hugo/content) directory. Create a new Markdown file for your content and include the following front matter:

```
---
title: ...
description: ...
draft: false
---
```

# Deployment

Commits to master will automatically be deployed to Firebase hosting by [CircleCI](.circleci/config.yml)

## Testing Firebase locally

This serves from `public` so make sure that you've generated the static content via Hugo first.
```
firebase serve
```

## Manually deploying to Firebase

```
firebase login
firebase deploy
```
