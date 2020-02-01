function ourStory(){
  let content = document.getElementById("content");
  let block = document.createElement("DIV");
  block.classList.add("our-story");

  let img1 =document.createElement("IMG");
  img1.setAttribute("src","../dist/assets/imgs/index-4-btm-2.jpg");
  
  let img2 = document.createElement("IMG");
  img2.setAttribute("src","../dist/assets/imgs/index-4-1.jpg");
  
  let expBlock = document.createElement("DIV");
  let logoIcon = document.createElement("DIV");
  logoIcon.classList.add("restora-icon");

  let logoIconImg = document.createElement("IMG");
  logoIconImg.src = "../dist/assets/imgs/logo.jpg";

  let restoraName = document.createElement("h3");
  restoraName.textContent = "The restora";

  let subHead = document.createElement("H2");
  subHead.textContent = "The Experience";

  let p = document.createElement("P");
  p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor egestas orci, vitae ullamcorper risus consectetur id. Donec at velit vestibulum, rutrum massa quis, porttitor lorem. Donec et ultricies arcu. In odio nisl ac, rhoncus gravida mauris."
  
  let a = document.createElement("A");
  a.setAttribute("href","#")
  a.textContent = "Read More";
  
  expBlock.appendChild(logoIconImg);
  expBlock.appendChild(restoraName);
  expBlock.appendChild(subHead);
  expBlock.appendChild(p);
  expBlock.appendChild(a);
  block.appendChild(img1);
  block.appendChild(img2);
  block.appendChild(expBlock);
  content.appendChild(block);
} 

export {ourStory}