"use strict";

const lazyImgs = document.querySelectorAll("img[data-src]");

const loadFunc = function (events, observer) {
  const [event] = events;

  const processEvent = function (event) {
    console.log(events);

    if (!event.isIntersecting) {
      return;
    }

    event.target.src = event.target.dataset.src;

    event.target.addEventListener("load", function () {
      event.target.classList.remove("lazy-load");
    });

    observerImg.unobserve(event.target);
  };

  events.forEach(processEvent);
};

const observerImg = new IntersectionObserver(loadFunc, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

lazyImgs.forEach((img) => observerImg.observe(img));
