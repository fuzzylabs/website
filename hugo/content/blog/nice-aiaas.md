---
title: "Nice AIaaS | Blog | Fuzzy Labs"
articletitle: "Nice AIaaS"
description: "Artificial Intelligence as a Service: what’s what"
metadescription: "What are Amazon, Google and Microsoft offering in terms of AI as a Service"
date: 2019-06-03T00:00:00
tags: ["AIaaS", "Cloud"]
image: "https://cdn-images-1.medium.com/max/960/1*IRwsjIO6YFCRr6hG55gm9Q.png"
author_name: "Tom Stockton"
author_thumbnail: "/images/tom-square-thumb.jpg"
author_description: "Co-Founder of Fuzzy Labs"
layout: blog_post
draft: false
---
Previously we talked about the race between cloud providers to provide the best AI as a Service (AIaaS) platform in order to make AI easier to implement.

In this article we’ll go into detail about some of the different classifications of AIaaS, what you might use them for and how they are branded by each cloud provider.

AIaaS solutions are not especially difficult to use. In most cases you don’t need to be a programmer (although it will help when you want to integrate them with your current software) and you definitely do not need to be a data scientist in order to use them.

Generally, the big cloud providers (Amazon, Google and Microsoft) have categorised their AIaaS products in terms of human cognitive abilities. Microsoft specifically have chosen to use:

* Vision
* Speech
* Language
* Decision

<center>
<img src="https://cdn-images-1.medium.com/max/960/1*IRwsjIO6YFCRr6hG55gm9Q.png" alt="spanner brain" width="600"/>
<p><small>Cognition also includes the effective use of spanners.</small></p>
</center>

## Cognitive Function #1: Vision

First things first, let’s teach these computers how to see and interpret what they are viewing.

<center>
<img src="https://cdn-images-1.medium.com/max/960/1*G4-eRMu0O6LGQmnGO64_xQ.jpeg" alt="R2D2" width="700"/>
<p><small>Not only seen in Tatooine</small></p>
</center>

### Image Classification

If you’ve used Google Photos you’ll be aware that you can search for objects or names of people within your photo collection and Google will return results for things like “<some person> at the beach” or “trees in the city”. This kind of automatic image classification is powered by machine learning. The same technology can easily be adopted by retailers to categorise their product catalogue or for advertisers to detect emotional response to a brand by looking at someone’s face.

* Amazon Web Services: Rekognition
* Google Cloud: Vision API
* Microsoft Azure: Computer Vision API

### Video Classification

AI implementations of vision are not only restricted to static images. Video classification services are able to produce information about the kinds of objects observed in specific clips — dogs, dinosaurs, diggers as well the likelihood of the video containing explicit content.

This technology is incredibly useful if you’re displaying video content to your users as it removes some of the need for manual categorisation of that media and helps to present appropriate content to the viewers.

You can bet that social media giants are using video classification in order to detect and remove extremist content from their sites.

* Amazon Web Services: Rekognition Video
* Google Cloud: Video Intelligence
* Microsoft Azure: Video Indexer

## Cognitive Function #2: Speech

Now that we’ve taught the computer to see what’s going on, we probably want to start communicating what it it has seen by listening and talking.

### Speech to Text (listening)

In recent times, machine learning has taken the performance of this technology to another level. They are now able to automatically understand languages, accents and colloquialisms and can even do this when there is a lot of noise in the background. And don’t worry if you don’t speak “proper reet”, these services will correctly punctuate the text that it generates from your spoken words.

<center>
<img src="https://cdn-images-1.medium.com/max/960/1*DBAwltvSifmTDMwEE47acQ.jpeg" alt="Doctor and Guy Martin" width="700"/>
<p><small>Guy Martin teaching The Doctor how to talk proper.</small></p>
</center>

### Text to Speech (talking)

The inverse of the above. The modern AIaaS solutions sound more like a BBC newsreader than C-3PO. Choose which language you want the computer to speak, the gender, how quickly it talks and even the pitch of the voice.

## Cognitive Function #3: Language

Our computer can now listen and talk — but what language is it going to use to communicate?

### Translation

A common AI service amongst the cloud providers is the ability to translate languages.

We all know Google Translate. It works most of the time and even though it’s imperfect it’s good enough that as users of Google Translate we can access content written in other languages very easily. Google provide the translation service along with pre-trained models for more than 100 languages; Microsoft and Amazon have similar offerings.

While early computer translation relied on naive language models, and would frequently produce nonsense, the modern offerings are making heavy use of machine learning and this allows them to constantly learn from new data. There’s some talk of machine translation making human translators redundant.

* Amazon Web Services: Translate
* Google Cloud: Translation API
* Microsoft Azure: Translator Text API

## Cognitive Function #4: Decision

