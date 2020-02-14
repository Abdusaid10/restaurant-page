const menu = () =>{
  // console.log("menu")
  let content = document.getElementById("tabContent");
  let block = document.createElement("DIV");
  block.classList.add("menu-tab");

  let leftImgs = document.createElement("DIV");
  leftImgs.classList.add("left-imgs");

  let img1Wrapper = document.createElement("DIV");
  img1Wrapper.classList.add("img-wrapper");

  let img1 = document.createElement("IMG");
  img1.classList.add("menu-imgs");
  img1.src = "../dist/assets/imgs/index-4-1.jpg"
  let img1Text = document.createElement("span");
  img1Text.classList.add("img-text");
  img1Text.textContent ="Starter";

  let img2Wrapper = document.createElement("DIV");
  img2Wrapper.classList.add("img-wrapper");

  let img2 = document.createElement("IMG");
  img2.classList.add("menu-imgs");
  img2.src = "../dist/assets/imgs/index-4-3.jpg"
  let img2Text = document.createElement("SPAN");
  img2Text.classList.add("img-text");
  img2Text.textContent ="Main Course";

  let menuDesc= document.createElement("DIV");
  menuDesc.classList.add("menu-description");
  let logoIcon = document.createElement("DIV");
  logoIcon.classList.add("restora-icon");

  let logoIconImg = document.createElement("IMG");
  logoIconImg.src = "../dist/assets/imgs/logo.png";

  let h3 = document.createElement("H3");
  h3.textContent = "Dinning with Season";
  h3.classList.add("text-uppercase");

  let subHead = document.createElement("H2");
  subHead.classList.add("section-title")
  subHead.textContent = "Our Menus";

  let p = document.createElement("P");
  p.classList.add("p-text");
  p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor egestas orci, vitae ullamcorper risus consectetur id. Donec at velit vestibulum, rutrum massa quis, porttitor lorem. Donec et ultricies arcu. In odio nisl ac, rhoncus gravida mauris."
    
  let link = document.createElement("DIV");
  link.classList.add("link");
  let a = document.createElement('a');
  a.href = "#"
  let textNode = document.createTextNode("View the Menu");
  a.appendChild(textNode);


  let rightImgs = document.createElement("DIV");
  rightImgs.classList.add("right-imgs");

  let img3Wrapper = document.createElement("DIV");
  img3Wrapper.classList.add("img-wrapper");
  
  let img3 = document.createElement("IMG");
  img3.src = "../dist/assets/imgs/index-4-2.jpg";
  let img3Text = document.createElement("span");
  img3Text.classList.add("img-text");
  img3Text.textContent ="Deserts";

  let img4Wrapper = document.createElement("div");
  img4Wrapper.classList.add("img-wrapper");

  let img4 = document.createElement("img");
  img4.src = "../dist/assets/imgs/index-4-4.jpg";
  let img4Text = document.createElement("span");
  img4Text.classList.add("img-text");
  img4Text.textContent ="Main Course";

  img1Wrapper.appendChild(img1);
  img1Wrapper.appendChild(img1Text)
  img2Wrapper.appendChild(img2);
  img2Wrapper.appendChild(img2Text)

  leftImgs.appendChild(img1Wrapper);
  leftImgs.appendChild(img2Wrapper);

  logoIcon.appendChild(logoIconImg);
  menuDesc.appendChild(logoIcon);
  menuDesc.appendChild(h3);
  menuDesc.appendChild(subHead);
  menuDesc.appendChild(p);
  link.appendChild(a);
  menuDesc.appendChild(link);

  img3Wrapper.appendChild(img3);
  img3Wrapper.appendChild(img3Text)
  img4Wrapper.appendChild(img4);
  img4Wrapper.appendChild(img4Text)

  rightImgs.appendChild(img3Wrapper);
  rightImgs.appendChild(img4Wrapper);

  block.appendChild(leftImgs)
  block.appendChild(menuDesc);
  block.appendChild(rightImgs);

  content.appendChild(block);
}

export {menu}