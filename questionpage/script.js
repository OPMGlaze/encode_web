let tl = gsap.timeline({ delay: 0 });

tl.to(".col", {
  top: 0,
  duration: 2.75,
  ease: "power4.inOut",
});

tl.to(".c-1 .item", {
  top: 0,
  stagger: 0.25,
  duration: 2.75,
  ease: "power4.inOut",
}, "-=2");

tl.to(".c-2 .item", {
  top: 0,
  stagger: -0.25,
  duration: 2.75,
  ease: "power4.inOut",
}, "-=4");

tl.to(".c-3 .item", {
  top: 0,
  stagger: 0.25,
  duration: 2.75,
  ease: "power4.inOut",
}, "-=4");

tl.to(".c-4 .item", {
  top: 0,
  stagger: -0.25,
  duration: 2.75,
  ease: "power4.inOut",
}, "-=4");

tl.to(".c-5 .item", {
  top: 0,
  stagger: 0.25,
  duration: 2.75,
  ease: "power4.inOut",
}, "-=4");

tl.to(".container", {
  scale: 6,
  duration: 3,
  ease: "power4.inOut",
}, "-=2");

tl.to(".container", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: "power2.out",
});

tl.to("svg", {
  filter: "blur(0px)",
  duration: 0,
});

tl.to("svg", {
  filter: "blur(3.5px)",
  duration: 2,
  ease: "power2.out",
}, "+ =1.5");

window.addEventListener("DOMContentLoaded", () => {
  gsap.to("#title", {
    opacity: 1,
    y: -20,
    duration: 1.2,
    ease: "power2.out",
    delay: 6, // Trigger after 6 seconds
  });

  gsap.to("#questionBox", {
    opacity: 1,
    y: -10,
    duration: 1.4,
    ease: "power2.out",
    delay: 6, // Trigger after 6 seconds
  });
});

// Fallback to ensure visibility if GSAP fails
setTimeout(() => {
  document.querySelector("#title").style.opacity = "1";
  document.querySelector("#questionBox").style.opacity = "1";
}, 7000); // 6 seconds (6000ms)