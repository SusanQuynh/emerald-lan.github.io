function switchMode() {
    const x = document.querySelector(".switch-mode i");
    const isToggle = x.classList.toggle("fa-sun");
    if (isToggle) {
        const y = document.querySelector("link")
        y.href = "styles.css";
    } else {
        const y = document.querySelector("link")
        y.href = "styles-dark.css";
    }
}

function playMusic() {
    const x = document.querySelector(".music");
    const isToggle = x.classList.toggle("on");
    console.log(x);

    const y = document.getElementById("audio");
    if (isToggle) {
        y.play();
    } else {
        y.pause();
    }
}