---
date: 2023-10-11
slug: /unicode
draft: false
categories:
  - MT3001
  - Mathematics
  - Probability
---
# Basic probability theory, MT3001 module 1 / 15
<!-- <link rel="stylesheet" type="text/css" href="static/blog.css"> -->
<style>
.img-responsive {
    max-height: 300px;
    width: auto;        /* Auto width will maintain aspect ratio */
    max-width: 100%;    /* Ensure it never goes beyond the container/page width */
    display: block;     /* Optional: centers the image if it's inside a block-level element */
    margin: 0 auto;     /* Optional: centers the image */
}
</style>

## Introduction
Probability theory is the study of random phenomena. It is used in many fields, such as statistics, machine learning, and finance. It is also used in everyday life, for example when playing games of chance, or when estimating the risk of an event. The most classic example is the coin toss, closely followed by the dice roll.

When we toss a coin the result is either heads or tails. In the case of an ideal coin, the "random trail" of tossing the coin has an equal probability for both outcomes. Similarly, for a die roll of a fair dice we know that the probability for each outcome is 1/6. In the study of probability we dive deep into the mathematics of these random phenomena, how to model them, and how to calculate the probability of different events. To do this in precise terms we define words and concepts as tools for discussing and communicating about the subject.

This is the first of what I expect to be a 15 part series of my lecture & study notes from my university course in probability theory MT3001 at Stockholm University. References to definitions and theorems will use their numeration in the course literature, even if I may rephrase them myself. The book I've had as a companion through this course is a swedish book called Stokastik by Sven Erick Alm and Tom Britton; ISBN:978-91-47-05351-3. This first module concerns basic concepts and definitions, needed for the rest of the course.

## The language of Probability theory
An experiment is a process that produces a randomized result. If our experiment is throwing a die, we then have the following: The result of throwing the die is called an **outcome**, the set of all possible outcomes is called the **sample space** and a subset of the sample space is called an **event**. We will use the following notation:

- **outcome** is the result of an experiment, denoted with a small letter, ex. 𝑢₁, 𝑢₂, 𝑢₃, ...
- **event** is the subset of the sample space, denoted with a capital letter, ex. 𝐴, 𝐵, 𝐶, ...
- **sample space** is the set of all possible outcomes of an experiment, denoted Ω.

Adding numbers to our dice example, we have the sample space Ω = \{𝟏,𝟐,𝟑,𝟒,𝟓,𝟔\} containing all the possible events 𝑢₁=𝟏, 𝑢₂=𝟐, 𝑢₃=𝟑, 𝑢₄=𝟒, 𝑢₅=𝟓 and 𝑢₆=𝟔. And we could study some specific sub events like the chance of getting an even number, 𝐴=\{𝟐,𝟒,𝟔\}, or the chance of getting a prime number, 𝐵=\{𝟐,𝟑,𝟓\}. As it happens the probability of both 𝐴 and 𝐵 is 50%.

## Sample space
The sample space is the set of all possible outcomes of an experiment. It is denoted Ω. And there are two types of sample spaces, discrete and continuous. A discrete sample space is a finite or countably infinite set, and all other kind of sample spaces are called continuous.

The coin toss and the dice roll are both examples of discrete sample spaces. Studying a problem like the temperature outside, would in reality require a continuous sample space. But in practice we can often approximate a continuous sample space with a discrete one. For example, we could divide the temperature into 10 degree intervals, and then we would have a discrete sample space.

Remember that continuous sample spaces exist, and expect more information about them in later modules. For starters, we focus on discrete sample spaces.

## Set Theory notation and operations
When talking about probabilities we will arm ourselves with the language of "set theory", it is a crucial tool for the study of probability. Feeling comfortable with the subject of set theory since before is useful but not necessary. I will try to explain the concepts as we go along.
<!-- , but if you feel that you need to brush up on the subject I recommend the following resources: -->

