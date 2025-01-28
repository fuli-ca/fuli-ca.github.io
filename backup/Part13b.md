
[link](https://web.archive.org/web/20181129215331/http://en.donkr.com/Forum/plo-from-scratch---part-13b-541184)

### 13.1 Introduction

This is Part 13 of the article series "PLO From Scratch". The target audience is micro and low limit players with some experience from limit or no-limit Hold'em, but little or no PLO experience. My goal with this series is to teach basic PLO strategy in a systematic and structured manner.

I Part 13a we laid the theoretical foundation for our approach to c-betting heads-up and in position. We began by making the following observations:

- We can't c-bet 100% against an opponent that adjusts well
- So we need to check some flops
- But of we only check our weakest hands, we'll be easy to read and easy to exploit
- So what does a strong default strategy for c-betting and checking look like?

Then we used modeling (the AKQ game) to conclude that we split our total flop range in three parts:

- Bet your best hands for value (your value range)
- Check with medium strong hands that have some value, but not enough to bet for value (the check-back range)
- Sometimes bluff and otherwise check with your weakest hands (the air range)

This is the well-known strength principle in poker. It's intuitive, but as we have see, we can also derive it mathematically from a poker model.

The next step was to think about how these three ranges should be built. We can keep things conceptually simple by thinking like this:

- Our value hands are the hands we bet, not planning to fold to a checkraise, and where we expect to profit from getting check-raised or called. If we get check-raised, we 3-bet or call.
- We let our medium strong check-back range be hands that are a bit too weak to defend vs. a checkraise. These are the hands we check back, planning to continue on some turn cards. If Villain bets the turn, we will sometimes call or raise, and sometimes fold. If he checks, we sometimes bet for value, sometimes bluff, and sometimes check again.
- Finally, we put the rest of our hands in a category we call "air hands". We pick our bluffs from this category. The air hands that we don't bluff with are the hands we check back, planning to give up, but we might bluff some turns if Villain checks again.

The value and air categories are mostly easy to visualize and always easy to play, since our plan against a checkraise is made before we bet. But for the medium strong hands we make a distinction between hands that have outs and hands that don't. For example, both Q♥Q♦5♠3♦ and 9♠8♥7♦2♠ can be viewed as medium strong hands on a T♦6♣2♥ flop. The difference between them is that Q♥Q♦5♠3♦ is often the best hand on the flop, but has poor equity and poor playability against the hands that Villain call or checkraise. 9♠8♥7♦2♠ on the other hand is rarely best on the flop, but has decent equity and playability against the hands Villain calls or checkraises.

"Playability" here means how easy or hard the hand becomes to play on future streets. Playing a hand with few outs and no nut-outs against a check-raise, sets us up for guesswork on future streets, both when we improve and when we don't. But a hand that as at least some nut outs sets us up for knowing exactly where we are in the hand on some turn cards. For example, if we check back 9♠8♥7♦2♠ on a T♦6♣2♥ flop, we have nine outs to the nuts, and the hand becomes easy to play. If the turn is a blank, we only have bottom pair and a draw, and this is of course also an easy hand to play correctly.

But if we check back Q♥Q♦5♠3♦ on the same flop, we almost never improve. We could be ahead though, so it will be tempting to call a bet on the turn. If we do, we will sometimes be ahead and sometimes behind, but we don't know when we are ahead or behind. Every time we are guessing, our opponent is looking good. We want to avoid these situations.

Here is a simulation that illustrate the difference between these two medium strong hands. Let's give our out of position opponent a preflop flatting range that consists of the top 20% of hands, minus the top 5% (the hands he 3-bets). We calculate the equity for both Q♥Q♦5♠3♦ and 9♠8♥7♦2♠ against this range on a T♦6♣2♥ flop and get:

MISS PIC

MISS PIC

Against Villain's total range, Q♥Q♦5♠3♦ has much better equity than 9♠8♥7♦2♠, and our overpair is also a favorite against Villain's total range.

But this changes when we look at the range we get action from when we bet. Let's simply assume that Villain checkraises all sets, two pair and inside wrap straight draws (that is, all such combos that are also a part of his preflop flatting range). Now we get:

MISS PIC

MISS PIC

Q♥Q♦5♠3♦ was a significant favorite with 58% equity against the total range, but against the checkraising range it's a big underdog with only 32% equity. Furthermore, the hand is very difficult to play well on later streets, should we continue. 9♠8♥7♦2♠ goes from being a small underdog against the total range to being a bigger underdog against the checkraising range, but it has better equity than Q♥Q♦5♠3♦ and much better playability with 9 outs to the nuts.

We can interpret these results this way:

Q♥Q♦5♠3♦ is a hand we want to c-bet mainly to pick up the pots that are winnable on the flop. We saw in Part 12 that hands like this gain a lot from making Villain fold the hands that we are currently ahead of (since many of the hands he folds have decent equity against us). A c-bet therefore protects our vulnerable hand. Since we don't plan to continue against a checkraise, this type of bet is in principle a bluff.

Therefore, from now on we'll view c-betting with these hands as bluffs. Conceptually, we can think of them as "PLO air" where the value mostly comes from getting Villain to fold on the flop. But unlike our very worst air like Q♥8♠4♦3♥ on a T♦6♣2♥ flop, we will win some pots after getting called on the flops.

If he checks the turn, we can check back and try to get a cheap showdown, or we can bet again as a bluff. Regardless, after we get called on the flop a hand like Q♥Q♦5♠3♦ has more options than a hand like Q♥8♠4♦3♥ . We also have some options should we choose to check back the flop with Q♥Q♦5♠3♦, but we have exposed our weakness, and we can't call down if Villain bets the turn. It will generally be better for us to take the fold equity on the flop, and then use the showdown equity from our overpair more as a backup to fall back on should we get called.

With 9♠8♥7♦2♠ we have better equity against the hands that checkraise us, but we're still too much of an underdog to continue, so we have to bet-fold. But then we waste more equity and playability than we do with Q♥Q♦5♠3♦. 9♠8♥7♦2♠ is a hand that wants to play turns since we often improve to a hand that both has good equity and is easy to play correctly. And then we can make money. If we don't improve and Villain bets, we can float a turn bet (not necessarily, but we can), planning to win showdowns when we improve and sometimes bluff when we don't.

Since we don't want to bet-fold 9♠8♥7♦2♠, we'd rather put it in our check-back range than in our betting range. As we said in Part 13a, we have to make sure our check-back range doesn't contain only garbage hands like Q♥8♠4♦3♥, since this allows Villain to barrel a lot on future streets against our weak and easy-to-read range. He knows our range is full of air, and scary turn cards will be more scary for us than for him.

But if our check-back range contains many 9♠8♥7♦2♠ type hands, he needs to exercise some restraint. Now all turn cards can hit us hard and give us a nut hand. If he barrels mindlessly into our range, he will be punished severely when we are willing to play a big pot with him. So when you sit in position and weigh your options with these hands, don't think only about flop play in isolation, *also think about how you want to build your three ranges of value hands, medium check-back hands and air hands in order to make future streets profitable and easy to play well.*

Checking back hands with outs is our solution to the problem of being weak and easy to read after checking the flop. These hands are weak on the flop, but not always weak on the turn. They there fore protect our checking range, since they can hit any turn cards. Scary turn cards are therefor scare cards for Villain as well, and he can't automatically bet them. Keep in mind that we haven't proven mathematically that checking these hands is enough to keep Villain from exploiting us by bluffing the turn after we check the flop, but we have at the very least made it harder for him.

Let's also talk briefly about slowplay as a possible fix for this problem. We could put some of our very best hands in the check-back range as well, that is a perfectly god option. But slowplay is generally not a good strategy in PLO where most turn cards can give Villain either a better hand or a good draw to a better hand.

For example, if you have a naked top set with Q♠Q♦9♠3♣ on a Q♥7♦2♣ flop, almost 3/4 of the deck will make strong draws possible for Villain on the turn: A♥, A♦, A♣, K♥, K♦, K♣, J♥, J♦, J♣, T♥, T♦, T♣, 9♥, 9♦, 9♣, 8♥, 8♦, 8♣, 6♥, 6♦, 6♣, 5♥, 5♦, 5♣, 4♥, 4♦, 4♣, 3♥, 3♦, 3♣. If he calls a turn bet with one of these draws, he can make money on the river from a combination of valuebetting and bluffing.

As we saw in Part 12, we generally gain a lot in PLO when Villain folds away his equity on the flop, and therefore we rarely give free cards with our best hands. We bet them and hope Villain gives us action with hands that we beat, and we are rarely unhappy when we win the pot on the flop unless we are extremely strong (say, flopped quads or overfull). Valuebetting a lot also allows us to bluff a lot without becoming imbalanced.

Therefore, since we generally don't want to strengthen our check-back range with slowplayed monster hands, we use a check-back strategy with medium hands that have outs instead. SO checking a hand like A♦9♦8♠5♥ on a K♠T♣7♦ flop does two things for us: We don't risk having to bet-fold a hand that has some good outs, and we set ourselves up for sometimes turning the nuts after checking the flop.

So our c-bet/check strategy can be formulated as:

- Our value hands are the hands we bet, planning to continue against a checkraise, and where we expect to profit when getting checkraised or called.
- Our medium strong check-back hands are the hands a little too weak to continue against a checkraise, and that have some outs These are hands we check back, planning to play turns
- The rest of our hands makes up our air range, including "PLO air" type hands that are often best on the flop, but that don't have outs. We pick our bluffs from this range, starting with the "PLO air" hands

This is our starting point for defining a default c-betting strategy against good or unknown opponents. We want to protect ourselves against players that try to exploit us when we create "holes" in our strategies. Such holes can be created when we move away from balanced play in an attempt to exploit someone. An observant player can spot these holes and counter-exploit us. To protect ourselves, we can fall back on balanced play, according to the strength principle.

But we should keep in mind that our model (the AKQ game) was a simple 1-street model that did not include betting on future streets. Also, against players with big and easily exploitable leaks we don't want to play in a balanced manner. This might call for planning over more than one street.

For example, assume an opponent that plays straightforward and honest out of position, but he calls a lot with weak hands on the flop and turn. By doing so he protects himself against bluffs, and it seems we won't profit from moving away from balanced play in order to exploit him. If we c-bet bluff a lot, we will simply get called a lot, and we can't immediately exploit him that way.

However, if he folds most of his weak hands to a big river bet, we can profit from moving away from a balanced c-betting strategy and instead use a strategy where we bluff a lot more. To make this work, we need to bluff planning to continue to bluff a lot on future streets! Against such a player our simple and game-theory-based c-betting strategy is not the most profitable way to play, and it's not even close. By using the information available to us, we can design a more profitable strategy where we c-bet an overweight of air and perhaps also many medium strong hands that do well against the weak hands that call us.

Alternatively, we can drop all flop bluffing and only bet a wide value range, including our best medium hands. If you don't feel comfortable 3-barreling lots of air. this is a fine way to play a against a calling station. But if he allows you to build big pots and then steal them, you can really hammer on him.

Note that these examples don't say that a balanced c-betting strategy with cleanly defined value hands, medium check-back hands and air hands is a bad strategy against weak players. A balanced c-betting strategy will still be ok, but the more information we have about our opponent, the more we can use exploitive strategies that are tailor-made to punish his biggest mistakes.

Making such adjustments against specific opponents is something that should be included in our overall c-betting strategy. Let us therefore formulate a step-wise process for training good c-betting strategy:

### 13.2 C-betting strategy as a step-wise process

Here is our "curriculum" for training our understanding of c-betting strategy heads-up and in position:

#### 13.2.1 Define a fundamentally sound default model

This is what we have done so far. We have used the strength principle and decided to build three ranges:

- Value
- Check-back
- Air

#### 13.2.2 Train using the default model

Our next task is to build these ranges in practice, and we'll start training this skill later in this article. Where do we draw the lines between value hands, medium check-back hands and air? How much air should we bet relative to the number of value hands we have?

We can train our understanding of these ranges by generating random flops. We give ourselves a preflop raising range and Villain a preflop flatting range. Then we see how these ranges hit the flop and what we have to work with.

We use ProPokerTools to dissect our preflop range and divide our hands into value hands, medium check-back hands and air. We can use ProPokerTools' count function to count combos. When we have classified our hands, and we know how many hands are in each category, we can move on to thinking about balance.

We know how to play value hands (always c-bet and never fold) and medium check-back hands (always check back), so these ranges are straightforward to use. We'll also bluff some air, but not all air, since this makes us easily exploitable. So we need to find a reasonable balance between value and air. Then we bet the appropriate number of air combos, starting with PLO air and adding more air as needed.

We can solve the balance problem with a bit of math, principles from game theory, and ProPokerTools analysis. What we learn from this work is not meant to be memorized, since the ranges change when the flop and our preflop range changes. But by doing this work on various flop types and with different opening ranges, we will gradually build understanding through repetition.

#### 13.2.3 Design exploitive strategies against opponents with known leaks

When we have learned how to build and use reasonably balanced default ranges according to the strength principle, we have a strategic foundation to use against good, aggressive opponents and unknowns (if we choose to play balanced against them until we learn more about them). This will be our approximation of optimal c-betting strategy.

We remember that perfectly optimal play makes it impossible form our opponent to increase his EV by changing his strategy. If we use a close-to-optimal c-betting strategy, a good and aggressive opponent will not be able to exploit us, for example by checkraise-bluffing a lot. We have balanced ranges that ensure we don't fold to much or call too much, and there is nothing he can do to exploit us systematically. Of course we will never be able to find a perfectly optimal strategy in real poker (way too complicated to solve for), but we can always approximate such a strategy. Being close is good enough.

However, an optimal strategy is not designed to maximize profit, but to guarantee that nobody can exploit us. If we break even as a result, this a fine result from a game theory perspective. This brings us over to exploitive play, which is what really brings home the bacon.

To play exploitively against players with known weaknesses is equivalent to move away from optimal/balanced default play and instead play with extremely unbalanced strategies to pound on opponent mistakes. An obvious example is to c-bet any four cards as a bluff against a player that folds 2/3 of the time on the flop, never checkraises as a bluff, and never adjusts. You will print money by doing so, and even if he could exploit you back (by check-raise bluffing any four cards), he has chosen not to. So there is no need for you to play balanced, and you can hammer on him with the strategy that exploits his leak maximally, and that strategy is to bluff everything.

A note of caution: We'll see later that maximally exploitive play does not necessarily equate to maximally aggressive play. Against loose-passive players, maximally exploitive play typically means we drop all bluffing and only bet when we want (or at least don't mind) calls.

