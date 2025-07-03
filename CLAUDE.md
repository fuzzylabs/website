# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is the Fuzzy Labs website - a Hugo-based static site generator for a company specializing in open source MLOps solutions. The site includes company information, blog posts, case studies, and service offerings.

## Key Commands

### Local Development
```bash
# Start Hugo development server
cd hugo
hugo server
```

### Build
```bash
# Generate static content with Hugo
hugo --config="hugo/config.toml" -s hugo -d $PWD/public
```

### Clean
```bash
# Remove generated files
rm -rf public
```

### Firebase (Local Testing)
```bash
# Serve locally from public directory (must build first)
firebase serve
```

### Firebase (Deploy)
```bash
# Login and deploy
firebase login
firebase deploy

# Deploy to dev environment
firebase deploy --project=fuzzylabs-dev
```

## Architecture

### Hugo Site Structure
- **hugo/config.toml**: Main Hugo configuration
- **hugo/content/**: All markdown content (blog posts, pages, case studies)
- **hugo/layouts/**: HTML templates and partials
- **hugo/static/**: Static assets (CSS, JS, images)
- **public/**: Generated static site (created by Hugo build)

### Content Types
- **Blog posts**: Located in `hugo/content/blog/` with frontmatter including author info, tags, and metadata
- **Case studies**: Located in `hugo/content/case-studies/` 
- **Service pages**: Individual markdown files in `hugo/content/`
- **Layout templates**: Custom layouts for different content types in `hugo/layouts/`

### Key Layout Files
- **hugo/layouts/index.html**: Homepage template
- **hugo/layouts/_default/baseof.html**: Base template for all pages
- **hugo/layouts/_default/blog_post.html**: Blog post template with author info and social sharing
- **hugo/layouts/partials/**: Reusable template components (navigation, footer, etc.)

### Blog Post Structure
Blog posts require specific frontmatter:
```yaml
---
title: "SEO Title | Blog | Fuzzy Labs"
articletitle: "Display Title"
description: "Short description"
metadescription: "Meta description for SEO"
date: 2022-01-27T00:00:00
tags: ["tag1", "tag2"]
image: "/images/image.jpg"
author_name: "Author Name"
author_thumbnail: "/images/author-thumb.jpg"
author_description: "Author bio"
layout: blog_post
draft: false
---
```

## Deployment

### CircleCI Pipeline
- Automated deployment on commits to `master` branch
- Uses Hugo v0.58.3 for builds
- Deploys to Firebase Hosting using `FIREBASE_TOKEN` environment variable
- Configuration in `.circleci/config.yml`

### Firebase Hosting
- Serves from `public` directory
- Main site: fuzzylabs.ai
- Dev environment: fuzzylabs-dev.web.app

## Content Guidelines

### Navigation Structure
The site has a dropdown navigation with:
- Services (AI specializations)
- Case Studies (client work examples)
- About (company info and careers)
- Blog (technical content)
- GitHub link to open source projects

### Brand Focus
- Open source MLOps emphasis
- Technical blog content on AI/ML topics
- Case studies demonstrating real-world applications
- Company positioning as MLOps consultancy