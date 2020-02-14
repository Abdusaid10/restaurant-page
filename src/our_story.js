const ourStory= ()=>{
  let content = document.getElementById("tabContent");
  let block = document.createElement("DIV");
  block.classList.add("our-story");

  let img1 =document.createElement("IMG");
  img1.classList.add("st-imgs")
  img1.setAttribute("src","../dist/assets/imgs/index-4-btm-2.jpg");
  
  let img2 = document.createElement("IMG");
  img2.classList.add("st-imgs")
  img2.setAttribute("src","../dist/assets/imgs/index-4-btm-1.jpg");
  
  let expBlock = document.createElement("DIV");
  expBlock.classList.add("exp-block");
  let logoIcon = document.createElement("DIV");
  logoIcon.classList.add("restora-icon");

  let logoIconImg = document.createElement("IMG");
  logoIconImg.src = "../dist/assets/imgs/logo.png";

  let restoraName = document.createElement("h3");
  restoraName.textContent = "The restora";

  let subHead = document.createElement("H2");
  subHead.classList.add("section-title")
  subHead.textContent = "The Experience";

  let p = document.createElement("P");
  p.classList.add("p-text");
  p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor egestas orci, vitae ullamcorper risus consectetur id. Donec at velit vestibulum, rutrum massa quis, porttitor lorem. Donec et ultricies arcu. In odio nisl ac, rhoncus gravida mauris."
  
  let link = document.createElement("div");
  link.classList.add("link");
  let a = document.createElement('a');
  a.href = "#"
  let textNode = document.createTextNode("Read More");
  a.appendChild(textNode);
  link.appendChild(a)

  expBlock.appendChild(logoIconImg);
  expBlock.appendChild(restoraName);
  expBlock.appendChild(subHead);
  expBlock.appendChild(p);
  expBlock.appendChild(link);
  block.appendChild(img1);
  block.appendChild(img2);
  block.appendChild(expBlock);
  content.appendChild(block);
} 

export {ourStory}