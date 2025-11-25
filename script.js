  let products = [
            { 
                name: "Printed Hooded Top", 
                price: 120,
                discount:false,
                image: "assets/hoodie2.webp"
            },
            { 
                name: "Hoodie", 
                price: 80,
                discount:true,
                image: "assets/Hoodie1.webp"
            },
            { 
                name: "Boxy printed Hooded Top", 
                price: 60,
                discount:false,
                image: "assets/hoodie3.webp"
            },
            { 
                name: "Embroided sweater", 
                price: 50,
                discount:false,
                image: "assets/hoodie4.webp"
            }
        ];

    
        function displayProducts() {
            let grid = document.getElementById("productGrid");
            grid.innerHTML = "";

            products.forEach((p, index) => {
                grid.innerHTML += `
                    <div class="product-card">
                        <img src="${p.image}" alt="${p.name}">
                        <div class="product-info">
                            <h3>${p.name.toUpperCase()}</h3>
                            <div class="price">$${p.price}</div>
                            <div class="btn" onclick="addToCart(${index})">
                                Add to Cart
                            </div>
                        </div>
                    </div>
                `;
            });
        }

      
        function addToCart(index) {
            let product = products[index];

            if (product.discount) {
                Swal.fire({
                    title: "Discount Applied!",
                    text: `${product.name.toUpperCase()} has a 10% discount!`,
                    icon: "success",
                    confirmButtonColor: "#28a745"
                });
            } else {
                Swal.fire({
                    title: "Added to Cart",
                    text: `${product.name.toUpperCase()} has no discount.`,
                    icon: "info",
                    confirmButtonColor: "#007bff"
                });
            }
        }


        displayProducts();