Our discussion of adjustments and exploitive play will come in Part 13c and 13d (we gather all articles about c-betting heads-up in position under the header Part 13x). Adapting to individual opponents naturally leads us to barreling (c-betting, planning to bet a lot on future streets when we get called). Against some players we can barrel a lot, for example passive players that call a lot early in the hand, but then give up easily on later streets. Against good and aggressive players we have to be more cautious though, and make sure we don't bluff too much, since they will pick up on that and punish us. And when we move away from generalizations about player types and over to using opponent-specific reads, we can design "surgical" plans for barreling that attacks hardest in spots where our opponent is weakest.

The rest of Part 13b will give an introduction to using our balanced default c-betting strategy in practice on a specific example flop. Then we continue with more training on various flops and with various preflop ranges in Part 13c. After that we move on to exploitive adjustments.

Before we get to work, we'll discuss a useful concept for building strong, defensive strategies:

### 13.3 The hypothetical opponent "Nemesis"

the player model "Nemesis" is a useful concept when we design balances strategies. Simply put, Nemesis is a hypothetical player that always exploits our leaks maximally.

Nemesis observes everything, remembers everything, and immediately knows which strategy to use in order to to exploit his opponents leaks hardest. If you have a leak in your game somewhere, Nemesis will always know about it and exploit it maximally. Here is an example

