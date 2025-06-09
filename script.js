gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-content h1", {
  opacity: 0,
  y: -60,
  duration: 1.2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".hero-content h1",
    start: "top 80%",
    toggleActions: "restart none none reset"
  }
});

gsap.from(".hero-content p", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.4,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".hero-content p",
    start: "top 80%",
    toggleActions: "restart none none reset"
  }
});

gsap.from(".hero-btn", {
  opacity: 0,
  scale: 0.7,
  duration: 1,
  delay: 0.8,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".hero-btn",
    start: "top 90%",
    toggleActions: "restart none none reset"
  }
});

gsap.from("#about .section-title", {
  scrollTrigger: {
    trigger: "#about",
    toggleActions: "restart none none reset"
  },
  opacity: 0,
  y: 40,
  duration: 1
});

gsap.from("#about .about-photo", {
  scrollTrigger: {
    trigger: "#about",
    toggleActions: "restart none none reset"
  },
  opacity: 0,
  x: -80,
  duration: 1.2,
  delay: 0.2
});

gsap.from("#about .col-md-7", {
  scrollTrigger: {
    trigger: "#about",
    toggleActions: "restart none none reset"
  },
  opacity: 0,
  x: 80,
  duration: 1.2,
  delay: 0.4
});

gsap.from("#about .row.g-4 > div", {
  scrollTrigger: {
    trigger: "#about .row.g-4",
    toggleActions: "restart none none reset"
  },
  opacity: 0,
  y: 50,
  duration: 0.6,
  stagger: 0.2
});

gsap.from("#projects .section-title", {
  scrollTrigger: {
    trigger: "#projects",
    toggleActions: "restart none none reset"
  },
  opacity: 0,
  y: 40,
  duration: 1
});

gsap.from(".project-card", {
  scrollTrigger: {
    trigger: "#projects",
    toggleActions: "restart none none reset"
  },
  opacity: 0,
  y: 60,
  duration: 1,
  stagger: 0.2
});

gsap.from("#contact h2", {
  scrollTrigger: {
    trigger: "#contact",
    toggleActions: "restart none none reset"
  },
  opacity: 0,
  y: 40,
  duration: 1
});

gsap.from(".contact-form input, .contact-form textarea, .contact-form button", {
  scrollTrigger: {
    trigger: "#contact",
    toggleActions: "restart none none reset"
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  stagger: 0.2
});
