const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";


function randomPassword(){
    let inputLength = Number(document.getElementById("pwLenght").value);
    let newPassword = "";
    for (let i = 0; i<inputLength; i++){
        newPassword = newPassword + characters[Math.floor(Math.random()*characters.length)];
    }
document.getElementById('result').textContent = `Your generated password is: ${newPassword}`;
}
