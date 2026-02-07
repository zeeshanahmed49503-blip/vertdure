let tip_hover = document.querySelector("#tips")
let tip = document.querySelector(".tips-hover")

tip_hover.addEventListener("mouseenter", function(){
    tip.classList.add("active")
})

let timer;

tip_hover.addEventListener("mouseleave", () => {
    timer = setTimeout(() => {
        tip.classList.remove("active");
    }, 500);
});

tip.addEventListener("mouseenter", () => {
    clearTimeout(timer);
     tip.classList.add("active");
});

tip.addEventListener("mouseleave", () => {
    tip.classList.remove("active")
});
