
document.addEventListener("DOMContentLoaded", () => {
    const howItWorksBtn = document.getElementById("howItWorksBtn");
    const howItworkSection = document.getElementById("howItwork");
    const closeHowItworkBtn = document.getElementById("closeHowItwork");

    const listYourBusinessBtn = document.getElementById("listYourBusinessBtn");
    const listYourBusinessSection = document.getElementById("listYourBusiness");
    const closeListBusinessBtn = document.getElementById("closeListBusiness");

    howItWorksBtn.addEventListener("click", () => {
        howItworkSection.classList.remove("hidden");
        howItworkSection.classList.add("flex");
    });

    closeHowItworkBtn.addEventListener("click", () => {
        howItworkSection.classList.add("hidden");
        howItworkSection.classList.remove("flex");
    });

    listYourBusinessBtn.addEventListener("click", () => {
        listYourBusinessSection.classList.remove("hidden");
        listYourBusinessSection.classList.add("flex");
    });

    closeListBusinessBtn.addEventListener("click", () => {
        listYourBusinessSection.classList.add("hidden");
        listYourBusinessSection.classList.remove("flex");
    });
});


// Login and sing up section

const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const loginSection = document.getElementById("loginSection");
const signupSection = document.getElementById("signupSection");
const closeLoginBtn = document.getElementById("closeLoginBtn");
const closeSignupBtn = document.getElementById("closeSignupBtn");

loginBtn.addEventListener("click", () => {
  loginSection.classList.remove("hidden");
  loginSection.classList.add("flex");
});
closeLoginBtn.addEventListener("click", () => {
  loginSection.classList.add("hidden");
  loginSection.classList.remove("flex");
});

signupBtn.addEventListener("click", () => {
  signupSection.classList.remove("hidden");
  signupSection.classList.add("flex");
});
closeSignupBtn.addEventListener("click", () => {
  signupSection.classList.add("hidden");
  signupSection.classList.remove("flex");
});


function filterStores() {
    const input = document.getElementById("productSearch").value.toLowerCase();
    const cards = document.querySelectorAll(".store-card");
    cards.forEach(card => {
        const product = card.querySelector("p").textContent.toLowerCase();
        card.style.display = product.includes(input) ? "flex" : "none";
    });
}

