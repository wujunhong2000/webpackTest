import helloWorld from './hello-world'
import imgPng from './assets/imgAudio.png'
import imgSvg from './assets/edit.svg'
import textTest from './assets/test.txt'
import imgJpg from './assets/881689fbf10c4a8ce0770d4aa66b8aa3_300x300.jpg'
import './style.css'
import './style.less'
import Data from './assets/data.xml'
import Notes from './assets/data.csv'

helloWorld();
const img = document.createElement('img');
img.src = imgPng;
document.body.appendChild(img);

const img1 = document.createElement('img');
img1.src = imgSvg;
document.body.appendChild(img1);

const textWrap = document.createElement('div');
textWrap.textContent = textTest;
document.body.classList.add('block-bg');
document.body.appendChild(textWrap);

const assetImg = document.createElement('img');
assetImg.src = imgJpg;
document.body.appendChild(assetImg);

document.body.classList.add('wrap');

// 字体
const spanWrap = document.createElement('span');
document.body.classList.add('AaYuanHeiTiFont');
spanWrap.innerHTML = '&#x1F601'; // 应用ttf文件时还需要提供这行代码
document.body.appendChild(spanWrap);

// xmlz转换成object
// csv转换成array
console.log(Data);
console.log(Notes);