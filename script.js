document.addEventListener("DOMContentLoaded", function () {
  const svg = document.querySelector("#first"); // ID of the SVG element
  const gPlaniranje = svg.querySelector("g.planiranje");
  const divPlaniranje = document.querySelector("div#planiranje");
  const gNabava = svg.querySelector("g.nabava");
  const divNabava = document.querySelector("div#nabava");
  const gUporaba = svg.querySelector("g.uporaba");
  const divUporaba = document.querySelector("div#uporaba");
  const gZbrinjavanje = svg.querySelector("g.zbrinjavanje");
  const divZbrinjavanje = document.querySelector("div#zbrinjavanje");

  gPlaniranje.addEventListener("mouseover", function () {
    divPlaniranje.classList.add("opacity-1");
  });

  gPlaniranje.addEventListener("mouseout", function () {
    divPlaniranje.classList.remove("opacity-1");
  });

  gNabava.addEventListener("mouseover", function () {
    divNabava.classList.add("opacity-1");
  });

  gNabava.addEventListener("mouseout", function () {
    divNabava.classList.remove("opacity-1");
  });

  gUporaba.addEventListener("mouseover", function () {
    divUporaba.classList.add("opacity-1");
  });

  gUporaba.addEventListener("mouseout", function () {
    divUporaba.classList.remove("opacity-1");
  });

  gZbrinjavanje.addEventListener("mouseover", function () {
    divZbrinjavanje.classList.add("opacity-1");
  });

  gZbrinjavanje.addEventListener("mouseout", function () {
    divZbrinjavanje.classList.remove("opacity-1");
  });
});

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

/*const slider = document.querySelector(".slider");
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
}*/

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

/*document.addEventListener("click", (event) => {
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
        hamMmy.classList.add("d-none");
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
});*/

/*** Tabs code ***/

document.getElementById("defaultOpen").click();

function openProcess(evt, orderNumber) {
  // Get all elements with class="tabcontent" and hide them
  document.querySelectorAll(".tabcontent").forEach((content) => {
    content.style.display = "none";
  });

  // Get all elements with class="tablinks" and remove the class "active-btn"
  document.querySelectorAll(".tablinks").forEach((link) => {
    link.classList.remove("active-btn");
  });

  // Show the current tab, and add an "active-btn" class to the button that opened the tab
  document.getElementById(orderNumber).style.display = "flex";
  evt.currentTarget.className += " active-btn";
}

/*** New Slider code ***/

const prevContainer = document.querySelector('[data-slider="0"]');
const curContainer = document.querySelector('[data-slider="1"]');
const nextContainer = document.querySelector('[data-slider="2"]');

function changeTab(tabIndex) {
  const tabPanels = document.querySelectorAll(".tab-panel");
  const currentTabPanel = document.getElementById(`tab-${tabIndex}`);
  const tabs = document.querySelectorAll(".tab");

  tabPanels.forEach((panel) => {
    if (panel === currentTabPanel) {
      panel.classList.add("show");
      panel.classList.remove("slide-out");
    } else {
      panel.classList.remove("show");
      panel.classList.add("slide-out");
    }
  });

  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  tabs[tabIndex - 1].classList.add("active");
}

function nextTab() {
  const tabActive = document.querySelector(".show");
  let tabIndex = tabActive.getAttribute("data-tab");
  tabIndex *= 1;
  if (tabIndex === 8) {
    tabIndex = 1;
  } else {
    tabIndex += 1;
  }
  const tabPanels = document.querySelectorAll(".tab-panel");
  const currentTabPanel = document.getElementById(`tab-${tabIndex}`);

  tabPanels.forEach((panel) => {
    if (panel === currentTabPanel) {
      if (panel.classList.contains("slide-out")) {
        panel.classList.remove("slide-out");
        panel.classList.add("slide-in");
        panel.classList.add("show");
        panel.classList.remove("slide-in");
      } else {
        panel.classList.add("show");
        panel.classList.remove("slide-in");
      }
    } else if (panel.classList.contains("show")) {
      if (panel.classList.contains("slide-out")) {
        panel.classList.remove("slide-out");
        panel.classList.remove("show");
        panel.classList.add("slide-out");
      } else {
        panel.classList.remove("show");
        panel.classList.add("slide-out");
      }
    } else {
      if (panel.classList.contains("slide-out")) {
        panel.classList.remove("slide-out");
        panel.classList.add("slide-in");
      } else {
        panel.classList.add("slide-in");
      }
    }
  });
}

function prevTab() {
  const tabActive = document.querySelector(".show");
  let tabIndex = tabActive.getAttribute("data-tab");
  tabIndex *= 1;
  if (tabIndex === 1) {
    tabIndex = 8;
  } else {
    tabIndex -= 1;
  }
  const tabPanels = document.querySelectorAll(".tab-panel");
  const currentTabPanel = document.getElementById(`tab-${tabIndex}`);

  tabPanels.forEach((panel) => {
    if (panel === currentTabPanel) {
      if (panel.classList.contains("slide-in")) {
        panel.classList.remove("slide-in");
        panel.classList.add("slide-out");
        panel.classList.add("show");
        panel.classList.remove("slide-out");
      } else {
        panel.classList.add("show");
        panel.classList.remove("slide-out");
      }
    } else if (panel.classList.contains("show")) {
      if (panel.classList.contains("slide-in")) {
        panel.classList.remove("slide-in");
        panel.classList.remove("show");
        panel.classList.add("slide-in");
      } else {
        panel.classList.remove("show");
        panel.classList.add("slide-in");
      }
    } else {
      if (panel.classList.contains("slide-in")) {
        panel.classList.remove("slide-in");
        panel.classList.add("slide-out");
      } else {
        panel.classList.add("slide-out");
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const tabWrapper = document.querySelector(".tab-wraper");
  let touchStartX = 0;
  let touchEndX = 0;

  tabWrapper.addEventListener("touchstart", function (event) {
    touchStartX = event.touches[0].clientX;
  });

  tabWrapper.addEventListener("touchmove", function (event) {
    touchEndX = event.touches[0].clientX;
  });

  tabWrapper.addEventListener("touchend", function () {
    const touchDiff = touchStartX - touchEndX;
    if (touchDiff > 0) {
      nextTab();
    } else if (touchDiff < 0) {
      prevTab();
    }
  });
});