**Example 3.1 Imbalanced c-betting against Nemesis**  
\$100PLO 6-max

**Preflop**  
You (\$100) raise to \$3 with a top 50% open-range on the BTN, Nemesis (\$100) calls in the big blind. Based on what you have seen, his range for flatting a raise out of the blinds is top 20% minus top 5% (which he 3-bets). So he flats the best 15% of hands below the top 5% of hands.

**Flop:** 8♠8♣3♦ (\$6.50)
Nemesis (\$97) checks, and you have to think about how to play your flop range.

Let's first use standard low limit thinking against presumed weak and passive opponents. On a paired, rainbow flop there are few hands in Villain's range that he can play for value. Even if he includes all overpairs AA-QQ, he doesn't have enough value hands to defend sufficiently against c-bet bluffs. Le's quickly verify this for the range we have Nemesis:

We assume he checks all hands to us on the flop. The total number of combos in his range is then 33656:

MISS PIC

While the total number of overpair, trips, house and quads combos is 10835:

MISS PIC

So even if he defends all one pair hands down to QQxx, he won't be able to defend more than 10835/33656 =32% of the time. If you now make your standard 2/3 x pot c-bet (which we round to $4), you have an automatic profit, even if you never win the pot when checkraised or called:

EV (c-bet bluff)  
=0.68($6.50) + 0.32(-$4)  
=+$3.14

