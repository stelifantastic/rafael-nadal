const message = document.querySelector(".message");
const emailInput = document.querySelector("input");
const button = document.querySelector("button");
const listItems = document.querySelectorAll("ul li");
const newsletter = document.querySelector(".newsletter");

function showMessage(text) {
  message.textContent = text;
  message.hidden = false;
}

newsletter.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();

  if (email === "") {
    showMessage("Enter email first");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showMessage("That's not an email address, you silly rabbit!");
  } else {
    showMessage("I cannot read, I am a dog.");
  }
});

document.addEventListener("click", function () {
  message.hidden = true;
});

function evenOutList() {
  const range = document.createRange();
  const widths = [];

  listItems.forEach(function (item) {
    item.style.letterSpacing = "";
    range.selectNodeContents(item);
    widths.push(range.getBoundingClientRect().width);
  });

  const longest = Math.max(...widths);

  listItems.forEach(function (item, index) {
    const letters = item.textContent.trim().length;

    if (letters > 1) {
      item.style.letterSpacing =
        (longest - widths[index]) / (letters - 1) + "px";
    }
  });
}

evenOutList();

document.fonts.ready.then(evenOutList);
window.addEventListener("resize", evenOutList);
