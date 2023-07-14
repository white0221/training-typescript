## タプル型

要素数が固定され、要素ごとに型を指定できる配列型

```
const tuple: [string, number] = ['hoge', 12345];
```

=> オブジェクト型を使ったほうが名前もつけれるのでその方が良いことが多い

## 分割代入

プロパティ名と変数名が同じなら簡易的に記述できる

```
// 代入
const hoge = obj.hoge;
const fuga = obj.fuga;

// 分割代入
const { hoge, fuga } = obj;

// 分割指定で型指定
const {
  hoge: HogeProps,
  fuga: FugaProps,
} = obj;
```

### 分割代入のネスト

```
const nestedObj = {
  number: 12345,
  itandi: {
    hoge: 'fuga'
  },
};

const { number, itandi: { hoge } } = nestedObj;
console.log(number, hoge);
```

### 配列の分割代入

```
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [, second, , , , , seventh, , ,tenth];
```

### 分割代入のデフォルト値

```
type Props = { hoge?: number };
const obj1: Props = {};
const obj2: Props = { hoge: 123 };

const { hoge = 0 } = obj1;
console.log(hoge);
const { hoge: fuga = 0 } = obj2;
console.log(fuga);
```

### restパターンで残りのオブジェクトを取得する

```
const obj = {
  hoge: 123,
  fuga: 456,
  fooo: 'string',
};

const { hoge, ...rest } = obj;
console.log(hoge);
console.log(rest);
```

## Map
オブジェクトのような連想配列
オブジェクトはキーにはプリミティブしか使えなかったが、オブジェクトも使えるようになる

```
const map: Map<string, number> = new Map();
map.set('hoge', 12334);
console.log(map.get('hoge'));
console.log(map.get('fuga'));
```

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Map

## Set

値のコレクション（集合）を扱える
重複した値は入れれない

```
const set: Set<number> = new Set();
set.add(55);
console.log([...set]);
```

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Set


EOF