const settingOptions:string[] = [];

const htmlIds = {
    "theme": {
        "code": "/img/settings/Theme Visual-code.svg",
        "gaming": "/img/settings/Theme Visual-game.svg"
    },
        
};


export function testSetting(){
    //let theme1 = document.getElementById('code');
    //let theme2 = document.getElementById('game');
    //let blue = document.getElementById('blue');
    //let orange = document.getElementById('orange');
    //let cards = document.getElementsByClassName('checkmark');
   
    //theme1?.addEventListener('change', checkInputStatus);
    //theme2?.addEventListener('change', checkInputStatus);
    
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



function storeUserDecissons(){
    let activTheme = document.querySelector('input[name="game"]:checked') as HTMLInputElement;
    let activPlayer = document.querySelector('input[name="player"]:checked') as HTMLInputElement;
    let activBoard = document.querySelector('input[name="board"]:checked') as HTMLInputElement;
    
    const storeInfos:Object = {
        'theme': activTheme?.parentElement?.querySelector('p')?.innerText,
        'player': activPlayer?.parentElement?.querySelector('p')?.innerText,
        'board': activBoard?.parentElement?.querySelector('p')?.innerText
    }
    
    if(activPlayer && activBoard && activTheme){
        console.log(storeInfos)
    }
    renderDecissionSummary(storeInfos)
    //return(storeInfos)
    

}

function renderDecissionSummary(storeInfos:Object | any){
    let themeDisplay = document.getElementById('theme-name') as HTMLElement;
    let player = document.getElementById('player-color') as HTMLElement;
    let board = document.getElementById('board-size') as HTMLElement;

    //themeDisplay?.innerText = storeInfos.theme
    themeDisplay.innerText = storeInfos.theme;
    player.innerText = storeInfos.player;
    board.innerText = storeInfos.board;

}

