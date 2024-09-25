    function calculateTotal() {
        let total = 0;
        document.querySelectorAll('.order-price-counter').forEach(price => {

            const priceValue = parseFloat(price.textContent.replace('$', ''));
            total += priceValue;
        });

        document.querySelector('.total-amount').textContent = `$${total.toFixed(2)}`;
    }

    function addRemoveListeners() {
        document.querySelectorAll('.order-price-trashcan-btn').forEach(button => {
            button.addEventListener('click', function() {

                const orderItem = this.closest('.order');
                if (orderItem) {
                    orderItem.remove();
                }

                calculateTotal();
                checkIfEmpty()
            });
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        calculateTotal();
        addRemoveListeners();
        checkIfEmpty()
    });
    

    function checkIfEmpty() {
        const orders = document.querySelectorAll('.order');
        const emptyCartSection = document.querySelector('.empty-cart');
        const paymentSection = document.querySelector('.payment');
        const totalSection = document.querySelector('.total');
        
        if (orders.length === 0) {
            // Show the empty cart section and hide payment and total sections
            emptyCartSection.style.display = 'flex'; // Show empty cart
            paymentSection.style.display = 'none'; // Hide payment
            totalSection.style.display = 'none'; // Hide total
        } else {
            // Hide the empty cart section and show payment and total sections
            emptyCartSection.style.display = 'none'; // Hide empty cart
            paymentSection.style.display = 'block'; // Show payment
            totalSection.style.display = 'block'; // Show total
        }
    }