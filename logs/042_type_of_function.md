

４.2章　関数の型

関数の型を関数型という

## 関数型の記法

関数型は `(引数のリスト) => 戻り値の型` という形を持ち、引数のリストは `引数名: 型` をコンマ区切りにしたものになる。

例
```
const xRepeat = (num: number): string => "x".repeat(num);

// この関数型は (num: number) => string になる
```

「0個以上の任意の数の数値を受け取って、数値を返す関数」の型はrest引数の構文を用いて `(...args: number[]) => number` のように表現される。

関数型も型の一種なので type 構文で命名できる。

```
type F = (repeatNum: number) => string;

const xRepeat: F = (num: number): string => "x".repeat(num);
```


また、型宣言時の引数名は何でも良く、型チェックとしては問題なく動作する。例えば、コンパイラ的に下記は同義になる。

```
type F = (repeatNum: number) => string;
type F = (foo: number) => string;
```

なぜ引数名をちゃんと付けるかというと、読みやすさもあるが、エディタの支援機能が使えるため。

=> playground で確認


## 戻り値の型注釈は省略可能

今まで挙げた例では、戻り値の型は必ず表記していましたが、型推論があるため省略も可能になる。

```
// 再掲: const xRepeat = (num: number): string => "x".repeat(num);

const xRepeat = (num: number) => "x".repeat(num);
// `: string` が無くても、typescriptの型推論によって、stringが返る判定になる
```

## 戻り値の型注釈は省略するべきか
- 明示する
- 明示せず型推論に任せる

=> プロダクト内では書いてあったり書いてなかったり。

明示する大きなメリットとして、関数内部で返り値の型に対して型チェックを働かせられる点にある。関数の実装時、実装ミスで戻り値(returnの書き忘れなど)があった際に戻り値の型が明示されていなければ、それが戻り値であると型推論されてしまう。明示的に書くことでコンパイルエラーになる気づくことができる。


例えば、戻り値の型を明示していて、returnを書き忘れた場合、定義した関数でコンパイルエラーが発生する。

```
function range(min: number, max: number): number[] {
  const result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
}

const arr = range(5, 10);
for (const value of arr) console.log(value);
```

としていた時に、エラーは関数で発生する。
=> playground で確認

ただし、明示しなかった場合、呼び出した時にエラーが起きる

```
function range(min: number, max: number) {
  const result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
}

const arr = range(5, 10);
for (const value of arr) console.log(value);
```

としていると、エラーは for の呼び出し時に発生する。
=> playground で確認

同じミスをして、修正するべき点は同じなのに、別のエラーが発生している。エラーとしては関数側の問題なので、関数側でエラーが起きてほしくいため、関数型を明示しなかっただけで原因特定が複雑な状態になることがある。

開発者がTypeScriptに型注釈という情報を渡さなかったがために、コンパイラが解釈を間違えてしまった例になる。コンパイラに開発者の意図を正しく理解してもらうためにも、型注釈は書いたほうが安全で開発速度が上がる。


## コールシグネチャによる関数型
コールシグネチャはオブジェクト型の中で使用できる構文で `(引数リスト): 戻り値の型;` という形です。コールシグネチャを用いると「プロパティを持った関数」の型を表現できる。
現在はあまり使われない実装になっているが、javascriptの頃、jQueryではよく扱われていた。

```
type MyFunc = {
  isUsed?: boolean;
  (arg: number): void;
};

const double: MyFunc = (arg: number) => {
  console.log(arg * 2);
};

// double は isUsedプロパティを持つ
double.isUsed = true;
console.log(double.isUsed);
// double は仮数として呼び出せる
double(1000);
```

EOF