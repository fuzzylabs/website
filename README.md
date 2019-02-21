# Introduction

This is the Fuzzy Labs website. We use [Hugo](https://gohugo.io) to generate static HTML -- [CircleCI](https://circleci.com) to build and push the content to a Google Cloud Storage Bucket.

# Usage

## Build

### Generate static content with Hugo

```
hugo --config="hugo/config.toml" -s hugo -d $PWD/public
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

## Publish to Google Cloud Storage Bucket

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
