//変数numが1以上の数値ということを宣言、代入
let num = 3;

//変数numの値が3と5の倍数の場合「3と5の倍数です」と表記する
if ((num % 3) === 0 && (num % 5) === 0) {
    console.log('3と5の倍数です');
}

//変数numの値が3の倍数の場合「3の倍数です」と表記する
else if (num % 3 === 0) {
    console.log('3の倍数です');
}

//変数numの値が5の倍数の場合「5の倍数です」と表記する
else if (num % 5 === 0) {
    console.log('5の倍数です');
}

//それ以外の場合、変数numの値を出力する
else {
    console.log(num);
}