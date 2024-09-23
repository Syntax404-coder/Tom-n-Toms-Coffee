let cartCount = 0;
const cartCountDisplay = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCountDisplay.textContent = cartCount;
        cartCountDisplay.style.color = '#00295D';
        cartCountDisplay.style.fontWeight = 'bold';

        button.textContent = cartCount;
        button.classList.add('active');
    });
});

function showMenu(menuType) {
    const foodMenu = document.getElementById('food-menu');
    const drinksMenu = document.getElementById('drinks-menu');
    const foodTab = document.getElementById('food-tab');
    const drinksTab = document.getElementById('drinks-tab');

    if (menuType === 'food') {
        foodMenu.classList.add('active');
        drinksMenu.classList.remove('active');
        foodTab.classList.add('active');
        drinksTab.classList.remove('active');
    } else {
        drinksMenu.classList.add('active');
        foodMenu.classList.remove('active');
        drinksTab.classList.add('active');
        foodTab.classList.remove('active');
    }
}

function handleScroll() {
    const scrollPosition = window.scrollY;
    const reminders = document.querySelector('.reminders');
    const tableInfo = document.querySelector('.table-info');

    if (scrollPosition > 50) {
        reminders.style.display = 'none';
        tableInfo.style.display = 'none';
    } else {
        reminders.style.display = 'block';
        tableInfo.style.display = 'block';
    }
}

window.addEventListener('scroll', handleScroll);
