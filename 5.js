function changeChar(inputString) {
    let result='';
    
    if (typeof inputString !== "string") { //expresi if disini untuk memenuhi persyaratan type data harus string, jika bukan maka keluar error
        result="Tipe Data Teks Harus String !"
    } else { //jika inputstring adalah string maka akan menjalankan algoritma dibawah 
        for(let i = 0; i < inputString.length; i++) { //proses looping for
            if (inputString[i] === "a") { //jika proses loop true maka diterima oleh expresion if 
                result += "o"; //jika inputstring[i] = a maka akan dituliskan 'o'
            } else {
                result += inputString[i] //jika inputstring[i] != a maka akan dituliskan ulang
            }
        }
    }return result;
}

console.log(changeChar('jakarta'))
//expected output jokorto
