import './assets/css/css.css';
import article01 from './articles/NodeJS-01.md';

import logo from './assets/images/logo.png';


let indexBtn = document.querySelector('.indexBtn');
let name = "严青"
indexBtn.onclick = function(){
    console.log("开课吧-"+name)
}