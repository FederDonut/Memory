// Vite test
//document.getElementById('h1_test')!.innerText = "das ist der zweite Test";

import { goToSettings, goToTheGame } from './scripts/router';
import { observeSetting, unlockStartGameBtn, renderDecisionSummary } from './scripts/settings';
import { getSettingsFromLocaStorage } from './scripts/memory';
import { checkGameStatus, flipCard } from './scripts/memory';
//import { renderCardsToHTML } from './scripts/templates';


let unlock:boolean = false;


function init(){
    buttonController();
    //setTimeout(()=>{test()},5000)
    observeSetting();
    //renderDecisionSummary()
    getSettingsFromLocaStorage();
    setInterval(()=>{checkGameStatus()},1000);
    //checkGameStatus();
    flipCard();
}


function buttonController(){
    const playBtn = document.getElementById('playBtn') as HTMLButtonElement;
    const stratGame = document.getElementById('startBtn')as HTMLButtonElement;
    const exitGame = document.getElementById('exitBtn') as HTMLButtonElement;
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
    if(exitGame){
        exitGame.addEventListener('click',()=>{
            console.log('open Overlay');
        })
    }
    
}


//SCSS
import './styles/main.scss';
init();




