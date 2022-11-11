const mtk = 0;
const bahasaIndonesia = 90;
const bahasaInggris = 80;
const ipa = 90;
//input memiliki 4 nilai (mtk, bahasaIndonesia, bahasaInggris, ipa) yang harus diisi

if (!mtk || !bahasaIndonesia || !bahasaInggris || !ipa) { // jika salah satu ada yang tidak diisi (true) maka error
    console.log("Semua Nilai Harus Terisi !")
} else { //jika semua terisi (false) maka akan menjalankan logic dibawah
    const total = mtk + bahasaIndonesia + bahasaInggris + ipa;
    const average = total / 4;
    if (average >= 90 && average <= 100) {
        console.log(`Rata-rata = ${average}`)
        console.log(`Grade = A`) //average rentang 90-100 memiliki grade A
    } else if (average >= 80 && average <= 89) {
        console.log(`Rata-rata = ${average}`)
        console.log(`Grade = B`) //average rentang 80-89  memiliki grade B
    } else if (average >= 70 && average <= 79) {
        console.log(`Rata-rata = ${average}`)
        console.log(`Grade = C`) //average rentang 70-79  memiliki grade C
    } else if (average >= 60 && average <= 69) {
        console.log(`Rata-rata = ${average}`)
        console.log(`Grade = D`) //average rentang 60-69  memiliki grade D
    } else if (average >= 0 && average <= 59) {
        console.log(`Rata-rata = ${average}`)
        console.log(`Grade = E`) //average rentang 0-59 memiliki grade E
    } else {
        console.log(`Nilai yang dimasukan salah`) //average tidak dalam rentang 0-100
    }
}