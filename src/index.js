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

const tab = document.getElementById("tabNav");

function tabclickListener(){  
  ourStory();
  for (let i of tab.children){
    i.addEventListener('click', (e)=>{
      updateTabContent(e);
    })
  }
}

function updateTabContent(e){
  let tabContent= document.getElementById("tabContent");
 
  if(e.currentTarget.classList.contains("story")){
    ourStory();
    e.currentTarget.classList.add("active-tab");
  }
  else if(e.currentTarget.classList.contains("menu")){
    menu();
    e.currentTarget.classList.add("active-tab");
  }
  else  if(e.currentTarget.classList.contains("contacts")){
    contact();
    e.currentTarget.classList.add("active-tab");
  }
  for(let i of tabContent.children){
    tabContent.removeChild(i)
    e.currentTarget.classList.remove("active-tab");
  }
}
showSlides();
tabclickListener()