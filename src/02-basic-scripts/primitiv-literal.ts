import { createInterface } from "readline";

// 第2章
// 基本的な文法・基本的な型

// プリミティブ
// 文字列, 数値, 真偽値, Bigint, null, undefined, Symbol

// number型では、整数、小数の区分がない

const binary: number = 0b1010;    // 二進数リテラル
const octal: number = 0o775;      // 八進数リテラル
const hexadecimal: number = 0xff; // 十六進数リテラル

console.log(binary, octal, hexadecimal);

const big: number = 1e8;          // 1の後ろに0が8個で、100,000,000となる
const small: number = 4e-5;       // 4の前に0が5個で、0.00004となる
const milion: number = 1_000_000; // 数字リテラルは数字の間に _ を挟むことができる
console.log(big, small, milion);

// コラム
// number型は IEEE754倍精度浮動小数点数で、一般的なdouble型と同じ
// https://ja.wikipedia.org/wiki/IEEE_754

// Bigint
// ES2020から搭載されている
// 一般的な計算はnumber型の方が高速なので、実数値で53ビット以上を用いる場合のみ使いのが良い

const bignum: bigint = (123n + 456n) * 2n;
console.log(bignum);
// numberはnumber型同士、bigintはbigint型同士でしか計算できない

// 文字リテラル
const str: string = 'Hello, World!';       // シングルクォートでもダブルクォートでも同じ意味になる
const templateStr: string = `str: ${str}`; // テンプレートリテラルで変数を埋め込める
console.log(str, templateStr);

/// エスケープシーケンス
const str1: string = 'Hello \\WORLD/';       // \ でエスケープ
const str2: string = 'Hello \u{796d} world'; // Unicodeを埋め込める
console.log(str1, str2);

// 真偽値リテラル
const no: boolean = false;
const yes: boolean = true;
console.log(yes, no);

// null, undefined リテラル
const val1: null = null;
const val2: undefined = undefined; // <= 筆者はこちらをメインで使っているらしい
console.log(val1, val2);

// プリミティブ同士の変換
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('文字列を入力してください: ', (line: string) => {
  // 文字列が入力されるとここが実行される
  const val1 = line + 1000;         // string型に暗黙変換される
  const val2 = Number(line) + 1000; // number型で計算する。ただし、lineが数値に変換できない値の時には `NaN` になる
  console.log(`「${line}」が入力されました`);
  console.log(`計算しました ${val1}, ${val2}`);
  rl.close();
});

console.log(
  Boolean(123),       // true
  Boolean(0),         // false
  Boolean(1n),        // true
  Boolean(0n),        // false
  Boolean(''),        // false
  Boolean('hoge'),    // true
  Boolean(null),      // false
  Boolean(undefined), // false
);
