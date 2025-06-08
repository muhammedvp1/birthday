window.addEventListener("DOMContentLoaded", () => {
  // Floating hearts
  const container = document.getElementById("floatingStuff");
  const symbols = ['💖','✨','🌸','💝','💕','🎀'];
  for (let i = 0; i < 30; i++) {
    const el = document.createElement("div");
    el.className = "float-item";
    el.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.left = `${Math.random() * 100}%`;
    el.style.animationDuration = `${4 + Math.random() * 4}s`;
    el.style.fontSize = `${16 + Math.random() * 20}px`;
    el.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(el);
  }

  // Envelope open + Next button logic
  const envelope = document.getElementById("envelope");
  const nextBtn = document.getElementById("nextBtn");

  if (!envelope || !nextBtn) return;

  envelope.addEventListener("click", () => {
    envelope.classList.toggle("open");
    envelope.classList.toggle("close");

    // Show the button after animation
    setTimeout(() => {
      nextBtn.style.display = "block";
    }, 1500);
  });

  window.goToCake = function () {
    window.location.href = "cake.html";
  };
});
