const $darkModeBtn = document.querySelector(".header-container__btn");
const $darkModeIcon = document.querySelector(".header-container__dl");

const MOON = "./origin/multimedia/svg/moon.svg";
const SUN = "./origin/multimedia/svg/sun.svg"

const darkMode = () => {
    if($darkModeBtn) {
        if(matchMedia("(prefers-color-scheme: light)").matches) {
            document.documentElement.setAttribute("class", "light");
            $darkModeIcon.setAttribute("src", MOON);

        } else if(matchMedia("(prefers-color-scheme: dark)").matches) {
            document.documentElement.setAttribute('class', "dark");
            $darkModeIcon.setAttribute("src", SUN);

        }

        document.addEventListener("click", (event) => {
            const element = event.target;

            if(element.matches(".header-container__btn") || element.matches(".header-container__btn *")) {
                if(document.documentElement.getAttribute("class") === "light") {
                    document.documentElement.setAttribute("class", "dark");
                    $darkModeIcon.setAttribute("src", SUN)
                    localStorage.setItem("mode", "dark");

                }else if(document.documentElement.getAttribute("class") === "dark") {
                    document.documentElement.setAttribute("class", "light");
                    $darkModeIcon.setAttribute("src", MOON);
                    localStorage.setItem("mode", "light");

                }
            }
        })

        if(localStorage.getItem("mode") === "light") {
            document.documentElement.setAttribute("class", "light");
            $darkModeIcon.setAttribute("src", MOON);

        }else if(localStorage.getItem("mode") === "dark") {
            document.documentElement.setAttribute("class", "dark");
            $darkModeIcon.setAttribute("src", SUN);
        }


    }


};

export default darkMode;