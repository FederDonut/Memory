import { settingsBase } from "./db";




//
const htmlIds = {
    "theme": {
        "code": "/img/settings/Theme Visual-code.svg",
        "food": "/img/settings/Theme Visual-food.svg",
    },
    "buttonImg":{
        "enabled": "/img/settings/smart_display.svg",
        "disabled": "/img/settings/smart_display_disabled.svg",
    }
        
};

export function observeSetting(){ 
    const allInputs = document.querySelectorAll('.menu-point input[type="radio"]');
    allInputs.forEach(input =>{
        input.addEventListener('change',(event)=>{
            checkInputStatus(event)   
        })
    })

};


function checkInputStatus(event:any){ // Test Funktionen 
    const checkbox = event.target as HTMLInputElement;
    if(checkbox.checked ){
        let Test = checkbox.parentElement as HTMLElement;
        let target_pTag = Test.querySelector('p') as HTMLElement;
        renderThemeImg(checkbox)
        monitorUserDecision(checkbox, target_pTag)
       
    }
    storeUserDecissons();
}



function monitorUserDecision(checkbox:HTMLInputElement, target_pTag:HTMLElement){
    let themeDisplay = document.getElementById('theme-name') as HTMLElement;
    let player = document.getElementById('player-color') as HTMLElement;
    let board = document.getElementById('board-size') as HTMLElement;
    if(checkbox.name === 'game'){
        themeDisplay.innerText = target_pTag?.innerText;
    }
    if(checkbox.name === 'player'){
        player.innerText = target_pTag?.innerText;
    }
    if( checkbox.name === 'board'){
        board.innerText = target_pTag?.innerText
    }


}

function renderThemeImg(checkbox:HTMLInputElement){
    let themeImg = document.getElementById('theme-img') as HTMLImageElement;
    if(checkbox.id === 'code'){
        themeImg.src = htmlIds.theme.code
    }if(checkbox.id ==='food'){
        themeImg.src = htmlIds.theme.food
    }
}

// Interface evtl outsourcen 
export interface SelectionInfos{
    theme:string |undefined,
    player:string | undefined,
    board:string | undefined,
    
}

function storeUserDecissons() {
    let activTheme = document.querySelector('input[name="game"]:checked') as HTMLInputElement;
    let activPlayer = document.querySelector('input[name="player"]:checked') as HTMLInputElement;
    let activBoard = document.querySelector('input[name="board"]:checked') as HTMLInputElement;
    
    const selection: SelectionInfos = {
        theme : activTheme?.parentElement?.querySelector('p')?.innerText,
        player : activPlayer?.parentElement?.querySelector('p')?.innerText,
        board : activBoard?.parentElement?.querySelector('p')?.innerText
    }
    inputValidation(selection);
}

function inputValidation(selection:SelectionInfos){
    let readyPlayer:boolean;
    if(selection.theme !== undefined && selection.player != undefined && selection.board !== undefined){
        settingsBase.push(selection);
        localStorage.setItem('settings', JSON.stringify(selection))
        readyPlayer = true;
        console.log(settingsBase);
    }else{
        console.log('Es fehlen noch angaben');
        readyPlayer = false;
    }
    toggleStartButton(readyPlayer)
}

export function unlockStartGameBtn(unlock:boolean){
   
    if(settingsBase.length !== 0){
        unlock = true
        return unlock 
   }else{
        unlock = false
        return unlock 
   }
}

export function toggleStartButton(readyPlayer:boolean){
    let btn = document.getElementById('startBtn') as HTMLButtonElement;
    let btnImg = document.getElementById('startBtnImg') as HTMLImageElement;
    console.log(true)
    
    if(readyPlayer){
        btnImg.src = htmlIds.buttonImg.enabled
        btn?.classList.add('StartButton--enabled');
        btn?.classList.remove('StartButton--disabled');
    }else{
        btnImg.src = htmlIds.buttonImg.disabled
         btn?.classList.remove('StartButton--enabled');
        btn?.classList.add('StartButton--disabled');
    }
    
}
 




