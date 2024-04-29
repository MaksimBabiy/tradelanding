let faq_item = document.querySelectorAll(".faq_bottom article");
let languageBtn = document.querySelector(".languageBtn");
let languageList = document.querySelector(".languageList");
let locationItems = document.querySelectorAll(".languageList ul li");
let locationName = document.querySelector("#locationName");
let locationArrow = document.querySelector(".locationArrow");
let burgerMenu = document.querySelector(".burgerMenu");
let burgerMenuBlock = document.querySelector(".burgerMenuBlock");
let burgerClose = document.querySelector(".burgerClose");
let burgerOpen = document.querySelector(".burgerOpen");
let body = document.querySelector("body");
let closeBtn = document.querySelector(".closeBtn");
let orderBtns = document.querySelectorAll(".orderBtn");
let product = document.querySelector(".price");
let multiplier = 1;
let quantity = document.querySelector(".field2");
let scrollUp = document.querySelector(".scrollUp");
let phone = document.querySelector(".phone_order");
let phoneInputs = document.querySelectorAll(".phoneInput");
let product1 = document.querySelector(".price1");
let product3 = document.querySelector(".price3");
let productPrice = product && product.dataset.price;
let modal_order = document.querySelector(".modal_order");
let modalClose = document.querySelector(".modal_close");
let main = document.querySelector("main");
let email_error = document.querySelector(".email_error");
let order_forms = document.querySelectorAll("form");
let emailInputs = document.querySelectorAll(".email");
let header = document.querySelector("header");
for (let item of faq_item) {
  item.addEventListener("click", function () {
    item.classList.toggle("popUp");
    item.children[0].children[0].classList.toggle("active");
    item.children[0].children[1].classList.toggle("active");
  });
}

if (window.innerWidth > 950) {
  window.addEventListener("scroll", function (e) {
    if (window.scrollY > 0) {
      header.classList.add("active");
      burgerMenuBlock.classList.add("transform");
    } else {
      header.classList.remove("active");
      burgerMenuBlock.classList.remove("transform");
    }
  });
}
window.addEventListener("scroll", function (e) {
  if (window.scrollY > 0) {
    header.classList.add("border");
  } else {
    header.classList.remove("border");
  }
});

window.addEventListener("scroll", function (e) {
  if (window.scrollY > 100) {
    scrollUp.classList.add("visiable");
  } else {
    scrollUp.classList.remove("visiable");
  }
});
scrollUp.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

burgerMenu.addEventListener("click", function () {
  burgerMenuBlock.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  overlay.classList.toggle("active");
  burgerClose.classList.toggle("active");
  burgerOpen.classList.toggle("active");
  body.classList.toggle("overfloy");
  scrollUp.classList.remove("visiable");
});

orderBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    burgerMenuBlock.classList.toggle("active");
    overlay.classList.remove("active");
    burgerClose.classList.remove("active");
    burgerMenu.classList.remove("active");
    body.classList.remove("overfloy");
  });
});

let animTextCurrent = document.querySelector(".title_left-anim-span");

let textArray = [
  "First profit-split eligible after 5-days once funded.",
  "Join over 370+ funded UK traders which trust us!",
  "Our technology runs on 20Gbps fast servers with modern UI!",
];
let index = 0;

function changeTextWithAnimation() {
  animTextCurrent.style.opacity = 0;

  setTimeout(() => {
    animTextCurrent.textContent = textArray[index];
    animTextCurrent.style.opacity = 1;
    index = (index + 1) % textArray.length;
  }, 1000);
}

setInterval(changeTextWithAnimation, 2000);

var options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const intersection = (target) => {
  let callback = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        target.classList.add("active");
      }
    });
  };
  var observer = new IntersectionObserver(callback, options);
  observer.observe(target);
};

intersection(document.querySelector(".about_top-left"));
intersection(document.querySelector(".advantages_left"));
intersection(document.querySelector(".advantages_right"));
intersection(document.querySelector(".about_top-right"));
intersection(document.querySelector(".about_bottom-top"));
intersection(document.querySelector(".future_top-left"));
intersection(document.querySelector(".future_top-right"));
intersection(document.querySelector(".future_bottom-left"));
intersection(document.querySelector(".future_bottom-right"));
intersection(document.querySelector(".why_top"));
intersection(document.querySelector(".choice_top"));

for (let item of faq_item) {
  intersection(item);
}

let facts_bottom = document.querySelectorAll(".facts_bottom article");
for (let item of facts_bottom) {
  intersection(item);
}

let rows = document.querySelectorAll(".variant-row");

for (let row of rows) {
  row.addEventListener("click", function () {
    console.log(row.nextElementSibling.classList.toggle("active"));
  });
}

let table1 = document.querySelector(".table1");
let table2 = document.querySelector(".table2");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
btn1.addEventListener("click", function () {
  table1.classList.add("active");
  table2.classList.remove("active");
  btn2.classList.remove("active");
  btn1.classList.add("active");
});
btn2.addEventListener("click", function () {
  btn2.classList.add("active");
  btn1.classList.remove("active");
  table1.classList.remove("active");
  table2.classList.add("active");
});
