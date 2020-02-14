import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

import {ourStory} from "./our_story"
import {menu} from "./menu"
import {contact} from "./contact"
import '../dist/assets/styles/style.css';

let slideIndex =0

const showSlides = () =>{
  const slides = document.getElementsByClassName("slides");
  const dots = document.getElementsByClassName("dots");
  for(let i =0; i< slides.length; i ++){
    slides[i].style.display = "none"
  }
  slideIndex++;

  if(slideIndex > slides.length){
    slideIndex=1;
  }

  for(let i=0; i<dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display="block";
  dots[slideIndex - 1].className+=" active";
  setTimeout(showSlides, 3000);
}

showSlides()

ourStory()

menu()

contact()