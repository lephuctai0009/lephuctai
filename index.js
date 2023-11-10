// Bài tập 1
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function tinhTongSoNguyenTo() {
    const a = parseInt(document.getElementById("inputA").value);
    const b = parseInt(document.getElementById("inputB").value);
    let tong = 0;

    if (a >= b) {
        document.getElementById("ketQua").innerHTML = "Vui lòng nhập số b lớn hơn số a.";
    } else {
        for (let i = a; i <= b; i++) {
            if (isPrime(i)) {
                tong += i;
            }
        }
        document.getElementById("ketQua").innerHTML = `Tổng các số nguyên tố từ ${a} đến ${b} là: ${tong}`;
    }
}
// Bài tập 2
function inTamGiac() {
    const soHang = parseInt(document.getElementById("soHangInput").value);
    let tamGiac = '';
    for (let i = 1; i <= soHang; i++) {
        for (let j = 1; j <= i; j++) {
            tamGiac += '* ';
        }
        tamGiac += '<br>';
    }
    document.getElementById('ketQua').innerHTML = tamGiac;
    }