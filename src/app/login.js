export function Logon() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    
    if (email == "admin0000@ca" && password == "Casa2024*@") {
        localStorage.setItem("acesso", true);
        window.location.href = "https://simmonscasaorner.com.br/";
    }
    else {
        alert("Usuário ou senha Inválidos.")
    }
}