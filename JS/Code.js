var nama = prompt("Ketik Nama Lengkap : ", "");
document.write("<p> "+ nama + "</p>")


var nilai = prompt("Ketik nilai anda : ", "");

if (nilai < 70) {
    document.write("Nilai Tidak Kompeten");
} 
else{
    document.write("Nilai Kompeten");

}