---
title: "A guide to open source data version control | Blog | Fuzzy Labs"
articletitle: "A guide to open source data version control"
description: "A guide to open source data version control"
metadescription: "A guide to open source data version control"
date: 2022-01-14T00:00:00
tags: ["artificial intelligence", "mlops"]
image: "/images/filing-cabinet.jpg"
author_name: "Matt Squire"
author_thumbnail: "/images/matt-square-thumb.jpg"
author_description: "Co-Founder of Fuzzy Labs"
layout: blog_post
draft: false
---
# A guide to open source data version control

Data is everything in machine learning. That's true whether you're building a model to recommend products, or recognise cat pictures.
Managing data is complex and time-consuming. Our datasets are often very large, which makes storing and sharing them with a team difficult. Data also evolves over time, with potentially many people contributing changes at any moment, and each change having an effect on model performance.

As you may guess, data version control is all about tracking changes to a dataset. But there's more to it than that: where these tools shine is in enabling people to share and collaborate on data, in much the same way as tools like Git enable code collaboration.

A good data version control solution provides:

* A central location where data is stored.
* A history of changes to datasets, so that any historical version can be reproduced whenever required.
* The ability to easily share datasets with others and enable collaboration.
* An intuitive workflow that supports the data scientist in their work.

## Do I need it?

In our view, this is something that every machine learning project needs. In light of how important data is, to not have version control is to set yourself up for failure. Without the right tools, you not only need to figure out how to handle evolving data, but also how to store and make that data available to team members, and these are all things which data version control tools handle.

## Can't I just use Git?

If you're familiar with Git or similar source control tools, you might wonder why you need a special tool for data version control. The main reason is size: Git is designed for small text files, and typical datasets used in machine learning are just too big. Furthermore, Git is not designed with data science workflows in mind, while specialist tools are.

## What are the options?

When comparing data version control tools, we need to consider a few things:

* How and where data is stored. Because we want to share data, we need to store data in a convenient central location for everybody to access it. Often this comes in the form of cloud storage, such as Amazon S3, or a Google Cloud Bucket.
* What kind of data formats are supported. Some tools are generalists, supporting all kinds of data, while others specialise in one kind, for instance only tabular data, or only images.
* Scalability. If you work with big data then you may need a tool that's designed to for that scale, while if size isn't a concern then you have more options to choose from. Big data tools come with a complexity cost that isn't worth paying unless you're working with datasets that are in excess of a terabyte in size.

### DVC
Confusingly, this tool is actually called Data Version Control - DVC for short. It's a lightweight tool that works on top of Git, and that makes it particularly easy to use if you're already using Git to manage your code.

It works with any kind of data, and for storing that data DVC offers a lot of flexibility. It can store data files on in the cloud, with support for AWS, Google Cloud and Azure.

Alternatively you can use it in conjunction with  DagsHub, which you can think of as Github for data. It makes it easy for people to share and collaborate on data. Like Github, DagsHub exposes datasets as repositories, which can either be public or private. This way you can use DVC without setting up any infrastructure yourself.

Pros:
* Easy to setup and use.
* Intuitive Git integration
* Works with any data format, framework and data storage.

Cons:
* Not suited to big data.
* Git integration isn't appropriate for all use-cases.

Delta Lake

As the name suggests, Delta Lake is designed for working with data lakes. It brings data versioning, ACID transactions, and schema management to your existing data lake. So it's most suited to cases where you work with a lot of data and have already implemented a data lake.

For data storage it works with AWS, Google Cloud, and Azure cloud storage, as well HDFS as used by Apache Hadoop. It uses Apache Spark to do all of its data operations, and it can easily be used with existing Spark pipelines if you have them.

Delta Lake is designed around something called the Lakehouse Architecture, which is an open source data management architecture designed to enable machine learning on big data.

Pros:
* The Lakehouse Architecture implemented by Delta Lake is a well-known open standard for managing big data.
* Compatible with various data lake technologies.

Cons:
* Delta Lake is designed to work with big data. As a result, it's overkill for smaller projects that don't require that scale.
* While it can work with any kind of data, Delta Lake persists that data using its own format, that isn't directly compatible with other tools.
