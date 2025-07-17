const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function TinhTongSoLe(n){
    let tong = 0;
    for (let i = 1; i <= n; i += 2)
        tong += i;
    return tong;
}

rl.question("Nhập số nguyên dương n: ", function(input) {
    let Nhap2 = parseInt(input);
    if (Nhap2 < 0 || isNaN(Nhap2)) {
        console.log("Số nguyên dương không hợp lệ");
    } else {
        console.log("Tổng các số lẻ từ 1 đến " + Nhap2 + " là: " + TinhTongSoLe(Nhap2));
    }
    rl.close();
});