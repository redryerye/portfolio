---
title: 2020を振り返る
date: "2021-01-02T23:59:00"
ogimage: "./sunrise.png"
---

年の振り返りは年の瀬にやるものだけれど、

12月28日にさあやろう -> 箱根へ一人温泉 -> 完全に整う -> ブログを作り替える -> 初日の出 -> DNS浸透待ちをしていたらもう2日になってしまった。

![初日の出](./sunrise.png)
<p class="image-desc">浜石岳からの初日の出は良かった</p>

さて、2020年を振り返えっていくが、淡々と変遷を辿っていくのではなく出会って良かったモノや技術などをピックアップしていく。

## Bedtime Tea
まずは愛用した飲みもの。

中々寝付けないと悩んでいたときに発見した[ハーブティ](https://yogiproducts.com/teas/herbal-teas/bedtime/)。<br>
程よい甘さでとても美味しいし、全然飽きない。
リラックスして心身共に寝る準備に入れるのでとてもいい。

カルディで買えます。

## Datomic
前職に熱烈なClojurianが居て、その方の布教によって使うことになったDBMS、[Datomic](https://www.datomic.com/)。

クエリ言語がDatalogで、これが非常に楽しい。<br>
最初、何も分からず露頭に迷っていたところに[このチュートリアル](https://learn-datalog-today-ja.herokuapp.com/)を発見して、完全に理解した。<br>
DatomicはDatomという5つのフィールドから成り立つ特有のデータ構造をしていて、これをコネコネすることで柔軟性の高いクエリが可能になる。

この時初めてClojureを使ったが、今までOOPを使い続けてきた身としては非常に興味深い世界だった。<br>
デバッグする時に関数単位でテストできるのは便利だ。

一見わくわくする開発のように聞こえるが、実際はつらいことが多かった。

マイナーなフレームワークであるため、とにかくネットに転がっている情報が少ない。（廃れているわけではないので、コミュニティは存在する。Datomic Developers Forumで質問すると[jaretさん](https://forum.datomic.com/u/jaret/summary)が迅速に対応してくれて、Datomicはこの人のおかげで成り立ってるのかと思った）<br>
すべての面を考慮して「使いやすい技術」を選ばないと辛いことが多いなと、技術選定の難しさを噛み締めた。

## [Dark](https://darklang.com/)
Clojureの父であるRich Hickeyが言っている[「SimpleはEasyとは違う」](https://www.youtube.com/watch?v=oytL881p-nQ)という話がよく表されているバックエンド。

AWSの分かりにくいコンソールを眺めることなく一瞬でサーバレスバックエンドを作れてしまう。面倒なところが上手く単純化されている。<br>
ボット作ったりCRUDアプリを作るならこれを使いたいところ。

ただ、まだまだ発展途上のサービスであるため、細かいところに手が届かないことや不完全な箇所がが少々ある。困ったときは[DarklangのSlack](http://darklang.com/slack-invite)を見よう。<br>
このサービスを収益化するのも[大変なこと](https://blog.darklang.com/dark-devlog-1-fresh-start/)が色々あるそう。

ただコンセプトは非常に面白いし、技術的にも面白いことをしているので長い目でチェックしていきたい。

## Retool
UIをカスタマイズしてデータベースの情報を簡単に可視化するツール。<br>
これで社内ツールを作成した。

APIが用意されていればUIを組み合わせるだけで容易に管理ツールが作れる。<br>
用意されているUIコンポーネントを使えば大体のことは出来る。

最近流行りのNo-codeの文脈に近いが、大きな違いは開発者向けであるという点。<br>
データベースから取ってきたデータをJavascriptを使って変形して、UIコンポーネントにデータを渡したりする。<br>
なので、あくまでUIにかけるコストを削減するためのツール。

会社としても順調そうで、これからエンタープライズ版も強化してツールとして伸びそう。

## PointFree
現職で[The Composable Architecture](https://github.com/pointfreeco/swift-composable-architecture)を使用しているため、かなり見た。

[PointFree](https://www.pointfree.co/)はTCAの生みの親である開発者二人が提供しているSwiftに関する動画のサブスクサービスで、有益情報がてんこ盛りである。

TCAに限らずSwiftの基本機能について深堀る。クオリティも高い。素晴らしい。

## 人生
今年はしばらくいたスタートアップを辞めて、初の転職活動をした。

嬉しいことに最終的には、転職活動当初は全く予想をしていなかった会社からオファーをいただき、戦闘力が高い方々と楽しく開発している。<br>
<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">今日からカンカクにジョインしました！美味しいコーヒー飲みながらわいわいやっていきます〜☕️麻布十番・北参道にカフェがあるので是非！！！</p>&mdash; yuki (@redryerye) <a href="https://twitter.com/redryerye/status/1318136045095985153?ref_src=twsrc%5Etfw">October 19, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

[モバイルオーダーアプリ](https://kankak.com/coffee-app.html)を開発すると同時に店舗も作っていて、ひたすらSaasを作る感じとは全く違うので学びが多い。
[美味しいコーヒーが飲める](https://tailoredcafe.jp/)ので良かったら遊びに来て欲しい。

転職と同時に引っ越しをした。

インターネットの速度が7mbpsだった元の家から500mbpsになった。実に71倍。

こんなところ。<br>
今年の目標は達成した気分になってしまうので書くのを控える。

楽しみたい。