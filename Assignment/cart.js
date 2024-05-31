$(document).ready(function() {
    function displayCart() {
        var cart = JSON.parse(localStorage.getItem('cart')) || [];
        $('#cartItems').empty();

        if (cart.length === 0) {
            $('#emptyCartMessage').show();
            $('#totalButton').hide();
            $('#totalPrice').hide();
        } else {
            $('#emptyCartMessage').hide();
            $('#totalButton').show();
            $('#totalPrice').show();

            cart.forEach(item => {
                var cartItem = `
                    <div class="cart-item" data-id="${item.id}">
                        <img src="${item.img}" alt="${item.title}" class="cart-img">
                        <span class="cart-title">${item.title}</span>
                        <input type="number" class="quantity" value="${item.quantity}" min="1" max="10">
                        <button class="delete">Delete</button>
                    </div>
                `;
                $('#cartItems').append(cartItem);
            });

            $('.delete').click(function() {
                var itemId = $(this).parent().data('id');
                var cart = JSON.parse(localStorage.getItem('cart')) || [];
                cart = cart.filter(item => item.id !== itemId);
                localStorage.setItem('cart', JSON.stringify(cart));
                displayCart();
            });

            $('.quantity').change(function() {
                var itemId = $(this).parent().data('id');
                var newQuantity = parseInt($(this).val());
                if (newQuantity > 10) {
                    alert('Quantity cannot be more than 10');
                    $(this).val(10);
                    newQuantity = 10;
                }
                var cart = JSON.parse(localStorage.getItem('cart')) || [];
                var cartItem = cart.find(item => item.id === itemId);
                cartItem.quantity = newQuantity;
                localStorage.setItem('cart', JSON.stringify(cart));
            });
        }
    }

    $('#totalButton').click(function() {
        var cart = JSON.parse(localStorage.getItem('cart')) || [];
        var total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
        });
        $('#totalPrice').text(`Total: $${total}`);
    });

    displayCart();
});
