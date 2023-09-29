const initSearchReset = () => {
  const resetSearchBtn = document.querySelector('.button-reset');
  const searchInput = document.querySelector('.dropdown-search-input');
  if (!searchInput) {
    return;
  }

  resetSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchInput.focus();
  });
  };

  const initModal = () => {
  const feedbackButton = document.querySelector('.feedback-button');
  const modal = document.querySelector('.modal');
  const modalCloseButton = document.querySelector('.modal-close-button');

  if (!feedbackButton) {
    return;
  }

  feedbackButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.remove('modal-close');
  });

  modalCloseButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.add('modal-close');
  });

  modal.addEventListener('click', (evt) => {
    if (evt.target.closest('.modal-content')) {
      return;
    }
    evt.preventDefault();
    modal.classList.add('modal-close');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      modal.classList.add('modal-close');
    }
  });
  };

  const initSlider = () => {
  const buttonSliderPreview= document.querySelector('.button-slider-preview');
  const buttonSliderNext = document.querySelector('.button-slider-next');
  const slides = document.querySelectorAll('.slider-card-item');
  const paginations = document.querySelectorAll('.indicators-button');

  let currentSlide = 0;

  if (!slides.length) {
    return;
  }

  const removeSlideActiveState = () => {
    slides[currentSlide].classList.remove('slider-card-item-active');
    paginations[currentSlide].classList.remove('indicators-current');
  };

  const addSlideActiveState = () => {
    slides[currentSlide].classList.add('slider-card-item-active');
    document.body.style.backgroundColor = slides[currentSlide].dataset.theme;
    paginations[currentSlide].classList.add('indicators-current');
  };

  buttonSliderPreview.addEventListener('click', (evt) => {
    evt.preventDefault();
    removeSlideActiveState();
    if (currentSlide === 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide -= 1;
    }
    addSlideActiveState();
  });

  buttonSliderNext.addEventListener('click', (evt) => {
    evt.preventDefault();
    removeSlideActiveState();
    if (currentSlide === slides.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide += 1;
    }
    addSlideActiveState();
  });

  paginations.forEach((element, index) => {
    element.addEventListener('click', (evt) => {
      evt.preventDefault();
      removeSlideActiveState();
      currentSlide = index;
      addSlideActiveState();
    });
  });
  };

  initSearchReset();
  initModal();
  initSlider();
