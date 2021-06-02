---
title: "Vertex AI - does it live up to the MLOps hype?"
articletitle: "Vertex AI - does it live up to the MLOps hype?"
description: "Review of Google's Vertex AI"
metadescription: "Recently Google announced Vertex AI, a new unified machine learning platform that helps you to deploy models faster by leveraging Google’s AI tools."
date: 2021-06-02T00:00:00
tags: ["artificial intelligence"]
image: "https://miro.medium.com/max/2400/1*8RhJ0FWIXzdmjdpQsHiqoA.jpeg"
author_name: "Matt Squire"
author_thumbnail: "/images/matt-square-thumb.jpg"
author_description: "Co-Founder of Fuzzy Labs"
layout: blog_post
draft: false
---
Recently Google announced Vertex AI, a new unified machine learning platform that helps you to deploy models faster by leveraging Google’s AI tools.

On the face of it, Vertex is a rebrand of Google’s existing AI platform plus some extra bits, and it takes aim at rivals like Amazon SageMaker. It also promises proper MLOps, the trendy thing that everybody’s talking about these days.

We wanted to see what Vertex can really do, so we took this train for a ride.

![](https://miro.medium.com/max/2400/1*8RhJ0FWIXzdmjdpQsHiqoA.jpeg)

## But first, what’s MLOps?

These days we find we’re speaking less about what AI can do for businesses, and more about how to implement it effectively. How do we move from an idea to production as quickly as possible?

MLOps is an approach to machine learning that reduces the pain of productionising models, getting the most value out of machine learning as quickly as possible while reducing risk.

There are lots of tools for training models, but that’s not enough; the model is only the beginning. For us, the keys to success in machine learning are:

* Collaboration — people with different specialities are empowered to work together effectively.
* Provenance — for any model, we’re able to track the code version, data version and parameters that went into making that model.
* Reproducibility — both experimental and production models can be reproduced easily on-demand.
* Continuity — we can build, test, and deploy models and associated infrastructure automatically and consistently.

The diagram below highlights these values, alongside 5 phases that ML projects go through, from experimentation through to full continuous training. Shortly, we’ll see what each of these phases looks like in Vertex.

![](https://miro.medium.com/max/1400/1*C9lGEeZ02XlHHe0ZuVJLhA.png)

With that in mind, let’s dive in to a review of Vertex AI.

This blog is a high-level overview, and in future blogs we’ll look at certain aspects of Vertex AI in depth. Our conclusions are based on comparing our experience working with the original AI Platform, and similar platforms including AWS SageMaker.

p.s. If you’re in a hurry, just scroll to the end to see our conclusions.

## Get on that train

### Experimenting

Every ML project begins with experiments. Usually lots of them, each with different methods, configurations and datasets. Experiment tracking is crucial for maintaining collaboration at this stage.

In Vertex we can create managed datasets. This is pretty handy; having a central location for data means there is one source of truth. The only missing feature (for now) is data versioning, which is essential if we want full model provenance. Datasets come in different types; images, tables, text and video.
Some of the options for managed datasets

![](https://miro.medium.com/max/1400/1*fU8OeMFgniuCz4SvgmU4UQ.png)

As for experiment tracking, Vertex promises centralised tracking of parameters and performance, via TensorBoard. Unfortunately we ran into problems here as well because, while TensorBoard itself works fine when run locally, we couldn’t upload the logs to Vertex, which means you can’t easily share experiments among a team, which defeats the object of experiment tracking.

Overall we found the tooling at this phase needs some work. For now, we’d prefer to use a specialised data versioning system and experiment tracker.

### Training

So, you have a model that you’re happy with. You’ve trained and tested it locally as part of your experimentation, and now you want to productionise it. Vertex offers two things: training jobs and pipelines.

First, let’s look at the training options. In the past, Google offered two ‘AutoML’ products, Cloud Vision and Cloud Language. These made it possible to upload a dataset and train a model without writing any code.

This is all integrated into Vertex now, so you have two options:

* Use AutoML. In this case, you give Vertex a compute budget and let it train the best model it can within that budget. The minimum budget is 1 hour, and we spent £14 for an hour of training.
* Use your own training code. This is more work, but gives you more control. Essential if you’re doing anything beyond what the AutoML trainers are capable of.

Once you’ve made that decision, the next thing to build is a training pipeline. A pipeline contains all the steps necessary to train a model, and then save the model into a model registry for later use.
Pipeline example

![](https://miro.medium.com/max/1400/1*RpE3_BHrisTygak7Vz7BHw.png)

Pipelines are a long-standing Google AI platform feature, and it’s no surprise that they still work very well in Vertex. Our test pipeline had 3 steps:

* Create a dataset, sourced from a Cloud Storage bucket.
* Create a training job with AutoML.
* Deploy the model (see next phase!).

Pipelines in Vertex are actually KubeFlow pipelines. For those unfamiliar, Kubeflow is a machine learning framework that runs on top of Kubernetes.

The important thing is that with Vertex you get the power of KubeFlow without running your own infrastructure, which would otherwise be cumbersome. On the other hand, it’s safe to say that KubeFlow does have its detractors. Arguments in the comments.
Deployment

Models aren’t much use unless deployed somewhere. The pipeline, above, trains and deploys the model to Vertex, but we actually have a couple of options for how we do that in Vertex:

* Run the model in a Vertex pre-built container. The simplest option. There are pre-built containers for many ML frameworks.
* Run the model in your own container. More flexibility, for instance if you have some special library requirements for running your model.

Model hosting was an existing AI platform feature and, as with pipelines, it works very well. As well as hosting the model and its associated artifacts, we can also attach metadata to models. So if you wanted to, you could add things like a Git commit hash so that you can trace the model provenance.
The models view

![](https://miro.medium.com/max/4800/1*GzNsx-9UYBwxhitNfLFNRQ.png)

Note that the model, on its own, is not exposed as a web service. Deployment of a model means placing it into the Vertex model registry. After that, you still need to create what Vertex terms an endpoint. Without this, there’s no way to get to the model from outside.

Model hosting is a mature feature which we would recommend for production use.

### Monitoring

The prospect of model monitoring in Vertex is pretty exciting. According to the documentation, it can monitor your deployed models for suspicious inputs. Specifically, it works in one of two modes:

* Look for inputs that are outside of the range of the training data.
* Look for a significant change in an input by comparing the input to historical values.

This kind of thing gives you essential insights into the long-term behaviour of a model. A model that works well today may not work well in the future, particularly if the kinds of inputs it receives gradually drift.

<center>
![](https://miro.medium.com/max/4800/1*GzNsx-9UYBwxhitNfLFNRQ.png)
</center>

Unfortunately, even though we were able to set monitoring up — using the gcloud command line tool, as it doesn’t seem to be possible through the UI at the moment — we were unable to get any alerts out of it.

Even if we had got it to work, the lack of UI would still be a serious negative. Our conclusion is that while this looks like a really useful thing to have, it just isn’t ready yet.

### Continuous Training

Nothing is ever truly finished. We always need to re-train our models, either based on manual decisions or automation. Continuous training is about enabling a team to rapidly re-train and deploy new versions of models.

Vertex pipelines offer not only automation for training and deployment, but also a historical view of past pipeline runs. This helps to make training collaborative, by giving everybody visibility of this history.

<center>
![](https://miro.medium.com/max/1400/1*wCBMv0rr1vlcWRymsNOEpw.png)
</center>

For continuous training we also want to know our options for triggering pipelines. Perhaps we want to re-train a model every time the monitoring system detects a drift in the model’s output, or we might want to re-train the model on a schedule in order to incorporate new data so that the model is kept up-to-date.

Unfortunately these are not options in Vertex as it stands, and so you’d need to incorporate other tooling to get this kind of functionality. We think a little more is needed on top of Vertex to really achieve continuous training.

## Conclusion

So does Vertex live up to the hype? Perhaps not yet. While it is potentially an exciting platform, many of its tools are marked as in preview on the platform and in the documentation.

We’ve seen better MLOps tooling from outside of the Google ecosystem and, as it stands, we feel that Vertex alone won’t give you everything you need in terms of collaboration, provenance, reproducibility and continuity. It’s likely that some open source tooling will emerge to fill some of the gaps.

Training and deployment both work very well, and the biggest benefit here is the ability to have on-demand compute resources for training, only paying for what you use, which can work out cheaper and simpler than hosting all the infrastructure to do this yourself, whether that’s through Kubernetes or otherwise.

This is hugely valuable for many people. Managing your own infrastructure requires very different skills to those needed to train a machine learning model. To manage infrastructure, you need to know about cloud computing, infrastructure-as-code, devops, while with a platform like Vertex you can focus on training models without worrying about the infrastructure.

We haven’t given an in-depth view of cost in this review, but we will re-visit this in a later blog. To give some indication, however, we spent £60 over 10 days to host a model, and £14 for one hour of AutoML training.

In order to put together this review we tested out the different components of Vertex with a toy example, which trains a model to predict wine quality from a dataset of wine chemical properties. If you want to try it out, here’s the code: https://github.com/fuzzylabs/mlops-gcp/tree/master/examples/sklearn-wine-vertex.
