---
title: "How To Always Win A Card Game — Using Simple AI | Blog | Fuzzy Labs"
articletitle: "How To Always Win A Card Game"
description: "Using Simple AI"
metadescription: "How To Always Win A Card Game — Using Simple AI"
date: 2021-03-22T00:00:00
tags: ["artificial intelligence"]
image: "https://cdn-images-1.medium.com/max/3200/0*ajL4IATbUVRbAhwx"
author_name: "Tom Stockton"
author_thumbnail: "/images/tom-square-thumb.jpg"
author_description: "Co-Founder of Fuzzy Labs"
layout: blog_post
draft: false
---
If there has been one advantage of this whole pandemic, it’s that you get to spend a lot more time with family.

For me, that means playing a lot more games with my daughters (five and nine), one of the favourites being the card game Dobble.

For anyone that doesn’t know it, here’s a quick breakdown of the rules:

**Beaten by a five-year-old**

![](https://cdn-images-1.medium.com/max/3200/0*ajL4IATbUVRbAhwx)

You take two of these round cards from the deck and place them face up on the table as shown in the image above.

The idea is to spot the single matching image from both cards (there is always one, can you spot it?). The images are all different shapes and sizes so it can be a bit of a mind-bender to spot them!

When you see the matching image, you shout out “Ghost!”, “Sun!” or in the case of the image above, “Taxi!” (if you haven’t got it already). The player who shouted out the matching image first gets to keep the cards.

There are no turns, so you can shout out whenever you like. It’s like the Wild West! The game ends when the deck runs out and the player with the most cards in their hand wins.

Now, here’s the truth: I’m *terrible* at Dobble. Apparently, my mental dexterity isn’t quite as sharp as my five-year-old’s, and I found myself trying very hard not to lose every game we played.

“You’re not very good at this, Daddy”, she would taunt while gathering the cards for another round of let’s-beat-Dad.

So, with the holidays around the corner, and the threat of many more Dobble failures ahead of me, I spotted an opportunity.

**The NVIDIA alliance**

Around Christmas, we had recently signed up to the [NVIDIA inception program](https://www.nvidia.com/en-gb/deep-learning-ai/startups/) and had come fresh off the back of our successful [AI for your feet](https://fuzzylabs.ai/blog/how-to-build-an-ai-wearable-on-a-budget/) project, so I was pretty familiar with Edge-based AI capabilities by then and was looking for new ways to use this technology.

The opportunity to hatch my plan came about during a [talk Matt did at AI Tech North](https://youtu.be/vqUvsKReEFY), one of the biggest UK tech conferences. Matt shared the bill with Ross from NVIDIA, who opened our eyes to this little device called the [Jetson Nano](https://developer.nvidia.com/embedded/jetson-nano-developer-kit):

![](https://cdn-images-1.medium.com/max/3200/0*HzBwB3N4NYDDK1FJ)

It’s a mini AI computer that can do various tasks, including real-time detection of objects.

**Creating a virtual Dobble assistant**

Essentially, you can plug in a camera, point it at different things, and it will detect objects it already knows. For example, it could look at a desk and detect a monitor, phone, lamp, etc.

However, you can also train it with your own data set.

So one frosty morning, after licking my wounds from a particularly brutal Dobble defeat, I got to thinking…

Technically, I could train the Jetson Nano to recognise all the different images on the Dobble cards and create a virtual assistant to aid me!

Images of a covert Jetson Nano stuffed into a teddy bear feeding me information through an earpiece raced through my mind — victory was within reach!

**The creation process**

Over the Christmas period, we had a bit of downtime and decided to run a one-day hackathon to see what we could come up with. Now, when you build AI modules, you need to get a human to label some data first, so we spent the first few hours labelling all the various symbols on the Dobble cards.

Then, we had to put that data set into the model-training algorithm and deploy that into the Jetson Nano.

Once finished, we had a device that could instantly detect every single symbol! All we had to do next was program it to send an alert when it recognised two matching images, and I’d have my AI Dobble assistant.

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/kWdudS4yK1k" frameborder="0" allowfullscreen></iframe></center>

**Proving what’s possible**

Now, I don’t want to pretend that we built some productionised version of this, and I’m sad to say that my undercover teddy bear dream still hasn’t come to life.

So, it wasn’t perfect, but it worked; and more importantly, we made it work in only a few hours! The lesson here is that a project like this can show you what you can do with slightly higher-powered AI devices in a very short space of time. You can use these devices to build a rough prototype to see if your idea is possible without investing loads of time and money first.

Sure, to build a real product out of this idea, I’d have to retrain my model to recognise the symbols from a wide range of different angles and lighting conditions. Also to turn it into a toy that won’t potentially burst into flames (the Jetson Nano gets very hot!), but that was all possible.

I could even build an app to accompany it and set various difficulty levels if I really wanted to.

The main thing here is that I proved all this was possible in only a few hours with off-the-shelf components and a bit of creativity.

Check out the code here: [https://github.com/fuzzylabs/dobble-jetson-nano](https://github.com/fuzzylabs/dobble-jetson-nano)

**Starting simple with NVIDIA devices**

You can use this same process for almost any AI project. Start small, simple and with readily available tools. Then, once you have proven it’s possible, you can start to customise and productionise it.

And using a vendor like NVIDIA makes that a whole lot easier.

One of the great things about using Edge-based devices, like the ones from NVIDIA, is that you don’t need to rely on the Internet. All the data you collect is contained on these little devices, which has massively beneficial implications for businesses, especially those industries like medical.

(Or if I really wanted to keep my Dobble images classified…)

However, it’s not just their devices that make NVIDIA a great place to start with your AI projects. They also give a huge amount of support to their partners. Even on their [website](https://developer.nvidia.com/embedded/community/jetson-projects), they have loads of examples showing you how to use their devices, and that is really inspiring for anyone who is thinking about starting a project.

That’s why [Fuzzy Labs](https://fuzzylabs.ai/) has partnered with NVIDIA, and I’m confident they will continue to support and advise us in the future.

**AI projects don’t happen overnight**

As I have shown in this blog, proving your AI concept doesn’t have to be a complicated task. However, taking your concept to production is a lot harder. It won’t happen overnight, but you still need to understand what the technology can do first, because it takes so long to get one of these things out to market. If you don’t even know what the technology can do, you’re behind by the time you figure out what’s possible.

Now is the time to start understanding what technology is available and what you can do with it, in order to plan a strategy that gives you the edge, and helps you win at Dobble…

Hope you found this useful!

P.S. For more great content around AI and how it’s impacting the world today, please feel free to email any questions to me at [tom@fuzzylabs.ai](mailto:tom@fuzzylabs.ai), or [follow us on LinkedIn](https://www.linkedin.com/company/fuzzy-labs/) for updates on all our latest projects.

Thanks!
