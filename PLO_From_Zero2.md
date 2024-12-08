## 目录
[第 2 部分：翻牌前游戏 I](#第-2-部分翻牌前游戏-i)
- [2.1 简介](#21-简介)
- [2.2 我们的总体 PLO 核心策略](#22-我们的总体-plo-核心策略)
- [2.3 起手牌强度的组成要素](#23-起手牌强度的组成要素)
    - [2.3.1 高牌强度](#231-高牌强度)
    - [2.3.2 顺子强度（连接性）](#232-顺子强度连接性)
    - [2.3.3 同花强度（花色）](#233-同花强度花色)
    - [2.3.4 组成坚果牌的能力（“坚果潜力”）](#234-组成坚果牌的能力坚果潜力)
    - [2.3.5 什么样的 PLO 起手牌才是好的？](#235-什么样的-plo-起手牌才是好的)
    - [2.3.6 摊牌权益与偷牌权益](#236-摊牌权益与偷牌权益)
- [2.4 根据结构对起手牌进行分类](#24-根据结构对起手牌进行分类)
    - [2.4.1 大牌和 A 高百老汇包牌](#241-大牌和-a-高百老汇包牌)
    - [2.4.2 顺子牌](#242-顺子牌)
    - [2.4.3 A 同花牌](#243-a-同花牌)
    - [2.4.4 对子 + 牌](#244-对子--牌)
    - [2.4.5 AA](#245-aa)
    - [2.4.6 边缘牌](#246-边缘牌)     
- [2.5 根据牌力对起手牌进行分类](#25-根据牌力对起手牌进行分类)
    - [2.5.1 优质牌](#251-优质牌)
    - [2.5.2 投机牌](#252-投机牌)
    - [2.5.3 边缘牌](#253-边缘牌)
    - [2.5.4 垃圾牌](#254-垃圾牌)
- [2.6 起手牌分类总结](#26-起手牌分类总结)
- [2.7 翻牌前玩法的一些宏观原则](#27-翻牌前玩法的一些宏观原则)
    - [2.7.1 除非您有其他理由，否则请始终进行加注打开底池](#271-除非您有其他理由否则请始终进行加注打开底池)
    - [2.7.2 除非您有其他理由，否则在翻牌前下注和加注时下注底池](#272-除非您有其他理由否则在翻牌前下注和加注时下注底池)
    - [2.7.3 小心在不利位置建立大底池，尤其是持有投机性起手牌时](#273-小心在不利位置建立大底池尤其是持有投机性起手牌时)
    - [2.7.4 小心在不利位置打非坚果起手牌](#274-小心在不利位置打非坚果起手牌)
    - [2.7.5 除非你能将大部分筹码投入底池，否则在翻牌前用 AAxx 进行大额加注时要小心](275-除非你能将大部分筹码投入底池否则在翻牌前用-aaxx-进行大额加注时要小心)
    - [2.7.6 在加注和再加注后，通常会弃掉 Axxx 类型的牌](#276-在加注和再加注后通常会弃掉-axxx-类型的牌)
    - [2.7.7 不要害怕用位置上的优质起手牌建立大底池](#277-不要害怕用位置上的优质起手牌建立大底池)
    - [2.7.8 如有疑问，在位置不佳时更倾向于弃牌](#278-如有疑问在位置不佳时更倾向于弃牌)
    - [2.7.9 如有疑问，请记住，翻牌前弃牌可玩牌的代价很低](#279-如有疑问请记住翻牌前弃牌可玩牌的代价很低)
- [2.8 翻牌前打法的一些例子](#28-翻牌前打法的一些例子)
- [2.9 总结](#29-总结)

## 第 2 部分：翻牌前游戏 I

### 2.1 简介

在第 2 部分中，我们开始研究 PLO 策略，从起手牌和翻牌前策略开始。PLO 翻牌前策略非常复杂，我们计划至少写两篇文章（第 2 部分和第 3 部分）来讨论这个主题。

第 2 部分从定义我们的整体 PLO 核心策略开始。核心策略是一个“大局”理念，它告诉我们在决定玩一手牌时我们试图实现什么。接下来，我们将讨论起手牌强度，以及定义好的 PLO 起手牌的属性。然后，我们将定义起手牌的类别并根据结构和质量对它们进行分类。（我们将使用 Jeff Hwang 在他的著作《底池限注奥马哈扑克：大局策略》中定义的起手牌类别）。在整篇文章中，我们将通过示例来说明该理论。

这种对起手牌的系统处理，连同整体核心策略，将是我们开发一个坚实的、基于价值的 PLO 翻牌前策略的起点。稍后，我们将添加更高级的翻牌前概念（例如，加注投机手牌以隔离、3-bet、SPR 筹码 / 底池比率对于翻牌前玩法的重要性、翻牌权益分布对于不同类型的起手牌玩法的重要性），我们将在第 3 部分详细讨论这些主题。

当我们完成对起手牌的讨论后，下一步（第 3 部分）将是更详细地研究翻牌前策略和翻牌后策略之间的联系，我们将看到它们密切相关。PLO 首先是一款翻牌后游戏，一个重要的翻牌前策略概念是，我们的翻牌前策略的主要目标是创造有利可图的翻牌后场景。这是一个非常重要的概念，我们将在本系列文章中反复讨论。当我们做出翻牌前决定时，我们会始终牢记这一点，并且养成在将第一枚筹码投入底池之前开始提前计划的习惯。

例如，我们不会这样想：

*我在按钮位置 ![Jh](p/Jh.jpg) ![Th](p/Th.jpg) ![9s](p/9s.jpg) ![8c](p/8c.jpg) 加注一个溜入者，因为这是一手好牌。*

相反，我们会提前预想，更多地这样思考：

*我在按钮位置 ![Jh](p/Jh.jpg) ![Th](p/Th.jpg) ![9s](p/9s.jpg) ![8c](p/8c.jpg) 加注一个溜入者，因为我想隔离他，并准备在有位置的情况下玩单挑底池，这手好牌经常与翻牌联系在一起，让我有足够的牌继续玩那些我没有在翻牌前或翻牌持续下注（c-bet） 中赢得底池。*

让我们从简单易记的东西开始，我们在第 2 部分中要做的“技术”工作的目标是概览 PLO 起手牌结构，并建立我们对哪些牌强哪些牌弱的理解。我们还将定义一些关于如何在翻牌前玩不同类型的起手牌的简单指南，以便我们有一个起点。

在我看来，这些理论背景材料对于理解 PLO 起手牌强度与其他游戏（例如德州扑克）中的起手牌强度有何不同以及理解 PLO 翻牌前策略对我们有什么作用是必要的。对于新的 PLO 玩家来说，在他们建立自己对游戏的理解时，有一些具体的翻牌前玩法指导方针（训练方法）也很重要。当这个简单的理论框架到位后，我们将在第 3 部分中继续讨论更高级的翻牌前概念。

在我们开始讨论 PLO 策略之前，我想声明一个“免责声明”：

*PLO 是一种有很大空间可以改变游戏风格的游戏，只要我们使用的策略彼此一致、平衡且基于合理的扑克逻辑。我并不声称我在本系列文章中提出的策略是唯一的策略，也不声称它们一定是最好的策略，我也不想为如何玩翻牌前和翻牌后提供“千篇一律的建议”。我写本系列文章的目的是描述扑克的良好思维过程，特别是 PLO，我想向初学者展示他在开发自己的游戏时应该考虑什么。*

那么让我们开始吧：

### 2.2 我们的总体 PLO 核心策略

我们的总体 PLO 核心策略围绕两个非常重要的概念，这两个概念都基于我们在翻牌前参与一手牌时试图实现的目标。PLO 首先是翻牌后游戏，最重要的决定通常都是在那里做出的。

简而言之，PLO 翻牌后游戏主要是：
1. 下注坚果牌以获得价值，半诈唬强坚果牌听牌（draw）。
2. 在对手较弱时利用位置偷取底池，并在我们拥有非坚果牌利用位置控制底池大小并希望将其带到摊牌。

由此可见，我们希望：

1. 起手牌有可能翻牌中坚果牌或坚果牌听牌潜力的牌
2. 在有位置优势上玩

这是我们的整体 PLO 核心策略，可以归结为两句话。我们会对起手牌挑剔，也会对位置挑剔。我们核心策略的主要目标是在翻牌后建立强手牌并用它们赢得摊牌。此外，当没有人有强手牌时，我们将利用位置以可控的方式赢得小底池和中等大底池。这意味着利用位置来控制底池大小，用我们下注很难获得价值的牌通过诈唬和半诈唬来偷取底池。

这听起来简单吗？有效的 PLO ABC 扑克并不比这复杂得多，如果你始终牢记这两个概念，你将在最低限额下比大多数对手更具优势。

因此，我们 PLO 战略之旅的第一站是学习如何评估 PLO 起手牌的质量，大部分内容都将致力于此。我们还需要对位置以及如何利用位置有基本的了解。

位置始终是任何奥马哈翻牌前决策的重要组成部分。每位玩家翻牌前都会得到 4 张牌，这意味着任何玩家都可以随时可靠地代表任何手牌。几乎无论翻牌结构如何，任何玩家（包括您）都可能大力击中翻牌并拿到坚果或近坚果牌。

这使得在不利位置时很难玩非坚果牌。原因是，你后面的某个人很可能拿着一手好牌坐在那里，或者计划代表一手好牌，并诈唬把你赶出底池。

当你在不利位置时，手里拿着一手可能是最好的牌，但不是坚果牌，面对对手你被迫在下注（他们可能会打败你）和过牌并给他们一张可能有价值的免费牌之间做出选择。通过在不利位置过牌弱牌，你也为对手提供了一个诈唬把你赶出底池的机会（因为你过牌暴露了弱点）。

但在有利位置，你可以在行动之前看到对手在做什么，这使得你更容易为你的非坚果牌找到一个好的游戏计划。如果每个人都过牌，你通常可以下注（为了价值或诈唬）那些你本来必须在不利位置过牌的牌。当您面前有人下注时，您现在可以更好地控制底池增长的速度。您可以用您的强牌加注，用喜欢在小或中等大小的底池中摊牌的牌跟注，用最弱的牌弃牌（或诈唬）。

在我们翻牌前参与一手牌之前，我们应该考虑我们最有可能遇到的翻牌后情景，以及它们通常会如何进行。弱起手牌通常比强起手牌击中翻牌的次数更少，击中大牌也更少。因此，弱起手牌在有利位置上比在不利位置上玩得更好，因为有利位置使得在翻牌后更容易玩非坚果牌和有利可图的听牌。

位置优势的另一个原因是，位置优势让我们能够更好地控制翻牌前投入底池的资金大小。进入底池后，剩余的玩家数量减少，后面对手加注的风险也随之减小。

因此，我们可以在按钮位置玩各种弱起手牌，尤其是当前面对手盖牌给我们时。但在位置不利时，我们应该专注于能够翻牌拿到坚果牌或强坚果牌听牌的起手牌。

作为开始对起手牌进行分类之前的热身，以下是基于起手牌质量和位置的两个翻牌前决策示例。请注意，在这两个示例中，我们都试图向前看，并将翻牌前和翻牌后玩法结合起来。这种手牌规划形式是我们将反复讨论的内容：

**示例 2.2.1**

您坐在满员的 6-max $5PLO 的 UTG 位置，看着 ![Qh](p/Qh.jpg) ![Qs](p/Qs.jpg) ![8d](p/8d.jpg) ![2c](p/2c.jpg) 。对手玩法比较松散，有时翻牌前加注和 3-bet。通常，有 3 名或更多玩家看到翻牌。您有 100 BB 筹码，而对手都有 80 BB 或更多。您应该玩这手牌还是弃牌？为什么？

这是一手经常让初学者陷入困境的起手牌（类别：高对子和较差的边牌）。经验丰富的玩家通常会毫不后悔地从 UTG 弃牌。这手牌几乎没有坚果潜力，因为我们需要在不连接的翻牌（例如 ![Qc](p/Qc.jpg) ![8d](p/8d.jpg) ![3c](p/3c.jpg) ）上翻出顶三条才能拥有坚果，而这种情况很少发生。

让我们首先列出新手 PLO 玩家选择参与翻牌前加注的一些常见原因。

- 有时我们会赢得盲注，这很好。
- 有时我们会在翻牌前被跟注，但在翻牌时用持续下注赢得底池。
- 有时我们会翻牌拿到暗三条，这通常会赢得摊牌。
- 我们的对手很松而且筹码很深，所以我们可以指望有时当我们翻牌拿到暗三条时赢得一个大底池。

因此，我们的初学者游戏计划是要么偷盲注，要么在翻牌圈用持续下注偷走底池，要么翻牌圈拿到三条并在摊牌时赢得大底池。以下是与此计划相关的一些问题：

- 在这种情况下，我们很少会赢下盲注，而且我们通常会被一个或几个对手跟注。
- 我们可能会被 3-bet 并被迫弃牌（我们太弱，无法在不利位置跟注 3-bet）。
- 不利位置使得我们错过翻牌时很难在翻牌后偷走底池。这也使得我们更难在拿到我们中牌时实现利润最大化。
- 即使我们翻牌圈拿到三条，我们也经常会在奥马哈游戏中输掉。这几乎总是代价高昂。
- 我们的起手牌通常翻牌圈拿到三条或什么都没有，而且我们没有可以帮助我们的后备力量。因此，我们通常在翻牌时没有牌 / 没有听牌，也没有理由继续玩这手牌。由于我们处于不利位置，而且这是奥马哈（任何人都可能随时拥有任何牌），因此，如果试图用一手无用的牌对几个对手（我们想赢）进行持续下注来偷走底池，那么风险很大。

如果我们加注，就会出现以下典型情况：

**Preflop**

我们（$5）用 ![Qh](p/Qh.jpg) ![Qs](p/Qs.jpg) ![8d](p/8d.jpg) ![2c](p/2c.jpg) 加注到 $0.17 、MP（$6.20）跟注、CO（$8.95）跟注、按钮（$5）跟注。

**Flop:** ![7s](p/7s.jpg) ![Ks](p/Ks.jpg) ![6c](p/6c.jpg) ($0.75)
现在怎么办？

通过翻牌前用 ![Qh](p/Qh.jpg) ![Qs](p/Qs.jpg) ![8d](p/8d.jpg) ![2c](p/2c.jpg) 加注，在当前的条件下，我们准备好在不利位置用没有好的手牌和听牌和对手打翻牌，而这正是发生的事情。唯一合理的选择是过牌，计划如果有人下注就弃牌（在没有好的手牌/没有听牌的情况下自动在翻牌圈下注对抗几个对手，这相当于烧钱）。

问题是我们的牌 ![Qh](p/Qh.jpg) ![Qs](p/Qs.jpg) ![8d](p/8d.jpg) ![2c](p/2c.jpg) 很少能翻出一手好牌来继续翻牌。因此，如果我们希望要在多人底池玩中牌才继续的扑克（我们必须在这么设想），我们宁愿便宜地看翻牌以保留隐含赔率。

对于这种牌，占据有利位置也会是一大优势。占据有利位置可以降低我们后面被加注的风险（因为剩下的对手更少），当我们拿到牌时，最大化我们的利润会更容易，而且我们会在翻牌后获得更多的偷牌机会（每个人都向我们过牌的时候）。用这种牌在不利位置打一个大底池，我们只是给了对手更多的筹码来在翻牌后从我们这里偷牌。总的来说，他们翻牌会比我们更容易击中更大的牌，而大多数时候我们只会过牌 - 弃牌。

因此，如果我们主要是为了中三条价值而打这手牌，我们希望在翻牌前便宜地打这手牌，我们希望在有利位置打这手牌。例如，如果我们在前面一两个对手溜入后处于按钮位置，我们本可以在隐含赔率良好的情况下跟注希望中三条。但是如果对手弃牌到我们，我们可以在按钮位置加注，因为在这种情况下，无论是翻牌前还是翻牌后持续下注，我们可以经常偷走底池。（如果我们预计会偷走很多底池，那么用弱牌加注是可以的，这样我们就不必仅从玩成手牌扑克中获取价值）。

实战是，这手牌的剩余部分通常大致如下：

**Flop:** ![7s](p/7s.jpg) ![Ks](p/Ks.jpg) ![6c](p/6c.jpg) （$0.75）
您（$4.83）过牌，MP（$6.03）过牌，CO（$8.78）过牌，按钮（$4.83）下注 $0.75，您勉强弃牌，心里暗自怀疑自己在某个地方做错了什么。

**示例 2.2.2**

您坐在满员的 6-max $5PLO 桌的按钮位置。UTG（$5）加注到 $0.17，MP（$6.20）跟注，CO（$8.95）跟注，您（$5）非常感兴趣地看着 ![As](p/As.jpg) ![9s](p/9s.jpg) ![8c](p/8c.jpg) ![7h](p/7h.jpg) 。您的计划是什么？

您有一手接近优质起手牌（类别：A 同花带连牌），具有足够的坚果潜力（坚果同花/坚果顺子），许多翻牌都会给您一手足够好的牌来继续。如果对手弃牌给您，您会自动加注，在对手溜入后您自动会加注。但底池已经在您之前加注了，因此您的选择是跟注或 3-bet。
>rundown在奥马哈里指 3 - 4 张相关的顺子连牌，简称连牌。在德州扑克里 2 张相连的牌我们称为连张。
>
在这种情况下，跟注似乎是一个不错的计划，因为：

您准备在多人底池中用“坚果潜力”的优质手牌、位置和良好的隐含赔率玩中牌赢下的扑克（这始终是一个好的情况）。请注意，手中没有主动权将使您更容易利用对手的弱点。翻牌后。如果每个人都在翻牌时向您过牌，那么他们很可能真的很弱，而不是在您翻牌前 3-bet 后向您过牌。这将使您更容易识别翻牌后良好的偷牌机会。

底池已经是多人的了，所以 3-bet 可能不会让你在没有摊牌的情况下更容易获胜。你可以预期在翻牌前会被几个对手跟注，因为其中 3 个已经跟注加注了。

通过跟注，你邀请盲注玩家用各种半垃圾牌（看似可玩，但非常弱且不疯狂的牌，如 ![Ks](p/Ks.jpg) ![7d](p/7d.jpg) ![5s](p/5s.jpg) ![4h](p/4h.jpg)）跟注。这让他们在翻牌后面对像我们这样的优质牌时陷入大麻烦。他们可能认为他们获得了很好的底池赔率和隐含赔率，但实际上，他们让自己用通常排在第二位的牌和听牌来玩大底池。例如，当他们拿到非坚果同花时，最终支付了坚果同花。

通过 3-bet，你将被 AAxx 4-bet，这意味着你将不得不放弃一手有很大潜力的牌。如果加注者可能有 AAxx（有关此主题的更多信息，请参见第 3 部分），我们的牌不够强，筹码也不够深，无法跟注底池大小的 4-bet。

因此，我们跟注翻牌前的加注，计划在翻牌后主要玩中牌赢下的扑克游戏。当对手在翻牌后过牌给我们，告诉我们他们很弱时，我们也可能偶尔偷走一个底池。

细心的读者会注意到，到目前为止，本例中的翻牌前下注与示例 2.2.1 中的完全相同。唯一的区别是，我们现在在按钮位置，手上有一手好牌，可以击中很多翻牌。因此，让我们用这些变化重新创建示例 2.2.1 中的翻牌场景。这将很好地说明，在位置和优质起手牌的情况下，PLO 可以多么简单。

**Preflop**

UTG（$5）加注到 $0.17，MP（$6.20）跟注，CO（$8.95）跟注，我们（$5）在按钮位置 ![As](p/As.jpg) ![9s](p/9s.jpg) ![8c](p/8c.jpg) ![7h](p/7h.jpg) 跟注，盲注弃牌，我们看到 4 人底池中的翻牌：

**Flop:** ![7s](p/7s.jpg) ![Ks](p/Ks.jpg) ![6c](p/6c.jpg) （$0.75）

UTG（$4.83）过牌，MP（$6.03）过牌，CO（$8.78）过牌，你（$4.83）下注 $0.75，所有人都弃牌。

那么这里发生了什么？让我们回想一下我们在示例 2.2.1 中从 UTG 加注一手垃圾牌后所处的翻牌场景我们在翻牌前被 3 个对手跟注，完全错过了翻牌，不得不对过牌 - 弃牌给按钮位置的下注。但现在我们在按钮位置，我们的优质牌击中了翻牌（优质牌经常击中）。

我们在翻牌中得到了一组很好的抽牌组合：对子 + 坚果同花听牌 + 两端顺子听牌。我们还从对手那里得到了信息，他们告诉我们他们的牌力太弱，不能下注。因此，很明显，我们应该在翻牌时用我们的好牌下注半诈唬。有了这种筹码 / 底池比率（更多内容见第 3 部分），我们计划在对手过牌加注时 3-bet 全压，因为我们永远不会在任何对手手中处于劣势。每个人都在翻牌时弃牌，这很好。简单游戏。

### 2.3 起手牌强度的组成要素
在我们开始对 PLO 起手牌进行分类之前，让我们快速回顾一下起手牌强度的构成。在所有扑克游戏中，起手牌强度都有以下3个组成部分：

#### 2.3.1 高牌强度
高牌使手牌更强。大多数情况下，高牌强度构成大对子牌和两对牌。与其他结构相似，高牌比低牌更好。

例如，![Qs](p/Qs.jpg) ![Jh](p/Jh.jpg) ![Td](p/Td.jpg) ![8c](p/8c.jpg)和![7s](p/7s.jpg) ![6h](p/6h.jpg) ![5d](p/5d.jpg) ![3c](p/3c.jpg) 具有相同的结构，并且在形成顺子时具有大致相同的获胜机会。但 ![Qs](p/Qs.jpg) ![Jh](p/Jh.jpg) ![Td](p/Td.jpg) ![8c](p/8c.jpg) 拥有更高的牌，在我们没有形成顺子时，一对、两对、三条和葫芦会经常获胜。

#### 2.3.2 顺子强度（连接性）
一手牌的连接性越强，它形成的顺子就越多越好。以下是连通性不同的3手牌：

![Kd](p/Kd.jpg) ![Ks](p/Ks.jpg) ![7s](p/7s.jpg) ![2h](p/2h.jpg)
没有连接性，不能形成顺子。

![Kd](p/Kd.jpg) ![9s](p/9s.jpg) ![5s](p/5s.jpg) ![2h](p/2h.jpg)
连接性很低，只形成 4 个顺子（我们从手中使用的牌以粗体显示）：

1 个坚果顺子：**5**43**2**A

3 个非坚果顺子：**K**QJ，T**9**，**9**876**5**，6**5**43**2**

![Td](p/Td.jpg) ![9s](p/9s.jpg) ![8s](p/8s.jpg) ![7h](p/7h.jpg) 
最好的连接性，可以 20 种方式形成顺子：

14 个坚果顺子：
QJ**T9**8, J**T9**87, J**T**9**8**7, JT**98**7, **T9**876, **T**9**8**76, **T**98**7**6, T**98**76, T**9**8**7**6, T9**87**6, **98**765,**9**8**7**65, 9**87**65, **87**654

6 个非坚果顺子：
KQJ**T9**, QJ**T**9**8**, QJT**98**, J**T**98**7**, JT**9**8**7**, JT9**87**

#### 2.3.3 同花强度（花色）

同花牌可以组成同花。高同花牌可以组成高同花，这显然比低同色好。此外，坚果同花和非坚果同花之间有很大区别。坚果同花可以赢得大底池，而如果我们过度玩低同花，它们通常会输掉大底池（大部分输给坚果同花）。第二和第三坚果同花在盈利能力方面的差异很小，但第二坚果同花和坚果同花之间的差异很大。

我们也希望手中的同花色牌不超过两张（拥有自己的出牌会降低组成同花的机会）。双同花的手牌显然比单同花的手牌好。以下是一些不同同花强度的手牌：

![Ah](p/Ah.jpg) ![9h](p/9h.jpg) ![8s](p/8s.jpg) ![7c](p/7c.jpg) （优质或接近优质牌）远胜于 ![Kh](p/Kh.jpg) ![9h](p/9h.jpg) ![8s](p/8s.jpg) ![7c](p/7c.jpg) （投机牌）。

![Jc](p/Jc.jpg) ![Tc](p/Tc.jpg) ![8h](p/8h.jpg) ![7d](p/7d.jpg) 优于 ![Jc](p/Jc.jpg) ![Tc](p/Tc.jpg) ![8c](p/8c.jpg) ![7d](p/7d.jpg)

![Jc](p/Jc.jpg) ![Tc](p/Tc.jpg) ![8h](p/8h.jpg) ![7h](p/7h.jpg) 优于 ![Jc](p/Jc.jpg) ![Tc](p/Tc.jpg) ![8s](p/8s.jpg) ![7d](p/7d.jpg)

#### 2.3.4 组成坚果牌的能力（“坚果潜力”）

当我们评估 PLO 起手牌的强度时，我们首先要确定手牌的强度成分，如前所述。然后我们评估各个强度成分的质量。手牌的坚果成分越多越好。但是，在某些情况下，具有几个不错的非坚果成分的手牌可能比只有一个强坚果成分而没有其他成分的手牌更具可玩性。

手牌是“坚果”还是“非坚果”也会影响我们在翻牌前何时以及如何玩这手牌。一般来说，坚果牌对翻牌后位置的敏感度较低（如果我们翻牌后拿到了坚果牌，我们就不会担心后面的手牌），只要翻牌前的玩牌价格可以接受，坚果牌在对抗少数对手和许多对手时都会表现良好。

非坚果牌通常在有利位置时玩得更好（这使得非坚果牌在翻牌后更容易玩），而且对手较少（使得我们在翻牌后与坚果牌发生冲突的可能性较小）。

#### 2.3.5 什么样的 PLO 起手牌才是好的？

最好的 PLO 起手牌是所有 4 张牌都有关系，它们可以通过多种方式组成坚果或接近坚果牌。以下是一些示例：

![As](p/As.jpg) ![Ah](p/Ah.jpg) ![Js](p/Js.jpg) ![Th](p/Th.jpg)（顶三条、2个坚果同花、许多顺子）

![Ah](p/Ah.jpg) ![Th](p/Th.jpg) ![9s](p/9s.jpg) ![8s](p/8s.jpg)（坚果同花、非坚果同花、许多顺子）

![Ks](p/Ks.jpg) ![Kh](p/Kh.jpg) ![Qs](p/Qs.jpg) ![Qh](p/Qh.jpg)（2个大三条、2个非坚果同花、2个坚果顺子）

![Jh](p/Jh.jpg) ![Th](p/Th.jpg) ![9s](p/9s.jpg) ![8s](p/8s.jpg)（许多顺子、2个非坚果同花）

带有“闲牌”（不构成任何强度成分的悬垂牌）的起手牌充其量只能算是一种投机牌，非同花牌也是如此。以下是一些示例：
>dangler在奥马哈里是指和其他牌没有关系的闲牌或者悬垂牌
>
![Kc](p/Kc.jpg) ![Qh](p/Qh.jpg) ![Jc](p/Jc.jpg) ![3s](p/3s.jpg) 

![9h](p/9h.jpg) ![8s](p/8s.jpg) ![7h](p/7h.jpg) ![2c](p/2c.jpg)

![Qc](p/Qc.jpg) ![Js](p/Js.jpg) ![Th](p/Th.jpg) ![9d](p/9d.jpg)

#### 2.3.6 摊牌权益与偷牌权益

所有起手牌都有不同程度的摊牌权益。这是与手牌在翻牌后建立强手牌并赢得摊牌的能力相关的价值。例如 ![Th](p/Th.jpg) ![9h](p/9h.jpg) ![8s](p/8s.jpg) ![7s](p/7s.jpg) ，优质手牌可以建立顺子和同花，这使其适合赢得大底池。

但在给定的翻牌前场景中，起手牌的价值也具有偷牌权益成分。偷牌权益是衡量我们在翻牌前或翻牌后偷牌所获取的价值的指标。例如，如果您在按钮位置持有随机起手牌 xxxx，如果翻牌前弃牌给您并且盲注很紧且直接，您将拥有良好的偷牌权益。在这种情况下，您可以通过翻牌前加注并在大多数翻牌中持续下注来偷取大量底池，而不管您的牌是什么。

摊牌权益主要取决于您的牌，但也会受到位置（当您翻牌时拿到一手好牌时，更容易在有利位置上实现利润最大化）、对手数量、他们的筹码量和他们的倾向的影响。

偷牌权益与您的牌无关，它取决于位置、对手数量、他们的筹码量、他们的倾向以及您与对手之间的历史（例如，如果您尝试偷牌很多，他们会通过更频繁地跟注或加注来调整）。

当我们选择在翻牌前参与一手牌时，我们应该始终同时考虑摊牌权益和偷牌权益。我们还需要清楚地了解这两个组成部分中哪一个更重要。让我们澄清这一点：

在示例 2.2.1 中，我们在翻牌前拿到了一手弱牌（![Qh](p/Qh.jpg) ![Qs](p/Qs.jpg) ![8d](p/8d.jpg) ![2c](p/2c.jpg) ），几乎没有偷牌权益（位置不佳，很有可能打多人底池）。由于我们的牌没有太多摊牌权益（我们必须翻牌拿到三条才能在翻牌后获得任何价值），我们得出结论，最好的翻牌前打法是弃牌。但如果我们拿着同样的牌在按钮位置，如果对手弃牌给我们，我们就会加注。在这种情况下，我们将拥有很好的偷牌权益，而且位置上只有两个对手在盲注位置，这会将我们的翻牌前打法从弃牌改为加注。

在示例 2.2.2 中，我们有一手坚果潜力的起手牌（![As](p/As.jpg) ![9s](p/9s.jpg) ![8c](p/8c.jpg) ![7h](p/7h.jpg)），具有良好的摊牌权益，因此我们选择几乎完全基于摊牌权益来玩这手牌。在这种情况下，由于我们的位置（当每个人都通过向我们过牌而暴露弱点时，我们有机会在翻牌后偷牌），因此我们也有一些偷牌权益（不是翻牌前，而是翻牌后）。您应该养成习惯，在翻牌前玩牌时，用言语表达您对摊牌权益的思考过程和偷牌权益。您已经在直觉层面上做到了这一点（例如，当您在按钮位置加注弱牌，希望偷取盲注时），但通过“大声思考”，您将使翻牌前玩牌和翻牌后玩牌之间的联系更加清晰。然后，您将更容易制定良好且一致的游戏计划，将您玩牌的所有街的玩法联系在一起。

如果您认为您的大部分利润将来自于在翻牌圈击中并凭借一手好牌赢得摊牌，那么请制定计划，以最大化摊牌权益（例如，通过在翻牌圈前保持底池多路性并争取隐含赔率）。如果您认为您的大部分利润将来自于在翻牌圈前或翻牌圈时偷取底池，那么请制定计划，以最大化偷取权益（例如，通过在翻牌圈前加注以获得与位置的单挑）。

### 2.4 根据结构对起手牌进行分类

现在我们可以开始对起手牌进行分类了。我们要做的第一件事就是根据它们的结构将它们分成几组。在这项工作中，我们将使用 Hwang 在他的著作《底池限注奥马哈扑克：大局策略》中提出的起手牌类别。第一步是根据结构对起手牌进行分类，然后我们根据质量/强度构建另一个分类方案。

以下是 Hwang 根据结构提出的 6 个起手牌类别：

1. 大牌和 A 高百老汇包牌
2. 顺子牌
3. A 同花牌
4. 对子 + 牌
5. AA
6. 边缘牌

以下是6个类别的描述：

#### 2.4.1 大牌和 A 高百老汇包牌

**描述：**
4 张 T 牌及以上，或 4 张 9 牌及以上且带有 A 牌。

**示例：**

![Kd](p/Kd.jpg) ![Qc](p/Qc.jpg) ![Jc](p/Jc.jpg) ![Ts](p/Ts.jpg)

![As](p/As.jpg) ![Qs](p/Qs.jpg) ![Jh](p/Jh.jpg) ![9h](p/9h.jpg)

**强度要素：**
高牌、连牌，可组成高对、高两对、高顺子和高同花当有同花时。

#### 2.4.2 顺子牌

**描述：**
4 张连牌，其中最多有两个间隙。

**示例：**

![8h](p/8h.jpg) ![7s](p/7s.jpg) ![6d](p/6d.jpg) ![5d](p/5d.jpg)

![Td](p/Td.jpg) ![8h](p/8h.jpg) ![7s](p/7s.jpg) ![6s](p/6s.jpg)

![Qs](p/Qs.jpg) ![Jh](p/Jh.jpg) ![8c](p/8c.jpg) ![7c](p/7c.jpg)

![9c](p/9c.jpg) ![8d](p/8d.jpg) ![7c](p/7c.jpg) ![4s](p/4s.jpg)

**强度要素：**
这些牌也被称为“连牌”或“包牌”，它们会形成顺子。我们形成的顺子的数量和质量在很大程度上取决于结构中缺口的数量和位置。
Hwang 将这类牌分为 2 个子类别：

**优质连牌：**
- 没有缺口的连牌（J T 9 8）
- 底部有一个缺口的连牌 (J T 9 7)
- 中间有一个缺口的连牌 (J T 8 7)

**投机连牌：**
- 底部有两个缺口的连牌 (J T 9 6)
- 底部有两个缺口的连牌 (J T 8 6)
- 中间有两个缺口的连牌 (J T 7 6)

当我们玩中牌才赢的扑克时，底部有缺口的包牌比顶部有缺口的类似结构强得多。因此，Hwang 建议弃掉顶部有缺口的牌，例如 J 9 7 6。

当我们首先为摊牌权益和隐含赔率而玩时，这是个不错的建议，例如，如果我们在大盲注位置，面对加注和一些跟注者。如果我们现在选择参与像 ![Th](p/Th.jpg) ![7s](p/7s.jpg) ![6s](p/6s.jpg) ![5d](p/5d.jpg) 这样的手牌，我们将陷入翻牌后的麻烦，因为：

*顶部有间隙的顺子结构会形成很多非坚果顺子！*

这显然不利于我们的主要获利计划是翻牌顺子或顺子抽牌然后赢得摊牌。如果我们翻牌或抽牌的许多顺子不是坚果顺子，那么我们就会输给形成相同顺子的坚果版本的对手很多筹码。

另一方面，当对手弃牌给我们时，按钮位置的顺子加注 ![Th](p/Th.jpg) ![7s](p/7s.jpg) ![6s](p/6s.jpg) ![5d](p/5d.jpg) 非坚果连牌是完全可以的。在这种情况下，我们不仅仅是为了摊牌权益而玩，而且现在很多手牌的价值都来自窃取权益。此外，当我们在翻牌前或翻牌后没有成功偷走底池时，形成非坚果顺子并让其与坚果发生冲突的风险较小（因为对手较少）。

比较上述两种情况可以很好地说明提前规划的价值。我们还发现，单独评估 PLO 起手牌的强度没有多大意义。PLO 起手牌的价值始终取决于我们计划的翻牌后场景类型（赢得摊牌或偷牌），以及我们想要通过玩这手牌实现的目标。如果我们主要是为了摊牌权益而玩，我们更喜欢坚果潜力的起手牌结构。如果我们主要计划偷牌，例如当我们在按钮位置加注时，我们可以大大放松对起手牌的要求，因为偷牌权益部分的价值很高。

#### 2.4.3 A 同花牌

**描述：**
A 同花牌，带有连牌、一对或两张百老汇牌

**示例：**

![Ah](p/Ah.jpg) ![9s](p/9s.jpg) ![8h](p/8h.jpg) ![6d](p/6d.jpg)

![Ah](p/Ah.jpg) ![Td](p/Td.jpg) ![Ts](p/Ts.jpg) ![3h](p/3h.jpg)

![Ah](p/Ah.jpg) ![Kc](p/Kc.jpg) ![Qh](p/Qh.jpg) ![2d](p/2d.jpg)

**强度要素：**

此起手牌结构的“支柱”是坚果同花潜力。此外，边牌为我们提供了各种可能性。

A 同花 + 连牌具有顺子和同花潜力。为了评估顺子组件的质量，我们使用了前面讨论过的评估顺子牌的原则。间隙较大的连牌（例如，![Ah](p/Ah.jpg) ![9s](p/9s.jpg) ![7h](p/7h.jpg) ![6c](p/6c.jpg) ）比间隙较小或没有间隙的连牌更具投机性。

A 同花 + 对子可以翻出三条。对子越大越好。另外，请注意，我们更喜欢对子与 A 的花色不同（例如，我们更喜欢 ![Ah](p/Ah.jpg) ![8s](p/8s.jpg) ![8c](p/8c.jpg) ![2h](p/2h.jpg) 大于 ![Ah](p/Ah.jpg) ![8h](p/8h.jpg) ![8c](p/8c.jpg) ![2s](p/2s.jpg) ）。当对子与 A 不同花时，当我们翻出暗三条时（这将使我们拥有一手好牌），我们有更好的机会翻出坚果同花听牌。

A 同花 + 2张百老汇牌具有高牌力，有一些顺子强度和坚果同花潜力。我们可以打造出色的顶对和顶两对牌，以及一些百老汇顺子。

#### 2.4.4 对子 + 牌

**描述：**
对子与相连同花色的边牌，或另外一对。

**示例：**

![Jc](p/Jc.jpg) ![Js](p/Js.jpg) ![Th](p/Th.jpg) ![9c](p/9c.jpg)

![Ks](p/Ks.jpg) ![Kc](p/Kc.jpg) ![8h](p/8h.jpg) ![8d](p/8d.jpg)

**强度要素：**
这些牌可以翻牌成暗三条。此外，同花 / 连牌的边牌提供了顺子和同花的潜力；而第二对牌使翻牌成暗三条的几率翻倍（两对牌翻牌成三条的几率约为  25%）。

请注意，低对是非坚果强度成分（翻牌成暗三条越小，获胜的几率就越低）。像 ![8h](p/8h.jpg) ![7s](p/7s.jpg) ![6c](p/6c.jpg) ![6h](p/6h.jpg) 这样的牌主要由非坚果成分组成，这种类型的牌经常被 PLO 新手高估。这些牌看起来很漂亮，可玩性很高，但由于缺乏坚果潜力，而且它们击中强牌的翻牌次数相对较少，因此在翻牌后很难玩好。

#### 2.4.5 AA

**描述：**

AAxx 这些牌的强度各不相同，从投机牌（“干”AAxx，带有无用的边牌）到超级强牌（双花色 AAxx，带有好边牌）。

**示例：**

![Ad](p/Ad.jpg) ![As](p/As.jpg) ![7s](p/7s.jpg) ![4c](p/4c.jpg)

![Ah](p/Ah.jpg) ![Ac](p/Ac.jpg) ![Jh](p/Jh.jpg) ![9c](p/9c.jpg)

![Ad](p/Ad.jpg) ![Ah](p/Ah.jpg) ![8s](p/8s.jpg) ![8c](p/8c.jpg)

**强度要素：**
AAxx 是翻牌前的坚果牌，AA 让我们在翻牌中顶暗三条时拥有一手好牌。AAxx 很少在多人底池中以未增强的牌（AA 一对本身）赢得摊牌，但在单挑底池中以未增强的牌进入摊牌会赢得一些底池。

Hwang 根据边牌将 AA 类别分为 2 个子类别：

**投机牌**
“干”AA带有毫无价值的边牌，或 AA 只有一种同花而没有其他牌。例如：

![As](p/As.jpg) ![Ad](p/Ad.jpg) ![7c](p/7c.jpg) ![3h](p/3h.jpg)

![As](p/As.jpg) ![Ad](p/Ad.jpg) ![Ks](p/Ks.jpg) ![3c](p/3c.jpg)

**优质牌**
双花色包括两个 A 同花，或单花色，边牌是一对、连牌或两张百老汇牌。例如：

![Ah](p/Ah.jpg) ![Ac](p/Ac.jpg) ![9h](p/9h.jpg) ![6c](p/6c.jpg)

![As](p/As.jpg) ![Ac](p/Ac.jpg) ![7s](p/7s.jpg) ![7h](p/7h.jpg)

![Ad](p/Ad.jpg) ![As](p/As.jpg) ![Td](p/Td.jpg) ![9c](p/9c.jpg)

![As](p/As.jpg) ![Ac](p/Ac.jpg) ![Qd](p/Qd.jpg) ![Js](p/Js.jpg)

**万能牌（怪兽牌，超级好牌）**
双花色包括两个 A 同花，边牌是高牌对子、连牌或两张百老汇牌。例如：

![Ah](p/Ah.jpg) ![As](p/As.jpg) ![Jh](p/Jh.jpg) ![Js](p/Js.jpg)

![Ac](p/Ac.jpg) ![Ad](p/Ad.jpg) ![7c](p/7c.jpg) ![6d](p/6d.jpg)

![Ac](p/Ac.jpg) ![As](p/As.jpg) ![Kc](p/Kc.jpg) ![Qs](p/Qs.jpg)

高品质 AAxx 牌是奥马哈中最好的起手牌。

#### 2.4.6 边缘牌

**描述：**
由各种弱“单向”牌组成的广泛类别，只有一个显著的强度成分：

- 3 张百老汇牌 + 一张闲牌
- 高对带有无用边牌
- 不属于先前“A 同花牌”类别的弱 A 同花
- 不同花色的牌（彩虹牌）

**示例：**

![Kh](p/Kh.jpg) ![Qd](p/Qd.jpg) ![Jc](p/Jc.jpg) ![4s](p/4s.jpg)

![Ks](p/Ks.jpg) ![Kc](p/Kc.jpg) ![7d](p/7d.jpg) ![2h](p/2h.jpg)

![Ah](p/Ah.jpg) ![Js](p/Js.jpg) ![7h](p/7h.jpg) ![6c](p/6c.jpg)

![Js](p/Js.jpg) ![Tc](p/Tc.jpg) ![9h](p/9h.jpg) ![7d](p/7d.jpg)

**强度要素：**
这些牌的共同点是它们缺乏坚果潜力，或者只有一个重要的坚果成分。

拿一手像这样的牌 ![Ks](p/Ks.jpg) ![Kc](p/Kc.jpg) ![7d](p/7d.jpg) ![2h](p/2h.jpg)，我们能指望翻牌的最好（也是唯一）是顶暗三条。当这种情况发生时，我们有一手非常强的牌，但是这个机会渺茫。因此，如果我们只是为了摊牌权益而玩这手牌（例如，当我们在大盲注位置跟注后加注和一些跟注者时），我们不想付出高昂的代价来看翻牌。严格为了中三条价值而玩这手牌的价值非常依赖于便宜地看翻牌以保留隐含赔率。

同样，像 ![Js](p/Js.jpg) ![Tc](p/Tc.jpg) ![9h](p/9h.jpg) ![7d](p/7d.jpg) 这样的牌在很多翻牌将来不会有好的发展。为了让这手牌的坚果成分（顺子潜力）在翻牌后有价值，我们需要在彩虹翻牌上翻出顺子或好的顺子听牌，这样我们就不会立即受到同花或同花听牌的威胁。

同样，当我们选择参与时，我们需要为这手牌制定计划。如果我们主要是为了摊牌权益而玩，我们需要看到便宜的翻牌，因为这些牌很少能打出好牌。我们也想要位置，既是为了使翻牌后的玩法更容易，也是为了降低我们身后出现不愉快的翻牌前意外的风险（有位置玩牌意味着翻牌前要行动的对手更少）。

例如 ![Ah](p/Ah.jpg) ![Js](p/Js.jpg) ![7h](p/7h.jpg) ![6c](p/6c.jpg) ，如果你在几个弱的溜入者之后在按钮位置，那么在有位置上跟入并希望翻牌后会发生好事是完全可以的。你有一个强大的坚果要素，有时会在翻牌后得到足够强的东西来继续翻牌。有时你将能够利用你的位置在翻牌后偷牌。但是如果你有同样的手牌在 UTG，你应该弃牌。在这种情况下，你没有足够的偷牌权益 + 摊牌权益来在不利位置上与 5 个对手较量。

### 2.5 根据牌力对起手牌进行分类

总结一下，我们现在将可玩的 PLO 起手牌分为 6 个大类：

1. 大牌和 A 高百老汇牌
2. 顺子牌
3. A 同花牌
4. 对子 + 牌
5. AA
6. 边缘牌

我建议您记住这些类别以及属于这些类别的牌。这样您就可以快速地对起手牌进行分类，而无需深思熟虑。当我们记住这个分类方案时，我们就在混乱的奥马哈起手牌世界中创造了秩序。我们分离出可玩的牌，根据结构对它们进行分组，并将其余的起手牌宇宙放在一个单独的类别中，标记为“垃圾牌”。

下一步是构建另一个分类方案，这次是基于牌力。我们也将使用 Hwang 的分类来进行这个过程。

Hwang 使用 4 个类别的起手牌强度：

- 优质牌
- 投机牌
- 边缘牌
- 垃圾牌

每个类别中的牌如下：

#### 2.5.1 优质牌

**说明：**
- 优质牌和万能牌 AAxx
- 高两对
- 4 张 T 及更高牌，至少为单同花
- 4 张 9 及更高牌，至少为单同花
- 优质连牌，至少为单同花
- 高对带有同花色和相连边牌

**示例：**

![Ad](p/Ad.jpg) ![Ac](p/Ac.jpg) ![Jd](p/Jd.jpg) ![Jh](p/Jh.jpg)

![As](p/As.jpg) ![Ac](p/Ac.jpg) ![Js](p/Js.jpg) ![Jc](p/Jc.jpg)

![Ks](p/Ks.jpg) ![Kh](p/Kh.jpg) ![Qs](p/Qs.jpg) ![Qh](p/Js.jpg)

![As](p/As.jpg) ![Qh](p/Qh.jpg) ![Jh](p/Jh.jpg) ![Td](p/Td.jpg)

![Ah](p/Ah.jpg) ![Ks](p/Ks.jpg) ![Jh](p/Jh.jpg) ![9c](p/9c.jpg)

![Ts](p/Ts.jpg) ![9s](p/9s.jpg) ![8h](p/8h.jpg) ![7h](p/7h.jpg)

![Jh](p/Jh.jpg) ![Ts](p/Ts.jpg) ![9h](p/9h.jpg) ![7c](p/7c.jpg)

![Kd](p/Kd.jpg) ![Qs](p/Qs.jpg) ![Qc](p/Qc.jpg) ![Jd](p/Jd.jpg)

一般来说，优质起手牌可以在任何位置加注，也可以在任意数量的跟注者之后加注。这些牌的共同点是摊牌胜率高，并且能够经常翻牌击中强牌。因此，通过在翻牌前建立底池，当您比对手翻牌更击中更强的牌时，您就为在翻牌后赢得大底池做好了准备。

但请注意，如果您处于与加注者对抗的位置，您不必每次拿到优质牌时都进行 3-bet。是否应该跟注或 3-bet 取决于您对这手牌的计划（跟注使您在多路底池中做好了中牌后赢下的准备，而 3-bet 使您更适合偷牌），以及各种情境因素，例如位置、对手数量、筹码量和其他因素。

我们将在第 3 部分中更多地讨论 3-bet。现在，让我们认为，用一手好牌来加注（无论加注来自哪里）永远不会错（尽管 3-bet 可能更有利可图）。

#### 2.5.2 投机牌

**描述：**
- 投机 AAxx
- 投机连牌，至少是单同花
- 中等对子，带同花色和相连的边牌
- A 同花 + 连牌
- A 同花 + 一对
- A 同花 + 两张百老汇牌

**示例：**
![As](p/As.jpg) ![Ad](p/Ad.jpg) ![7c](p/7c.jpg) ![2h](p/2h.jpg)

![Th](p/Th.jpg) ![9h](p/9h.jpg) ![7s](p/7s.jpg) ![5s](p/5s.jpg)

![8s](p/8s.jpg) ![7h](p/7h.jpg) ![6s](p/6s.jpg) ![3s](p/3s.jpg)

![Jc](p/Jc.jpg) ![Td](p/Td.jpg) ![7c](p/7c.jpg) ![6h](p/6h.jpg)

![9d](p/9d.jpg) ![9s](p/9s.jpg) ![8d](p/8d.jpg) ![7s](p/7s.jpg)

![As](p/As.jpg) ![Td](p/Td.jpg) ![9s](p/9s.jpg) ![8c](p/8c.jpg)

![Ad](p/Ad.jpg) ![Qd](p/Qd.jpg) ![Qc](p/Qc.jpg) ![3s](p/3s.jpg)

![Ah](p/Ah.jpg) ![Ks](p/Ks.jpg) ![Jh](p/Jh.jpg) ![7d](p/7d.jpg)

在 6-max 游戏中，当对手弃牌到我们时，我们会在所有位置上对大多数“投机”牌进行加注。如果我们前面有加注，所有这些牌都将成为位置上跟注的候选牌。最好的投机牌（例如，好的双同花连牌）在深筹码情况下也将成为轻度 3-bet 的候选牌，在这种情况下，我们会 3-bet 来隔离加注者，并利用位置和主动权玩单挑底池（有关这方面的更多信息，请参见第 3 部分）。

当我们面前有溜入者时，我们通常会在跟注和加注之间做出选择。在只有一名溜入者之后，我们通常会加注这些牌来隔离并为自己在有位置上玩单挑底池做好准备（这会增加我们的偷牌权益）。如果有不止一名溜入者，当决定接近时，我们将有更大的动机跟着溜入，因为我们现在的偷牌权益更少了。

是否跟着溜入或加注的情况下，我们还必须考虑我们手牌的潜力，以及我们是否想与少数或许多对手比赛。投机手牌只有一个好的坚果成分而没有其他成分（例如，![Ah](p/Ah.jpg) ![9s](p/9s.jpg) ![5h](p/5h.jpg) ![4d](p/4d.jpg) 或 ![Ks](p/Ks.jpg) ![Kc](p/Kc.jpg) ![7d](p/7d.jpg) ![2h](p/2h.jpg) ）在跟注多人底池中表现良好。有了这些牌，我们就可以翻牌中牌赢得大底池，对抗许多对手（分别是坚果同花和顶三条），所以我们不太关心我们必须击败多少对手。通过跟注，我们可以保留我们的隐含赔率。

#### 2.5.3 边缘牌

**描述：**

如前所述：
- 3 张百老汇牌 + 一张闲牌，至少是单同花
- 高对子和无用的边牌
- 不属于先前“A 同花牌”类别的弱 A 同花牌
- 不同花色的牌

**示例：**
![Kh](p/Kh.jpg) ![Qd](p/Qd.jpg) ![Jc](p/Jc.jpg) ![4h](p/4h.jpg)

![Ks](p/Ks.jpg) ![Kc](p/Kc.jpg) ![7d](p/7d.jpg) ![2h](p/2h.jpg)

![Ah](p/Ah.jpg) ![Js](p/Js.jpg) ![7h](p/7h.jpg) ![6c](p/6c.jpg)

![Js](p/Js.jpg) ![Tc](p/Tc.jpg) ![9h](p/9h.jpg) ![7d](p/7d.jpg)

大多数“边缘”牌在前面位置加注太弱，如果我们前面有加注，我们会弃牌最弱的牌，否则就跟注。在溜入者之后的位置，我们通常应该跟着溜入，但如果我们认为情况适合偷牌，我们当然可以加注。这些牌的共同点是，如果我们只是为了中牌而玩它们，我们更喜欢便宜地在位置上看到翻牌。

当然：如果前面弃牌我们在后面位置，所有“边缘”牌都是开牌加注的候选。我们现在计划偷取权益，并准备在位置上玩短手底池。

#### 2.5.4 垃圾牌

**描述：**

不属于“优质牌”、“投机牌”或“边缘牌”的一切都属于“垃圾牌”（作为出发点）。

这里需要注意的是，我们扔进“垃圾牌”类别的许多手牌对于有能力的玩家来说在有利位置上都是可以玩的。按钮上的优秀玩家可能能够用 100% 的手牌与盲注位置上的弱手进行有利可图的较量。因此，我们一定不要忘记，我们对可玩起手牌的分类方案是概念工具，不应盲目遵循。

但作为开始，除非您的手牌至少是“边缘牌”，否则在选择参与之前，您应该有其他充分的理由，例如良好的偷牌权益（例如，如果您在按钮上，而盲注位置有两个紧手且被动的对手）。

稍后，当我们获得更多经验时，我们将更多地讨论如何用位置上的弱手牌进行有利可图的下注。我们能在多大程度上放松后期位置范围将在很大程度上取决于我们的翻牌后技能，尤其是我们偷牌的能力。我们将训练这些技能，但目前我们将主要坚持上面定义的可玩手牌类别，它们将构成我们起手牌选择的核心。

### 2.6 起手牌分类总结

让我们暂停一下，回顾一下我们迄今为止在本文中所做的工作：

我们首先定义了 PLO 的总体核心策略，即主要玩优质牌，围绕摊牌时赢得底池进行计划，并在翻牌前和翻牌后进行一些偷牌。

然后，我们讨论了起手牌强度的不同组成部分（高牌强度、顺子强度、同花强度），并指出给定场景中起手牌的价值有两个组成部分：摊牌权益（在摊牌时建立强牌并赢得底池的能力）和偷牌权益（我们可以通过在翻牌前或翻牌后偷牌来获取的价值，这与我们的牌无关）。

然后，我们为 PLO 起手牌构建了两个分类方案。首先，我们根据可玩牌的结构元素对其进行分类，并将它们分为 6 类。然后，我们根据强度对可玩牌进行分类，并给出了一些如何在翻牌前玩它们的简单指南。

在第 2 部分和第 3 部分之间的这段时间里，我建议您记住这两种分类方案，直到您完全掌握它们。例如，当您看到 ![As](p/As.jpg) ![9h](p/9h.jpg) ![8s](p/8s.jpg) ![7d](p/7d.jpg) 手牌时，您的大脑应该会“叮”一声，您会立即识别出这种手牌结构是“A 同花牌”，更具体地说是“A 同花带连牌”，并且它属于“投机牌”强度类别。

当您的大脑对您的起手牌进行这种分类时，它还会根据您读过的内容、看过的视频和玩过的牌加载一些关于如何在各种翻牌前场景中玩这种手牌的信息。这样可以更轻松地确定该手牌在当前情况下是否可以玩，以及如果可以玩，您应该如何玩。

### 2.7 翻牌前玩法的一些宏观原则

除了在起手牌类别描述中给出的简单指导外，我们还将讨论 PLO 翻牌前玩法的一些重要宏观原则，以帮助您走上正确的轨道。

#### 2.7.1 除非您有其他理由，否则请始终进行加注打开底池

如果前位弃牌并且您决定玩牌，请加注，除非您有特殊理由进行开池跟注。如果您认为您的手牌太弱而无法加注，那么进行跟注可能对您没有多大帮助。

请注意，在不利位置开池跟注一手弱牌会让您陷入翻牌后在多路底池中不利位置玩一手弱牌。这些情况不会让您的资金变得丰厚。

#### 2.7.2 除非您有其他理由，否则在翻牌前下注和加注时下注底池

默认情况下，我们将在翻牌前下注底池，除非我们有特殊理由下注较少。在翻牌前下注少于底池的合理情况可能会在本系列文章的后面部分出现，届时我们将讨论这些情况。

#### 2.7.3 小心在不利位置建立大底池，尤其是持有投机性起手牌时

这个原则是我们整体 PLO 核心策略的必然结果。有利位置游戏给我们提供了不利位置所没有的选择，例如，当对手很弱，并通过翻牌后向我们过牌来告诉我们这一点时，我们有机会利用良好的偷牌机会。通过不利位置游戏，我们将这些选择权交给了对手。

如果我们在不利位置也建立一个大底池，我们就为在翻牌后犯大错误做好了准备。我们在不利位置游戏时会犯很多错误，但如果底池很小，这些错误也会很小。翻牌前扩大底池会放大我们之后在翻牌后犯的任何错误。如果我们还有一手很弱的起手牌，很少与翻牌很好地联系起来，那么所有这些当然会更加糟糕。

这种类型的常见翻牌前错误是在不利位置过度玩弱 AAxx 牌。例如：

**Preflop**
您正在满员的 6-max $5PLO。UTG（$6.70）加注到 $0.17，MP（4.50）跟注，按钮（$7.20）跟注，您（6.55）用 ![Ac](p/Ac.jpg) ![Ah](p/Ah.jpg) ![9d](p/9d.jpg) ![6s](p/6s.jpg) 3-bet 底池到 $0.87，UTG 跟注，MP 跟注，按钮弃牌。

**Flop**：![Qs](p/Qs.jpg) ![Jd](p/Jd.jpg) ![7d](p/7d.jpg) （$2.80）
现在怎么办？

现在，你拿着一手弱牌在翻牌圈，在一个大底池中面对两个对手，处于不利位置。你有一手裸高对，没有听牌。翻牌的配合度很高，可能在某种程度上击中了对手。翻牌圈的持续下注有可能赢得这个底池，但要发现是否可行，需要消耗你剩余一半的筹码。除了过牌，你没有其他好的选择，如果有人下注，你就不得不过牌 - 弃牌。可怜！

你自己造成了这种混乱。你自愿陷入这种境地，在多人底池中拿着一手弱牌，在不利位置的情况下进行翻牌前 3-bet。你不出所料地没能击中翻牌，所以你最终陷入了最常见的情况。

问题在于 ![Ac](p/Ac.jpg) ![Ah](p/Ah.jpg) ![9d](p/9d.jpg) ![6s](p/6s.jpg) ，这是一手一维手牌，当我们只为摊牌权益而玩它时，它只能做一件事。它翻牌顶暗三条。但这种情况每 8 次左右只发生一次，所以如果你主要是为了摊牌权益而玩（这通常是在多人底池中处于不利位置的情况），你最好便宜地看翻牌并保留隐含赔率。通过跟注，你还可以掩饰你的手牌强度，这对你翻牌后有利（有关此内容的更多信息，请参阅原则 7.5）。

#### 2.7.4 小心在不利位置打非坚果起手牌

我们之前讨论过在不利位置打非坚果起手牌的弊端，而如果你在不利位置打非坚果起手牌，这就是你为自己设定的场景。

为了说明这一点，让我们比较两手看似结构相似的起手牌（高牌 + 顺子，单同花），并预测当我们从 UTG 开牌时，它们在翻牌后会如何玩。

**手牌 1：** ![As](p/As.jpg) ![Ts](p/Ts.jpg) ![9d](p/9d.jpg) ![8c](p/8c.jpg)

**手牌 2：** ![Ks](p/Ks.jpg) ![Ts](p/Ts.jpg) ![8d](p/8d.jpg) ![7c](p/7c.jpg)

两手牌都有很高的同花潜力和顺子潜力。我现在假设手牌 1 是一手近乎优质的起手牌，并且是 UTG 的自动加注，而手牌 2 是 UTG 的近乎垃圾牌。为什么会这样？

好吧，让我们想想当这两手牌翻出我们希望翻出的牌时会发生什么，即同花、顺子，或抽到同花和顺子。对于第 1 手牌，我们总是会构建坚果同花，而且我们构建的大多数顺子也将是坚果顺子。这意味着我们正在构建手牌和强听牌，我们可以自信地从不利位置下注，因为我们不太担心后面的手牌。

但是对于第 2 手牌，我们通常会构建第二大坚果同花（除非 ![As](p/As.jpg) 翻牌），而且我们构建的许多顺子都是非坚果，因为我们的顺子成分顶部有间隙。这意味着我们经常会有一些太弱的手牌和听牌，以至于无法自信地下注，即使我们翻牌时我们希望翻牌。例如，在翻牌、转牌和河牌上用非坚果手牌下大注是糟糕的玩法，因为我们经常会支付坚果。同时，如果我们谨慎行事，我们会减少我们拥有最佳手牌时的利润。

这就是非坚果手牌困境。下注太多，你会支付太多给对手的坚果牌。下注太少，当你领先时，你无法获得足够的价值，并且会给对手带来便宜的机会来击败你。坚果牌没有这个问题。

因此，在不利位置，我们希望在翻牌后击中坚果牌，我们通过选择具有坚果结构的起手牌来实现这种情况。

#### 2.7.5 除非你能将大部分筹码投入底池，否则在翻牌前用 AAxx 进行大额加注时要小心

此原则与前面讨论的原则 7.2 和 7.4 相关。如果我们用 AAxx 进行大额加注，我们就是告诉全世界我们有 AAxx。为了避免给对手提供良好的隐含赔率（他们现在掌握了有关我们手牌的信息，可以在翻牌后利用这些信息），我们希望在翻牌前将大量资金投入底池，使翻牌后打牌成为一种形式。理想情况下，我们希望能够自动下注翻牌全押并完成它。

这意味着当我们用 AAxx 进行大额加注时，我们希望将超过 1/3 的筹码投入底池，因为这样我们剩下的下注将少于一个底池大小。例如，如果我们以 100 BB 开始并在翻牌前将 35% 投入底池，那么我们在翻牌时将拥有 70 BB 的底池，而剩余 65 BB 可以下注。如果我们可以设置这种情况，我们已经消除了对手的大部分隐含赔率，并使他们更难利用我们提供的信息。

注意！这并不意味着我们不应该 3-bet AAxx。这意味着在我们告诉世界我们拥有 AAxx 并且我们给他们提供良好的隐含赔率的情况下，我们应该三思而后行，特别是当我们处于不利位置并且有许多对手时，这使得在没有摊牌的情况下很难获胜。

以下是单挑场景，我们选择不使用 AAxx 进行大额加注，以避免艰难的翻牌后场景。

您正在满员的 6-max $5PLO。弃牌到您，您（$8.10）在CO位置用 ![Ad](p/Ad.jpg) ![Ac](p/Ac.jpg) ![6s](p/6s.jpg) ![2h](p/2h.jpg) 加注底池到$0.17。按钮玩家（$10.20）3-bet 到 $0.58，盲注玩家弃牌。按钮玩家是一名优秀且激进的玩家。您的计划是什么？

让我们考虑一下如果我们 4-bet 可能会发生什么。我们的筹码深度约为 160 BB，底池大小的 4-bet 总计为 $1.81，占有效筹码的 22%（$8.10）。这会产生一种情况，按钮玩家知道您手中有什么，他现在可以近乎完美地玩剩下的牌。如果他还有 AAxx，他将 5-bet，以便您可以在翻牌前全压。您的 AAxx 可能比他差，但没关系，在这种情况下您不会损失太多。

但是如果他用一手投机牌对你进行 3-bet，这手牌在对抗 AA 时表现良好（优秀、激进的玩家往往会这样做），他现在可以利用位置、良好的隐含赔率和信息跟注你的 4-bet，这些都让他能够在翻牌后与你打得很好。例如，假设他用 ![9h](p/9h.jpg) ![8h](p/8h.jpg) ![7c](p/7c.jpg) ![6d](p/6d.jpg) 进行了一次轻度 3-bet。这手牌对抗你的 ![Ad](p/Ad.jpg) ![Ac](p/Ac.jpg) ![6s](p/6s.jpg) ![2h](p/2h.jpg) 翻牌前权益为 46%（ProPokerTools计算），并且它会击中很多翻牌，足以继续下去，因此按钮玩家作为稍微落后手牌 3-bet 并跟注你的 4-bet，并没有犯错误。

那么翻牌时会发生什么？好吧，如果你总是持续下注底池，他将能够坐在你后面“挑选”翻牌。他大多数时候都知道你有什么牌（一对高牌，但没有强听牌），所以他也知道他需要多大力度击中翻牌才能加注你的持续下注并让自己获利。因此，总是对他进行持续下注可以给他带来很好的隐含赔率。另一方面，如果你决定过牌每一个看起来危险的翻牌，你就给了他很多机会来诈唬。

以下是按钮玩家在跟注你的 4-bet 时希望看到的翻牌后场景之一：

**Flop:** ![Jh](p/Jh.jpg) ![7d](p/7d.jpg) ![3h](p/3h.jpg)（$3.69）

在这个翻牌中，他有同花听牌、卡顺听牌和一对小对子。这些听牌加起来让他有 66% 的胜率（ProPokerTools计算）对抗你的一对 AA！如果你下注底池，他会作为大幅领先全压。反过来，你必须决定你是否有足够的胜率用只有一对牌跟注剩余的筹码。如果你过牌，他可能会半诈唬下注，而你将不得不用一对弃牌，而不是在听牌较多的翻牌上做其他事情。

我希望这个例子清楚地说明了我们用 AAxx 建立一个大底池给自己造成的问题，在这种情况下，我们不能在翻牌时自动承诺全下，对手知道我们有什么。这个问题在不利位置尤其困难，因为我们根本不知道对手是否与翻牌有关。如果我们的 AAxx 是投机性很强的牌，我们的问题会变得更糟，因为很少有翻牌能帮到我们。

我们得出结论，我们不应该用投机性 AAxx 在这种筹码量进行 4-bet，所以我们跟注并希望翻牌后会发生好事。这种情况也不是特别乐观，但它是两害相权取其轻。请注意，如果筹码量为 100 BB，我们可以用底池大小的 4-bet 到 $1.81 来投入 36% 的筹码。这将使我们能够全压翻牌，而按钮玩家没有任何机会在翻牌后剥削我们。他仍然能够挑选翻牌，但他不再有很好的隐含赔率。如果我们每次翻牌都全压，我们就无法被诈唬了。

#### 2.7.6 在加注和再加注后，通常会弃掉 Axxx 类型的牌

这是简单的逻辑。当底池被加注和再加注时，很可能有人有 AAxx。如果您有 Axxx 类型的牌（例如 ![Ac](p/Ac.jpg) ![Kd](p/Kd.jpg) ![Jd](p/Jd.jpg) ![9s](p/9s.jpg) ），您通常会被压制。如果您选择参与其中，您将有效地试图用 3 张牌击败 AAxx（因为翻牌上的 A 对您没有帮助）。
这不会给您带来利润，您可以通过在翻牌前弃掉 Axxx 牌来避免这种情况，无论它看起来多么诱人。

#### 2.7.7 不要害怕用位置上的优质起手牌建立大底池

这与我们在原则 7.2 中讨论的内容相反。当您在位置上拥有优质起手牌时，您的加注将使对手在位置上玩较弱的牌，这正是他们不想要的。优质起手牌通常翻牌很好，而错过翻牌时，您通常会获得偷牌或拿免费牌的机会，这两种情况对您来说都是有利的。

#### 2.7.8 如有疑问，在位置不佳时更倾向于弃牌

合理的扑克逻辑。位置使所有牌都更有利可图且更容易玩，因此如果您不确定，您可以将其作为决定因素。在底池限注奥马哈中，位置不佳时打的太松很难玩。

#### 2.7.9 如有疑问，请记住，翻牌前弃牌可玩牌的代价很低

如果您不确定的玩牌还是不玩牌，而您弃牌了本该玩的牌，那么您不会损失太多利润。因此，如果您不确定，并且怀疑自己无法有利可图地玩牌，请毫不羞愧或后悔地弃牌。总会有新牌和新机会。

随着您的水平提高，您会发现越来越多有利可图的情况可以参与其中。与此同时，您可以保守地玩牌，并严格遵守整体核心策略（专注于争取摊牌权益和在
位置上玩牌）。

### 2.8 翻牌前打法的一些例子

现在我们将（最终）用几个简单的翻牌前例子来结束第 2 部分，这些例子将我们到目前为止讨论过的理论联系在一起。在每个例子中，我将使用基于我们的起手牌分类方案和摊牌权益和偷牌权益评估的决策过程。

经验丰富的 PLO 玩家不会像我们这样死板地思考，他会考虑我们在这里忽略的许多其他因素，但这些例子的目的是展示我们如何通过简单的决策过程来捕捉 PLO 翻牌前打法的精髓：

- 我们根据之前定义的分类方案评估起手牌的质量。
- 我们评估价值成分、摊牌权益和偷牌权益，并确定哪一个最重要。
- 我们为这手牌制定计划。

下次坐下来玩的时候，试着尝试这种类型的计划，并把你的想法用语言表达出来。希望您能够发现，简单而合理的扑克逻辑将引导您找到针对所遇到的大多数翻牌前情景的简单而良好的替代方案（即使可能存在更复杂且利润略高的替代方案）。

**示例 2.8.1：从 UTG 开始加注**

您正在满员的 6-max $5PLO。您（$5）在 UTG 看手牌 ![Ac](p/Ac.jpg) ![Tc](p/Tc.jpg) ![9s](p/9s.jpg) ![8h](p/8h.jpg) 。您的计划是什么？

您有一张 A 同花 + 顺子，根据我们的手牌分类方案，它属于“投机”强度类别。这是此类别中最好的手牌之一，绝对值得从任何位置开始加注。您用这手牌的标准玩法应该是开始加注底池。

您的翻牌后玩法计划非常依赖于您后面发生的事情。如果您最终得到一个大且多人参与的底池，您应该在翻牌时主要玩“不中就弃牌”的游戏。只有 1 或 2 个对手，您应该准备好在错过时在很多翻牌上持续下注，并希望在翻牌上偷走底池（但如果您在翻牌时被跟注，除非您改进，否则您应该停止继续）。

**示例 2.8.2：3 次下注优质 AAxx**

您正在满员的 6-max $5PLO。弃牌到 CO（$5），CO 将底池加注到 $0.17。您（$5）看到 ![Ac](p/Ac.jpg) ![As](p/As.jpg) ![Kc](p/Kc.jpg) ![Td](p/Td.jpg) 在按钮位置 。您对这手牌有什么计划？

很难找到比这更明显的 3-bet 时机，您可以将底池加注到 $0.58。您有一手优质 AAxx 手牌，对抗加注者的范围和盲注中的两手随机牌具有非常好的摊牌权益。通过 3-bet，您还可以提高您的偷牌权益，因为您正在创建一个场景，在该场景中，您经常会与加注者单挑并占据有利位置，玩翻后牌。这将使您能够赢得大部分双方都错过翻牌的底池。

**示例 2.8.3：用投机性 AAxx 平跟**

您正在满员的 6-max $5PLO。UTG（$6.70）加注到 $0.17，MP（$3.30）跟注，CO（$7.50）跟注，您（$5.90）在大盲注位置看到 ![Ac](p/Ac.jpg) ![As](p/As.jpg) ![Ts](p/Ts.jpg) ![3h](p/3h.jpg)。您的计划是什么？

又是 AAxx，但这次是投机性 AAxx，附带较差的边牌。此外，这种情况与示例 2.8.2中我们 AAxx 3-bet 的情况非常不同。在那里，我们拥有优质 AA 牌，对加注者有位置优势，并且有很大机会单挑。在当前情况下，我们在多人底池中 AA 牌质量较差而处于不利位置。

我们在这里显然没有很好的偷牌权益，而且 3-bet 可能不会创造任何权益。我们的大多数对手都有深筹码，他们可能会跟注 3-bet，希望在翻牌中击败我们明显的 AA（当您在多人底池中位置不佳时 3-bet 时，他们会认为您拥有这种牌）。

我们也没有很好的摊牌权益，除非我们翻牌成三条或翻牌前全压。但底池大小的 3-bet 只会达到 $0.87，这仅占我们筹码的 15%。因此，大额 3-bet 不会让我们在翻牌后陷入困境（另请参阅前面讨论的原则 7.3 和原则 7.5）。通过 3-bet，我们告诉对手我们有 AAxx，在这种情况下，他们获得隐含赔率来跟注，希望在翻牌后击败我们或反打我们。

因此，我们应该通过争取中三条价值来制定摊牌权益计划。我们跟注加注，希望翻牌拿到顶三条并获得回报。如果我们没中牌，我们大多会过牌 - 弃牌。

请注意，我们在这里玩 AAxx 就像我们用较差的边牌玩 KKxx 一样。我们只为获得中三条价值而玩，其他的就不多。在位置不佳的情况下过度玩低劣的 AAxx 是 PLO 中典型的初学者错误。

**示例 2.8.4：用投机手牌进行隔离**

您正在满员的 6-max $5PLO。MP（$5）翻牌后大多玩“不中就弃牌”的打法，他溜入，而您（$5）则​​在按钮位置拿到 ![9h](p/9h.jpg) ![7s](p/7s.jpg) ![6s](p/6s.jpg) ![4h](p/4h.jpg) 。您的计划是什么？

首先，根据我们的分类方案，我们注意到这手起手牌从技术上来说属于“垃圾”牌力类别。原因是顶部有缺口（加上底部也有缺口），这使得这手牌在多人需要中牌赢下底池扑克场景中价值较低。

但在这种情况下，我们会“手动改变”分类系统，因为我们不需要围绕摊牌权益进行规划。我们对一个跟注者有位置优势，我们可以加注以隔离对手并在有位置的情况下单挑底池。这将为我们带来良好的偷牌权益，尤其是面对弱而直白的玩家（MP 就是）。

除了偷牌权益之外，我们还有一手具有不错潜力的手牌，即使其中很多是非坚果牌。但面对少数（希望只有一个）对手时，非坚果牌就不那么令人担忧了。此外，有位置会让我们的非坚果牌在翻牌后更容易打。

**示例 2.8.5：在多人底池中对投机手牌说“不谢谢”**

您正在满员的 6-max $5PLO。UTG（$5）加注，按钮（$6.50）跟注，SB（$5.60）跟注，您（$6.10）在大盲注位置看到 ![Jh](p/Jh.jpg) ![Td](p/Td.jpg) ![7s](p/7s.jpg) ![6c](p/6c.jpg) 。您的计划是什么？

您有一张不同花色的连牌，中间有双缺口。缺少同花足以将这手牌降级到“边缘”类别，与顺子结构的质量无关，顺子结构是投机性的。所以我们的摊牌权益
相当差。

接下来，我们来看看我们所处的场景。我们在多人底池中处于不利位置，而且我们不存在偷牌权益。所以如果我们选择玩，我们将不得不围绕摊牌权益制定计划。但是我们的手牌不适合在多人大底池中玩中牌赢下底池，所以这是一个轻松的弃牌。

这个例子和前面的例子说明了翻牌后打法如何决定翻牌前打法。在前面的例子中，我们有机会计划偷牌，所以我们加注一手投机牌来隔离。在这个例子中，我们被迫用弱手牌计划摊牌权益，这决定了我们因为摊牌权益差而弃牌。

**示例 2.8.6 弃牌投机手牌，然后 3-bet**

您正在满员的 6-max $5PLO。对手弃牌，您（$5）在按钮位置用 ![Kh](p/Kh.jpg) ![Ks](p/Ks.jpg) ![Jd](p/Jd.jpg) ![3c](p/3c.jpg) 加注底池。SB（$4.30）跟注，BB（$5） 3-bet 至 $0.68。您的计划是什么？

您有一对大牌，但边牌较差。这是一手投机手牌，但按钮位置会自动加注。小盲注玩家跟注您，然后大盲注玩家 3-bet。这表明对手的牌力很强，AAxx 将占大盲注范围的很大一部分。

您拥有与 AAxx 对抗时最糟糕的手牌结构，即一对大牌和不协调的边牌，而我们在与随机 AAxx 对抗时只有 25% 的翻牌前权益（ProPokerTolls 计算）。

跟注 3-bet 是为了摊牌权益（中三条）而战，因为我们几乎很难翻牌中任何值得继续的牌，而且由于底池中有第三名玩家，我们的偷牌权益很差。跟注希望中三条的问题是，当我们的 1/7 筹码在翻牌前进入底池时，我们无法获得所需的隐含赔率。因此，我们弃牌给 3-bet。

这是一个初学者过于频繁跟注而没有翻牌后打法计划的情况的例子。他们觉得他们的一对大牌太好了，不能弃牌，所以他们跟注，希望翻牌后击中三条。通过这样做，他们只是让自己在大多数时候被挤出大底池。

当您怀疑自己面对的是 AAxx 时，没有辅助边牌的大对子是最糟糕的手牌结构，在第 3 部分中，我们将通过查看所谓的翻牌权益分布来详细研究这种情况。我们将 AA 与各种起手牌结构进行对比，并研究哪些结构可以在翻牌前面对 3-bet 后继续跟注，哪些结构面对 AAxx 便宜地看到翻牌时可以继续（带有较差边牌的高对子肯定更喜欢后者）。

### 2.9 总结

在本文中，我们为 PLO 翻牌前打下了基础。我们定义了一个简单的整体核心策略，讨论了起手牌强度的各种组成部分，并根据结构和强度定义了两种起手牌分类方案。

从一开始，我们就强调了始终为每一个决定提供理由的重要性，并制定一个总体游戏计划，将我们选择玩的手牌的翻牌前打法和翻牌后打法联系在一起。我们不需要一个完美的计划，只要我们始终有一个基于合理扑克逻辑的合理计划即可。

掌握了本文讨论的概念，您应该能够驾驭 PLO 翻牌前场景，而不会犯很多大错误。我建议您在玩游戏时养成结构化思维的习惯。慢慢来，用语言表达你的想法（“我跟注是因为......”）

在第 3 部分中，我们将继续讨论 PLO 翻牌前策略，并讨论一些更高级的概念，例如：
- 更多关于翻牌前和翻牌后玩法之间的联系
- 3-bet
- 翻牌权益分布及其对起手牌可玩性的重要性
