const carre = document.getElementById("carre");
const btn = document.getElementById("btnAnimation");

btn.addEventListener("click", () => {
  // Ajoute la classe qui déclenche l'animation
  carre.classList.add("animate");

  // Supprime la classe après 2.1s pour pouvoir rejouer l’animation
  setTimeout(() => {
    carre.classList.remove("animate");
  }, 2100);
});
