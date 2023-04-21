/*** changes fixed as sticky style ***/

window.addEventListener("scroll", function () {
  var nav = document.querySelector("#banner2");
  if (window.scrollY > nav.offsetHeight) {
    nav.classList.add("is-visible");
  } else {
    nav.classList.remove("is-visible");
  }
});

/*** shuffles nav bar when original get sticked***/

/*const el = document.querySelector("#banner2")
        const banner = document.querySelector("#inner-wraper") * /

        const observer = new IntersectionObserver(
            ([e]) => {
                x = e.target.classList.toggle("check", e.intersectionRatio < 1)
                banner.classList.remove('is-visible');
            }* /
                return x
            }
            , { threshold: [1] });

        observer.observe(el);*/

/*** navbar go away when scroll down ***/

/*var prevScrollpos = window.pageYOffset;
        document.addEventListener("scroll", (event) => {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos && currentScrollPos > 0) {
                document.querySelector("#banner2").style.top = "-1px";
            } else if (prevScrollpos < currentScrollPos) {
                let banner2Height = document.querySelector("#banner2").offsetHeight;
                document.querySelector("#banner2").style.top = "-" + banner2Height + "px";
            }
            prevScrollpos = currentScrollPos;
        });*/

/*window.onscroll = function () {

            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos && currentScrollPos > 0) {
                document.querySelector("#banner2").style.top = "-1px";
            } else if (prevScrollpos < currentScrollPos) {
                let banner2Height = document.querySelector("#banner2").offsetHeight;
                document.querySelector("#banner2").style.top = "-" + banner2Height + "px";
            }
            prevScrollpos = currentScrollPos;
        }*/

/*** slider code ***/

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider figure");

let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 6000);

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
  if (currentSlide === 0) {
    slider.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  } else {
    slider.scrollTo({
      left: slides[currentSlide].offsetLeft,
      behavior: "smooth",
    });
  }
}
function prevSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
  slider.scrollTo({
    left: slides[currentSlide].offsetLeft,
    behavior: "smooth",
  });
}

const prevBtn = document.createElement("button");
prevBtn.classList.add("prev-btn");
prevBtn.innerHTML = '<i class="fa fa-chevron-left text-primary"></i>';
prevBtn.addEventListener("click", prevSlide);
slider.parentElement.insertBefore(prevBtn, slider);

const nextBtn = document.createElement("button");
nextBtn.classList.add("next-btn");
nextBtn.innerHTML = '<i class="fa fa-chevron-right text-primary"></i>';
nextBtn.addEventListener("click", nextSlide);
slider.parentElement.insertBefore(nextBtn, slider.nextSibling);

for (let i = 0; i < slides.length; i++) {
  slides[i].addEventListener("click", function () {
    slides[currentSlide].classList.remove("active");
    currentSlide = i;
    slides[currentSlide].classList.add("active");
    slider.scrollTo({
      left: slides[currentSlide].offsetLeft,
      behavior: "smooth",
    });
  });
}

/*** hamburger menu code ***/

const hamburgerToggle = () => {
  const navElements = document.querySelectorAll("nav.small");
  const nav = document.querySelector("#banner2");
  const xMark = document.querySelector(".fa-xmark");
  const hamMmy = document.querySelector(".fa-bars");

  navElements.forEach((navElement) => {
    if (navElement.classList.contains("ham-show")) {
      navElement.classList.remove("ham-transit");
      nav.classList.remove("ham-visible");
      setTimeout(() => {
        xMark.classList.remove("inline-block");
        hamMmy.classList.remove("d-none");
      }, 0);
      setTimeout(() => {
        navElement.classList.remove("ham-show");
      }, 400);
    } else {
      navElement.classList.add("ham-transit");
      nav.classList.add("ham-visible");
      setTimeout(() => {
        navElement.classList.add("ham-show");
        xMark.classList.add("inline-block");
        hamMmy.classList.add("d-none");
      }, 0);
    }
  });
};

document.addEventListener("click", (event) => {
  const target = event.target;
  const navElements = document.querySelectorAll("nav.small");
  const nav = document.querySelector("#banner2");
  const xMark = document.querySelector(".fa-xmark");
  const hamMmy = document.querySelector(".fa-bars");

  if (!target.closest("nav.small") && document.querySelector(".ham-show")) {
    navElements.forEach((navElement) => {
      navElement.classList.add("ham-transit");
      nav.classList.add("ham-visible");
      setTimeout(() => {
        navElement.classList.add("ham-show");
        /*xMark.classList.add("inline-block");
        hamMmy.classList.add("d-none");*/
      }, 0);
    });
  }
});

document.addEventListener("click", (event) => {
  const target = event.target;
  const navElements = document.querySelectorAll("nav.small");
  const nav = document.querySelector("#banner2");
  const xMark = document.querySelector(".fa-xmark");
  const hamMmy = document.querySelector(".fa-bars");

  if (target.closest(".hamburger")) {
    hamburgerToggle();
  } else if (!target.closest("nav.small")) {
    navElements.forEach((navElement) => {
      navElement.classList.add("ham-transit");
      nav.classList.add("ham-visible");
      setTimeout(() => {
        navElement.classList.remove("ham-show");
        xMark.classList.add("inline-block");
        hamMmy.classList.add("d-none");
      }, 0);
    });
  }
});
