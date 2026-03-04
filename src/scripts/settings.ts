import { settingsBase } from "./db";

//const settingOptions:string[] = [];

//let unlock:boolean = false;


//
const htmlIds = {
    "theme": {
        "code": "/img/settings/Theme Visual-code.svg",
        "gaming": "/img/settings/Theme Visual-game.svg"
    },
        
};


export function observeSetting(){ 
    const allInputs = document.querySelectorAll('.menu-point input[type="radio"]');
    allInputs.forEach(input =>{
        input.addEventListener('change',(event)=>{
            checkInputStatus(event)   
        })
    })

};


function checkInputStatus(event:any){
    storeUserDecissons();
    const checkbox = event.target;
    if(checkbox.checked ){
        renderThemeImg(checkbox)
       
    }else{
        
    }
}

function renderThemeImg(checkbox:HTMLInputElement){
    let themeImg = document.getElementById('theme-img') as HTMLImageElement;
    if(checkbox.id === 'code'){
        themeImg.src = htmlIds.theme.code
    }if(checkbox.id ==='game'){
        themeImg.src = htmlIds.theme.gaming
    }
}

interface SelectionInfos{
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

    //console.log(selection)
    renderDecisionSummary(selection);
    inputValidation(selection);
    
}

function inputValidation(selection:SelectionInfos){
    if(selection.theme !== undefined && selection.player != undefined && selection.board !== undefined){
        settingsBase.push(selection);
        console.log(settingsBase);
    }else{
        console.log('Es fehlen noch angaben');
    }
}

export function unlockStartGameBtn(unlock:boolean){
    if(settingsBase.length !== 0){
        unlock = true
        //console.log('alles augewält start darf betätigt werden ',unlock)
        return unlock 
   }else{
        unlock = false
        //console.log(unlock)
        return unlock 
   }
}


function renderDecisionSummary(selection:SelectionInfos){
    let themeDisplay = document.getElementById('theme-name') as HTMLElement;
    let player = document.getElementById('player-color') as HTMLElement;
    let board = document.getElementById('board-size') as HTMLElement;

   // Das selection.theme ?? '' sorgt dafür, dass bei undefined ein leerer String genutzt wird
    themeDisplay.innerText = selection.theme ?? '';    
    player.innerText = selection.player ?? '';
    board.innerText = selection.board ?? '';

}




