---
layout: post
title: The Ready Player One Approach to Defense
date: 21-07-2016
categories: vanity security thinks sci-fi
author: HeadCrash
---
# The Ready Player One Approach to Defense

> What if computer emulation wasn't just about nostalgia? What if we could leverage the power of being olde and having knowledge of defunct hardware and software and legitimately put it to use today?

![Rad!](http://media.fuckyou.computer/retro-console.gif)

## The Idea

Back when the hardware wars were real and there were standing battlefronts in every playground about what platform was best there was very little in the way of hardware standardisation. This was before the consoles stole the hearts of all children and parents had stopped believing the lies about computers being used for homework or organising Dad’s vinyl collection and Mum’s recipes.

We’re talking pre-IBM supremacy, before x86 architecture would take over the world. This is the time of the dinosaurs. The Motorola 68000, the ARM, and the Zilog. These chips are mostly mothballed now and consigned to the dustbin of history and the shelf of nostalgic enthusiasts. That is apart from the ARM of course who’s descendants still dominate the mobile and low power markets.

Named after the book by Ernest Cline which celebrates, nay revels in retro-gaming culture this thought experiment utilises older operating systems to protect the user from outside agents through sheer dint of their very obsolescence. The idea is that if there’s no active support, there’s no active malware. Probably.

I was inspired by the idea behind [Qubes](https://www.qubes-os.org/) which uses a compartmentalised approach to security. Each task that the user may want to perform is kept distinct from any other by having the user spawn a new virtual environment. I have thought a few times about using containers via Docker for something similar but the RPO (That’s Ready Player One) sounded like a lot more fun and might make my childhood relevant again, however briefly.

## The Reality

My immediate concerns for RPO as a workable solution are performance and interoperability.

### Performance

Yes, the hardware I am going to try and emulate is sometimes over 20 years old but it still takes an absolutely horrendous amount of CPU power to create and run another chip entirely in memory, especially multiply. It’s entirely possible to cripple the host machine with too many emulated CPUs and environments. Another issue is that because we’re theoretically using non x86 images we can’t use something easy such as Oracle’s VirtualBox for our emulation, instead having to roll our own via the slightly more esoteric QEMU. To get the most out of any system that’s considered there should be a near-tin Hypervisor to handle the spinning up, down, and switching between environments.

### Interoperability

Theoretically if you can fool your guest OS into mounting or reading a FAT32 partition it should be possible to pass files between your environments. There are myriad devices which do this in hardware to allow people to have every single game written for their preferred machine on a single Micro SD card using this same approach, I’m just suggesting a shared folder between guests.

## The Butter Zone

The sweet spot in terms of OS maturity is the point where it was last released on proprietary hardware and not turned into another short-lived and under-supported Linux distro, when it has nothing in common with the rest of the world as it exists now. Getting a hold of the ROM images, system BIOS and OS disks etc is an exercise in internet legal grey areas which I will leave for the reader.

My current list is:

* BeOS 5 on BeBox (Dual 133MHz PowerPC 603)
* AmigaOS 4 on Amiga 4000T (25MHz Motorola 68040)
* TOS 4 on Atari Falcon (16MHz Motorola 68030)
* RISC OS on Acorn A5000 (25MHz ARM3)
* ~~Amstrad CP/M on Amstrad (4MHz Zilog Z80A)~~

As a child of the 80s I wanted the Zilog CPU to represented but I can’t honestly see a use for it other than nostalgia. Not even good nostalgia like Spectrum or Commodore, Amstrad nostalgia. Only weirdos had Amstrads.

## Letting go…

Let’s face it, there’s going to be a metaphorical ton of stuff that you’re not feasibly going to be able to achieve with your RPO device. If the file you want to open is something that was created post-1994 then you’re probably out of luck. Unless someone has come along and written a PDF parser for the Amiga OS (it’s not actually outside the realm of possibility) then you’re probably going to have to forgo that 20MB doc. Less is more as they say.

The Amstrad had a full suite of office suitable tools even back in the 80s on 8bit hardware but you might not really recognise it as such today. I’m sure that by the time the Amiga and Atari STs came to the end of their respective lives there were much more fully featured office applications available. Possibly even terminals and command line access for useful things such as SSH and IRC.

RISC OS as the only operating system in this list still under active development has a full selection of internet tools available for use and even has modern builds specifically for the Raspberry Pi if you were so inclined.

## Summing Up and Where Next To Conquer

Used alongside a modern operating system for when you absolutely need to check Facebook or Twitter, open a PDF, work on your presentation or whatever it is that can’t be done in a 16bit environment I think there’s a useful charm in working with emulated obsolete machines, not only from a security but also from a media archaeology perspective.

Plus you get the added benefit of being able to play Syndicate on the Amiga which was easily the best version ever made.

Much like my previous article on ~~Zalgo obfuscation~~ (Coming soon), this is just a proof-of-concept and not meant for actually protecting one’s butt in the field unless one really likes flying by the seat of one’s pants.

## Addendumdum

Oholiab's offered to use his knowledge of virtualisation and containerisation to see if we can get this up and running. Maybe one day in the future we'll have a viable proof of concept to show.