You have a massively profitable c-bet with any four cards, even against a player who will defend with a fair amount of one pair hands. Assuming he will not checkraise bluff or call a flop bet with a weak hand as a float, planning to bluff turn cards.

C-bet bluffing a lot in position on such flops is standard fare in PLO. Against opponents that are weak and passive on average, an assumption you can make at the low limits, you might get away with c-betting your entire range here and print money from fold equity. Note that you might want to use smaller bet sizing in order to exploit even harder. If you bet $3.50 (a little less than 1/2 pot), your EV increases to $3.30:

EV (c-bet bluff)  
=0.68($6.50) + 0.32(-$3.5)  
=+$3.30

However, there is a problem with this plan against Nemesis: Nemesis does not defend this way against our c-bet!

If you try to c-bet any four cards as a bluff against Nemesis, what will he do? Checkraise bluff a bit? No, his response will be to chekcraise bluff any four cards in order to exploit the gaping hole you have created in your strategy by assuming he will play passively and poorly.

Nemesis, who per definition will know that you are trying to exploit him with any-four-cards c-betting, can do the same analysis of our range that we just did for his. He knows that our preflop range is top 50%, and that we c-bet all of it. If he makes the same assumptions about the hands we defend against a checkraise (QQxx and better), he gets:

We have 110623 combos in our c-betting range:

