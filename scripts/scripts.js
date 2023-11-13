// Scripts for animations
ScrollReveal({
  reset: true,
  distance: "50px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".box", { origin: "bottom" });
ScrollReveal().reveal(".text", { origin: "left" });

// Scripts for the show/hide icons
document.addEventListener("DOMContentLoaded", function () {
  const passwordField = document.getElementById("passwordField");
  const showPasswordIcon = document.getElementById("showPassword");
  const hidePasswordIcon = document.getElementById("hidePassword");

  showPasswordIcon.addEventListener("click", function () {
    passwordField.type = "text";
    showPasswordIcon.style.display = "none";
    hidePasswordIcon.style.display = "inline";
  });

  hidePasswordIcon.addEventListener("click", function () {
    passwordField.type = "password";
    hidePasswordIcon.style.display = "none";
    showPasswordIcon.style.display = "inline";
  });
});
