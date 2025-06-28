// main page image auto and arrow slider
let prevBtn = document.querySelector(".front-img-prev");
let nextBtn = document.querySelector(".front-img-next");
let frontImg = document.querySelector(".front-img");
let frontImgArr = [
  "https://img.forestessentialsindia.com/pub/media/mageplaza/bannerslider/banner/image/s/u/sun_spray_desktop_hp_banner_1.jpg",
  "https://img.forestessentialsindia.com/pub/media/mageplaza/bannerslider/banner/image/t/r/travel_minis_desktop_banner_hp1.jpg",
  "https://img.forestessentialsindia.com/pub/media/mageplaza/bannerslider/banner/image/a/l/almond_paste_desktop_hp_banner.jpg",
  "https://img.forestessentialsindia.com/pub/media/mageplaza/bannerslider/banner/image/m/o/mogra__hp_banner_1_desktop.jpg",
];
let currentIndex = 0;
function displayImage() {
  frontImg.setAttribute("src", frontImgArr[currentIndex]);
}
displayImage();
prevBtn.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? frontImgArr.length - 1 : currentIndex - 1;
  displayImage();
});
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % frontImgArr.length;
  displayImage();
});
setInterval(() => {
  currentIndex = (currentIndex + 1) % frontImgArr.length;
  displayImage();
}, 3000);

// main page products  slider
const container = document.querySelector(".products-container");
const productLeftBtn = document.querySelector(".products-btn-left");
const productRightBtn = document.querySelector(".products-btn-right");
productLeftBtn.addEventListener("click", () => {
  container.scrollBy({ left: -300, behavior: "smooth" });
});
productRightBtn.addEventListener("click", () => {
  container.scrollBy({ left: 300, behavior: "smooth" });
});

// main page shop concern slider
const concernScroll = document.querySelector(".concern");
const labels = document.querySelectorAll("label");
labels[0].classList.add("active");
labels.forEach((label, index) => {
  label.addEventListener("click", () => {
    // Remove active class from all
    labels.forEach((lbl) => lbl.classList.remove("active"));

    // Add active class to clicked one
    label.classList.add("active");

    // Scroll to the corresponding image inside .concern
    if (index === 0) {
      concernScroll.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else if (index === 1) {
      concernScroll.scrollTo({
        left: 1260,
        behavior: "smooth",
      });
    }
  });
});

//login & logout
const logoutLink = document.querySelector("#logout-link");
let loginData = JSON.parse(localStorage.getItem("login"));
if (loginData && loginData.status === true) {
  logoutLink.style.display = "block";
} else {
  logoutLink.style.display = "none";
}
logoutLink.addEventListener("click", () => {
  localStorage.removeItem("login");
  alert("You have been logged out.");
  window.location.href = "login.html";
});

