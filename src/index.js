import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import ourStory from './our_story';
import menu from './menu';
import contact from './contact';
import '../dist/assets/styles/style.css';

library.add(fas, far, fab);

let slideIndex = 0;

const showSlides = () => {
  const slides = document.getElementsByClassName('slides');
  const dots = document.getElementsByClassName('dots');
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }
  slideIndex += 1;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (let i = 0; i < dots.length; i += 1) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  setTimeout(showSlides, 3000);
};

const tab = document.getElementById('tabNav');
const updateTabContent = (e) => {
  const tabContent = document.getElementById('tabContent');
  for (const i of tabContent.children) {
    tabContent.removeChild(i);
  }

  for (const i of tab.children) {
    if (i.classList.contains('active-tab')) {
      i.classList.remove('active-tab');
    }
  }
  if (e.currentTarget.classList.contains('story')) {
    ourStory();
  } else if (e.currentTarget.classList.contains('menu')) {
    menu();
  } else if (e.currentTarget.classList.contains('contacts')) {
    contact();
  }
}

const tabclickListener = () => {
  ourStory();
  for (const i of tab.children) {
    i.addEventListener('click', (e) => {
      updateTabContent(e);
      e.currentTarget.classList.add('active-tab');
    });
  }
}

showSlides();
tabclickListener();