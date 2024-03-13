const $hamburguerBtn = document.querySelector(".header__btn-hamburguer");
const $hamburguerMenu = document.querySelector(".header__nav");

const hamburguerMenu = () => {
    if($hamburguerBtn && window.matchMedia("(min-width: 40em)")) {
        document.addEventListener("click", event => {
            const element = event.target;

            if((element.matches(".header__btn-hamburguer") || element.matches(".header__btn-hamburguer *"))
            && $hamburguerMenu.classList.contains("translate-x-full")) {
                $hamburguerMenu.classList.remove("translate-x-full");
                $hamburguerBtn.classList.add("is-active");

            }else if((element.matches(".header__btn-hamburguer") || element.matches(".header__btn-hamburguer *"))
            && !$hamburguerMenu.classList.contains("translate-x-full")) {
                $hamburguerMenu.classList.add("translate-x-full");
                $hamburguerBtn.classList.remove("is-active");
            }
        });
    }
}

export default hamburguerMenu;