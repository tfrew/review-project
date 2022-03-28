// Start your code ***HERE*** =========

// create an array with all possible character types: Uppercase, Lowercase, numbers, and symbols stored in a variable

let myPassWord = ['a','b','c','d','e','f','E','R','U','P','#','*','+','W','Y','U','D','3','8','9'];
let pwLength = 12;
 
const addNewPassword= ()=> {
    let passWordHolder = '';
    const characterLength = myPassWord.length

    for (let i=0; i<pwLength; i++){
    passWordHolder += myPassWord[Math.floor(Math.random() * characterLength)]
    }
    return passWordHolder;
}
addNewPassword();
 
// ========= ⬇ DO NOT TOUCH THIS CODE ⬇ ======

let genBtn = document.getElementById("btnGen");
let buttonHandler = () => {
    document.getElementById("password").value = addNewPassword();
};
// Event listener for generate PW button
genBtn.addEventListener("click", buttonHandler);

// ========= ⬆ DO NOT TOUCH THIS CODE ⬆ ======
