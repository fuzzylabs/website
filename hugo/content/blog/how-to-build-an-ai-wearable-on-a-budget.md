---
title: "How To Build An Awesome AI Wearable On A Budget | Blog | Fuzzy Labs"
articletitle: "How to Build An Awesome AI Wearable"
description: "On A Budget"
metadescription: "How To Build An Awesome AI Wearable On A Budget"
date: 2021-03-15T00:00:00
tags: ["artificial intelligence"]
image: "https://cdn-images-1.medium.com/max/3200/0*bsYUg1IIgeIdHRdJ"
author_name: "Tom Stockton"
author_thumbnail: "/images/tom-square-thumb.jpg"
author_description: "Co-Founder of Fuzzy Labs"
layout: blog_post
draft: false
---
If you have read our previous introduction blog from this series, you might already know a little about Matt's AI for your feet project.

Essentially, Matt decided he wanted to build something that could monitor how he walked in order to help with a condition he had at the time. If you're a nerd (like us) and want to read up about it in more detail, we've written a [really technical piece](https://fuzzylabs.ai/blog/smart-insole-analytics-step-by-step/) that you can check out too.

However, this blog will take you through Matt's "AI for your feet" project to show some of the less technical people out there who are thinking about AI, that you can build a world-class wearable quickly and without breaking the bank either!

It all started on a warm day in the summer of 2020…

Back then, we found ourselves in between projects with a rare gift in our line of work — time!

This downtime got Matt and I thinking about what we could do, so we decided to spend it doing what we do best — doing interesting projects with cutting-edge technology.

So that's what we did.

**Preparing our shopping list**

Usually, these kinds of projects go one way — Matt furiously hacking away, with me helping to promote the project with blogs, vlogs, etc. But this time, we wanted to turn it into more of a community project.

I wanted to spread the knowledge, [open-source it](https://github.com/fuzzylabs/wearable-my-foot) and get other people involved so that they could use what we built.

A lot of it had to do with getting involved with the University of Manchester and inspiring the students there, but that's another story for another blog.

The first thing we did was hire Misha, a Russian tech wizard who lived [100 miles north of Kazakhstan](https://goo.gl/maps/H5QskrgNZcmoeW8y8), and, together, the three of us hatched our plan. We started to put together a shopping list for our budget wearable, which included the following items, all of which were available online:

<center>
![](https://cdn-images-1.medium.com/max/3200/0*M_BDI9z7Qo24eiff)
</center>

After a few days of shopping around, we finally got what we needed and did a handover of all the wires and electronics on a bench by a disused railway…nothing sketchy about that!

Anyway, once we were back at [Fuzzy Labs](https://fuzzylabs.ai/) HQ, we started to assemble our wearable:

<center>
![](https://cdn-images-1.medium.com/max/3072/0*7h5HbcsHirpAyMR7)
</center>

There it is, in all its glory!

**Assembling our wearable**

As you can see, it's made up of some pretty simple components.

At the heart of it is a chip called the [Arduino Nano](https://store.arduino.cc/usa/arduino-nano). It's a mini computer chip that has an accelerometer and a gyroscope built into it for detecting movement.

To make this work, we needed to attach some pressure sensors to the insole of a shoe. The idea was that the insole would detect Matt's walking pressure and speed, which would be gathered by the Arduino Nano. We could then send that data to a mobile app via bluetooth, where the data would be displayed in a way that was easy to read and could track Matt's movement, walking pressure and posture.

So the insole worked, but there was one problem.

**From insole to running pod**

It was very flimsy. The connection from the pressure sensors to the insole kept breaking, and no amount of soldering would fix it in place long enough for us to collect any data.

Our whole idea was that we wanted to create something high quality that we could roll out across our community, and, at the moment, it was too fragile for practical use.

That's when we came across this slick-looking little pod:

<center>
![](https://cdn-images-1.medium.com/max/3100/0*eA3eRDTa92xwNv3I)
</center>

This is the Stryd, a state-of-the-art running pod made of carbon. It weighs only 9 grams and costs around £200.

The interesting thing about this little pod is that it doesn't need to be attached to your insole. Instead, it attaches to the shoe and uses some very clever maths and estimations to figure out the "running power" of the user.

And although it looked a lot slicker, this pod was actually made up of the same things we already had in our device: an accelerometer and a gyroscope!

Yet the Arduino Nano was only £25.

All we had to do was figure out the maths…

So we embarked on this maths project, started gathering some data and built a mobile app to accompany it. Then, we started comparing our results to similar devices on the market, like Stryd and Garmin.

<center>
![](https://cdn-images-1.medium.com/max/3200/0*bsYUg1IIgeIdHRdJ)
</center>

Although it didn't look as pretty (as you can see), our device worked just as well, and we had only spent around £30 to build it!

All the code and details of the hardware is available in our [Open Source Github project.](https://github.com/fuzzylabs/wearable-my-foot)

<center>
![The device in action — including mobile app](https://cdn-images-1.medium.com/max/2000/1*KxXHYy2gsAvLEoLAz0pbvA.gif)
<p>*The device in action — including mobile app*</p>
</center>

**The outcomes**

Along with being great fun, this project had a couple of really positive outcomes for us.

First, it allowed us to get involved with the University of Manchester and spend a weekend sponsoring the annual [computer science hackathon](https://greatunihack.com/).

That was a fantastic weekend, and we met some really interesting people off the back of it!

The second outcome for[ Fuzzy Labs](https://fuzzylabs.ai/) was managing to secure our first major MedTech client! They liked how we used the technology in this project and picked us out of hundreds of other companies to work with them, which has helped propel the business forward.

Lastly, we also got to meet [Graphene Trace](https://www.graphenetrace.com/). They heard about what we did with AI and were keen to see how it could be applied to their projects! This has been an ongoing project and I'm pumped to share more on it with you in an upcoming blog.

**Low-cost prototypes**

I wanted to share this project with you to show you that AI projects don't have to cost millions or take years of work to build. These days, the technology is out there to allow us to build low-cost prototypes quickly. These can be your proof of concept and show you what is possible with AI, without too much risk.

The use of AI is becoming commonplace in businesses, and the medical sector isn't an exception.

So don't be intimidated by AI. As we have already seen, you can start your AI project small by building a simple prototype with off-the-shelf components, and once you've proved it works, then you can scale it up.

P.S. For more great content around AI and how it's impacting the world today, please feel free to email any questions to me at [tom@fuzzylabs.ai](mailto:tom@fuzzylabs.ai), or [follow us on LinkedIn](https://www.linkedin.com/company/fuzzy-labs/) for updates on all our latest projects.

Thanks!
