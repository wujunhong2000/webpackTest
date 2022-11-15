import helloWorld from './hello-world'
import imgPng from './assets/imgAudio.png'
import imgSvg from './assets/edit.svg'
import textTest from './assets/test.txt'
import imgJpg from './assets/881689fbf10c4a8ce0770d4aa66b8aa3_300x300.jpg'

helloWorld();
const img = document.createElement('img');
img.src = imgPng;
document.body.appendChild(img);

const img1 = document.createElement('img');
img1.src = imgSvg;
document.body.appendChild(img1);

const textWrap = document.createElement('div');
textWrap.textContent = textTest;
document.body.appendChild(textWrap);

const assetImg = document.createElement('img');
assetImg.src = imgJpg;
document.body.appendChild(assetImg);