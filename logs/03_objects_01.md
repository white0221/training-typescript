# 第3章オブジェクトについて

## オブジェクトとは

### 基本形
まずは基本から

```:js
const propertyName = 'isAdmin';
const value = false;
const user = {
  id: 'white0221',       // 識別子
  'icon': 'url'          // 文字列リテラル
  0.2: 25,               // 数値リテラル
  [propertyName]: value, // 動的なプロパティ名
};

console.log(user.id);
// => 'white0221'
console.log(user[true ? 'id' : 'icon'])
// => 'white0221'
```

### 省略記法
プロパティ名と変数が同じなら省略して書ける

```
const name = 'white0221';
const age = 25;
const user = { name, age };
```

### スプレッド構文
オブジェクト値を複製(値渡し)できる。オブジェクト生成時に使えば後勝ちで値を上書きできる。

```
const obj1 = {
  foo: 123,
  bar: 456,
};

const obj2 = {
  ...obj1,
  hoge: 987,
};

console.log(obj2);
// => { foo: 123, bar: 456, hoge: 987 }

--

const obj3 = {
  foo: 123,
  bar: 456,
};

// fooは上書きされて消えるのでコンパイルエラー
const obj4 = {
  foo: -1,
  ...obj3,
};

--

const obj5 = {
  foo: 123,
  bar: 456,
};

const obj6 = {
  foo: -1,
};

const obj7 = {
  ...obj5,
  ...obj6,
};

console.log(obj7);
// => { foo: -1, bar: 456 }
```

## オブジェクトの型

```
const user: {
  readonly name: string; // readonly属性をつけれる
  age: number;
  icon?: string;         // optional propertyで、iconの型は string | undefined になる
} = {
  name: 'white0221',
  age: 25,
};
```

### 部分型

下記の `FooBarBaz` 型は `FooBar` 型の部分型で、FooBarBaz型の値は、FooBar型の値でもある。

```
type FooBar = {
  foo: string;
  bar: number;
};
type FooBarBaz = {
  foo: string;
  bar: number;
  baz: boolean;
};

const obj: FooBarBaz = {
  foo: 'hoge',
  bar: 1,
  baz: true,
};

const obj2: FooBar = obj; // OK
console.log(obj.baz)      // OK
console.log(obj2.baz)     // コンパイルエラー
```


## 型引数を持つ型

### ジェネリック型

```
type User<T> = {
  name: string;
  child: T;
};

--

type Human = { name: string };
type Animal = { name: string };

type Family<Parent, Child extends Human, Pet = Animal> = {
  father: Parent;
  mother: Parent;
  child: Child;
  pet: Pet;
};

const obj: Family<string, { name: string }> = {
  father: 'papa',
  mother: 'mama',
  child: { name: 'child' },
  pet: { name: 'wanwano' }
};

// Familyに引数が無いのでエラー
const obj: Family = {省略};
```
























EOF