// Vite test
//document.getElementById('h1_test')!.innerText = "das ist der zweite Test";

import { goToSettings, goToTheGame } from './scripts/router';
import { observeSetting, unlockStartGameBtn, renderDecisionSummary } from './scripts/settings';
import { getSettingsFromLocaStorage, flipCard, toggleOverlay, preventBubbling, renderOverlay, backToSettings } from './scripts/memory';

//import { renderCardsToHTML } from './scripts/templates';


let unlock:boolean = false;


function init(){
    buttonController();
    overlayController()
    //setTimeout(()=>{test()},5000)
    observeSetting();
    //renderDecisionSummary()
    getSettingsFromLocaStorage();
    //setInterval(()=>{checkGameStatus()},1000);
    
    flipCard();
}


function buttonController(){
    const playBtn = document.getElementById('playBtn') as HTMLButtonElement;
    const stratGame = document.getElementById('startBtn')as HTMLButtonElement;
    const openOverlay = document.getElementById('exitBtn') as HTMLButtonElement;
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
    if(openOverlay){
        openOverlay.addEventListener('click',()=>{
            toggleOverlay();
        })
    }
    
}

function overlayController(){
    const overlay = document.getElementById('exit-overlay') as HTMLElement;
    const overlayContent = document.getElementById('overlay-content') as HTMLElement;
    if(overlay){
        renderOverlay();
        overlay.addEventListener('click', ()=>{ 
            toggleOverlay();
        })
    }
    if(overlayContent){
        overlayContent.addEventListener('click', (event:MouseEvent)=>{
            preventBubbling(event)
        })
    }
    document.addEventListener('click',(event:MouseEvent)=>{
        const target = event.target as HTMLButtonElement;
        if(target.id === 'exit-game'){
            backToSettings();
        }
    })

}

//function settingController(){
//    const gameTheme = document.querySelectorAll('input[name="game"]');
//    const choosenPlayer =  document.querySelectorAll('input[name="player"]');
//    const boardSize = document.querySelectorAll('input[name="board"]');
//    
//    gameTheme.forEach(input =>{
//        input.addEventListener('change',(event)=>{
//            const target = event.target as HTMLInputElement
//            if(target.name === 'game'){
//                console.log(true);
//            }    
//            
//            
//        })
//    })
//
//}


//SCSS
import './styles/main.scss';
init();




