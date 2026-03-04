// Vite test
//document.getElementById('h1_test')!.innerText = "das ist der zweite Test";

import { goToSettings, goToTheGame } from './scripts/router';
import { observeSetting, unlockStartGameBtn } from './scripts/settings';
import { settingsBase } from './scripts/db';


let unlock:boolean = false;


function init(){
    buttonController();
    //setTimeout(()=>{test()},5000)
    observeSetting();
}


function buttonController(){
    const playBtn = document.getElementById('playBtn') as HTMLButtonElement;
    const stratGame = document.getElementById('startBtn')as HTMLButtonElement;
    if(playBtn){
        playBtn.addEventListener('click',()=>{
            goToSettings();
        });
    }
    if(stratGame){
        stratGame.addEventListener('click',()=>{
            goToTheGame(unlockStartGameBtn(unlock));
        })
    }
}


//SCSS
import './styles/main.scss';
init();




