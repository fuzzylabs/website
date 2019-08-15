# Introduction

This is the [Fuzzy Labs](http://fuzzylabs.ai) website. We use [Hugo](https://gohugo.io) to generate static HTML and [CircleCI](https://circleci.com) to build and push the content to a Google Cloud Storage Bucket.

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

## Publishing to Google Cloud Storage Bucket

https://cloud.google.com/storage/docs/hosting-static-website

### Prerequisites

- Create the bucket
```
gsutil mb -l eu -p fuzzylabs -b on gs://www.fuzzylabs.ai
```

- Configure public access to all objects in the bucket
```
gsutil iam ch allUsers:objectViewer gs://www.fuzzylabs.ai
```

- Configure the `MainPageSuffix` for the bucket
```
gsutil web set -m index.html gs://www.fuzzylabs.ai
```

- Configure DNS

Create a CNAME record to point www.fuzzylabs.ai at c.storage.googleapis.com.

### Publish the content

```
gsutil -m cp -r public/* gs://www.fuzzylabs.ai
```
