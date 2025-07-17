const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function KiemTraNguyenTo(n)
{
    if (n < 2) return false
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}

rl.question("Nhập số nguyên dương n: ", function(input) {
    let Nhap1 = parseInt(input);
    if (Nhap1 < 0 || isNaN(Nhap1)) {
        console.log("Số nguyên dương không hợp lệ");
    } else {
        if (KiemTraNguyenTo(Nhap1))
            console.log(Nhap1 + " là số nguyên tố");
        else
            console.log(Nhap1 + " không phải là số nguyên tố");
    }
    rl.close();
});