So now the computer can see, it can listen and talk (in different languages) but how do we determine what goes on “between the ears”.

At this point we’re going beyond what any normal human can do, computers can handle and process information on a scale the human brain never can, but just imagine if you could upgrade yourself …

<center>
<img src="https://cdn-images-1.medium.com/max/960/1*Y6ROKD-NLUzhaRW0-rxcnA.jpeg" alt="body" width="400"/>
</center>

### Recommender Systems

Organisations showing content or products to users will want to present them with the most relevant items. This increases engagement with your product.

Media streaming services such as Netflix use a recommender system to suggest videos that they think you might like to watch. They do this based on your previous viewing history or what viewers of similar demographic / interests are watching.

Similarly online retailers like Amazon suggest products that you might want to buy based on what you’ve previously bought, looked at or reviewed and what customers who bought the same items as you bought next.

* Amazon Web Services: Personalize
* Google Cloud: Recommendations AI
* Microsoft Azure: Personaliser

## Multi-skilled Services

In addition to the ‘basic’ cognitive functions, the cloud providers also offer services that combine the cognitive methods in order to create something even more powerful.

### Conversational Agent

Also known as Chatbots, these are commonly deployed as automated customer service agents that can reduce call waiting times and give customers a quicker response to questions such as “Is there a water leak in my area?”, “What’s my remaining credit?” or even “What flights are available on Monday to Amsterdam?”.

A simple workflow of a conversational agent might look something like this:

<center>
<img src="https://cdn-images-1.medium.com/max/960/1*d-Rpc9cx-5cQM8mhVbHCIQ.jpeg" alt="body" width="700"/>
</center>

* An input service, if the user of the service is talking rather than typing the request then a “Speech to Text” service is required.
* A Natural Language Processing (NLP) service that takes meaning from the words ie. context and sentiment.
* A service to obtain information relevant to the request from various sources — Blogs, FAQs, etc.
* An output service, if a spoken response is required then a “Text to Speech” service will be invoked.

A simple but effective implementation of chatbots, that could be useful to almost any business, is one that can simply provide information about the company and their products without having to navigate through the website. Just ask “What does your company do?”, “Where are you based?”, “How do I find out more about service X?”

This technology is also used in smart home automation devices such as Alexa or Google Home to turn off your lights, turn up your heating or play AC/DC on command.

* Amazon Web Services: Lex
* Google Cloud: Dialogflow
* Microsoft Azure: Bot Service

### Document Analysis

Optical Character Recognition (OCR) software is nothing new. Scanning in a document and extracting the text into another format is something that is used by solicitors, accountants, utility companies and healthcare providers in order to process documents from customers and patients. The cloud providers’ document analysis tools offer OCR plus more: they understand the context of the document and are able to deduce things such as what kind of document it is — for instance a bank statement, patient information, a legal contract, etc. These services can understand tables and forms along with the types of data in a form, and even analyse the sentiment (emotion) in the text.

Document analysis services use an OCR method in combination with a Natural Language Processing (NLP) service in order to determine the content and function of the document.

<center>
<img src="https://cdn-images-1.medium.com/max/960/1*2Yl-YCmONJAWsWHt4UN5ZA.jpeg" alt="body" width="700"/>
</center>

When processing documents with personally-identifiable information for purposes such as digitising medical data or processing insurance claims, regulatory compliance is extremely important and so these offerings include in-built compliance with certain regulatory standards.

* Amazon Web Services: Textract
* Google Cloud: Document Understanding AI
* Microsoft Azure: Form Recognizer

## What AIaaS doesn’t do

Whilst Cloud AI services don’t (currently) include cognitive functions such as feel, taste and smell, there are examples of using AI to make food taste better, specifically in removing the typical trial and error required in perfecting certain recipes — https://phys.org/news/2019-02-ai-flavor.html

Additionally there is research into using AI to smell if we are getting ill by analysing our breath — http://theconversation.com/ai-is-acquiring-a-sense-of-smell-that-can-detect-illnesses-in-human-breath-97627

And, if you want a robot to identify an object from the touch and feel of it then check out this project — https://venturebeat.com/2019/03/12/ai-robotic-perception-system-can-recognize-objects-by-touching-them/

Whether or not services like this will make their way into the Cloud AI offerings remains to be seen, they are arguably quite niche use cases. But one thing seems to be for sure — Amazon, Google and Microsoft are going to continue to produce more AI services and enhance those that they already have in order to try and gain a competitive edge on each other.

## And So...

If you’re curious about how these AI services could work for you and how you might integrate them with your current software then contact us: talk@fuzzylabs.ai — it’s what we love to do!

Follow Fuzzy Labs on Twitter, or LinkedIn, or visit us at fuzzylabs.ai.
