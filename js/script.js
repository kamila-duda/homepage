console.log("Witam Cię na mojej stronie :)");
let changeBackground = document.querySelector(".tile__button");
let background = document.querySelector(".body");
let table = document.querySelector(".table");
let tableTitle = document.querySelector(".table__title");
changeBackground.addEventListener("click", () => {
    background.classList.toggle("body__background");
    if(background.classList.contains("body__background")){
        table.style.color="black";
        tableTitle.style.color="white";
    }else{
        tableTitle.style.color="black";
    };
});