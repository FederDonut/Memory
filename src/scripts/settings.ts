const settingOptions:string[] = [];

const htmlIds = {
    "theme": {
        "code": "/img/settings/Theme Visual-code.svg",
        "gaming": "/img/settings/Theme Visual-game.svg"
    },
        
};


export function testSetting(){
    let theme1 = document.getElementById('code');
    let theme2 = document.getElementById('game');
    theme1?.addEventListener('change', checkInputStatus);
    theme2?.addEventListener('change', checkInputStatus);
    
};


function checkInputStatus(event:any){
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
    }else{
        themeImg.src = htmlIds.theme.gaming
    }
}

function renderSettingsSummary(){

}

//function storeUserDecissons(){
//    let themeImg = document.getElementById('theme-img');
//    let themeName = document.getElementById('theme-name');
//    let playerName = document.getElementById('player-color');
//    let boardSize = document.getElementById('board-size');
//    
//}

