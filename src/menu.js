const menu = () => {
  const content = document.getElementById('tabContent');
  const block = document.createElement('DIV');
  block.classList.add('menu-tab', 'hide');
  block.setAttribute('id', 'menu');

  const leftImgs = document.createElement('DIV');
  leftImgs.classList.add('left-imgs');

  const img1Wrapper = document.createElement('DIV');
  img1Wrapper.classList.add('img-wrapper');

  const img1 = document.createElement('IMG');
  img1.classList.add('menu-imgs');
  img1.src = '../dist/assets/imgs/index-4-1.jpg';
  const img1Text = document.createElement('span');
  img1Text.classList.add('img-text', 'text-uppercase');
  img1Text.textContent = 'Starter';

  const img2Wrapper = document.createElement('DIV');
  img2Wrapper.classList.add('img-wrapper');

  const img2 = document.createElement('IMG');
  img2.classList.add('menu-imgs');
  img2.src = '../dist/assets/imgs/index-4-3.jpg';
  const img2Text = document.createElement('SPAN');
  img2Text.classList.add('img-text', 'text-uppercase');
  img2Text.textContent = 'Main Course';

  const menuDesc = document.createElement('DIV');
  menuDesc.classList.add('menu-description');
  const logoIcon = document.createElement('DIV');
  logoIcon.classList.add('restora-icon');

  const logoIconImg = document.createElement('IMG');
  logoIconImg.src = '../dist/assets/imgs/logo.png';

  const h3 = document.createElement('H3');
  h3.textContent = 'Dinning with Season';
  h3.classList.add('text-uppercase');

  const subHead = document.createElement('H2');
  subHead.classList.add('section-title');
  subHead.textContent = 'Our Menus';

  const p = document.createElement('P');
  p.classList.add('p-text');
  p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor egestas orci, vitae ullamcorper risus consectetur id. Donec at velit vestibulum, rutrum massa quis, porttitor lorem. Donec et ultricies arcu. In odio nisl ac, rhoncus gravida mauris.';

  const link = document.createElement('DIV');
  link.classList.add('link');
  const a = document.createElement('a');
  a.href = '#';
  const textNode = document.createTextNode('View the Menu');
  a.appendChild(textNode);


  const rightImgs = document.createElement('DIV');
  rightImgs.classList.add('right-imgs');

  const img3Wrapper = document.createElement('DIV');
  img3Wrapper.classList.add('img-wrapper');

  const img3 = document.createElement('IMG');
  img3.classList.add('menu-imgs');
  img3.src = '../dist/assets/imgs/index-4-2.jpg';
  const img3Text = document.createElement('span');
  img3Text.classList.add('img-text', 'text-uppercase');
  img3Text.textContent = 'Deserts';

  const img4Wrapper = document.createElement('div');
  img4Wrapper.classList.add('img-wrapper');

  const img4 = document.createElement('img');
  img4.classList.add('menu-imgs');
  img4.src = '../dist/assets/imgs/index-4-4.jpg';
  const img4Text = document.createElement('span');
  img4Text.classList.add('img-text', 'text-uppercase');
  img4Text.textContent = 'Drinks';

  img1Wrapper.appendChild(img1);
  img1Wrapper.appendChild(img1Text);
  img2Wrapper.appendChild(img2);
  img2Wrapper.appendChild(img2Text);

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
  img3Wrapper.appendChild(img3Text);
  img4Wrapper.appendChild(img4);
  img4Wrapper.appendChild(img4Text);

  rightImgs.appendChild(img3Wrapper);
  rightImgs.appendChild(img4Wrapper);

  block.appendChild(leftImgs);
  block.appendChild(menuDesc);
  block.appendChild(rightImgs);

  content.appendChild(block);
};

export { menu as default };