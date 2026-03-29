const cards = document.querySelectorAll(".efc-card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((c) => c.classList.remove("efc-active"));
    card.classList.add("efc-active");
  });
});
