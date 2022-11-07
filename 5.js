const inputString = "kakakak"


if (typeof inputString !== "string") {
    console.log(`Tipe Data Teks Harus String !`)
} else {
    let result='';
    for(let i = 0; i < inputString.length; i++) {
        if (inputString[i] === "a") {
            result += "o";
        } else {
            result += inputString[i]
        }
    }
    console.log(result)
}
