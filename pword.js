const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:',.<>?/";

let passWord1 = document.getElementById("space-one");
let passWord2 = document.getElementById("space-two");
let generateButton = document.getElementById("button");

let passWordLength = 12;

function generatePassword() {
    let randomPassword = "";
    for (let i = 0; i < passWordLength; i++) {
        let randomChar = Math.floor(Math.random() * characters.length);
        randomPassword += characters[randomChar];
    }
    return randomPassword;
}

function generateRandomPasswords() {
    passWord1.textContent = generatePassword();
    passWord2.textContent = generatePassword();
}

generateButton.addEventListener("click", generateRandomPasswords);
