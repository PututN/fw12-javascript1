function changeChar(inputString) {
    let result='';
    
    if (typeof inputString !== "string") {
        result="Tipe Data Teks Harus String !"
    } else {
        for(let i = 0; i < inputString.length; i++) {
            if (inputString[i] === "a") {
                result += "o";
            } else {
                result += inputString[i]
            }
        }
    } return result;
}

console.log(changeChar("kakak"))
