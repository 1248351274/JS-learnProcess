import logo from './images/logo.png'
import fn from './fn.js'
import css from './css/css.css'

// console.log('logo', logo);
// console.log('fn',fn)
// console.log('css',css)


let indexBtn = document.querySelector('.indexBtn');
let name = "严青"
indexBtn.onclick = function(){
    console.log(`开课吧-${name}`)
}