document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const mobileNav = document.getElementById('mobileNav');
    const mobileLinks = mobileNav.querySelectorAll('a');
    
    // Функция переключения меню
    function toggleMenu() {
        if (mobileNav.style.display === 'block') {
            mobileNav.style.display = 'none';
        } else {
            mobileNav.style.display = 'block';
        }
    }
    
    // Открытие/закрытие меню при клике на бургер
    burger.addEventListener('click', toggleMenu);
    
    // Закрытие меню при клике на ссылку
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.style.display = 'none';
        });
    });
    
    // Закрытие меню при клике вне меню
    document.addEventListener('click', function(event) {
        if (!burger.contains(event.target) && !mobileNav.contains(event.target)) {
            mobileNav.style.display = 'none';
        }
    });
});
