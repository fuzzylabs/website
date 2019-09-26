---
title: "What Even is AI? | Blog | Fuzzy Labs"
articletitle: "What Even is AI?"
description: "Oh no: it’s yet another ‘What is AI?’ blog!"
metadescription: "Oh no: it’s yet another ‘What is AI?’ blog! From Turing to AI Winters through to the present day and concerns around ethics in AI."
date: 2019-07-12T00:00:00
tags: ["artificial intelligence", "machine learning"]
image: "https://cdn-images-1.medium.com/max/2200/0*C1RgslMmyNbeBJTJ"
author_name: "Matt Squire"
author_thumbnail: "/images/matt-square-thumb.jpg"
author_description: "Co-Founder of Fuzzy Labs"
layout: blog_post
draft: false
---

The idea of artificial intelligence is as old as computers and it’s been the subject of an exhausting amount of debate. Much of the debate is rooted in how we as humans view ourselves: is our intelligence special or can it be imitated by a machine? Can machines think?

But leave that sort of thing to the philosophers. We’ll focus on how AI is used in the real world.

## The History Stuff

### Ancient History — the 1950s to 1970s

It’s largely Alan Turing’s fault. One of Turing’s big ideas was the so-called *universal machine.* A universal machine can be programmed to simulate the actions of any other machine; today we just say ‘computer’.

Apparently not satisfied with inventing the entire field of computer science, Turing’s next step was asking *can machines think?* Again we can get lost in definitions — what does ‘think’ mean? The *Turing Test* works around definitional difficulties by focusing on imitation instead of thought.

Here’s the very short version: a person is in a text chat with another person and a computer; can the first person tell apart human and machine?

<center>
<img src="https://cdn-images-1.medium.com/max/2000/1*YFDfuOu6f3kbdXwN6gEblA.jpeg" alt="" width="400"/>
<p><small>“How was my day? oh, I just invented computer science and artificial intelligence, how about you?” — Alan Turing, possibly not real quote (photo: British Library)</small></p>
</center>

It’s an understatement to say computing power was limited, nevertheless some important foundations were laid:

* **Automated Reasoning:** humans are good at reasoning. We do it all the time, from figuring out how to get home when a road is closed to figuring out how to test complicated scientific theories. Researchers tried to program computers to reason in the same way.

* **Natural Language Processing:** the dream is computers that understand human language. Imagine asking a computer for directions to Manchester, and the computer doing some automated reasoning to figure out the best route — science fiction in 1950, but quite normal today.

* **Robotics:** AI-driven smartphones and smart homes were a distant fantasy. Humanoid robots were the future! a robot needs to see, speak and hear, which launched work on computer vision and speech recognition.

Notably this period gave us logic-based programming languages as well as tools like expert systems. An expert system combines a database of knowledge with automated reasoning. Imagine replacing your doctor: start with a database of every medical fact, every case study, every test, and combine this with some rules that represent the reasoning processes of a real doctor.

Well, it’s 2019 and your doctor probably isn’t a machine, but expert systems still have a niche in various kinds of process automation tasks.

### The First Winter — 1974 to 1980

In 1970 AI researcher Marvin Minsky was quoted in Life Magazine.

> “In from three to eight years we will have a machine with the general intelligence of an average human being.”

In his defence Minsky was a super-intelligent alien compared to the rest of us, so his idea of the average human may have been skewed.

In the quest for intelligent machines it made sense to look to human physiology for inspiration. We tend to use our brains to think, and brains are made of big interwoven networks of neurons (nerve cells), so if we simulate these *neural networks*, we’ll have a thinking computer, just like that!

