---
title: 'On Refactoring'
date: '2017-10-03T20:58:00.000Z'
---

Do you clean your home? Do you take your rubbish out? Have a tidy up? When it's aged do you redecorate? When you feel like a change, for your surroundings to work better, do you remodel?

Why? Things get used, your needs change over time… you need to keep a mental model of where things are so you can find them. When you stop using things you have a clear out; A spring clean.

**The same needs to happen with your code.**

Software Developers/Engineers understand this but often fail to get the message across to management, marketing, whoever is pulling the strings. They fail to understand the need to refactor and do some "housekeeping".

I was recently told in a training session:

> "For every twenty lines of code there is 1 bug", and "every four to six week refactor for 1 week".

That last one I could really get behind. The problem is your software is working. That one bug is probably obscure, an edge case that didn't crop up in testing; or it was observed but was so hard to reproduce that it slipped through the gaps - and the clock is ticking, time is money. Release early, remember!

Often we release early and everyone is happy - except the devs - they receive their praise "hooray, you got it out, have a beer!", but they're not satisfied; it's not quite right, it could be more efficient, that bit could really do with a refactor. They told the management too, "once we've done this we need a bit of time to sort it out". "Of course!" Said the management. But the management, even with their good intentions are already thinking about the next thing. New demands and deadlines start appearing, and that refactor…?

There's a missing understanding. That absolute need to refactor, to rip out old code, all the maintenance tasks are required to stop the product from being painted into a corner. They're required not just for the product itself to keep running, to be adaptable to future feature requests, but also for the wellbeing of the devs. That ever increasing load of "we must remember to do that", "how did that feature work again?", and most of all "why is this here? I don't think it's used anymore but I'm too afraid to remove it" takes its toll. It's mentally tiring. Fitting in the secret refactors and fixes on other tasks - just to get them done. And worst of all it makes developers leave. They become tired and wary. Onto the next place that promises to _do things properly_.

What's the answer? Keep driving the message home? Metaphor after metaphor - like the openings of this post. But there are only so many ways to say the same thing. If the management isn't on board with removing technical debt the management isn't on board with having a quality product. Of course there's going to be compromise, devs do have to be kept in line because nothing is ever finished, but take the time to listen. If you don't your product will start to crack and before you know it you'll need a rebuild. A rebuild that could have been an evolution of your existing product because the core of it, the foundations, was stable.
