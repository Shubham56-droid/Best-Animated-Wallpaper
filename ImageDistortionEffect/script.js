let container = document.querySelector(".container");
for (var i = 0; i <= 400; i++) {
  let block = document.createElement("div");
  block.classList.add("block");
  container.appendChild(block);
}

let block = document.querySelectorAll(".block");
let animation = anime.timeline({
  targets: block,
  easing: "easeInOutExpo",
  loop: true,
  delay: anime.stagger(10, { start: 50 }),
});
animation
  .add({
    scale: 0,
    translateX: function () {
      return anime.random(360, 2100);
    },
    translateY: function () {
      return anime.random(360, -2100);
    },
    rotate: function () {
      return anime.random(-360, 360);
    },
    duration: function () {
      return anime.random(500, 3000);
    },
  })

  .add({
    scale: 1,
    translateX: 0,
    translateY: 0,
    rotate: 0,
    duration: function () {
      return anime.random(500, 3000);
    },
  });
