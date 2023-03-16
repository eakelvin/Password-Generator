const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%",
"^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let genEl = document.getElementById("gen")
let cop = document.getElementById("copy")
let cont1 = document.getElementById("box1")
let cont2 = document.getElementById("box2")
let cont3 = document.getElementById("box3")

genEl.addEventListener("click", function() {
    const passwordLength = 10
    let password1 = ''
    let password2 = ''
    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length);
        password1 += String(characters).substring(randomNumber, randomNumber +1);
       }
    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length);
        password2 += String(characters).substring(randomNumber, randomNumber +1);
       }
       
    
    cont1.textContent = password1
    cont2.textContent = password2
    cont3.textContent = Math.random().toString(36).substring(2, 10)

})

cop.addEventListener("click", function() {
    cont1.select();
    cont2.select();
    cont3.select();
    document.execCommand("cop"); 
})

    
