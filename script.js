window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('fade-out');
    setTimeout(() => preloader.style.display = 'none', 500);

    // Carrusel de imágenes
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    };

    document.getElementById('next').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    // Mostrar el primer slide al cargar
    showSlide(currentSlide);

    // Animaciones al hacer scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const handleScroll = () => {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Para activar las animaciones si ya están en pantalla al cargar
});
