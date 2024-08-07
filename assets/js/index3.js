document.addEventListener("click", (e) => {
    // Desafio - Parte 3
    if (e.target.id == "btn-ingresar") {
        const digito0 = document.getElementById("digito-0").value;
        const digito1 = document.getElementById("digito-1").value;
        const digito2 = document.getElementById("digito-2").value;
        const password = Number(digito0 + digito1 + digito2);

        const mensaje = document.getElementById("txt-password");
        password === 222
            ? (mensaje.innerHTML = "Password 1 correcto")
            : password === 842
            ? (mensaje.innerHTML = "Password 2 correcto")
            : (mensaje.innerHTML = "Password Incorrecto!");
    }
});
