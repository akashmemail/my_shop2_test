const product = document.getElementById("datass");

async function loded() {
  try {
    const res = await fetch("product.json");
    const data = await res.json();
    console.log(data);

    data.products.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add = "card";
      card.innerHTML = `
      <div class="container" id="datass">
      <div class="card">
        <img src="${item.thumbnail}" alt="" />
        <h2>${item.title}</h2>
        <h2>price:${item.price}</h2>
        <h3>rading :${item.rating}</h3>
        
      </div>
    </div>
      
      `;
      product.appendChild(card);
    });
  } catch (error) {
    console.log(error);
  }
}
loded();
