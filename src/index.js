/**
 * const,let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "varを上書き"
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "varの再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // let変数は上書き可能
// val2 = "letを上書き";
// console.log(val2);

// // let変数は再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可能
// val3 = "constを上書き"

// // const変数は再宣言不可能/
// const val3 = "constを再宣言";

// // constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name : "AAA",
//   age : 20,
// };
// val4.name = "KKK";
// val4.adress = "Tokyo";
// console.log(val4);

// // // constで定義したは配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "QQQ";
// const age = 20;
// // 「私の名前はQQQです。年齢は20歳です。」

// // 従来の方法
// const msg1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(msg1);

// // テンプレート文字列を用いた方法
// const msg2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(msg2);

/**
 * アロー関数
 */

// // 従来の方法
// function func1(str) {
//   return str;
// }
// console.log(func1("TTT!"));
// const func2 = function(str) {
//   return str;
// }
// console.log(func2("JJJ!"));

// // アロー関数
// const func3 = (str) => {
//   return str;
// }
// console.log(func3("VVV?"));
// // 処理が一行のものは省略可能。
// const func4 = (str) => str;
// console.log(func4("UUU?"));

// const func5 = (num1, num2) => num1 + num2;
// console.log(func5(10, 20));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "Swift",
//   age: 50
// };
// const msg1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(msg1);

// // myProfileが冗長なので↓
// const { name, age } = myProfile;
// const msg2 = `私の名前は${name}だよ。年齢は${age}歳だよ。`;
// console.log(msg2);

// const myProfile = ['Swift', 50];

// const msg3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(msg3);

// const { name, age } = myProfile;
// const msg4 = `私の名前は${name}だよ。年齢は${age}歳だよ。`;
// console.log(msg4);

/**
 * デフォルト値、引数など
 */

const sayHello = (name = "Swift") => console.log(`前を見なさい。${name}さん。`);
sayHello();
sayHello("Nietzsche");

/**
 * スプレッド構文
 */
// // 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 *  */
// const nameArr = ["Swift", "Kafka", "Orwell"];
// for(let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 0;
// })
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) =>{
//   if (name === "Swift") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueのとき : 条件がfalseのとき
