---
title: "A guide to open source experiment tracking | Blog | Fuzzy Labs"
articletitle: "A guide to open source data experiment tracking"
description: "A guide to open source data experiment tracking"
metadescription: "A guide to open source data experiment tracking"
date: 2022-01-14T00:00:00
tags: ["artificial intelligence", "mlops"]
image: "/images/experiment.jpg"
author_name: "Matt Squire"
author_thumbnail: "/images/matt-square-thumb.jpg"
author_description: "Co-Founder of Fuzzy Labs"
layout: blog_post
draft: false
---
# A guide to open source experiment tracking

Machine learning involves a lot of experimentation. As we work to improve our models we'll try out different techniques, gather better data, and tweak certain parameters. As we do all this, we look at metrics like accuracy to decide how good a model is.

Experiment tracking is what allows data scientists to compare models over time, identify factors that affect performance, and share experiments with colleagues for easier collaboration.

Typically, we want to track the following:

* The source code version and data version used in the model,
* Model training parameters such as neural network size or epoch count,
* Training performance metrics such as accuracy,
* The final model assets, which are ready to be deployed into production.

## Do I need it?

An experiment tracker enables you to reproduce any model from the past. It doesn't do this alone - to have full reproducibility you also need data version control and source control - but an experiment tracker is the only tool that combines all of the relevant information about a model.

When a model's performance changes, experiment trackers allow you to go back and understand why, and this in turn means you can make the right decisions to improve your model in the future.

Or, if you have a particular experiment that you'd like to share with a colleague, in order to get their input or a review, an experiment tracker makes it easy for your colleague to see not only the end result but exactly how you got there.

As a tool both for ensuring reproducibility and enabling collaboration, we think experiment tracking is a key piece of your MLOps infrastructure.

## What are the options?

There are a lot of experiment trackers out there, but most of them provide:

* A central location where each experiment can be recorded. Often this will be a database or a cloud storage bucket.
* A way for your model training code to interact with the experiment tracker.
* A friendly user interface for data scientists to browse past experiments.

### Guild.AI

This experiment tracker aims to make experiment tracking easy. Unlike similar tools, Guild doesn't require you to modify your training code. It also doesn't require you to setup any database, instead relying on cloud storage for persistence (currently it supports AWS and Azure).

Pros:

* Easy to install and use.
* Lets you track experiments without changing your code.
* Framework-agnostic, i.e. it works with any machine learning framework.
* Doesn't require any external database.

Cons:

* Experiment sharing is still limited, with support for only a few storage backends.

### MLFlow
More than just an experiment tracker, MLFLow is a complete open source MLOps framework. Besides experiment tracking it provides model training, and serving capabilities.

It's one of the most popular open source tools in the MLOps space, and so this means there is lots of good quality documentation and a large, devoted community of people using and contributing to it.

It's also worth noting that if you're using DVC along with DagsHub, then DagsHub also provides a hosted MLFlow server.

Pros:

* Framework-agnostic, i.e. it works with any machine learning framework.
* Has a large, active community, and widespread adoption.
* Can be customised to support a wide range of different machine learning workflows.

Cons:

* Because it is a complete MLOps framework, MLFlow is a bit more complicated to set up and get started with than other tools in this list.

### Tensorboard

TensorBoard comes as part of the TensorFlow machine learning framework. It's very easy to set up and use, and there's even a free cloud hosted version, tensorboard.dev, if you don't want to set up your own server.

While it  can track a rich set of information about a TensorFlow model, it quite is limited compared with other experiment trackers.

Pros:

* Easy to get started.
* Works natively with TensorFlow.

Cons:

* Doesn't store data or code versions, making it unable to provide full reproducibility.
* Designed for individuals to track experiments, but not designed with collaboration in mind.
