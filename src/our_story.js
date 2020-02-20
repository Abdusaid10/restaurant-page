const ourStory = () => {
  const content = document.getElementById('tabContent');
  const block = document.createElement('DIV');
  block.classList.add('our-story');
  block.setAttribute('id', 'story');

  const img1 = document.createElement('IMG');
  img1.classList.add('st-imgs');
  img1.setAttribute('src', '../dist/assets/imgs/index-4-btm-2.jpg');

  const img2 = document.createElement('IMG');
  img2.classList.add('st-imgs');
  img2.setAttribute('src', '../dist/assets/imgs/index-4-btm-1.jpg');

  const expBlock = document.createElement('DIV');
  expBlock.classList.add('exp-block');
  const logoIcon = document.createElement('DIV');
  logoIcon.classList.add('restora-icon');

  const logoIconImg = document.createElement('IMG');
  logoIconImg.src = '../dist/assets/imgs/logo.png';

  const restoraName = document.createElement('h3');
  restoraName.textContent = 'The restora';

  const subHead = document.createElement('H2');
  subHead.classList.add('section-title');
  subHead.textContent = 'The Experience';

  const p = document.createElement('P');
  p.classList.add('p-text');
  p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor egestas orci, vitae ullamcorper risus consectetur id. Donec at velit vestibulum, rutrum massa quis, porttitor lorem. Donec et ultricies arcu. In odio nisl ac, rhoncus gravida mauris.';

  const link = document.createElement('div');
  link.classList.add('link');
  const a = document.createElement('a');
  a.href = '#';
  const textNode = document.createTextNode('Read More');
  a.appendChild(textNode);
  link.appendChild(a);

  expBlock.appendChild(logoIconImg);
  expBlock.appendChild(restoraName);
  expBlock.appendChild(subHead);
  expBlock.appendChild(p);
  expBlock.appendChild(link);
  block.appendChild(img1);
  block.appendChild(img2);
  block.appendChild(expBlock);
  content.appendChild(block);
};

export { ourStory };