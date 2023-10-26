
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



document.addEventListener('DOMContentLoaded', function() {
    const videoBtns = document.querySelectorAll('.vid-btn');
    const videoSlider = document.getElementById('video-slider');

    videoBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Xóa lớp 'active' từ tất cả các nút
            videoBtns.forEach(vb => vb.classList.remove('active-btn'));

            // Thêm lớp 'active' cho nút được nhấp
            btn.classList.add('active-btn');

            // Lấy giá trị của thuộc tính 'data-src' từ nút được nhấp
            const newSrc = btn.getAttribute('src');

            // Cập nhật nguồn video
            videoSlider.src = newSrc;
        });
    });
});

// ------------------------------------------------------Cut đến đây---------------------------------------------------------------------

var outSlide = document.getElementById("outs-slide-container");
var translateValues = [0, -240, -480, -720]; // Các giá trị bạn muốn áp dụng
var index = 0;

function changeTransformValue() {
    outSlide.style.transform = `translate3d(${translateValues[index]}px, 0px, 0px)`;
    index = (index + 1) % translateValues.length;
}

// Lên lịch thay đổi sau mỗi 2.5 giây
setInterval(changeTransformValue, 2500);

// chức năng dịch chuyển sang phải và sang trái 270px khi bạn nhấp vào biểu tượng 
document.addEventListener("DOMContentLoaded", function () {
    const slideContainer = document.getElementById("outs-slide-container");
    const translateValue = 360; // Giá trị dịch chuyển

    document.querySelector(".fa-chevron-right").addEventListener("click", function () {
        moveSlide(-translateValue);
    });

    document.querySelector(".fa-chevron-left").addEventListener("click", function () {
        moveSlide(translateValue);
    });

    function moveSlide(offset) {
        const currentPosition = getTranslateX(slideContainer);
        const newPosition = currentPosition + offset;
        slideContainer.style.transform = `translate3d(${newPosition}px, 0, 0)`;
    }

    function getTranslateX(element) {
        const style = window.getComputedStyle(element);
        const matrix = new DOMMatrix(style.transform);
        return matrix.m41;
    }
});
   

