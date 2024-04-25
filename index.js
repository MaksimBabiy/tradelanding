let faq_item = document.querySelectorAll(".faq_bottom article");
let languageBtn = document.querySelector(".languageBtn");
let languageList = document.querySelector(".languageList");
let locationItems = document.querySelectorAll(".languageList ul li");
let locationName = document.querySelector("#locationName");
let locationArrow = document.querySelector(".locationArrow");
let burgerMenu = document.querySelector("#burgerMenu");
let burgerMenuBlock = document.querySelector(".burgerMenuBlock");
let burgerClose = document.querySelector(".burgerClose");
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

window.addEventListener("scroll", function (e) {
  if (window.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
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
document.addEventListener("click", function (e) {
  if (
    e.target.offsetParent !== languageList &&
    e.target.offsetParent !== languageBtn &&
    e.target !== languageBtn
  ) {
    languageList.classList.remove("active");
    locationArrow.classList.remove("active");
  }
});
// burgerMenu.addEventListener("click", function () {
//   burgerMenuBlock.classList.toggle("active");
//   burgerMenu.classList.add("active");
//   overlay.classList.add("active");
//   burgerClose.classList.add("active");
//   body.classList.add("overfloy");
// });
// burgerClose.addEventListener("click", function () {
//   burgerMenuBlock.classList.toggle("active");
//   overlay.classList.remove("active");
//   burgerClose.classList.remove("active");
//   burgerMenu.classList.remove("active");
//   body.classList.remove("overfloy");
// });
// orderBtns.forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     burgerMenuBlock.classList.toggle("active");
//     overlay.classList.remove("active");
//     burgerClose.classList.remove("active");
//     burgerMenu.classList.remove("active");
//     body.classList.remove("overfloy");
//   });
// });

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

setInterval(changeTextWithAnimation, 2000); // Смена текста каждые 3 секунды

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

for (let item of faq_item) {
  intersection(item);
}

let facts_bottom = document.querySelectorAll(".facts_bottom article");
for (let item of facts_bottom) {
  intersection(item);
}
