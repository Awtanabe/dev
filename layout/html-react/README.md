This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## To do

-  ビューを作る
-  動作を作る　javascript 
-  コンポーネントを分ける

## メモ

- 画像の設置場所
　public配下
-  画像表示方法
　 img  src＝"画像名前"

- index.cssをheader.cssに変えたらバグった

- clearfix

http://creator.aainc.co.jp/archives/4721

この記事の場合　wrapにclear both使ってる
footerが隠れないように

<header>header</header>
<div class="wrap">
  <aside class="sideCol">sideCol</aside>
  <article class="mainCol">mainCol</article>
</div>
<footer>footer</footer>

- pタグ文字の改行
p .normal{
  width:300px;
}
.w-nomal{
  
  word-break: break-all;
}

https://techacademy.jp/magazine/9386

## 修正必要箇所

- navbarのアイコンの高さを統一
lineheightだとiconはうごかない