Even tough the events from the dice roles are represented by numbers, it is important to note that they aren't numbers but rather elements. This might become more clear if we alter our example to be a deck of cards. This deck of cards have four suits Ω = \{♥, ♠, ♦, ♣ \} and in our experiments we draw a card from the deck and look at the suit. It's here very obvious that we can't add or subtract the different events with each other. But we do have the operations of set theory at our disposal. For example, if 𝐴 is the event of drawing a red card and 𝐵 is the event of drawing spades ♠, we can use the following notation:

- 𝐴=\{♥, ♦\}
- 𝐵=\{♠\}

### Set theory operations

- Union: 𝐴 ∪ 𝐵 = \{♥, ♦, ♠\}, the union of 𝐴 and 𝐵.
- The empty set: ∅ = \{\}, the empty set. A set with no elements.
- Intersection: 𝐴 ∩ 𝐵 = ∅, the intersection of 𝐴 and 𝐵.
  - This means that 𝐴 and 𝐵 have no elements in common. And we say that 𝐴 and 𝐵 are **disjoint**.
- Complement: 𝐴ᶜ = \{♠, ♣\}, the complement of 𝐴.
- Difference: 𝐴 ∖ 𝐵 = \{♥, ♦\}, the difference of 𝐴 and 𝐵. Equivalent to 𝐴 ∩ 𝐵ᶜ.
- The symbol ∈ denotes that an element is in a set. For example, 𝑢₁ ∈ Ω means that the outcome 𝑢₁ is in the sample space Ω. For our example: ♥ ∈ 𝐴 means that the suit ♥ is in the event 𝐴.

### Venn diagram
A very useful visualization of set theory is the Venn diagram. Here an example of a Venn diagram in the picture below:
<img src="/static/blog/4/venndiagram.jpg" class="img-responsive">

In the above illustration we have: Ω = \{𝟏,𝟐,𝟑,𝟒\} and the two events 𝐴=\{𝟐,𝟑\} and 𝐵=\{𝟑,𝟒\}. Notice how the two sets 𝐴 and 𝐵 share the element 𝟑, and that all sets are subsets of the sample space Ω. The notation for the shared element 𝟑 is 𝐴 ∩ 𝐵 = \{𝟑\}.

### Useful phrasing
The different set notations may seem a bit abstract at first, at least before you are comfortable with them. Something that might be useful to do is to read them with the context of probabilities in mind. Doing this we can read some of the different set notations as follows:

- 𝐴ᶜ, "when 𝐴 doesn't happen".
- 𝐴 ∪ 𝐵, "when at least one of 𝐴 or 𝐵 happens".
- 𝐴 ∩ 𝐵, "when both 𝐴 and 𝐵 happens".
- 𝐴 ∩ 𝐵ᶜ, "when 𝐴 happens but 𝐵 doesn't happen".

<!-- ## Probability
Probability is a measure of how likely an event is to occur. It is a number between 0 and 1, where 0 means that the event is impossible, and 1 means that the event is certain.

## Probability space and function
A probability space is a triple (Ω, \mathcal{𝐹}, 𝑃), where Ω is the sample space, \mathcal{𝐹} is the set of events, and 𝑃 is the probability measure.  -->

## The Probability function

Functions map elements from one set to another. In probability theory we are interested in mapping events to their corresponding probabilities. We do this using what we call a probability function. This function is usually denoted 𝑃 and have some requirements that we will go through in the definition below.

This function take events as input and outputs the probability of that event. For the example of a die throw, if we have the event 𝐴=\{𝟐,𝟒,𝟔\}, then 𝑃(𝐴) is the probability of getting an even number when throwing a fair six sided dice. In this case 𝑃(𝐴)=\frac{𝟏}{𝟐}=𝑃(\text{"𝑒𝑣𝑒𝑛 𝑛𝑢𝑚𝑏𝑒𝑟 𝑓𝑟𝑜𝑚 𝑎 𝑑𝑖𝑐𝑒 𝑡𝑖𝑟𝑜𝑤"}), you'll notice that variations of desciptions of the same event can be used interchangeably.

The Russian mathematician Andrey Kolmogorov (1903-1987) is considered the father of modern probability theory. He formulated the following three axioms for probability theory:

>### Definition 2.2, Kolmogorov's axioms
>A real-valued function 𝑃 defined on a sample space Ω is called a >**probability function** if it satisfies the following three axioms:
>
>1. 𝑃(𝐴) ≥ 𝟎 for all events 𝐴.
>2. 𝑃(Ω) = 𝟏.
>3. If 𝐴₁, 𝐴₂, 𝐴₃, ... are disjoint events, then 𝑃(𝐴₁ ∪ 𝐴₂ ∪ 𝐴₃ ∪ ...) = 𝑃(𝐴₁) + 𝑃(𝐴₂) + 𝑃(𝐴₃) + .... This is called the **countable additivity axiom**.

From these axioms it's implied that 𝑃(𝐴) ∈ [𝟎,𝟏], which makes sence since things aren't less than impossible or more than certain. As a rule of thumb, when talking about probabilities we move within the range of 0 and 1. This lets us formulate the following theorem:

>### Theorem 2.1, The Complement and Addition Theorem of probability
>Let 𝐴 and 𝐵 be two events in a sample space Ω. Then the following statements are true:
>1. 𝑃(𝐴ᶜ) = 𝟏 - 𝑃(𝐴)
>2. 𝑃(∅) = 𝟎
>3. 𝑃(𝐴 ∪ 𝐵) = 𝑃(𝐴) + 𝑃(𝐵) - 𝑃(𝐴 ∩ 𝐵)

### Proof of Theorem 2.1
1. 𝑃(𝐴 ∪ 𝐴ᶜ) = 𝑃(Ω) = 𝟏 = 𝑃(𝐴) + 𝑃(𝐴ᶜ) ⇒ 𝑃(𝐴ᶜ) = 𝟏 - 𝑃(𝐴)
    - This simply proves that the probability of 𝐴 not happening is the same as the probability of 𝐴 happening subtracted from 1.
2. 𝑃(∅) = 𝑃(Ωᶜ) = 𝟏 - 𝑃(Ω) = 𝟏 - 𝟏 = 𝟎
   - Even though our formal proof required (1) to be proven, it's also very intuitive that the probability of the empty set is 0. Since the empty set is the set of all elements that are not in the sample space, and the probability of an event outside the sample space is 0.
3. 𝑃(𝐴 ∪ 𝐵) = 𝑃(𝐴 ∪ (𝐵 ∩ 𝐴ᶜ)) = 𝑃(𝐴) + 𝑃(𝐵 ∩ 𝐴ᶜ) = 𝑃(𝐴) + 𝑃(𝐵) - 𝑃(𝐴 ∩ 𝐵)
   - This can be understood visually by revisiting our Venn diagram. We see that the union of 𝐴 and 𝐵 has an overlapping element 𝟑 shared between them. This means that purely adding the elements of 𝐴=\{𝟐,𝟑\} together with 𝐵=\{𝟑,𝟒\} would double count that shared element, like this \{𝟐,𝟑,𝟑,𝟒\}, since we have two "copies" of the mutual elements we make sure to remove one "copy" bur removing 𝑃(𝐴 ∩ 𝐵)=\{𝟑\} and we get 𝑃(𝐴 ∪ 𝐵)=\{𝟐,𝟑,𝟒\}. We may refer to this process as dealing with double counting, something that is very important to have in mind when dealing with sets. <img src="/static/blog/4/venndiagram.jpg" class="img-responsive">

Two interpretations of probability that are useful and often used are the **frequentist** and the **subjectivist** interpretations. The frequentist interpretation is that the probability of an event is the relative frequency of that event in the long run. The subjectivist interpretation is that the probability of an event is the degree of belief that the event will occur, this is very common in the field of statistics and gambling. For the purposes of study it's also useful to sometimes consider probabilities as areas and or masses, this is called the **measure theoretic** interpretation. Don't let that word scare you off, int our context it's just a fancy way of drawing a parallel between areas and probabilities. Think area under curves, and you'll be fine.