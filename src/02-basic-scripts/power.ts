// 2.6 力試し

// FizzBuzz
// 3と5と倍数ではない時、数値をそのまま出力する
// 3の倍数で、5の倍数ではない時、Fizzを出力する
// 3の倍数ではなく、5の倍数の時、Buzzを出力する
// 3の倍数で、5の倍数の時、FizzBuzzを出力する

for ( let i = 0; i < 100; i++ ) {
  if ( i % 3 === 0 && i % 5 === 0 ) {
    console.log('FizzBuzz');
  } else if ( i % 3 === 0 ) {
    console.log('Fizz');
  } else if ( i % 5 === 0 ) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

