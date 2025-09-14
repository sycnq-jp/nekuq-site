const texts = [
  "Hi, I'm nekuq",
  "owner of \"おみくじっ\"",
  "discord.gg/@nekuq"
];


const typewriter = document.getElementById("typewriter");
let textIndex = 0;
let charIndex = 0;

function type() {
  if (textIndex >= texts.length) textIndex = 0;

  const currentText = texts[textIndex];
  if (charIndex < currentText.length) {
    typewriter.textContent += currentText.charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  const currentText = texts[textIndex];
  if (charIndex > 0) {
    typewriter.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textIndex++;
    setTimeout(type, 500);
  }
}

type();
