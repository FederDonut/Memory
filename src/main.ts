// Vite test
//document.getElementById('h1_test')!.innerText = "das ist der zweite Test";

import { goToSettings } from './scripts/router';




function init(){
    Play();
    setTimeout(()=>{test()},5000)
}


function Play(){
    const playBtn = document.getElementById('playBtn');

    if(playBtn){
        playBtn.addEventListener('click',()=>{
            goToSettings();
        });
    }
}

function test(){
    console.log('das ist ein test um das verständnis über dies architektur zu vertiefen')
}



//SCSS
import './styles/main.scss';
init();




