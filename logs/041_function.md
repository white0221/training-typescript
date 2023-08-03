

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




EOF