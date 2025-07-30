// Espera o conteúdo da página carregar completamente
document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA DAS ABAS (TABS) ---
    window.openTab = function(evt, tabName) {
        const tabContents = document.querySelectorAll('.tab-content');
        const tabButtons = document.querySelectorAll('.tab-button');
        
        tabContents.forEach(content => {
            content.classList.remove('active'); 
        });

        tabButtons.forEach(button => {
            button.classList.remove('active');
        });
        
        document.getElementById(tabName).classList.add('active');
        evt.currentTarget.classList.add('active');
    }

    // Garante que a primeira aba esteja visível ao carregar
    const firstTabButton = document.querySelector('.tab-button');
    if (firstTabButton) {
        firstTabButton.click();
    }


    // --- LÓGICA DO LIGHTBOX DE VÍDEO ---
    const lightbox = document.getElementById('video-lightbox');
    const lightboxIframe = document.getElementById('lightbox-iframe');
    const videoTriggers = document.querySelectorAll('.video-trigger');
    const closeButton = document.querySelector('.close-button');

    const openLightbox = (src) => {
        lightboxIframe.src = src + "?autoplay=1&rel=0"; 
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    };

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        lightboxIframe.src = ""; 
        document.body.style.overflow = 'auto';
    };

    videoTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault(); 
            const videoSrc = this.getAttribute('data-video-src');
            openLightbox(videoSrc);
        });
    });

    if (closeButton) {
        closeButton.addEventListener('click', closeLightbox);
    }

    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
});
