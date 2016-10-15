---
layout: post
title: How We Sewed Our Own Straight Jackets
date: 2016-02-25
author: HeadCrash
categories: thinks state-of-the-web
---
# How We Sewed Our Own Straight Jackets

> They say that if people learn nothing from their mistakes they are doomed to repeat them. This is the first of an ongoing series of articles about how we are about to ruin and potentially lose the web for good.

![AOL](http://media.fuckyou.computer/facebookaol.jpg)

Google recently announced its initiative to improve the mobile browsing experience of all net users via its Accelerated Mobile Pages project, [AMP](https://www.ampproject.com/).

AMP is a direct competitor to [Facebook’s Instant Articles](https://instantarticles.fb.com/) functionality but abstracted from the platform as a standard or protocol rather than within the context of Facebook’s walled garden.

I say walled garden because of the 1.5 billion active Facebook users 30% access the service through a mobile app of some sort. Unless you’ve specifically set it up to not do so it uses an internal browser. I have no figures to hand about how many people have changed their default Facebook browser to be one of their own choosing. My instincts tell me that it’s very few. Why is this an issue? If you ask my mother or my youngest niece what the Internet is they would most likely respond “Facebook”. Facebook is becoming a platform in its own right. And content creators, journalists and publishers both are treating it as such. I’ve heard figures from online media agencies that cite numbers as high as 50% to sometimes as high as 90% conversion rates on Facebook posts. That’s a lot of eyes on articles and for some publications that’s the difference between life and death. I get it.

The AMP proposition is a sub-set of the HTML standard which eschews all JS (read none at all), ads, and embeds. I’m not saying that the spirit with which this was suggested is bad per-se but that perhaps by following our knee-jerk reaction against the popularity of Facebook’s Instant Articles we’re going to accidentally create a tiered system akin to the one that net neutrality believers are still trying to fight. Why do I mention Net Neutrality? Because AMP suggests a selection of tags specifically for a small group of preferred vendors with tags such as ```amp amp-twitter``` and ```amp amp-youtube```. This codifies the web as it exists at the moment. Fine. For now. But what if the landscape changes? What if an unknown video streaming provider becomes the de-facto media delivery service ahead of YouTube?

Oh wait, it can’t because who’s going to use it if it doesn’t work out of the box?

One of the beautiful things about the Open Web is the ability to make your own bad decisions about what technologies you use and to badly implement them however you see fit. That’s how people learn. It’s certainly how I learned. By picking apart code and stitching my own creations together from what I thought I had gleaned. Without this ability the web becomes static, inert and unchanging.

Some of us old internet dinosaurs used to have to wrangle the then new markup language HTML 4.0, then later the better but still incredibly flawed XHTML1.0 specification before being presented with HTML5. HTML5 is great. A video is a video, audio is audio, and all of the old favourites such as iframes and objects and embeds still work with no muss or fuss. Back in the days before broadband when mobile telephones were small things that had monochrome screens and about 24 characters of space total, way before the iPhone would come along and change our lives forever there *was* a mobile internet markup language. Wireless Markup Language. WML was a pared down and fairly ugly web technology which used the idea of cards. It was [pretty unpleasant](http://www.tutorialspoint.com/wml/wml_syntax.htm). Then mobile networks caught up, we have faster than broadband wireless speeds on our handsets. They started to access the web as our desktops did. We were given CSS3 and its media queries to allow us to make all this look presentable on our pocket machines. So why the need for AMP or Facebook Instant Articles? Because we’ve bloated the web with so much tracking and third party javascript that even with 4G access pages take 8 seconds or more to load. It’s our own broken web and impatience that’s prompted Facebook and Google to try and fix it for us. But it’s as far from the Open Web as it’s possible to get. What we have are competing standards, one a proprietary initiative by a would-be-platform that seeks to become the Internet and another by a coalition of worried parties who want a language of whitelisted third-party service providers. At least that last one is Open Source and you can roll your own support if you have to.

So how do we go about solving this issue? Well one way would be to speed up web page delivery. Stop commodifying the user quite so much. Do websites really need to know where you’ve been and what you’ve clicked? I would say not. If you’ve not helped your friends and family block tracking and ad software as a matter of course you’re remit in your responsibility to their security and online safety. Ads are potentially poisonous and have been the vector for a good number of [high profile malware attacks](https://en.wikipedia.org/wiki/Malvertising#History.5B10.5D).
If you create websites push back against injecting more tracking. Write cleaner more efficient code. Use less libraries, maybe switch from jQuery to Aerogel or use vanilla JS for more things if it reduces your bloat. Optimise your images and videos. Start your design phase with a mobile first methodology. Uglify your CSS and JS (add maps to this though, you still want to a) be able to use the developers tools to read your work and b) you’re a good netizen and want people to read your output and be inspired).
From a user point of view you can install ad-blockers and tracker blockers like Adblock and Ghostery on your laptop.

There are wifi Adblockers available for mobile devices too, they will also speed your experience up. It’s up to us to keep the web free by not making the tracking of users profitable or useful.

## Are there alternatives?

Yes. Sort of. A lot of this technology is in it’s infancy. So much so in fact that FBIA and AMP seem to have got the drop on Mozilla and other open source heavy hitters. One hopeful is the [CPP](https://timkadlec.com/2016/02/a-standardized-alternative-to-amp/).

This is an open note and I will be adding more points as I think of them.
