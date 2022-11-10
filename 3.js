const mtk = 0;
const bahasaIndonesia = 90;
const bahasaInggris = 80;
const ipa = 90;


if (!mtk || !bahasaIndonesia || !bahasaInggris || !ipa) {
    console.log("Semua Nilai Harus Terisi !")
} else {
    let total = mtk + bahasaIndonesia + bahasaInggris + ipa;
    let average = total / 4;
    if (average >= 90 && average <= 100) {
        console.log(`Rata-rata = ${average}`)
        console.log(`Grade = A`)
    } else if (average >= 80 && average <= 89) {
        console.log(`Rata-rata = ${average}`)
        console.log(`Grade = B`)
    } else if (average >= 70 && average <= 79) {
        console.log(`Rata-rata = ${average}`)
        console.log(`Grade = C`)
    } else if (average >= 60 && average <= 69) {
        console.log(`Rata-rata = ${average}`)
        console.log(`Grade = D`)
    } else if (average >= 0 && average <= 59) {
        console.log(`Rata-rata = ${average}`)
        console.log(`Grade = E`)
    } else {
        console.log(`Nilai yang dimasukan salah`)
    }
}