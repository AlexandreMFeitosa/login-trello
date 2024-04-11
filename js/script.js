// Validador de senha
let nameLogin = document.querySelector("#name");
let senhaLogin = document.querySelector("#password");
const btn = document.querySelector(".enter-btn");

btn.addEventListener("click" , () => {
    let valueName = document.querySelector("#name").value;
    let valueSenha = document.querySelector("#password").value;

    if (valueName === "" || valueSenha === "") {
        
        alert("Campo login ou senha vazio, favor preeencher o campo corretamente !");

    } else if (isNaN(valueSenha) ) {

        alert("A senha não é um numero ! "); // teste

    } else if (!valueName.includes('@gmail.com' , '@hotmail.com' , '@live.com')) {
        
        alert("Favor use um e-mail valido ! ( Ex: @gmail.com , @hotmail.com ..."); // teste
    }

});
