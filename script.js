// Espera o conteúdo da página carregar completamente
document.addEventListener('DOMContentLoaded', function() {

  // --- LÓGICA DAS ABAS (TABS) ---
  window.openTab = function(evt, tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-button');
    const designNotification = document.getElementById('design-notification');

    tabContents.forEach(content => {
      content.classList.remove('active');
    });

    tabButtons.forEach(button => {
      button.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');

    // Mostra ou esconde a notificação com base na aba clicada
    if (tabName === 'design') {
        // Esta lógica estava faltando na sua versão
        // designNotification.style.display = 'block'; 
    } else {
        // designNotification.style.display = 'none';
    }
  }

  // Garante que a primeira aba esteja visível ao carregar
  const firstTabButton = document.querySelector('.tab-button');
  if (firstTabButton) {
    firstTabButton.click();
  }


  // --- LÓGICA PARA O EFEITO DE FADE SUAVE NAS IMAGENS ---
  // Este é o novo código para o hover suave
  document.querySelectorAll('.image-fade-wrapper').forEach(wrapper => {
    const img = wrapper.querySelector('img');
    const hoverSrc = img.getAttribute('data-hover');

    if (hoverSrc) {
      // Define a imagem de hover como uma variável CSS (--hover-image) no wrapper
      wrapper.style.setProperty('--hover-image', `url(${hoverSrc})`);
    }
  });


  // --- LÓGICA DO LIGHTBOX DE VÍDEO ---
  const videoLightbox = document.getElementById('video-lightbox');
  const lightboxIframe = document.getElementById('lightbox-iframe');
  const videoTriggers = document.querySelectorAll('.video-trigger');
  const videoCloseButton = videoLightbox.querySelector('.close-button'); // Botão específico do vídeo

  const openVideoLightbox = (src) => {
    lightboxIframe.src = src + "?autoplay=1&rel=0";
    videoLightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeVideoLightbox = () => {
    videoLightbox.classList.remove('active');
    lightboxIframe.src = "";
    document.body.style.overflow = 'auto';
  };

  videoTriggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      const videoSrc = this.getAttribute('data-video-src');
      openVideoLightbox(videoSrc);
    });
  });

  if (videoCloseButton) {
    videoCloseButton.addEventListener('click', closeVideoLightbox);
  }

  if (videoLightbox) {
    videoLightbox.addEventListener('click', function(e) {
      if (e.target === videoLightbox) {
        closeVideoLightbox();
      }
    });
  }


  // --- LÓGICA DO LIGHTBOX DE IMAGEM ---
  // Movido para dentro do DOMContentLoaded
  const imageLightbox = document.getElementById('image-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const imageTriggers = document.querySelectorAll('.project-card img[data-img-src]');
  const imageCloseButton = imageLightbox.querySelector('.close-button'); // Botão específico da imagem

  const openImageLightbox = (src) => {
    lightboxImg.src = src;
    imageLightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeImageLightbox = () => {
    imageLightbox.classList.remove('active');
    lightboxImg.src = "";
    document.body.style.overflow = 'auto';
  };

  imageTriggers.forEach(img => {
    img.addEventListener('click', () => {
      const imgSrc = img.getAttribute('data-img-src');
      openImageLightbox(imgSrc);
    });
  });

  if (imageCloseButton) {
    imageCloseButton.addEventListener('click', closeImageLightbox);
  }

  if (imageLightbox) {
    imageLightbox.addEventListener('click', (e) => {
      if (e.target === imageLightbox) {
        closeImageLightbox();
      }
    });
  }


  // --- LÓGICA DA TECLA 'ESCAPE' PARA FECHAR AMBOS LIGHTBOXES ---
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      if (videoLightbox.classList.contains('active')) {
        closeVideoLightbox();
      }
      if (imageLightbox.classList.contains('active')) {
        closeImageLightbox();
      }
    }
  });

});