MISS PIC

And we only defend 33525 of them against a checkraise:

MISS PIC

So if he checkraises as a bluff, he will only get caught 33525/110623 =30% of the time. He has a 70% success rate and a massively profitable checkraise bluff. If our c-bet is $4 and he checkraises to \$12 (around 1/2 pot, which should work well on a very dry flop), he risks $12 to win \$6.50 + $4 =\$10.50.

His pot-odds on a bluff are then 10.50 : 12, and he has an automatic profit if he succeeds more than 12/(10.50 + 12) =53%. And we're folding a staggering 70% of the time. His EV for a checkraise bluff is then:

EV (c/r bluff)  
=0.70($10) + 0.30(-$11)  
=+\$3.70

This using the same assumptions that we used previously, namely that his victim (us) does not re-bluff with an air 3-bet, or call as a float with a weak hand, planning to bluff turns. But we had no such plans when we c-bet the flop with our entire range, since we did this in order to exploit a presumed weak opponent that would only defend when he had a hand. But instead we ran into Nemesis and god counter-exploited maximally. Tough luck!

#### 13.3.2 What planning against Nemesis does for us

Nemesis is a player that can not be exploited, but he will always exploit us maximally. If we fold just a little bit more than we should, he bluffs every time. If we try to exploit his bluffs by playing back with weaker value hands and aggressive re-bluffing, he switches to a never-bluff strategy and instead punishes us with his value hands. No matter how we twist and turn, Nemesis will always be one step ahead.

Since we can't outplay or exploit Nemesis, he forces us to think about how to defend against him. If we make it a habit to always think about the consequences of unbalanced play, we can eliminate many leaks (actual or potential ones) from our game.

A big change in mindset that you need to make when you move up from the low limits to the mid limits is that now you need to defend yourself against many opponents that pay attention to what you do. They will sniff out your big leaks and hammer them hard. The standard assumptions about weak opponent play that work well at the small stakes will not work well here. Your standard assumptions should take into account the need for defense against opponent that tend to play well on average.

Within the field of game theory, using the Nemesis player model provides us with an answer to the following question: What is the most profitable strategy to use against an opponent that will maximally exploit our strategy, whichever one we use? When we have maximized our EV against Nemesis, so that he no longer can increase his EV by changing his strategy, we have reached optimal play. This will sometimes mean we play with EV =0, and this is fine, if the alternative is to get exploited and play with EV < 0.

This is the reason we have used AKQ game as a starting model of optimal c-betting on the flop. We want to structure our thinking around c-betting heads-up and in position so that we have a good default strategy to use against Nemesis (whom we luckily never face in actual play) and players like him.

We use the insight (the optimal solution) from the simple AKQ game as our starting point, and we have seen that this gives us three flop ranges: Value hands, medium check-back hands and air. The next we have to work out is the relative size of these three ranges for real poker games.

#### 13.3.3 Balance against mot Nemesis

