const el = document.querySelector(".coffe-navbar")
const observer = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle("coffe-navbar_fixed", e.intersectionRatio < 1),
  { threshold: [1] }
);

observer.observe(el);