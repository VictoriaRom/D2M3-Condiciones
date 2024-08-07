document.addEventListener("click", (e) => {
    // Desafio - Parte 1
    if (e.target.id == "sticker-logo") {
        const borderImg = document.getElementById("sticker-logo");

        if (borderImg.style.border == "2px solid red") {
            borderImg.style.border = "none";
        } else {
            borderImg.style.border = "2px solid red";
        }
    }
});