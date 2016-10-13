# FU!comp

## Getting started

In theory:
```bash
make dev-env
```
should get you set up and
```bash
make serve
```
should give you a local instance which will update as you change files

## Submission Guidelines - Provisional

Fork the repository and check out a working branch with a name based on your
submission. Note that we will outright reject any pull requests from your master
branch as we want to review each submission individually.

Commit any articles, stories, posts etc to the `/_posts` folder of your fork.
When you are happy with your content submit a pull request and it will be
reviewed by a member of staff. Any comments and corrections will be available to
view in the PR process.  On successful submission your PR will be merged into
the master branch, so make sure it's ready before you PR! Congratulations!

Note that FU:Comp members ALSO have to go through the PR process to ensure a
consistent standard applied to all editorial.

## Post Styling Guidelines - Provisional

Because we are striving to keep the markdown as plain and clean as possible we may only have support for limited Markdown variants currently.
We are relying on the kramdown engine for our HTML conversion so to ensure consistent design application. Subsequent acceptance of any submissions will be quite strict whilst we keep fixing our own ship.

Posts must contain the following Github Flavour Markdown:

```markdown
---
layout: post <!-- unless you are actually adding a page please don't change the layout from post - it will most likely hinder the acceptance of the article -->
title: "Demo" <!-- The title -->
date: 2016-10-05 22:01:20 +0100 <!-- the date -->
categories: test <!-- A category or categories you'd like the post to appear in -->
---
# A H1 level title at the top of the document
> A blockquote precis or description of the post
!(img)[http://lorempixel.com/800/600] <!-- An image to be used as the background -->

After that you can pretty much do what you like with the post itself.
```
We haven't tried too much of the other MD flavours yet but we will, as requirements become apparent, attempt to cover as many outcomes as possible.

###
