---
title: "Council Tax Case Study | Fuzzy Labs"
description: &description "How AI helped enable faster benefits and council tax claims"
draft: false
type: page
layout: case_study
metadescription: "Automate to improve - how AI helped enable faster benefits and council tax claims "
image: &image "/images/hero-counciltax.jpg"
sections:
 - type: "hero"
   image: *image
   subheading: "Case Study"
   heading: "Automate to improve"
   description: *description
 - type: "textblock1"
   intro: "<p>Lots of clients know that AI can probably help speed up their processes, but aren’t sure what is possible, or how to start.</p>"
   copy: "<p>We were able to build proof of concept for our client, XpertRule, to help them show how robotic process automation (RPA) could be used to improve efficiency for local government.</p><p>This helped them to secure investment in a wider project to increase overall efficiency for their client, the local council Revenues and Benefits department, who handled benefits claims processing.</p><p>We didn’t just outline what was possible – we built a working demo for XpertRule to use to strengthen their business case, and ultimately secure the work.</p>"
   greenblockHeading: "The challenge"
   greenblockCopy: "<p>The claims process in question had two distinct stages: indexing of the supporting documents supplied, followed by assessment of whether the claim was valid.</p><p>Improving efficiency hinged on showing how AI could automate the first low value, tedious data extraction work which was slowing down the whole claims process, and free up people to focus on the higher value work of assessing the claims which followed.</p><p>Could we show that using AI could speed up handling of claims? What would be the best way to achieve this? And how quickly could we build something to prove the idea would work?</p>"
 - type: "textblock2"
   heading: "The solution"
   copy: "<p>We were able to quickly identify the main problems to solve, and apply the most appropriate use of AI to build a working demo. We built a simple web frontend which allowed the user to upload a scanned document, and view all the relevant extracted information in it at a glance.</p><p>In our client’s own words:</p><p>“We asked Fuzzy Labs to do a short, quick investigation to understand whether AI tools could be utilized to help our client automate the Indexing process.</p><p>They exceeded our expectations, as not only did they complete the investigation with a clear view on what was possible, but they also built a demo of the AI tools, which I was able to use with my stakeholders.”</p>"
 - type: "textblock3"
   image: "/images/subimage-counciltax.jpg"
   copy: "<p><strong>In order to automate the claims data indexing stage, we identified two main problems to solve.</strong></p><p>1. Classifying documents by type – e.g. council tax bill, utility bill etc.</p><p>2. Extracting key data from each document – names, postcodes etc.</p><h2>Classification</h2><p>We used Google Vison AI service to extract text from the scanned documents. This process is traditionally known as Optical Character Recognition (OCR) and normally requires licenced software. However, with our expertise, the functionality is readily available on the Google Cloud via a simple API call, saving time and money.</p><p>Next, we created a custom AI model using the Google AutoML service. This gave us the ability to classify new documents, using the extracted text. AutoML is an efficient way to create custom machine learning models without having to dig deep into data science. You can read more about Cloud AI services here.</p><h2>Data extraction</h2><p>We passed the extracted text to the Google Natural Language Service, which returned the information (like postcodes and names) that we used to render in the results to the user.</p><p>You can see the working demo here:</p><p>And the code here:</p><p>By successfully proving what was possible with AI, and demonstrating quickly how it could work, we were able to help our client win valuable new business, and improve overall efficiency for local government. In the client’s words:</p><p>“The speed and quality of the work Fuzzy Labs do, along with their deep expertise in AI tools, means that we would definitely look to work with them again in the future”.</p><p><strong>We’ll take that.</strong></p>"
 - type: "cards"
   heading: "Our other case studies:"
   cards:
    - image: "/images/marketing-hyper-personalisation.jpg"
      heading: "AI as a service Case Study"
      description: "How common is the problem you need to solve? When our client came to us asking for help filtering out inappropriate adult content from their site, we were pretty confident they weren’t the first to need this tech."
      buttonlink: "/"
    - image: "/images/marketing-hyper-personalisation.jpg"
      heading: "XpertRule Case Study"
      description: "Lots of clients know that AI can probably help speed up processes, but aren’t sure what is possible, or how to start. We were able to build proof of concept, to help them show how robotic process automation (RPA) could be used to improve efficiency for local government."
      buttonlink: "/"
    - image: "/images/marketing-hyper-personalisation.jpg"
      heading: "AI as a service Case Study"
      description: "How common is the problem you need to solve? When our client came to us asking for help filtering out inappropriate adult content from their site, we were pretty confident they weren’t the first to need this tech."
      buttonlink: "/"
    - image: "/images/marketing-hyper-personalisation.jpg"
      heading: "XpertRule Case Study"
      description: "Lots of clients know that AI can probably help speed up processes, but aren’t sure what is possible, or how to start. We were able to build proof of concept, to help them show how robotic process automation (RPA) could be used to improve efficiency for local government."
      buttonlink: "/"
---