'use strict';
//厳密なエラーチェックを行う命令






/*ブロックで囲むについて*/
//複数のスクリプトを使う場合にはブロック（{}）で囲む必要がある
// {
//   const x = 100;
//   console.log(x);
// }



/*スコープ（有効範囲）*/
//ブロックのあるとこでは定数や変数のスコープが分かれる
// const x = 2;

// function f(){
//   // const x = 1;
//   console.log(x);
// }

// f();
// console.log(x);



/*アロー関数*/
// const sum = (a,b,c) => a + b + c;

// const total = sum(1,2,3) + sum(3,4,5);
// console.log(total);

// const double = function(a){
//   return a * 2;
// };
// const double = a => a * 2
// console.log(double(12));



/*関数宣言と関数式*/
/*関数宣言
function 関数名（仮引数,仮引数, ....）{
  処理;
  処理;
  return 返り値;
}
呼び出し
関数名（実引数,実引数,...）;

関数式
const 定数名　= function(仮引数,仮引数, ....){
  処理;
  処理;
  return 返り値;
};
呼び出し
定数名（実引数,実引数,...）; */

// function sum (a,b,c){
//   return a + b + c;
// }

// const sum = function(a,b,c){
//   return a + b + c;
// };

// const total = sum(1,2,3) + sum(3,4,5);
// console.log(total);




/*returnについて（戻り値）*/
// function sum(a,b,c){
//   // console.log(a + b + c);
//   return a + b + c;
//   console.log(a + b + c);
// }

// // sum(1,2,3);
// // sum(3,4,5);

// const total = sum(1,2,3) + sum(3,4,5); // 18
// // console.log(total);

/*引数について*/
// function showAd(message = 'Ad'){ // 仮引数
//   console.log('----------');
//   console.log(`----${message}----`);
//   console.log('----------');
// }

// showAd('Header AD'); // 実引数
// console.log('Tom is great!');
// console.log('Bob is great!');
// showAd('Ad');
// showAd();
// console.log('Steve is great!');
// console.log('Richard is great!');
// showAd('Footer Ad');


/*関数の定義と呼び出し*/
// function showAd(){
//   console.log('----------');
//   console.log('----Ad----');
//   console.log('----------');
// }

// showAd();
// console.log('Tom is great!');
// console.log('Bob is great!');
// showAd();
// console.log('Steve is great!');
// console.log('Richard is great!');
// showAd();



/*continueとbreakについて*/
// for (let i = 1; i <= 10; i++){
  // if (i === 4){
  //   if (i % 3 === 0){
  //   continue;
  // }
//   if (i === 4){
//     break;
//   }
//   console.log(i);
// }



/*while文について*/
// let hp = 100;

// while (hp > 0){
//   console.log(`${hp}HP left!`);
//   hp -= 15;
// }



/*do while構文について*/
// let hp = -50;

// do{
//   console.log(`${hp}HP left!`);
//   hp -= 15;
// }while (hp > 0);


/*for文とテンプレートリテラル*/
// for (let i = 1; i <= 10; i++){
//   // console.log('hello');
//   // console.log('hello' + i);
//   console.log(`hello${i}`);
// }



/*switch文*/
// const signal = 'pink';

// switch (signal){
//   case 'red':
//     console.log('Stop!');
//     break;
//   case 'yellow':
//     console.log('Caution!');
//     break;
//   case 'blue':
//   case 'green':
//     console.log('Go!');
//     break;
//   default:
//     console.log('Wrong signal!');
//     break;
// }



/*論理演算子*/
// const score = 60;
// const name = 'taguti';
// && なおかつ(AND)
// || もしくは(OR)
// ! ~ではない(NOT)
// if (score >= 50 && name === 'taguti'){
//   console.log('Good job!');
// }



/*条件演算子について*/
// 条件式 ？ trueの処理：falseの処理
// const score = 85;
// score >= 80 ? console.log('Great!') : console.log('OK...');



/*if文について*/
//if(条件式A){
//   trueだった時の処理
// }else if(条件式B){
//   AがfalseでBがtrueだった時の処理
// }else{
//   それ以外の場合の処理
// }

// const score = 40;

// if(score >= 80){
//   console.log('Great!');
// }else if(score >=60){
//   console.log('Good.');
// }else{
//   console.log('OK...');
// }

//{}で囲った部分はブロックと呼ばれる
//命令がブロックで終わる場合には;を付けない



/* データ型について */
// const price = 1200;

// console.log(price > 1000); //true
// console.log(price < 1000); //false
// console.log(price >= 1000); //true
// console.log(price <= 1000); //false
// console.log(price === 1000); //false
// console.log(price !== 1000); //true

// false <- 0,null,undefined,'',false
//true <- それ以外

// console.log(Boolean(0));
// console.log(Boolean('hello'));

// console.log('5' * 3);
// console.log('5' - '3');

// console.log('5' + 3);
// console.log(parseInt('5',10) + 3);
//paseInt(X,Y)はXをY進法で数値に変換する命令

// console.log(parseInt('hello',10));
// // データ型の種類
// // 文字列(String)
// // 数値(Number)
// // Undefined
// // Null
// // 真偽値(Boolean)
// // オブジェクト(Object)

// console.log(typeof 'hello');
// console.log(typeof 5);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);



/* 定数と変数について */
// let price = 500;

// //price = price + 100;
// price += 100; //600

// //price = price * 2;
// price *= 2; //1200

// //price = price + 1;
// //price += 1;
// price++; //1201

// //price -= 1;
// price--; //1200

// console.log(price);


//定数 const
//変数 let var
//命名規則
//英数字、$,_のみ
//数値から始められない
//大文字小文字は区別される
//予約語は使えない（既にあるもの）


// let price = 150;
// console.log(price * 140);
// console.log(price * 160);

// price = 170;
// console.log(price * 140);
// console.log(price * 160);



/* 比較演算子について */
// console.log(10 + 3); // 13
// console.log(10 - 3); // 7
// console.log(10 * 3); // 30
// console.log(10 / 3); // 3.333...
// console.log(10 % 3); // 1
// console.log(10 ** 3); // 1000

// console.log(2 + 10 * 3); // 32
// console.log((2 + 10) * 3); // 36



/* console.logについて */
// console.log("hello");
// console.log("hello");

// console.log('it's me!');
// console.log("it's me!");
// console.log("it\'s me!");

// console.log('hel\nlo wor\tld');
// // \nは改行、\tはスペース（タグ）をつけることができる

// console.log('hello' + 'world');
// // +は文字列同士を連結することができる



/* コメントアウトについて */
//コメント

/*
コメント
コメント
コメント
*/

//console.log("Hello World from main.js!");
//コンソールに表示する命令