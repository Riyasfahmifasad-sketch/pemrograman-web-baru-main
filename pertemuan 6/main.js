let number= document.getElementById("nomor:");
let btnTambaah = document.getElementById("tambah");
let btnKurang = document.getElementById("kurang");
// let num2 = prompt("Masukkan angka 2:");
// let number = document.getElementById("nomor");
// let newtext = document.createElement("p");
// let hasil = parseInt(num1) + parseInt(num2);
// newtext.innerText = `Hasil penjumlahan ${num1} + ${num2} = ${hasil}`;
// number.innerText = hasil;
// number.appendChild(newtext);
let count= 0;
function tambah(){
    count++;
    number.innerText = count;
}
function kurang(){
    count--;
    number.innerText = count;
}
btnTambaah.addEventListener("click", tambah);
btnKurang.addEventListener("click", kurang);