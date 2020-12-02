---
title: "Has AlphaFold 2 Solved Protein Folding? | Blog | Fuzzy Labs"
articletitle: "Has AlphaFold 2 Solved Protein Folding?"
description: "Notes and comments about the recent AlphaFold 2 news."
metadescription: "Has AlphaFold 2 Solved Protein Folding?"
date: 2020-12-02T00:00:00
tags: ["artificial intelligence", "protein folding", "bioinformatics"]
image: "https://miro.medium.com/max/774/1*Dc5usaWym6tcCtjGk_b21Q.png"
author_name: "Misha Iakovlev"
author_thumbnail: "images/misha-square-thumb.jpg"
author_description: "Software Engineer at Fuzzy Labs"
layout: blog_post
draft: false
---

![3D structure of the signalling domain of the murine Sonic hedgehog protein](https://miro.medium.com/max/774/1*Dc5usaWym6tcCtjGk_b21Q.png)

*3D structure of the signalling domain of the murine Sonic hedgehog protein | Source: [Wikimedia](https://commons.wikimedia.org/wiki/File:Shh_structure.png)*

At a bi-annual protein structure prediction competition [CASP14](https://predictioncenter.org/casp14/index.cgi) DeepMind presented their [second version of AlphaFold](https://deepmind.com/blog/article/alphafold-a-solution-to-a-50-year-old-grand-challenge-in-biology). It outperformed other models at CASP13 in 2018, and it shows even better results this year, scoring 92.4 GDT (Global Distance Test) overall across all targets, and 87.0 GDT in free-modelling category (the most challenging one).

I am an MSc in Bioinformatics, and I have been involved in a project working on predicting effects of mutations using protein structures. So, as a person that had some experience on the topic,  I decided to write down some notes regarding the recent AlphaFold news.

Protein structure prediction is prediction of a secondary and tertiary (3D) structure of a protein from its sequence of amino acids. This problem has been proven particularly hard to solve, but highly important for medicine and biotechnology. Protein structure determines how it acts and what it interacts with. For example, if we know a structure of a protein that is known to be involved in some illness, we can design drugs that interacts with this protein in order to try to treat this illness. However, determining protein structures experimentally is time consuming and expensive, so computational structure prediction would come in handy.

![Protein structure prediction is quite hard](https://cdn-images-1.medium.com/max/2000/1*ELUpHJVZEf0uBP5EykvlFQ.png)

*Protein structure prediction is quite hard | Source: [xkcd](https://xkcd.com/1430/)*

Several news outlets have declared that it’s a “scientific breakthrough” and that it “solves the problem of protein folding”. However, not to belittle DeepMind’s achievement, such claims might be an overstatement for a few reasons.

First and foremost, even though they’ve shown amazing results at both CASP13 and CASP14, **their model remains closed**. It means, that no other research group (to the best of my knowledge) can effectively use this model, and hence the scientific community cannot directly benefit from these findings, as opposed to the other models that are available as source code, or, at least, as a server, such as [Phyre2](http://www.sbg.bio.ic.ac.uk/phyre2/html/page.cgi?id=index) or [I-TASSER](https://zhanglab.ccmb.med.umich.edu/I-TASSER/).

This is **not an end-to-end AI/Deep Learning** protein folding system. To the best of my understanding, the model predicts spatial constraints of a protein, that are then modelled into a 3D structure using more conventional approaches (AlphaFold 1 used [L-BFGS](https://en.wikipedia.org/wiki/Limited-memory_BFGS)).

A word on CASP itself. Even though, some benchmark is better than none, the real world results might differ significantly from what has been shown at CASP. Hence, we need to be cautious, it might well be the case that a model that shows great results at CASP, then produces a subpar output for more exotic protein targets. There exist other assessments, such as [CAMEO3D](https://cameo3d.org/), that evaluate methods on a continuous basis and wider range of targets, however AlphaFold does not participate in it.

And as usual, it needs to be noted that  protein structure prediction is definitely important, but it **does not cover the dynamics of proteins**. This fact is quite important, if one considers using such models (and them alone), for example, for drug development.

Nevertheless, I will be waiting for a full paper explaining AlphaFold 2. According to their abstract, they use attention-based methods (i.e. transformers, that yielded great results in the field of NLP in a form of GPT and BERT), which sounds like an interesting approach.

I am by no means an expert in the field, but I have had some exposure to structural biology in the past, so questions and corrections are welcome.

P.S. For an interested reader, there’s [an article by Mohammed AlQuraishi](https://academic.oup.com/bioinformatics/article/35/22/4862/5497249?guestAccessKey=52c36765-068a-44d9-8b6f-ab9f0d07119b) assessing AlphaFold at CASP13 and its importance.
