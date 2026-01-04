document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value;
    const email = form.querySelector("input[type='email']").value;
    const message = form.querySelector("textarea").value;

    if (name === "" || email === "" || message === "") {
      alert("Please fill all required fields");
      return;
    }

    alert("Thank you! Your message has been sent.");
    form.reset();
  });
}

const cards = document.querySelectorAll(".card, .resource-item");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("card-hover");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("card-hover");
  });
});

const emergencyBox = document.querySelector(".emergency-box");

if (emergencyBox) {
  emergencyBox.classList.add("pulse");
}