In the 1-street model provided by the AKQ game we were able to calculate an exact optimal value/bluff ratio of 5 : 2 for the c-bettor in position. Here the value hands were always the nuts, while the bluffs never won when called. Using this ratio we bluff 2 times for every 5 + 2 =7 bets. Then 2/7 =28% of our c-bets are bluffs, while the remaining 72% are valuebets.

This is a good model for river play where hand values are static. You either have the winning hand, or you don't and it won't change. But the model does not account for changing hand values, which is the case when we c-bet the flop with cards to cone. Now even the weakest hands have some probability of improving to the best hand. Also the AKQ model did not allow checkraising, so we have to take this into account when balancing our c-betting ranges in real PLO.

Let's begin by defining some standard assumptions to use in our model:

- Starting stacks are 100 bb
- We openraise to 3 bb preflop and get called by the big blind. The pot is now 6.5 bb
- We c-bet 4 bb (about 2/3 pot) as default on the flop
- When our opponent decides to checkraise, he uses a bet sizing that sets him up for betting the same fraction of the pot on all streets, where the final bet (if he makes it) is a shove all-in

So our opponent checkraises to a certain fraction x% of the pot on the flop. If we call and he elects to bet the turn, he will bet the same fraction x% of the pot. If he gets called again and elects to bet the river, he will shove. As a result of his planning earlier in the hand, his river shove ends up being the same fraction x% of the pot.

Thus, the requirement that each bet or raise should be the same fraction of the pot with the final bet being a shove all in, dictates his checkraise-sizing on the flop. We now find this size and use it in order to balance our c-betting range.

Here is an approximate bet sizing plan:

- Villain checkraises to 14 bb (a little over 2/3 pot) on the flop and get called. The pot is now 34.5 bb with 83 bb behind.
- Villain bets 24 bb (a little over 2/3 pot) into 34.5 bb on the turn and get called. The pot is now 82.5 bb with 59 bb behind.
- Villain shoves 59 bb (a little over 2/3 pot) into 82.55 bb on the river

A 14/24/59 bb bet sizing thus sets him up for maneuvering his stack in with a ~2/3 pot bet or raise on every street. In our model we then c-bet 4 bb into a 6.5 bb pot, and get checkraised to 14 bb. We now assume we're up against Nemesis, so that all mistakes we do against his checkraise will be maximally exploited.

We begin by observing that Nemesis is giving himself pot-odds of 10.5 : 14 on a checkraise bluff. Therefore, if he succeeds more than 14/(10.5 + 14) =57% of the time, he has an automatic profit from checkraising any four cards as a bluff!. We can't allow him to print money like that, so we can't fold more than 57% of the time. We conclude that we have to be prepared to 3-bet or call the checkraise with 100 - 57 =43% of the hands we choose to c-bet.

"But wait a minute" I can hear some of the readers think. Can't we plan on playing tighter against the checkraise, and instead lure him to spew off chips against our best hands on later streets? No, not against Nemesis. An overly aggressive player that bluffs way too much on the flop will often continue to spew chips on the flop. Such a player will "exploit himself" by giving us premium value for our best hands, and then we don't mind him picking a few more small pots on the flop than he should be allowed to. But Nemesis knows when we are trying to trap him, and he escapes by giving up his bluffs on the turn when we call the flop with our best hands.

It's important to realize that when we're giving an opponent an opportunity for automatic profit, even if he should decide to check-fold the nuts on the turn, we are clearly doing something wrong. We either need to defend our c-betting range correctly on the flop, or c-bet a stronger range that we are willing to defend correctly.

Also note that since we sometimes call the checkraise instead of 3-betting, his checkraise bluffs will sometimes get to see the turn. If he has chosen his bluffing hands from the best of his weakest hands (hands like like gutshots + backdoor combos) that are too weak to check-call but that have some outs, he will sometimes improve to the best hand on the turn with a hand that would have folded to a 3-bet.

Winning a few extra pots by getting to see the turn with a bluff is called "freerolling turn cards". Because of this a 43% defense against his checkraises is not quite enough. We have to defend a bit more, so let's make life simple by saying that in order to play balanced against Nemesis, we must be willing to defend around 50% of our c-bets when he checkraises.

We conclude that around half our hands need to be value hands that (hands we bet/3-bet or bet/call) while the other half is bluffs that we bet/fold. Note that when our bluffs get called instead of checkraised, we are the ones doing the freerolling of turn cards.

### 13.4 Training a balanced default c-betting strategy

