---
title: "Open Source MLOPs is Awesome| Blog | Fuzzy Labs"
articletitle: "Open Source MLOPs is Awesome"
description: "Open Source MLOPs is Awesome"
metadescription: "Why open source MLOps tools win, and our ideal MLOPs stack"
date: 2022-01-27T00:00:00
tags: ["mlops", "devops"]
image: "/images/matt-mlops-london.jpg"
author_name: "Matt Squire"
author_thumbnail: "/images/matt-square-thumb.jpg"
author_description: "Co-Founder of Fuzzy Labs"
layout: blog_post
draft: false
---
# Open Source MLOps is Awesome

I was invited to speak about open source tooling this week at MLOps London, a community meetup sponsored by Seldon.

The inspiration for this talk goes back to November 2021 when we began evaluating the many, *many* tools and frameworks available today. The result was a Github repo called [Awesome Open Source MLOps](https://github.com/fuzzylabs/awesome-open-mlops).

The intense interest in this project shows that people care passionately about open source. It resonates with engineers and data scientists who know that there’s no one-size-fits-all way to do MLOps, despite what a lot of SAAS products with big marketing budgets might try to tell us. Open source gives us the freedom to pick and choose the best tools for every use-case, and have complete ownership over the solution.

After preaching the virtues of open source, I outlined our dream tech stack:

* **[DVC](https://dvc.org)** version control for data. Equally important with Git and similar.
* **[Sacred](https://github.com/IDSIA/sacred)** track and share experiments, compare performance over time.
* **[ZenML](https://zenml.io)** structure your training into simple, reproducible pipelines.
* **[Seldon Core](https://www.seldon.io/tech/products/core)** package and serve models behind REST APIs.
* **[Evidently](https://evidentlyai.com)** monitor models, detecting drift and tracking performance.

Next we moved to Q&A. Below I’ve picked out some of my favourite questions.

### What about X?

There are plenty of things I didn’t mention, like feature stores or explainability tools.

MLOps gets pretty overwhelming if you try to cover off too many categories at once, and we wanted to come up with a baseline set of tools that acts as a starting point for most projects. So while there’s space for all these things on the Awesome Open Source MLOps list, our *dream tech stack* is deliberately limited in scope.

### Are cloud services a threat to open source?

All the big cloud providers have their own AI/ML platforms and they’re all adding MLOps tooling to their offerings. Won’t everybody just use these in the end?

To begin with, in our opinion cloud vendors have a lot of catching up to do on MLOps. See our review of [Google Vertex](https://fuzzylabs.ai/blog/vertex-ai-the-hype), for instance.

But catch up they will, and open source might actually be key to how they do that. Consider how every major cloud vendor offers managed Kubernetes, and managed versions of open source databases. One day we might see AWS managed ZenML, or similar. We expect industry standards to emerge around open source tools, and cloud vendors will adopt these.

### Will Golang take over from Python for AI and ML?

Golang is nice for writing web services, but it doesn’t approach the wealth of libraries and tooling for doing data science that comes with Python. But if you’re looking for potential replacements, personally I’ve got my eye on [Julia](https://julialang.org).

### Video

You can watch my talk below. If you’d like to watch the whole event, just follow this [link](https://www.youtube.com/watch?v=HIAPoKEDXrg).

<p>&nbsp</p>

<center>
    <iframe width="640" height="360" src="https://www.youtube.com/embed/HIAPoKEDXrg?start=3262" frameborder="0" allowfullscreen></iframe>
</center>

<p>&nbsp</p>
<p>&nbsp</p>
