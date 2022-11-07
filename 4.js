function validatePalindrome(text) {
    
    if (text.length <= 2) {
        console.log(`Teks Harus Lebih Dari 2 Huruf !`)
    } else {
        let palindromeText='';
        for(let i = text.length-1; i >= 0; i--) {
            palindromeText = palindromeText + text[i]
        }
        if(palindromeText===text) {
            console.log('Palindrome')
        } else {
            console.log('not Palindrome')
        }
    } return
}

console.log(validatePalindrome('ka'))

