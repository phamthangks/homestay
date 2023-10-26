
document.addEventListener("DOMContentLoaded", function() {
    // Lấy tham chiếu đến các phần tử DOM
    const menuBar = document.getElementById('menu-bar');
    const navbar = document.querySelector('.navbar'); 
    // Xử lý sự kiện khi người dùng nhấp vào biểu tượng menu
    menuBar.addEventListener('click', function() {
        navbar.classList.toggle('active-nav');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Lấy tham chiếu đến các phần tử DOM
    const loginBtn = document.getElementById('login-btn');
    const loginForm = document.querySelector('.login-form-container');
    // Xử lý sự kiện khi người dùng nhấp vào biểu tượng menu
    loginBtn.addEventListener('click', function() {
        loginForm .classList.toggle('active-login');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Lấy tham chiếu đến các phần tử DOM
    const loginClose = document.getElementById('form-close');
    const loginForm = document.querySelector('.login-form-container');
    // Xử lý sự kiện khi người dùng nhấp vào biểu tượng menu
    loginClose.addEventListener('click', function() {
        loginForm .classList.remove('active-login');
    });
});

// Search

document.addEventListener("DOMContentLoaded", function() {
    // Lấy tham chiếu đến các phần tử DOM
    const loginBtn = document.getElementById('search-btn');
    const loginForm = document.querySelector('.search-bar-container');
    // Xử lý sự kiện khi người dùng nhấp vào biểu tượng menu
    loginBtn.addEventListener('click', function() {
        loginForm .classList.toggle('active-login');
    });
});



