const buttonChangeTheme = document.getElementById("button-change-theme")
const body = document.querySelector("body")
const imagemButtonChangeTheme = document.querySelector(".img-button")

buttonChangeTheme.addEventListener("click", () => {
    const modeDarkIsActivate = body.classList.contains("dark-mode")

    body.classList.toggle("dark-mode");

    if (modeDarkIsActivate) {

        imagemButtonChangeTheme.setAttribute("src", "./src/imagens/moon.png");

    } else {
        imagemButtonChangeTheme.setAttribute("src", "./src/imagens/sun.png");
    }
});