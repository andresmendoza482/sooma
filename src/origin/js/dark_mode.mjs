const $darkModeBtn = document.querySelector(".header__btn-dark");
const $darkModeIcon = document.querySelector(".header__btn-icon");
const $expressIcon = document.querySelector(".express");

const MOON = "./origin/multimedia/svg/moon.svg";
const SUN = "./origin/multimedia/svg/sun.svg"
const EXPRESS_DARK = "./origin/multimedia/svg/Express.js_dark.svg"
const EXPRESS_LIGHT = "./origin/multimedia/svg/Express.js_light.svg"

const darkMode = () => {
    if($darkModeBtn) {
        if(matchMedia("(prefers-color-scheme: light)").matches) {
            document.documentElement.setAttribute("class", "light");
            $darkModeIcon.setAttribute("src", MOON);

            if($expressIcon) {
                $expressIcon.setAttribute("src", EXPRESS_LIGHT);
            }

        } else if(matchMedia("(prefers-color-scheme: dark)").matches) {
            document.documentElement.setAttribute('class', "dark");
            $darkModeIcon.setAttribute("src", SUN);

            if($expressIcon) {
                $expressIcon.setAttribute("src", EXPRESS_DARK);

            }
        }

        document.addEventListener("click", (event) => {
            const element = event.target;

            if(element.matches(".header__btn-dark") || element.matches(".header__btn-dark *")) {
                if(document.documentElement.getAttribute("class") === "light") {
                    document.documentElement.setAttribute("class", "dark");
                    $darkModeIcon.setAttribute("src", SUN)
                    localStorage.setItem("mode", "dark");
                    
                    if($expressIcon) {
                        $expressIcon.setAttribute("src", EXPRESS_DARK);                        
                    }
                    
                }else if(document.documentElement.getAttribute("class") === "dark") {
                    document.documentElement.setAttribute("class", "light");
                    $darkModeIcon.setAttribute("src", MOON);
                    localStorage.setItem("mode", "light");
                    
                    if($expressIcon) {
                        $expressIcon.setAttribute("src", EXPRESS_LIGHT);                        
                    }

                }
            }
        })

        if(localStorage.getItem("mode") === "light") {
            document.documentElement.setAttribute("class", "light");
            $darkModeIcon.setAttribute("src", MOON);

            if($expressIcon) {
                $expressIcon.setAttribute("src", EXPRESS_LIGHT);
            }

        }else if(localStorage.getItem("mode") === "dark") {
            document.documentElement.setAttribute("class", "dark");
            $darkModeIcon.setAttribute("src", SUN);
            
            if($expressIcon) {
                $expressIcon.setAttribute("src", EXPRESS_DARK);                
            }

        }


    }


};

export default darkMode;