![Early drawing of neurons, Camilo Golgi 1875](https://cdn-images-1.medium.com/max/2000/1*xPayyUooVbaaX3QEhrSAyA.jpeg)*Early drawing of neurons, Camilo Golgi 1875*

The first attempt to model neurons was in the 1950s something called a perceptron. In 1969 Marvin Minsky and Seymour Papert demonstrated certain limitations in perceptrons that meant they weren’t very useful after all, resulting in the first AI winter. Optimism drained and funding along with it.

Minsky wasn’t solely responsible of course. Limited computing power and data meant a lot of good ideas wouldn’t be practical for a long time and other good ideas just hadn’t been thought of yet.

### The Second Winter — 1987 to 1993

In the 1980s computers transformed from vast room-sized monoliths to convenient desktop-sized machines. AI was cool again and saw a number of applications, from its use in video games to provide challenging virtual opponents to businesses adopting expert systems to automate various processes.

This new wave of AI research was largely driven by businesses and by 1993 the money dried up once more.

### Semi-modern — 1993 to 2010

One of the most important developments was the introduction of probability and randomness into AI, thanks in part to Judea Pearl’s book *Probabilistic Reasoning in Intelligent Systems.* Don’t worry; I won’t make you read it.

Remember spam? In the 90s and early 2000s it drove us all mad. Now it’s a non-problem because of something called a Bayesian classifier. This kind of spam detection learns what spam looks like from human spam reporting. It uses probabilistic reasoning and it works very well. Why spammers still bother is an open question.

Neural networks gained popularity again. These are supposed to imitate the networks of nerve cells that make up our brains, and like our brains, neural networks can learn to recognise patterns. Pictures of cats, for instance.

Finally, there was renewed interest in optimisation problems. Suppose you’re Amazon and you want to ship as many packages as possible using the fewest vans, or you employ shift workers and you want to fill all shifts at the lowest cost. For these problems it’s often infeasible to find the perfect solution, but we might come up with *good enough* solutions.

Genetic algorithms — inspired by evolution — are one approach. We generate lots of random solutions, eliminate the worst ones, and randomly mutate the best ones. Over time the candidate solutions get closer and closer to the ideal solution.

## The present day

AI is everywhere. Your inbox automatically categorises emails and populates your calendar when you book a flight, your photos app understands what’s in your photos, airports use face recognition to check your passport.

![](https://cdn-images-1.medium.com/max/2200/0*C1RgslMmyNbeBJTJ)

Today’s proliferation of AI applications results largely from having powerful computers, including mobile devices, but it’s also due to the popularity of cloud computing.

### Cloud AI

Imagine you want to identify a dog’s breed from a photo. You start by collecting thousands of photos (great way to meet new dogs) and you manually label those photos with the correct breed. Next you feed this data into a mysterious box of AI, which produces something called a model.

The model is the prize you get for all the hard work collecting and labeling data. That model can identify new dogs which it wasn’t trained on.

![Training a model to identify dog breeds](https://cdn-images-1.medium.com/max/2000/1*nrvyX96Uck-w64OxvlA23Q.png)*Training a model to identify dog breeds*

Cute, but what’s this got to do with cloud computing?

Google Photos can organise your photos for you. It knows whether a photo is outdoors, and if it contains people or animals. This is because Google have spent years collecting and labeling enormous quantities of photos which they use to train models.

All the major cloud providers offer pre-trained AI models for image classification, text analysis and a lot more. The same model used by Google Photos is available through Google Cloud.

Cloud AI represents a shortcut to having fully-fledged AI capabilities in a product. Using the work others have put into pre-trained models saves a great deal of time and money.

### Exotic neural networks

A lot has happened with neural networks since the 50s. Perhaps you’ve heard the term *deep learning.* This usually means using very large neural networks with very large sets of training data.

Another term that gets thrown around is *convolutional neural network. *This is* *a specialised neural network, designed after our own visual cortex, that’s popular for visual applications like self-driving cars or dog recognition.

### Ethical considerations

As AI has began to influence people’s lives in significant ways the public discourse has started to emphasise ethics.

If you applied for a job and discovered that an AI is responsible for screening applications, would you trust it? A few years ago Amazon trialed this idea for engineering roles, resulting in [bias against women](https://fortune.com/2018/10/10/amazon-ai-recruitment-bias-women-sexist/). The AI was trained using historical decisions made by humans, so the computer adopted human biases.

When an AI makes decisions that affect people it’s crucial to consider what biases might affect it.

Organisations like [AI for Good UK](https://www.aiforgood.co.uk/) work to make industry more ethical. In parallel there’s efforts to use AI to do good. Many companies involved in AI have an AI for Good initiative, [including our own](https://fuzzylabs.ai/forgood).

## The future

Looking back to that quote from Marvin Minsky, predicting the future of AI is hard. We’re in an AI boom which may not last forever, but even when the hype lulls we think AI is here to stay. It’s intertwined with the technology we use on a daily basis.

As computing power improves we’ll see more sophisticated AI models, and cloud-based [AI-as-a-service](https://fuzzylabs.ai/blog/nice-aiaas/) offerings will make these models accessible to a wide audience.

Edge computing is leading to new application areas. Edge just means ‘not on the cloud’, but it’s not quite as silly as it sounds. You might want to train a model in the cloud where there’s lots of computing power and deploy that model to a device with limited power and bandwidth. Think about smart cameras monitoring factory equipment.

Another one to keep an eye on is explainable AI. This is the idea that AI should be able to explain itself when it makes a decision. Right now the models we train give us an answer, like ‘that dog is a Border Collie’, but they can’t explain why. Explainable AI addresses some ethical concerns and it also makes it easier to debug and improve our models.

## But really, what is AI?

The curious thing is that once a research idea turns into a useful piece of technology, it’s no longer thought of by the general public as being AI. Spam filtering for instance feels so simple while ‘AI’ sounds so sophisticated.

Perhaps what distinguishes AI is the ability to learn and generalise? Ah, but the AI was still *programmed* to learn. Ultimately it’s just software.
