---
title: "Composable data science | Blog | Fuzzy Labs"
articletitle: "Composable data science"
description: "How to lay out Jupyter notebooks for production readiness"
metadescription: "How to lay out Jupyter notebooks for production readiness"
date: 2019-11-18T00:00:00
tags: ["artificial intelligence"]
image: "https://miro.medium.com/max/3140/0*-_bEcYYdi0JuFG8h"
author_name: "Matt Squire"
author_thumbnail: "/images/matt-square-thumb.jpg"
author_description: "Co-Founder of Fuzzy Labs"
layout: blog_post
draft: false
---

> “There’s still a huge gap between building a model in a Jupyter notebook and shipping a valuable product.” — [Andrew Ng](https://info.deeplearning.ai/the-batch-deepmind-masters-starcraft-2-ai-attacks-on-amazon-a-career-in-robot-management-banks-embrace-bots-1)

According to Github’s yearly status report [The State of the Octoverse](https://github.blog/2019-11-06-the-state-of-the-octoverse-2019), in the past year Python has become the 2nd most popular language on Github, and the use of Jupyter Notebooks has seen more than 100% growth every year for the last three years.

Jupyter notebooks are popular because they make it easy to experiment and to explore data. On top of that Jupyter is built around Python which, with its rich collection of data libraries, has come to dominate data science. It’s not limited to Python either, with support for R, Julia, and more.

For data scientists Jupyter is a well-equipped laboratory, and a notebook is a collection of experiments. An experiment might tell us a good way to predict customer behaviour (for example) but we still need to turn that into a useful product.

The code to accompany this blog is on Github [here](https://github.com/fuzzylabs/composable-data-science)

## Mind the gap

We need to shorten the gap between notebook and production.

Consider a dataset from a popular [Kaggle competition for predicting house prices](https://www.kaggle.com/c/home-data-for-ml-course/overview). The data contains details of houses sold in [Ames, Iowa](https://en.wikipedia.org/wiki/Ames,_Iowa). There are 79 attributes which include the number of rooms, floor space, and the year a house was built. The challenge is to fit a model that accurately predicts the price of a house.

As an entry-level challenge there’s no need for clever solutions; we can use a random forest regressor, [as shown in this notebook](https://github.com/fuzzylabs/composable-data-science/blob/master/notebooks/house-prices-original.ipynb) to do the job.

It’s natural to divide a notebook up into small functional sections: first loading data, then data exploration, cleaning, feature selection, and finally model training. Because each operation introduces new global variables upon which subsequent operations depend, we quickly end up with a mess of dependencies. As the diagram below illustrates, even our simple notebook has a lot of hidden complexity.
Variable dependencies throughout the notebook

![](https://miro.medium.com/max/3140/0*-_bEcYYdi0JuFG8h)

Not only does this become unmanageable for the data scientist, it’s also difficult to deploy it to production.

We’ve got a collection of distinct blocks of logic, so that’s a good start. A reasonable next step is turning the most important blocks into reusable functions.

So this

<script src="https://gist.github.com/archena/483903090f81f1efec33cea54d9ec403.js"></script>

Becomes

<script src="https://gist.github.com/archena/62ed4dcac28cb5e3780ea1198b5ee8fc.js"></script>

Grouping code into functions has a number of obvious benefits:

* Functions are reusable.
* They reduce the number of global variables.
* Well-named functions make it easier to understand the notebook.
* Functions are composable.

## Function composition

There are two kinds of function: there’s the vague programmer sense, which is really a named block of code that may have inputs or outputs or both. The other kind, sometimes called a [pure function](https://en.wikipedia.org/wiki/Pure_function), is used by mathematicians, so data scientists should have no trouble with this kind!

A pure function

* Has no side-effects, which means it can’t modify any state. Instead it computes a result using its inputs.
* Is idempotent, which means that when invoked repeatedly for the same arguments, it always returns the same value.

So a Python function that updates a global variable is not a pure function, because it has a side-effect. This is important because it allows us to compose functions, which means we can combine two or more functions together to form a new function.

In principle we should be able to write our entire notebook as a single expression, something like:

> model = train(select_features(clean(pd.read_csv(“../data/train.csv”))))

By organising all of the data science code into pure functions we have the power to re-combine those functions in various ways depending on how it’s being used.
Modular notebooks

Ideally we use identical code in notebooks and production environments. To make that happen, we’ll have to move our functions in to dedicated Python files. In the example repository there is a notebooks directory and components directory. components is where we keep the dedicated Python files, and those same files can be packed up in various forms for productionisation. To reference those files in our notebook we need to do some magic:

<script src="https://gist.github.com/archena/e5ba6d49ab40ed4ed460c58454bef48c.js"></script>

It’s a bit ugly; this tells Jupyter to automatically reload in case any external Python files change, and also tells the Python runtime to look for modules in the parent directory — the root of this repository.

A lot of the code in a Jupyter notebook never needs to go near a production environment, because a lot of it is related to data exploration, visualisation and experimentation. But once we have a firm idea as to the best approach for training our model, we want the option to train that model outside of the notebook.

More specifically we want to incorporate the model training into a continuous-integration and continuous delivery (CI/CD) workflow just like every other software component that goes into making our final product. This way the final model is:

* Trained against a known version of the training data.
* Tested, including regression tests that compare its performance against previous versions of the model.
* Versioned.

## Well-composed

Productionising machine learning code is a vast and poorly understood topic, which is what makes this so exciting.

We’ve looked at how certain careful design decisions made early on in the exploratory process of data science can make our lives easier later on. Notebooks are popular for a good reason: they act as an easy-to-use laboratory with everything a data scientist could possibly need included, but experiments are only the first step towards building AI-driven products.
