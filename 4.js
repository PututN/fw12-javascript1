function validatePalindrome(text) {
    
    if (text.length <= 2) { //expresi if jika kondisi panjang huruf kurang dari 2 maka akan error
        console.log(`Teks Harus Lebih Dari 2 Huruf !`)
    } else { //jika huruf lebih dari sama dengan 2 maka akan menjalankan alogritma dibawahnya
        let palindromeText='';
        for(let i = text.length-1; i >= 0; i--) { //proses looping untuk membalikan kata 
            palindromeText = palindromeText + text[i]
        }
        if(palindromeText===text) { //proses ecpresi if jika kondisinya palindrom/bukan
            console.log('Palindrome')
        } else {
            console.log('not Palindrome')
        }
    } 
}

validatePalindrome('ma')

