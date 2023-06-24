const filterButtons= document.querySelectorAll(".filter-btn button");
const filterCards= document.querySelectorAll(".filterable_cards .card")


const FilterCards= e =>{
document.querySelector(".active").classList.remove("active");
e.target.classList.add("active");

filterCards.forEach(card =>{
    card.classList.add("hide");

    if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all" ){
        card.classList.remove("hide");  
    }
});
};


filterButtons.forEach(button => button.addEventListener("click",FilterCards));