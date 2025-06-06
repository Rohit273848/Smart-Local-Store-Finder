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

    // Get best price store (optional)
    const bestStore = product.stores?.reduce((min, s) => (s.price < min.price ? s : min), product.stores[0]);

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-contain rounded mb-2 bg-white p-2" />
      <h2 class="text-lg font-semibold">${product.name}</h2>
      <p class="text-pink-600 font-bold">Best Price: ₹${bestStore?.price ?? 'N/A'} (${bestStore?.storeName ?? 'Unknown'})</p>

      <div class="mt-3">
        <p class="font-medium mb-1 text-gray-700">Available at:</p>
        ${product.stores.map(store => `
          <div class="mb-2 text-sm text-gray-800 border p-2 rounded bg-gray-50">
            <div><strong>Store:</strong> ${store.storeName}</div>
            <div><strong>Location:</strong> ${store.location}</div>
            <div><strong>Price:</strong> ₹${store.price}</div>
            <div><strong>Rating:</strong> ⭐ ${store.rating}</div>
          </div>
        `).join('')}
      </div>
    `;

    container.appendChild(card);
  });
}



// Listen for Input Events with JavaScript

// document.getElementById('searchInput').addEventListener('input', function () {
//     const query = this.value.toLowerCase();
//     const productCards = document.querySelectorAll('.product-card');
  
//     productCards.forEach(card => {
//       const name = card.dataset.name.toLowerCase();
//       const category = card.dataset.category.toLowerCase();
//       card.style.display = (name.includes(query) || category.includes(query)) ? 'block' : 'none';
//     });
//   });
  


  // const container = document.getElementById("productList");
  // products.forEach(product => {
  //   const card = document.createElement("div");
  //   card.className = "product-card p-4 bg-white rounded shadow";
  //   card.setAttribute("data-name", product.name);
  //   card.setAttribute("data-category", product.category);
  
  //   card.innerHTML = `
  //     <img src="${product.image}" alt="${product.name}" class="w-60 h-40 object-cover mb-2 rounded" />
  //     <h2 class="text-lg font-semibold">${product.name}</h2>
  //     <p class="text-pink-600 font-bold">₹${product.price}</p>
  //     <div class="star-rating flex gap-1 mt-2 cursor-pointer">
  //       <span class="star text-gray-400 text-xl" data-star="1">★</span>
  //       <span class="star text-gray-400 text-xl" data-star="2">★</span>
  //       <span class="star text-gray-400 text-xl" data-star="3">★</span>
  //       <span class="star text-gray-400 text-xl" data-star="4">★</span>
  //       <span class="star text-gray-400 text-xl" data-star="5">★</span>
  //     </div>
  //   `;
  
  //   container.appendChild(card);
  // });
  