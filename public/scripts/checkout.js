// Function to calculate the total price
function calculateTotal() {
    let total = 0;
    document.querySelectorAll('.order-price-counter').forEach(price => {
        // Remove the dollar sign and convert to a number
        const priceValue = parseFloat(price.textContent.replace('$', ''));
        total += priceValue;
    });

    // Update the total amount in the total section
    document.querySelector('.total-amount').textContent = `$${total.toFixed(2)}`;
}

// Add event listeners to the trashcan buttons
function addRemoveListeners() {
    document.querySelectorAll('.order-price-trashcan-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Remove the closest .order section
            const orderItem = this.closest('.order');
            if (orderItem) {
                orderItem.remove();
            }

            // Recalculate the total price
            calculateTotal();
        });
    });
}

// Initial calculation of total when the page loads
document.addEventListener('DOMContentLoaded', function() {
    calculateTotal();
    addRemoveListeners(); // Attach the listeners after DOM is loaded
});
 