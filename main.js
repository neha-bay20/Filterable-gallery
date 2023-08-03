const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .cards");
// console.log(filterButtons, filterableCards);

const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    // console.log(e.target.dataset.name);

    filterableCards.forEach(cards => {
        cards.classList.add("hide");


        if (cards.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            cards.classList.remove("hide");
        }
    });
};
filterButtons.forEach(button => button.addEventListener("click", filterCards));