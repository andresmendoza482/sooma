const $navHeader = document.querySelector(".header__nav");
const $linkHeader = document.querySelectorAll(".header__a");

const pageHover = () => {

    if($navHeader && window.matchMedia("(min-width: 768px)").matches) {
        console.log("ESTA PASANDO");
        if(window.location.pathname === "/src/sobre-mi.html") {
            $linkHeader[0].classList.add("a-location");

        }else if(window.location.pathname === "/src/experiencia.html") {
            $linkHeader[1].classList.add("a-location");

        }else if(window.location.pathname === "/src/blog.html") {
            $linkHeader[2].classList.add("a-location");

        }

    }
}

export default pageHover;
