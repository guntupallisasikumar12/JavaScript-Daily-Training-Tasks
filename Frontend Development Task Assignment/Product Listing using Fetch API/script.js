const productContainer = document.getElementById("product-container");
    const errorDiv = document.getElementById("error");
    const loadingDiv = document.getElementById("loading");

    const API_URL = "https://fakestoreapi.com/products";

    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch products. Status: " + response.status);
            }
            return response.json();
        })
        .then(data => {
            loadingDiv.style.display = "none";

            data.forEach(product => {
                const card = document.createElement("div");
                card.classList.add("product-card");

                const img = document.createElement("img");
                img.src = product.image;
                img.alt = product.title;

                const title = document.createElement("h3");
                title.textContent = product.title;

                card.appendChild(img);
                card.appendChild(title);

                productContainer.appendChild(card);
            });
        })
        .catch(error => {
            loadingDiv.style.display = "none";
            errorDiv.textContent = error.message;
            console.error("Error:", error);
        });