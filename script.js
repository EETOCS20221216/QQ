document.addEventListener("DOMContentLoaded", () => {
  const typedText = document.getElementById("typedText");
  const text = "我喜歡你！❤️";
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      typedText.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();

  // Heart animation
  const heartContainer = document.querySelector(".heart-container");

  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heartContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }

  setInterval(createHeart, 300);
});
