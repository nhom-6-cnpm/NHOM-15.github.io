// Đợi cho tài liệu HTML tải xong
document.addEventListener('DOMContentLoaded', function() {
    // Slideshow tự động (nếu có)
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    
    // Hàm chuyển slide
    function changeSlide() {
        if (slides.length > 0) {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
    }
    
    // Nếu có slideshow, thiết lập interval
    if (slides.length > 0) {
        setInterval(changeSlide, 5000); // Chuyển slide mỗi 5 giây
    }
    
    // Hiệu ứng cuộn mượt cho các liên kết
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Trừ đi chiều cao của navbar
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Nút quay lại đầu trang
    const backToTopBtn = document.createElement('button');
    backToTopBtn.textContent = '↑';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.display = 'none';
    backToTopBtn.style.position = 'fixed';
    backToTopBtn.style.bottom = '20px';
    backToTopBtn.style.right = '20px';
    backToTopBtn.style.zIndex = '99';
    backToTopBtn.style.width = '40px';
    backToTopBtn.style.height = '40px';
    backToTopBtn.style.fontSize = '20px';
    backToTopBtn.style.background = '#0d6efd';
    backToTopBtn.style.color = 'white';
    backToTopBtn.style.border = 'none';
    backToTopBtn.style.borderRadius = '50%';
    backToTopBtn.style.cursor = 'pointer';
    backToTopBtn.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    
    document.body.appendChild(backToTopBtn);
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
}); 