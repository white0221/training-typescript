// 2.4 演算子

// 演算子の構成要素をオペランドという
const x = 2;
const y = x + 1;
// x, 1 がそれぞれオペランド

// 二項演算子
// +, -, *, /, %, ** の6種類
// 単項演算子
// +, -, ++, -- の4種類
// 比較演算子
// <, >, <=, >= の4種類
// 等価演算子
// ==, !=, ===, !== の4種類

// 等価演算子は基本的に ===, !== を用いるべきだが、
// null, undefined をはじく、といった用途で
console.log((x === null || x === undefined) === (x == null));
// といったようにできる

// コラム
// 数値型であるNaNには比較、等価演算子、は使えない（だいたい false になる）
// NaNかどうかを判断するために
console.log(Number.isNaN(x));
// を用いる

// 論理演算子
// &&, ||, !, ??
// ??: ES2020で追加された新しい演算子
// (x ?? y) === ((x === null || x === undefined) ? y : x)

// 2.5 基本的な制御構文
// switch
// import { createInterface } from "readline";

// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// rl.question('Please input command: ', (name) => {
//   switch (name) {
//     case 'greet':
//       console.log('hello!');
//       break;
//     case 'cat':
//       console.log('anata ha cat habatsu desuka?');
//       console.log('yes');
//       break;
//     default:
//       console.log(`command \`${name}\` wo ninshiki dekimasen deshita.`);
//   }
//   rl.close();
// });


// while loop
let sum = 0;
let i = 1;
while ( i <= 100 ) {
  sum += i;
  i++;
}
console.log(sum);

//// break
sum = 0;
i = 1;
while ( true ) {
  if ( i > 100 ) break;
  sum += i;
  i += 1;
}

//// continue
i = 1;
sum = 0;
while ( i <= 100 ) {
  i++;
  if ( i % 2 === 1 ) {
    continue;
  }
  console.log(i);
};

// for loop
// for ( let 変数名 = 初期値; 条件式; 更新式) { 式 }
sum = 0;
for ( let i = 0; i <= 100; i++ ) {
  sum += i;
};
console.log(sum);
