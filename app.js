function filterStores() {
    const input = document.getElementById("productSearch").value.toLowerCase();
    const cards = document.querySelectorAll(".store-card");
    cards.forEach(card => {
        const product = card.querySelector("p").textContent.toLowerCase();
        card.style.display = product.includes(input) ? "flex" : "none";
    });
}