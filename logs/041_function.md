

４章　関数

## 関数宣言

```
function range(min: number, max: number): number[] {
  const result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}

console.log(range(5, 10)); // [5, 6, 7, 8, 9, 10]
```

## 戻り値の型がvoid型

```
function hello(n: number): void {
  for (let i = 0; i < n; i ++) {
    console.log('hello');
  }
}

hello(5);
```

## 関数式

```
type Human = {
  height: number;
  weight: number;
};

const calcBmi = function (human: Human): number {
  return human.weight / human.height ** 2;
};

const man: Human = { height: 2.0, weight: 100 };
console.log(calcBmi(man));
```

### 分割代入

```
type Human = {
  height: number;
  weight: number;
};

const calcBmi = function ({ height, weight }: Human): number {
  return weight / height ** 2;
};

const man: Human = { height: 2.0, weight: 100 };
console.log(calcBmi(man));
```

## アロー関数式

```
type Human = {
  height: number;
  weight: number;
};

const calcBmi = ({ height, weight }: Human): number => {
  return weight / height ** 2;
};














const calcBmi = ({ height, weight }: Human): number =>
  weight / height ** 2;
```

## 可変長引数の宣言
rest引数構文を用いて実現できるやつ

```
const sum = (...args: number[]): number => {
  let result = 0;
  for (const num of args) {
    result += num;
  }
  return result;
};

console.log(sum(1, 10, 100)); // 111
console.log(sum(123, 456)); // 579
console.log(sum()); // 0
```

rest引数なので、配列で与えられた最初の値だけ取り出したりできる

```
const sum = (base: number, ...args: number[]): number => {
  let result = base * 1000;
  for (const num of args) {
    result += num;
  }
  return result;
}

console.log(sum(1, 10, 100)); // 1110
console.log(sum(123, 456)); // 123456
console.log(sum()); // quiz?
```

## スプレッド構文を用いた関数宣言

```
const sum = (...args: number[]): number => {
  let result = 0;
  for (const num of args) {
    result += num;
  }
  return result;
}

const nums = [1, 2, 3, 4, 5];
console.log(sum(...nums)); // 15
```

可変長引数と一緒に使われがち


## オプショナル引数

```
const toLowerOrUpper = (str: string, upper?: boolean): string => {
  if (upper) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
}

console.log(toLowerOrUpper("Hello"));        // "hello"
console.log(toLowerOrUpper("Hello", false)); // "hello"
console.log(toLowerOrUpper("Hello", true));  // "HELLO"


// 初期値指定
const toLowerOrUpper = (str: string, upper: boolean = false): string => {
  if (upper) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
}
```

## コールバック関数
関数の引数として、関数を渡すこと

```
type User = { name: string; age: number };
const getName = (user: User): string => user.name;
const users: User[] = [
  { name: "john", age: 87 },
  { name: "bob", age: 27 },
];

const names = users.map(getName);
console.log(names); // ["john", "bob"]
```

よくある：直接コールバック関数を指定する

```
type User = { name: string; age: number };
const users: User[] = [
  { name: "john", age: 87 },
  { name: "bob", age: 27 },
];

const names = users.map((user: User): string => user.name);
console.log(names); // ["john", "bob"]
```


EOF