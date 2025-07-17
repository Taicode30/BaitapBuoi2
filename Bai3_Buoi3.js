const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Nhập các số nguyên, cách nhau bởi dấu phẩy (ví dụ: 1,2,3,4): ", function(input) {
    const numbers = input.split(',').map(Number);

    console.log("Mảng bạn vừa nhập là:", numbers);

    const SoChan = numbers.filter(n => n % 2 === 0);
    const max = Math.max(...numbers);
    const SoDuong = numbers.filter(n => n > 0);

    console.log("Các số chẵn:", SoChan);
    console.log("Số lớn nhất:", max);
    console.log("Các số > 0:", SoDuong);

    rl.close();
});