We now return to Example 3.1 and work our how our value range, medium check-back range and air range can be built in practice when we try to play in a balanced manner. IN this example we will keep our assumptions simple and focus on the balance part.

We'll view this example as an initial "naive" attempt to build a strong and balanced default strategy. We will build value and bluff ranges with the correct balance, but we will not be particularly concerned about putting every hand in the best range when we have a close decision (some hand can be borderline between value and check-back or check-back and bluff). Then we'll look more closely at the content of each range in Part 13c.

#### 13.4.1 Balanced c-betting against Nemesis

\$100PLO 6-max

**Preflop**  
You (\$100) raise to \$3 with a top 50% open-range on the BTN, Nemesis (\$100) calls in the big blind. Based on what you have seen, his range for flatting a raise out of the blinds is top 20% minus top 5% (which he 3-bets). So he flats the best 15% of hands below the top 5% of hands.

**Flop:** 8♠8♣3♦ (\$6.50)
Nemesis (\$97) checks, and you have to think about how to play your flop range.

#### 13.4.2 Value hands

Let's begin by defining our value hands in the simplest possible way. Obviously we can bet quads, full houses and trips without planning to bet-fold. We also assume that we bet our best overpairs AAxx-QQxx planning to call a checkraise. Keep in mind that we are assuming an opponent that will sometimes checkraise bluff (Nemesis will) so that we need to be willing to defend more hands than you might be used to from low limit play. But we will start the job of extracting ourselves from our overpairs on the turn, and we don't plan to call future bets with all hands that call the checkraise.

Note that we are generalizing plenty here. In practice we should be more sophisticated, and we should ensure we don't end up with a weak checking range. One way to move more equity into the checking range is to put AAxx there instead of bet-calling it. The same argument can be made for AKKx and AKQQ, that are overpairs protected against overcards on the turn (giving a free card to Villain is unlikely to hurt us).

AAxx, AKKx and AKQQ are examples of hands that can be checked back on the flop, planning to play turns and the same goes for low trips. All of these hands are way ahead/way behind type hands where giving a free card is unlikely to help Villain pull ahead. We remember from Part 12 that we are rarely way ahead/way behind in PLO, but this is one of the flops where we are close.

Another adjustment we could make is to not bet-call all overpairs we elect to bet, but fold the weakest ones like the worst QQxx combos. But all of this will be discussed more thoroughly in Part 13c. For now, we focus on balance.

We have already chosen our 1 : 1 value/bluff-ratio for the hands we bet, but there is another opportunity to introduce balance on this type of extremely dry flop. To avoid giving away a lot of information on a very dry flop (no draws here) we can choose to cal the checkraise with all hands we defend with. Because if we don't, we end up 3-betting our strongest value hands and calling with our weakest ones. This sets us up for the same dilemma we faced initially when designing a c-betting strategy, namely that that we expose our range as weak when we don't take an aggressive action.

On a draw-heavy flop this is less of a problem, since we we can call the checkraise with draws that hit a lot of turn cards, so Villain can't automatically assume we are weak on the turn after calling the checkraise with a weak range. But on dry flops like this one our weakest value hands have very few outs. This allows Villain to barrel us effectively on the turn and river, since it will be hard for us to defend with a range of mostly one pair hands.

We can solve this dry-flop-problem by defending against the checkraise with only a bet/call range. We now let Villain freeroll turns with all his bluffs, but that's not a big problem on a flop where he has few outs. We therefore bet the flop with all hands QQxx or better, and then call a checkraise with all of them.

Next step is to count how many value hands we have and how big a % they make up of our total flop. Then we know how many bluff combos we need to use in order to stay balanced with a 1 : 1 value/bluff ration, and we also know how many % of our total flop range we end up c-betting. Then our checking range, which is a mix of our medium check-back hands and our pure air hands, is everything else.

**Total range on the flop**  

MISS PIC

110623 combos

**Quads/house**  

MISS PIC

2037 combos and 2037/110623 =1.8% of the total flop range

**Trips**  

MISS PIC

15372 combos and 15372/110623 =13.9% of the total flop range. Note that we have eliminated all the 8xxx-combos that are also quads. or full houses, since these were counted previously.

**Overpairs AAxx-QQxx**  

MISS PIC

16116 combos and 16116/110623 =14.6% of the total flop range. And we have eliminated the overpairs that also have hit trips/houses/quads.

