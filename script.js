let driver = document.getElementById('driver'); // Mengambil element yang id nya driver
let flag = document.getElementById('flag'); // Mengambil element yg id nya flag

// Menambahkan event saat mouse di-scroll
window.addEventListener('scroll', () => {
    let value = window.scrollY;

    driver.style.left = value * -2 + 'px'; // Menggeser element sejauh -2 pixel saat mouse di-scroll
    flag.style.left = value * 2 + 'px'; // Menggeser element sejauh 2 pixel saat mouse di-scroll
});