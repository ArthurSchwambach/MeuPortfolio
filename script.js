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

  const firstTabButton = document.querySelector('.tab-button');
  if (firstTabButton) {
    firstTabButton.click();
  }

  // --- LÓGICA PARA O EFEITO DE FADE SUAVE NAS IMAGENS ---
  document.querySelectorAll('.image-fade-wrapper').forEach(wrapper => {
    const img = wrapper.querySelector('img');
    const hoverSrc = img.getAttribute('data-hover');
    if (hoverSrc) {
      wrapper.style.setProperty('--hover-image', `url(${hoverSrc})`);
    }
  });

  // --- LÓGICA DO LIGHTBOX DE VÍDEO ---
  const videoLightbox = document.getElementById('video-lightbox');
  const lightboxIframe = document.getElementById('lightbox-iframe');
  const videoTriggers = document.querySelectorAll('.video-trigger');
  const videoCloseButton = videoLightbox.querySelector('.close-button');

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

  videoLightbox.addEventListener('click', function(e) {
    if (e.target === videoLightbox) {
      closeVideoLightbox();
    }
  });

  // --- LÓGICA DO LIGHTBOX DE IMAGEM ---
  const imageLightbox = document.getElementById('image-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const imageTriggers = document.querySelectorAll('.project-card img[data-img-src]');
  const imageCloseButton = imageLightbox.querySelector('.close-button');

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

  imageLightbox.addEventListener('click', (e) => {
    if (e.target === imageLightbox) {
      closeImageLightbox();
    }
  });

  // --- LÓGICA DO LEITOR DE CURRÍCULO ---
  const curriculoLightbox = document.getElementById('curriculo-lightbox');
  const curriculoBtn = document.getElementById('ver-curriculo-btn');
  const curriculoIframe = document.getElementById('curriculo-iframe');
  const curriculoCloseButton = curriculoLightbox.querySelector('.close-button');

  const openCurriculoLightbox = () => {
    curriculoIframe.src = 'curriculo.pdf'; 
    curriculoLightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeCurriculoLightbox = () => {
    curriculoLightbox.classList.remove('active');
    curriculoIframe.src = "";
    document.body.style.overflow = 'auto';
  };

  if (curriculoBtn) {
    curriculoBtn.addEventListener('click', function(e) {
      e.preventDefault();
      openCurriculoLightbox();
    });
  }

  if (curriculoCloseButton) {
    curriculoCloseButton.addEventListener('click', closeCurriculoLightbox);
  }

  curriculoLightbox.addEventListener('click', (e) => {
    if (e.target === curriculoLightbox) {
      closeCurriculoLightbox();
    }
  });


  // --- LÓGICA DA TECLA 'ESCAPE' (ATUALIZADA) ---
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      if (videoLightbox.classList.contains('active')) {
        closeVideoLightbox();
      }
      if (imageLightbox.classList.contains('active')) {
        closeImageLightbox();
      }
      if (curriculoLightbox.classList.contains('active')) {
        closeCurriculoLightbox();
      }
    }
  });

});