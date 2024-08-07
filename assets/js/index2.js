document.addEventListener("click", (e) => {
    // Desafio - Parte 2
    if (e.target.id == "btn-verificar") {
        const num1 = document.querySelector("#card-1");
        const num2 = document.querySelector("#card-2");
        const num3 = document.querySelector("#card-3");

        if (validarInput(num1) && validarInput(num2) && validarInput(num3)) {
            const suma = Number(num1.value) + Number(num2.value) + Number(num3.value);

            if (suma > 10) {
                document.querySelector("#txt-verificar").innerHTML = "Llevas demasiados stickers!";
            } else {
                document.querySelector("#txt-verificar").innerHTML = `Llevas ${suma} stickers.`;
            }
        } else {
            document.querySelector("#txt-verificar").innerHTML = "";
        }
    }
});

function validarInput(inputNum) {
    let valor = parseFloat(inputNum.value);

    if (Number.isInteger(valor) && valor >= 0) {
        inputNum.style.border = "1px solid #333";
        inputNum.style.animation = "";
        inputNum.placeholder = "";
        return true;
    } else {
        inputNum.style.border = "1px solid red";
        inputNum.style.animation = "shake-horizontal 0.8s ease-out";
        inputNum.value = "";
        inputNum.placeholder = "Numero no valido";
        return false;
    }
}
