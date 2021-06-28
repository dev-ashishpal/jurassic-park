const navIcon = document.querySelector(".navbar__menu");

///////////// Adding Background on Nav Icon when scrolled below 100VH //////////////
document.addEventListener("scroll", () => {
  if (scrollY >= window.innerHeight) {
    navIcon.classList.add("scrolled");
  } else {
    navIcon.classList.remove("scrolled");
  }
});

///////////////////////////// GSAP ANIMATIONS ////////////////////////////////

///////////////// animating navigation //////////////////
const navBtn = document.querySelector(".navbar__menu");

const closeNav = () => {
  gsap.to(".navigation", { x: "100%", duration: 0.6 });
  gsap.to(".navigation--slider", { x: "100%", duration: 0.6, delay: 0.2 });
};

const navAnimation = () => {
  navBtn.classList.toggle("active");

  if (navBtn.classList.contains("active")) {
    gsap.to(".navigation", { x: "0", duration: 0.6, delay: 0.1 });
    gsap.to(".navigation--slider", { x: "0", duration: 0.6 });
    gsap.from(".navigation-list__item", {
      opacity: 0,
      duration: 0.5,
      delay: 0.3,
      y: -50,
      stagger: 0.4,
    });
    gsap.from(".navigation-color__box--title", {
      opacity: 0,
      duration: 1,
      delay: 0.7,
      y: 50,
    });
    gsap.from(".navigation-color__tile", {
      opacity: 0,
      duration: 1,
      delay: 0.7,
      x: "300px",
    });
  } else {
    closeNav();
  }
};

const aboutImageOdd = document.querySelectorAll(".team__image--container-odd");
aboutImageOdd.forEach((image) => {
  gsap.to(image, {
    scrollTrigger: {
      trigger: image,
      start: "top center",
    },
    x: 0,
  });
});

const aboutUserOdd = document.querySelectorAll(".user__image-odd");
aboutUserOdd.forEach((image) => {
  gsap.to(image, {
    scrollTrigger: {
      trigger: image,
      start: "top center",
      delay: 0.5,
    },
    x: "-50%",
  });
});

const aboutImageEven = document.querySelectorAll(
  ".team__image--container-even"
);
aboutImageEven.forEach((image) => {
  gsap.to(image, {
    scrollTrigger: {
      trigger: image,
      start: "top center",
    },
    x: 0,
  });
});

const aboutUserEven = document.querySelectorAll(".user__image-even");
aboutUserEven.forEach((image) => {
  gsap.to(image, {
    scrollTrigger: {
      trigger: image,
      start: "top center",
      delay: 0.5,
    },
    x: "50%",
  });
});

navBtn.addEventListener("click", navAnimation);

gsap.from(".nav-icon", { opacity: 0, delay: 1, duration: 1, x: "100%" });

gsap.from(".stagger", {
  opacity: 0,
  duration: 1,
  y: "100%",
  delay: 0.1,
  stagger: 0.5,
});

///////////////////////// FORM ///////////////////////////
const dates = document.querySelectorAll(".booking__calendar--main-inner-date");
let selectedDate;
dates.forEach((date) => {
  date.addEventListener("click", (e) => {
    if (selectedDate) {
      selectedDate.classList.remove("active");
    }
    selectedDate = e.target;
    selectedDate.classList.add("active");
  });
});

const times = document.querySelectorAll(".booking__time--container-single");
let selectedTime;
times.forEach((time) => {
  time.addEventListener("click", (e) => {
    if (selectedTime) {
      selectedTime.classList.remove("active");
    }
    selectedTime = e.target;
    selectedTime.classList.add("active");
  });
});
