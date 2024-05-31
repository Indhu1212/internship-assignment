$(document).ready(function() {
    var products = [
        {id: 1, img: 'images/bluepolo.jpeg', desc: 'Men T-Shirt', title: 'Blue Polo', price: 150, gender: 'men', color: 'blue', type: 'polo'},
        {id: 2, img: 'images/greenpolo.jpg', desc: 'Men T-shirt', title: 'Polo style', price: 280, gender: 'men', color: 'green', type: 'polo'},
        {id: 3, img: 'images/mbb1.jpeg', desc: 'Men T-shirt', title: 'Basic style', price: 100, gender: 'men', color: 'blue', type: 'basic'},
        {id: 4, img: 'images/mbb2.jpeg', desc: 'Men T-shirt', title: 'Basic style', price: 210, gender: 'men', color: 'blue', type: 'basic'},
        {id: 5, img: 'images/mbb3.jpeg', desc: 'Men T-shirt', title: 'Basic style', price: 290, gender: 'men', color: 'blue', type: 'basic'},
        {id: 6, img: 'images/mbb4.jpeg', desc: 'Men T-shirt', title: 'Basic style', price: 190, gender: 'men', color: 'blue', type: 'basic'},
        {id: 7, img: 'images/mbb5.jpeg', desc: 'Men T-shirt', title: 'Basic style', price: 120, gender: 'men', color: 'blue', type: 'basic'},
        {id: 8, img: 'images/mbh1.jpeg', desc: 'Men T-shirt', title: 'Hoodie style', price: 300, gender: 'men', color: 'blue', type: 'hoodie'},
        {id: 9, img: 'images/mbh2.jpeg', desc: 'Men T-shirt', title: 'Hoodie style', price: 290, gender: 'men', color: 'blue', type: 'hoodie'},
        {id: 10, img: 'images/mbh3.jpeg', desc: 'Men T-shirt', title: 'Hoodie style', price: 200, gender: 'men', color: 'blue', type: 'hoodie'},
        {id: 11, img: 'images/mbh4.jpeg', desc: 'Men T-shirt', title: 'Hoodie style', price: 390, gender: 'men', color: 'blue', type: 'hoodie'},
        {id: 12, img: 'images/mbh5.jpeg', desc: 'Men T-shirt', title: 'Hoodie style', price: 310, gender: 'men', color: 'blue', type: 'hoodie'},
        {id: 13, img: 'images/mbp1.jpeg', desc: 'Men T-shirt', title: 'polo style', price: 130, gender: 'men', color: 'blue', type: 'polo'},
        {id: 14, img: 'images/mbp2.jpeg', desc: 'Men T-shirt', title: 'polo style', price:256, gender: 'men', color: 'blue', type: 'polo'},
        {id: 15, img: 'images/mbp3.jpeg', desc: 'Men T-shirt', title: 'polo style', price: 200, gender: 'men', color: 'blue', type: 'polo'},
        {id: 16, img: 'images/mbp4.jpeg', desc: 'Men T-shirt', title: 'polo style', price: 120, gender: 'men', color: 'blue', type: 'polo'},
        {id: 17, img: 'images/mengreenba1.jpeg', desc: 'Men T-shirt', title: 'Baic style', price: 150, gender: 'men', color: 'green', type: 'basic'},
        {id: 18, img: 'images/mengreenba2.jpeg', desc: 'Men T-shirt', title: 'basic style', price: 240, gender: 'men', color: 'green', type: 'basic'},
        {id: 19, img: 'images/mengreenba3.jpeg', desc: 'Men T-shirt', title: 'Basic style', price: 230, gender: 'men', color: 'green', type: 'basic'},
        {id: 20, img: 'images/mengreenba4.jpeg', desc: 'Men T-shirt', title: 'Basic style', price: 200, gender: 'men', color: 'green', type: 'basic'},
        {id: 21, img: 'images/mengreenba5.jpeg', desc: 'Men T-shirt', title: 'Basic style', price: 190, gender: 'men', color: 'green', type: 'basic'},
        {id: 22, img: 'images/mengreenba6.jpeg', desc: 'Men T-shirt', title: 'Basic style', price: 390, gender: 'men', color: 'green', type: 'basic'},
        {id: 23, img: 'images/mengreenho1.jpeg', desc: 'Men T-shirt', title: 'Hoodie style', price: 330, gender: 'men', color: 'green', type: 'hoodie'},
        {id: 24, img: 'images/mengreenho2.jpeg', desc: 'Men T-shirt', title: 'Hoodie style', price: 311, gender: 'men', color: 'green', type: 'hoodie'},
        {id: 25, img: 'images/mengreenho3.jpeg', desc: 'Men T-shirt', title: 'Hoodie style', price: 450, gender: 'men', color: 'green', type: 'basic'},
        {id: 26, img: 'images/mengreenho4.jpeg', desc: 'Men T-shirt', title: 'Hoodie style', price: 290, gender: 'men', color: 'green', type: 'basic'},
        {id: 27, img: 'images/mengreenpolo2.jpeg', desc: 'Men T-shirt', title: 'Polo style', price: 190, gender: 'men', color: 'green', type: 'polo'},
        {id: 28, img: 'images/mengreenpolo3.jpeg', desc: 'Men T-shirt', title: 'Polo style', price: 210, gender: 'men', color: 'green', type: 'polo'},
        {id: 29, img: 'images/mengreenpolo4.jpeg', desc: 'Men T-shirt', title: 'Polo style', price: 200, gender: 'men', color: 'green', type: 'polo'},
        {id: 30, img: 'images/mrb1.jpeg', desc: 'Men T-shirt', title: 'Basic style', price: 100, gender: 'men', color: 'red', type: 'basic'},
        {id: 31, img: 'images/mrb2.jpeg', desc: 'Men T-shirt', title: 'Basic style', price: 240, gender: 'men', color: 'red', type: 'basic'},
        {id: 32, img: 'images/mrb3.jpeg', desc: 'Men T-shirt', title: 'Basic style', price: 280, gender: 'men', color: 'red', type: 'basic'},
        {id: 33, img: 'images/mrb4.jpeg', desc: 'Men T-shirt', title: 'Basic style', price: 460, gender: 'men', color: 'red', type: 'basic'},
        {id: 34, img: 'images/mrh1.jpeg', desc: 'Men T-shirt', title: 'Hoodie style', price: 490, gender: 'men', color: 'red', type: 'Hoodie'},
        {id: 35, img: 'images/mrh2.jpeg', desc: 'Men T-shirt', title: 'Hoodie style', price: 260, gender: 'men', color: 'red', type: 'hoodie'},
        {id: 36, img: 'images/mrh3.jpeg', desc: 'Men T-shirt', title: 'Hoodie style', price: 210, gender: 'men', color: 'red', type: 'hoodie'},
        {id: 37, img: 'images/mrh4.jpeg', desc: 'Men T-shirt', title: 'Hoodie style', price: 410, gender: 'men', color: 'red', type: 'hoodie'},
        {id: 38, img: 'images/mrp1.jpeg', desc: 'Men T-shirt', title: 'Polo style', price: 250, gender: 'men', color: 'red', type: 'polo'},
        {id: 39, img: 'images/mrp2.jpeg', desc: 'Men T-shirt', title: 'Polo style', price: 390, gender: 'men', color: 'red', type: 'polo'},
        {id: 40, img: 'images/mrp3.jpeg', desc: 'Men T-shirt', title: 'Polo style', price: 220, gender: 'men', color: 'red', type: 'polo'},
        {id: 41, img: 'images/mrp4.jpeg', desc: 'Men T-shirt', title: 'Polo style', price: 270, gender: 'men', color: 'red', type: 'polo'},
        {id: 42, img: 'images/polored.jpg', desc: 'Men T-shirt', title: 'Polo style', price: 350, gender: 'men', color: 'red', type: 'polo'},
        {id: 43, img: 'images/wbb1.jpeg', desc: 'Women T-shirt', title: 'Basic style', price: 150, gender: 'women', color: 'blue', type: 'basic'},
        {id: 44, img: 'images/wbb2.jpeg', desc: 'Women T-shirt', title: 'Basic style', price: 100, gender: 'women', color: 'blue', type: 'basic'},
        {id: 45, img: 'images/wbb3.jpeg', desc: 'Women T-shirt', title: 'Basic style', price: 120, gender: 'women', color: 'blue', type: 'basic'},
        {id: 46, img: 'images/wbb4.jpeg', desc: 'Women T-shirt', title: 'Basic style', price: 200, gender: 'women', color: 'blue', type: 'basic'},
        {id: 47, img: 'images/wbb5.jpeg', desc: 'Women T-shirt', title: 'Basic style', price: 250, gender: 'women', color: 'blue', type: 'basic'},
        {id: 48, img: 'images/wbb6.jpeg', desc: 'Women T-shirt', title: 'Basic style', price: 180, gender: 'women', color: 'blue', type: 'basic'},
        {id: 49, img: 'images/wbh1.jpeg', desc: 'Women T-shirt', title: 'Hoodie style', price: 280, gender: 'women', color: 'blue', type: 'hoodie'},
        {id: 50, img: 'images/wbh2.jpeg', desc: 'Women T-shirt', title: 'Hoodie style', price: 390, gender: 'women', color: 'blue', type: 'hoodie'},
        {id: 51, img: 'images/wbh3.jpeg', desc: 'Women T-shirt', title: 'Hoodie style', price: 350, gender: 'women', color: 'blue', type: 'hoodie'},
        {id: 52, img: 'images/wbp1.jpeg', desc: 'Women T-shirt', title: 'Polo style', price: 180, gender: 'women', color: 'blue', type: 'polo'},
        {id: 53, img: 'images/wbp2.jpeg', desc: 'Women T-shirt', title: 'Polo style', price: 190, gender: 'women', color: 'blue', type: 'polo'},
        {id: 54, img: 'images/wbp3.jpg', desc: 'Women T-shirt', title: 'Polo style', price: 90, gender: 'women', color: 'blue', type: 'polo'},
        {id: 55, img: 'images/wbp4.jpeg', desc: 'Women T-shirt', title: 'Polo style', price: 140, gender: 'women', color: 'blue', type: 'polo'},
        {id: 56, img: 'images/wgh3.jpeg', desc: 'Women T-shirt', title: 'Hoodie style', price: 380, gender: 'women', color: 'green', type: 'polo'},
        {id: 57, img: 'images/wgh4.jpeg', desc: 'Women T-shirt', title: 'Hoodie style', price: 340, gender: 'women', color: 'green', type: 'polo'}, 
        {id: 58, img: 'images/womengreenba1.jpeg', desc: 'women T-shirt', title: 'basic style', price: 120, gender: 'women', color: 'green', type: 'basic'},
        {id: 59, img: 'images/womengreenba2.jpeg', desc: 'women T-shirt', title: 'Basic style', price: 120, gender: 'women', color: 'green', type: 'basic'},
        {id: 60, img: 'images/womengreenba3.jpeg', desc: 'women T-shirt', title: 'Basic style', price: 230, gender: 'women', color: 'green', type: 'basic'},
        {id: 61, img: 'images/womengreenba4.jpeg', desc: 'women T-shirt', title: 'Basic style', price: 280, gender: 'women', color: 'green', type: 'basic'},
        {id: 62, img: 'images/womengreenba5.jpeg', desc: 'women T-shirt', title: 'Basic style', price: 290, gender: 'women', color: 'green', type: 'basic'},
        {id: 63, img: 'images/womengreenho1.jpeg', desc: 'women T-shirt', title: 'Hoodie style', price: 270, gender:  'women', color: 'green', type: 'hoodie'},
        {id: 64, img: 'images/womengreenho2.jpeg', desc: 'women T-shirt', title: 'Hoodie style', price: 260, gender:  'women', color: 'green', type: 'hoodie'},
        {id: 65, img: 'images/womengreenpolo.webp', desc: 'women T-shirt', title: 'Polo style', price: 120, gender:  'women', color: 'green', type: 'polo'},
        {id: 66, img: 'images/womengreenpolo2.jpeg', desc: 'women T-shirt', title: 'Polo style', price: 140, gender:  'women', color: 'green', type: 'polo'},
        {id: 67, img: 'images/womengreenpolo3.jpeg', desc: 'women T-shirt', title: 'Polo style', price: 150, gender:  'women', color: 'green', type: 'polo'},
        {id: 68, img: 'images/womengreenpolo4.jpeg', desc: 'women T-shirt', title: 'Polo style', price: 180, gender:  'women', color: 'green', type: 'polo'},
        {id: 69, img: 'images/womengreenpolo5.jpeg', desc: 'women T-shirt', title: 'Polo style', price: 480, gender:  'women', color: 'green', type: 'polo'},
        {id: 70, img: 'images/womengreenpolo6.jpeg', desc: 'women T-shirt', title: 'Polo style', price: 390, gender:  'women', color: 'green', type: 'polo'},
        {id: 71, img: 'images/wrb1.jpeg', desc: 'Women T-shirt', title: 'Basic style', price: 180, gender: 'women', color: 'red', type: 'basic'},  
        {id: 72, img: 'images/wrb2.jpeg', desc: 'Women T-shirt', title: 'Basic style', price: 251, gender: 'women', color: 'red', type: 'basic'},  
        {id: 73, img: 'images/wrh1.jpeg', desc: 'Women T-shirt', title: 'Hoodie style', price: 295, gender: 'women', color: 'red', type: 'hoodie'},
        {id: 74, img: 'images/wrh2.jpeg', desc: 'Women T-shirt', title: 'Hoodie style', price: 350, gender: 'women', color: 'red', type: 'hoodie'},
        {id: 75, img: 'images/wrh3.jpeg', desc: 'Women T-shirt', title: 'Hoodie style', price: 381, gender: 'women', color: 'red', type: 'hoodie'},
        {id: 76, img: 'images/wrh4.jpeg', desc: 'Women T-shirt', title: 'Hoodie style', price: 400, gender: 'women', color: 'red', type: 'hoodie'},   
        {id: 77, img: 'images/wrp1.jpeg', desc: 'Women T-shirt', title: 'Polo style', price: 200, gender: 'women', color: 'red', type: 'polo'},
        {id: 78, img: 'images/wrp2.jpeg', desc: 'Women T-shirt', title: 'Polo style', price: 355, gender: 'women', color: 'red', type: 'polo'},
        {id: 79, img: 'images/wrp3.jpeg', desc: 'Women T-shirt', title: 'Polo style', price: 300, gender: 'women', color: 'red', type: 'polo'},
        {id: 80, img: 'images/wrp4.jpeg', desc: 'Women T-shirt', title: 'Polo style', price: 373, gender: 'women', color: 'red', type: 'polo'},
        {id: 81, img: 'images/wrp5.jpeg', desc: 'Women T-shirt', title: 'Polo style', price: 300, gender: 'women', color: 'red', type: 'polo'},
    ];

    function displayProducts(filteredProducts) {
        $('#productContainer').empty();
        filteredProducts.forEach(product => {
            var productCard = `
                <div class="card">
                    <div class="img"><img src="${product.img}" alt="${product.title}"></div>
                    <div class="desc">${product.desc}</div>
                    <div class="title">${product.title}</div>
                    <div class="box">
                        <div class="price">$${product.price}</div>
                        <button class="b1" data-id="${product.id}">Add to cart</button>
                    </div>
                </div>
            `;
            $('#productContainer').append(productCard);
        });

        $('.b1').click(function() {
            var productId = $(this).data('id');
            var product = products.find(p => p.id === productId);
            addToCart(product);
            alert(`${product.title} added to cart`);
        });
    }

    function addToCart(product) {
        var cart = JSON.parse(localStorage.getItem('cart')) || [];
        var existingProduct = cart.find(p => p.id === product.id);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            product.quantity = 1;
            cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    }

    $('#searchButton').click(function(event) {
        event.preventDefault();
        var searchTerm = $('#searchInput').val().toLowerCase();
        var filteredProducts = products.filter(product =>
            product.color.toLowerCase().includes(searchTerm) ||
            product.gender.toLowerCase().includes(searchTerm) ||
            product.type.toLowerCase().includes(searchTerm)
        );
        displayProducts(filteredProducts);
    });

    $('.filter').change(function() {
        var selectedFilters = {
            gender: [],
            color: [],
            price: [],
            type: []
        };

        $('.filter:checked').each(function() {
            var name = $(this).attr('name');
            var value = $(this).val();
            selectedFilters[name].push(value);
        });

        var filteredProducts = products.filter(product => {
            var match = true;

            if (selectedFilters.gender.length && !selectedFilters.gender.includes(product.gender)) {
                match = false;
            }
            if (selectedFilters.color.length && !selectedFilters.color.includes(product.color)) {
                match = false;
            }
            if (selectedFilters.price.length) {
                var priceRange = selectedFilters.price.map(p => p.split('-').map(Number));
                var inPriceRange = priceRange.some(range => product.price >= range[0] && product.price <= range[1]);
                if (!inPriceRange) {
                    match = false;
                }
            }
            if (selectedFilters.type.length && !selectedFilters.type.includes(product.type)) {
                match = false;
            }

            return match;
        });

        displayProducts(filteredProducts);
    });

    displayProducts(products);
});
