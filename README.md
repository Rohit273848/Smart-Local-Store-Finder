# 🛍️ Local Store-Based E-Commerce Platform (Frontend)

A **responsive** web-based **Local Store-Based E-Commerce Platform** where users can:

- Browse products by category.
- Search products by **name, store name, or location**.
- Compare products and view **multiple store prices**.
- Rate products (UI).
- Sign up, log in, and register businesses (UI only for now).

---

## 📌 Features Completed

- ✅ Responsive UI with **Tailwind CSS**
- ✅ Product Filtering by **Category**
- ✅ Dynamic Product Display (via **JavaScript**)
- ✅ Product **Search** (by product name, store name, location)
- ✅ Basic **Rating UI (Frontend only)**
- ✅ Login / Sign-Up Forms (**UI only**)
- ✅ **List Your Business** Form (**UI only**)

---

## ⚙️ Technologies Used

- HTML5
- **Tailwind CSS** (via CDN)
- **Vanilla JavaScript (ES6+)**
- JSON (for storing product data)

---

## 📁 Folder Structure
- root/
- ├── index.html        // Main page with search & category navigation
- ├── products.html     // Product listing page by category
- ├── products.js       // Handles fetching and displaying products
- ├── data/
- │   └── products.json // Static product data
- └── README.md         // Project info

##🛒 Product JSON Format Example
- {
-   "id": 1,
-   "name": "Samsung Galaxy S23",
-   "category": "Mobile",
-   "image": "samsung-s23.png",
-   "stores": [
-    {
-    "storeName": "Mobile Hub",
-    "location": "Aurangabad",
-    "price": 69999,
-    "rating": 4.2
-    }
-  ]
- }

## 📖 Current Limitations
- 🚫 No backend yet (Data comes from static products.json file)
- 🚫 Ratings not saved (UI only)
- 🚫 Login/Signup not functional (UI only)

## 🚧 Work in Progress
-  Location-based filtering (UI ready, logic under development)
-  Save ratings using localStorage (planned)
-  Backend API (Node.js) (future work)

## 📬 Developer Info
- Project by: Rohit Mahajan

## 📝 License
- This project is open for personal or learning use. Feel free to use or modify.
