// Read category from URL
const params = new URLSearchParams(window.location.search);
const category = params.get("category");
document.getElementById("categoryTitle").textContent = `Category: ${category}`;

// Fetch products and display
fetch("data/products.json")
  .then(res => res.json())
  .then(products => {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  });

function displayProducts(products) {
  const container = document.getElementById("productList");
  if (products.length === 0) {
    container.innerHTML = "<p>No products found in this category.</p>";
    return;
  }

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "border rounded-xl p-4 shadow hover:shadow-lg";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-contain rounded mb-2 bg-white p-2" />
      <h2 class="text-lg font-semibold">${product.name}</h2>
      <p class="text-pink-600 font-bold">₹${product.price}</p>
    `;
    container.appendChild(card);
  });
}


// Listen for Input Events with JavaScript

document.getElementById('searchInput').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');
  
    productCards.forEach(card => {
      const name = card.dataset.name.toLowerCase();
      const category = card.dataset.category.toLowerCase();
      card.style.display = (name.includes(query) || category.includes(query)) ? 'block' : 'none';
    });
  });
  