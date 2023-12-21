const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const totalItems = document.querySelector("#totalItems");
const titulo = document.querySelector('.title');
const precio = document.querySelector('.now');
const imagen = document.querySelector('#imageBox')

plus.addEventListener("click", () => {
  totalItems.value++;
});

minus.addEventListener("click", () => {
  totalItems.value--;
  if (totalItems.value == 0 || totalItems.value < 0) {
    totalItems.value = 1;
  }
});

totalItems.addEventListener("change", () => {
  if (totalItems.value == 0 || totalItems.value < 0) {
    totalItems.value = 1;
  }
});

document.querySelector(".add_btn").addEventListener('click', () => {
  let totalItems = document.querySelector('#totalItems').value;

  let cama = {
    name: "Cama Grande de Lujo para Perro (Original)",
    value: 179.00,
    amount: totalItems,
    src: 'img/per-lounger-large-4_1024x1024_1024x1024_34a472bb-bf07-491b-9da1-ddfe32f20300_1024x.jpg',
    Id: 1,
  };

  localStorage.setItem("cart", JSON.stringify(cama));

  showItemOnCart();
})



function showItemOnCart() {
  let cart = localStorage.getItem("cart");

  if (cart !== null && cart !== "") {
    document.getElementById("cartDiv").classList.remove("empty");
    let cartBoxProducts = document.getElementById("products");
    cartBoxProducts.classList.remove("empty");
    cartBoxProducts.innerHTML = "";

    let checkout = document.getElementById("checkout");
    checkout.classList.remove("hide");
    let cartProduct = JSON.parse(localStorage.getItem("cart"));

    // product Div
    let productDiv = document.createElement("div");
    productDiv.className = "product";

    // Description Div Start
    let descriptionDiv = document.createElement("div");
    descriptionDiv.className = "description";
    

    let img = document.createElement("img");
    img.className = "productImg";
    img.src = cartProduct.src;
   /*  img.style.width="100px"
 */
    // info Div Start

    let infoDiv = document.createElement("div");
    infoDiv.className = "info";

    let productTitle = document.createElement("h3");
    productTitle.innerHTML = cartProduct.name;

    let singleValue = document.createElement("span");
    singleValue.className = "singleValue";
    singleValue.innerHTML = `€${cartProduct.value.toFixed(2)} `;

    let amount = document.createElement("span");
    amount.className = "amount";
    amount.innerHTML = `x ${cartProduct.amount} = `;

    let finalValue = document.createElement("span");
    finalValue.className = "finalValue";
    finalValue.innerHTML = `€${(cartProduct.value * cartProduct.amount).toFixed(
      2
    )}`;

    infoDiv.appendChild(productTitle);
    infoDiv.appendChild(singleValue);
    infoDiv.appendChild(amount);
    infoDiv.appendChild(finalValue);

    // info Div end

    // remove Div start

    let removeDiv = document.createElement("div");
    removeDiv.className = "remove";
    removeDiv.innerHTML = '<img src="img/icon-delete.svg">';

    removeDiv.addEventListener("click", () => {
      localStorage.setItem("cart", "");
      document.getElementById("products").innerHTML = "";
      showItemOnCart();
    });

    // remove Div end

    descriptionDiv.appendChild(img);
    descriptionDiv.appendChild(infoDiv);
    descriptionDiv.appendChild(removeDiv);

    // Description Div End

    productDiv.appendChild(descriptionDiv);

    cartBoxProducts.appendChild(productDiv);

    document
      .querySelector("#cartDiv")
      .setAttribute("data-content", cartProduct.amount);
  } else {
    document.getElementById("cartDiv").classList.add("empty");

    let cartBoxProducts = document.getElementById("products");
    cartBoxProducts.classList.add("empty");
    cartBoxProducts.innerHTML = "";
    let checkout = document.getElementById("checkout");
    checkout.classList.add("hide");

    let span = document.createElement("span");
    span.className = "emptyCart";

    span.innerHTML = "    Su cesta esta vacia.";

    cartBoxProducts.appendChild(span);
  }
}




let cart = document.getElementById("cartIcon");

cart.addEventListener("click", () => {
  let cartBox = document.getElementById("cart-box");
 
  cartBox.classList.toggle("hide");
  cartBox.addEventListener("mouseleave", () => {
    cartBox.classList.add("hide");
  });
  showItemOnCart();
});

window.addEventListener("load", () => {
  showItemOnCart();
});