We now have:

**Total number of value combos**  
2037 + 15372 + 16116 =33525 combos.

This makes up 33525/110623 =30% of our total flop range.

#### 13.4.3 Bluffs

We should bet/fold the same number of air hands for a 1 : 1 balance in our c-betting range. We begin with the "PLO air" hands. The first candidates are the weak overpairs that are often best on the flop, but not strong enough to check back and play turns (lots of overcards can come). Now you might be wondering why can't simply bet/call them, since we beat all of Villains bluffs, and it's his bluffs we are trying to defend against when we call one pair hands anyway, so isn't one bluffcatcher just as good as another=

This would be true on the river where hand values are static, but not on future streets where hand values are dynamic and there is future betting to be done. Defending with lots of bluffcatchers on the flop sets us up for lots of tricky decisions on later streets with hands that have little playability. We want to defend just enough against checkraises to stay unexploitable, but we are not trying to punish Villain for bluffing, keep this in mind. So we simply have draw the line somewhere reasonable, and in this example we use QQxx as the cutoff hand for bet-calling.

Then we add the rest of our one pair hands: 77xx-44xx, 22xx and bottom pair. Hand combos that have already been counted as value hands are of course eliminated.

**Pairs JJxx-99xx, 77xx-44xx, 22xx, 3xxx**  

MISS PIC

29238 combos and 29238/110623 =26% of all hands.

We see that we find almost all of the 30% of bluffs that we need in the one pair hierarchy. The remaining 4% we pick from the best backdoor straight combos like J♠T♠7♥2♦. These hands have little equity and playability against the hands Nemesis calls and checkraises with, but the times he calls, we will get to the turn with a little bit of equity. Sometimes we improve to a draw that we can use for semibluffing those times Nemesis checks, or we can take a free card and hope to draw out for free.

**BD draws**  

MISS PIC

4360 combos and 4360/110623 =4% of all hands. This gives us all the bluffs we need, and we get:

**Total number of bluff combos**  
29238 + 4360 =33598 combos.

This is 33598/110623 =30% of our total flop range, and balances our value hands in a 1 : 1 ratio.

So we bluff all remaining one pair combos JJxx-99xx, 77xx-44xx, 22xx, 3xxx and the best remaining backdoor straight combos JT9x,T97x,976x. Hands with little equity against the hands that give us action, but they can win some pots those times we get called.

#### 13.4.4 Check-back range

All hands not counted as value hands or bluffs, per definition makes up our checking range. This range is a mix of medium type hands that have some outs (for example overcard hands like AKQJ) and worthless air like K♠9♠5♥:4（原书笔误） that we elected not to bluff, since we had better hands to bluff with.

We immediately see that our initial naive attempt at building ranges gave us the desired value/bluff ration with reasonable hands on both these ranges, but we ended up with a checking range that is very weak. All hands one pair or better were used as value hands or bluffs, and our best checking hands are overcard hands that in the best case can pick up a pair on the turn.

Hands like AKQJ will often be ahead on the turn after spiking a pair, and we can then elect to call a turn bet and then play the river. But overall our 40% checking range is very weak and difficult to play on the turn against a good and aggressive player that will put pressure on us. Of course he can't know in practice that we haven’t checked the flop with some good hands as well, but when we are assuming a Nemesis opponent, we have to assume we will get exploited.

So we need to fix this weakness in Part 13c and construct c-betting/checking ranges that are not only balanced with respect to the number of combos, but that also takes into account balance and playability on future streets.

We have however protected ourselves against any-four-cards checkraise bluffing on the flop. We bet a range of value hands and bluffs in a 1 : 1 ration, and Villain gets his checkraise called 50% of the time. Based on the pot-odds he gets on a bluff, he can't now checkraise any four cards with automatic profit. Then our next step is to keep the balance, but tweak our ranges a bit so that they play better.

### 13.5 Summary

In this article we have continued our discussion of balanced strategy for c-betting heads-up in position. We introduced the hypothetical player "Nemesis" that always exploits our mistakes maximally. Then we built a c-betting strategy against him on a very dry 8 8 3 flop with a balanced value/bluff ratio.

We built our strategy using a naive approach with simple assumptions and many generalizations. We focused on balance, and not the detailed content of our ranges. In the next article we'll continue with this example and tweak our ranges until we have both balance and a checking range that plays well on later streets. Then we'll repeat the procedure on other types of flops.
