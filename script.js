let count = 0;
let total = 0;
let cartItems = [];

/* PRODUCTS */

const products = [



  {
    name: "Burger",
    price: 149,
    category: "Fast Food",
    image:
    "https://images.unsplash.com/photo-1586190848861-99aa4a171e90"
  },

  {
    name: "Pizza",
    price: 199,
    category: "Fast Food",
    image:
    "https://images.unsplash.com/photo-1594007654729-407eedc4be65"
  },

  {
    name: "Sandwich",
    price: 129,
    category: "Snacks",
    image:
    "https://images.unsplash.com/photo-1528735602780-2552fd46c7af"
  },


  {
    name: "Noodles",
    price: 159,
    category: "Fast Food",
    image:
    "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841"
  },

  {
    name: "French Fries",
    price: 119,
    category: "Snacks",
    image:
    "https://images.unsplash.com/photo-1576107232684-1279f390859f"
  },

  {
    name: "Chicken Wings",
    price: 249,
    category: "Fast Food",
    image:
    "https://images.unsplash.com/photo-1562967914-608f82629710"
  },

  {
    name: "Milkshake",
    price: 129,
    category: "Drinks",
    image:
    "https://images.unsplash.com/photo-1577805947697-89e18249d767"
  },

  {
    name: "Mojito",
    price: 89,
    category: "Drinks",
    image:
    "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd"
  }

];


/* LOAD PRODUCTS */

function loadProducts(items = products) {

  const menu =
    document.getElementById("menu-container");

  menu.innerHTML = "";

  items.forEach((product) => {

    menu.innerHTML += `

      <div class="card">

        <img loading="lazy" src="${product.image}?w=600">

        <div class="card-content">

          <h2>${product.name}</h2>

          <p class="card-price">
            ₹${product.price}
          </p>

          <button onclick="addToCart('${product.name}', ${product.price})">

            Add to Cart

          </button>

        </div>

      </div>

    `;

  });

}

/* ADD TO CART */

function addToCart(name, price) {

  count++;

  total += price;

  cartItems.push({
    name: name,
    price: price
  });

  document.getElementById("cart-count").innerText =
    count;

  updateCart();

}

/* UPDATE CART */

function updateCart() {

  const cart =
    document.getElementById("cart-items");

  cart.innerHTML = "";

  if(cartItems.length === 0) {

    cart.innerHTML =
      "<p>Your cart is empty</p>";

  }

  else {

    cartItems.forEach((item, index) => {

      cart.innerHTML += `

        <div class="cart-item">

          <p>
            ${item.name} - ₹${item.price}
          </p>

          <button onclick="removeItem(${index})">

            Remove

          </button>

        </div>

      `;

    });

  }

  document.getElementById("total-price").innerText =
    "Total: ₹" + total;

}

/* REMOVE ITEM */

function removeItem(index) {

  total -= cartItems[index].price;

  cartItems.splice(index, 1);

  count--;

  document.getElementById("cart-count").innerText =
    count;

  updateCart();

}

/* OPEN CART */

function openCart() {

  document
    .getElementById("cart-sidebar")
    .classList.add("active");

}

/* CLOSE CART */

function closeCart() {

  document
    .getElementById("cart-sidebar")
    .classList.remove("active");

}

/* FILTER PRODUCTS */

function filterProducts(category) {

  if(category === "All") {

    loadProducts(products);

  }

  else {

    const filtered =
      products.filter((product) =>

        product.category === category

      );

    loadProducts(filtered);

  }

}

/* SEARCH PRODUCTS */

function searchProducts() {

  const search =
    document
      .getElementById("search-input")
      .value
      .toLowerCase();

  const filtered =
    products.filter((product) =>

      product.name
        .toLowerCase()
        .includes(search)

    );

  loadProducts(filtered);

}

/* MOBILE MENU */

function toggleMenu() {

  document
    .getElementById("nav-links")
    .classList.toggle("active");

}

/* CHECKOUT */

function openCheckout() {

  document
    .getElementById("checkout-popup")
    .style.display = "flex";

  document
    .getElementById("checkout-total")
    .innerText =
    "Total: ₹" + total;

}

function closeCheckout() {

  document
    .getElementById("checkout-popup")
    .style.display = "none";

}

function placeOrder() {

  alert("🎉 Order Placed Successfully!");

  cartItems = [];

  total = 0;

  count = 0;

  document.getElementById("cart-count").innerText =
    0;

  updateCart();

  closeCheckout();

}

/* SCROLL REVEAL */

window.addEventListener(
  "scroll",
  reveal
);

window.addEventListener(
  "load",
  reveal
);

function reveal() {

  const reveals =
    document.querySelectorAll(".reveal");

  reveals.forEach((element) => {

    const windowHeight =
      window.innerHeight;

    const revealTop =
      element.getBoundingClientRect().top;

    const revealPoint = 100;

    if(revealTop < windowHeight - revealPoint) {

      element.classList.add("active");

    }

  });

}

/* INITIAL LOAD */

loadProducts();