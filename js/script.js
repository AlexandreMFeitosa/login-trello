// Validador de senha
let nameLogin = document.querySelector("#name");
let senhaLogin = document.querySelector("#password");
const btn = document.querySelector(".enter-btn");

btn.addEventListener("click" , () => {
    let valueName = document.querySelector("#name").value;
    let valueSenha = document.querySelector("#password").value;

    if (valueName === "" || valueSenha === "") {
        
        alert("Campo login ou senha vazio, favor preeencher o campo corretamente !");

    } else if (!valueName.includes('@gmail.com') && (!valueName.includes('@hotmail.com') && (!valueName.includes('@live.com')))) {
        
        alert("Favor use um e-mail valido ! ( Ex: @gmail.com , @hotmail.com ..."); // teste

    } else if (valueSenha.toString().length > 0 && valueSenha.toString().length > 8) {

        alert("A senha precisar ter no minímo e 8 caracteres ! "); // teste 
    
    } else {

        alert(`Login efeutado com sucesso !`);
    }

});
