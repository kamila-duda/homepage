{
    const hallo = () => {
        console.log("Witam Cię na mojej stronie :)");
    };
    const backgroundToggle = () => {
        const background = document.querySelector(".body");
        const table = document.querySelector(".table");
        const tableTitle = document.querySelector(".table__title");
        background.classList.toggle("body__background");
        if (background.classList.contains("body__background")) {
            table.style.color = "black";
            tableTitle.style.color = "white";
        } else {
            tableTitle.style.color = "black";
        };
    };
    const init = () => {
        const changeBackground = document.querySelector(".tile__button");
        changeBackground.addEventListener("click", backgroundToggle);
        hallo();
    };
    init();
}