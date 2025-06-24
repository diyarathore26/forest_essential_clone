let api =
  "https://raw.githubusercontent.com/diyarathore26/products-api/refs/heads/main/products.json";
  let productContainer = document.querySelector(".Seasonal")

  async function fetchProducts() {
    try {
      const request = await fetch(api);
      let data = await request.json();
      data = data.products;
      return data;
    } catch (error) {
      return error;
    }
  }


