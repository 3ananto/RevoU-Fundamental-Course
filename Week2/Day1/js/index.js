function peringatan(){
    // let namaDepan = document.getElementById("nama-depan").value
    let angkaPertama = document.getElementById("angka-pertama").value
    // let namaBelakang = document.getElementById("nama-belakang").value
    let angkaKedua = document.getElementById("angka-kedua").value
    // console.log(namaDepan + " " + namaBelakang)
    // console.log('${namaDepan} ${namaBelakang}')
    let hasilPenjumlahan = parseInt(angkaPertama) + parseInt(angkaKedua);
    // console.log(hasilPenjumlahan)
    document.write('Hasilnya adalah : ' + hasilPenjumlahan)
}