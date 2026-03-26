import { codeViebeImgs , foodThemeImgs, storeBtnIds } from "./db";
import { goToSettings } from "./router";
import { SelectionInfos } from "./settings";
import { renderCardsImgsToHTML, renderCodeThemeNavbar, renderExitOverlayToHTML, renderFoodThemeNavbar } from "./templates";


let topStack:string = 'card-stack';
let bottomStack:string = 'card-stack-mirror';
let gameHasBegun:boolean = false;
let currentPlayer:string | undefined;
let cardImgs:string | undefined;
let cardThemes: string|undefined;

export function checkGameStatus(){
    if(gameHasBegun){
        //renderCardsBackground();
        //console.log('test');
        //flipCard();
    }

}

export function getSettingsFromLocaStorage(){
    
    let storageData:string | null = localStorage.getItem('settings');
    console.log(storageData)
    if(storageData){
        let settings = JSON.parse(storageData) as SelectionInfos ;
        console.log(settings.theme);
        currentPlayer = settings.player;
        toggleTableSize(settings);
        renderMemoryNavbar(settings.theme);   
    }
}

function toggleTableSize(settings:SelectionInfos){
    let cardtable = document.getElementById('card-table')as HTMLElement;
    let cardStack = document.getElementById('card-wrapper') as HTMLElement;
    let tableSize: string | undefined
    let cardCounter:number 

    if(settings !== undefined ){
        tableSize = settings.board
        cardImgs = settings.theme
        console.log('Kartenanzahl:',tableSize ,'Theme:', cardImgs)
        
        if(tableSize?.includes('16')){
            cardStack?.classList.add('Count-16');
            cardtable?.classList.add('--size-16');
            cardCounter = 16;
            randomPositioning(cardCounter);
            
           
        }
        if(tableSize?.includes('24')){
            cardStack?.classList.add('Count-24');
            cardtable?.classList.add('--size-24')
            cardCounter = 24;
            randomPositioning(cardCounter);
            
        }
        if(tableSize?.includes('36')){
            cardStack?.classList.add('Count-36');
            cardtable?.classList.add('--size-36');
            cardCounter = 36;
            randomPositioning(cardCounter);
            
            
        }
        else{
            console.log('fehler in der memory.ts toggleTableSize')
            return;
        }
    }else{
        console.log('Ein Fehler ist in den Settings aufgetretten oder checke den local Storage')
        return;
    } 
    
}



function randomPositioning(index:number){
    console.log(index)

    //erzeuge einen Array mit dem fortlaufenden Index:number als Inhalt
    let indices = Array.from({length: index}, (_,i)=>i);
    // Halbiere den array und erzeuge dvon einen weitere Kopie
    let cardStack = indices.slice(0, (index /2));
    let mirrorStack = indices.slice(0,(index/2))
    for(let i = cardStack.length -1; i > 0; i--){
        //console.log(a);
        let m = Math.floor(Math.random()*(i+1));
        [cardStack[i], cardStack[m]] = [cardStack[m], cardStack[i]];
    };
    for(let i = mirrorStack.length -1; i > 0; i--){
        //console.log(a);
        let m = Math.floor(Math.random()*(i+1));
        [mirrorStack[m],mirrorStack[i]] = [mirrorStack[i], mirrorStack[m]];
    };
    
    renderCardsImg(cardStack, topStack);
    renderCardsImg(mirrorStack, bottomStack);
    //storeBtnIds.push(cardStack, mirrorStack); // evtl. nicht notwendig
}




// Funktion zum laden und rendern der Bilder 
function renderCardsImg(cardCounter:number[], HTML_Id: string ){
    let cardStack = document.getElementById(HTML_Id) as HTMLElement;
    let array:string[];
    let srcPath:string;
    if(cardImgs ==='Food theme'){
        array = foodThemeImgs;
        srcPath = 'food-theme';
        cardThemes = 'food';
    }else{
        array = codeViebeImgs;
        srcPath = 'code-vibes-theme';
        cardThemes = 'code';
    }
    if(cardStack){
        cardStack.innerHTML = "";
        for(let i =0; i< cardCounter.length; i++){
            let cardIndex:number = cardCounter[i]
            cardStack.innerHTML += renderCardsImgsToHTML(cardIndex, array, srcPath);
        }
    }
    // Hier startpunkt des games 
    checkCurrentPlayerColor()
    return gameHasBegun = true;
      
}

function renderMemoryNavbar(theme:string|undefined){
    let navBar = document.getElementById('navBar') as HTMLElement;
    if(navBar){
        console.log(theme)
        if(theme ==='Code vibes theme'){
            navBar.innerHTML = '';
            navBar.innerHTML += renderCodeThemeNavbar(); 
        }else{
            navBar.innerHTML ='';
            navBar.innerHTML += renderFoodThemeNavbar();
        }
    }
}

export function flipCard(){
    const cardWrapper = document.getElementById('card-stack') as HTMLButtonElement;
    const cardWrapperMirror = document.getElementById('card-stack-mirror') as HTMLButtonElement;
    const handleEvent = (event:MouseEvent)=>{
        const target = (event.target as HTMLButtonElement).closest('.card') as HTMLElement;
        if(target){
            toggleCardImg(target)
        }
    }
    cardWrapper?.addEventListener('click', handleEvent);
    cardWrapperMirror?.addEventListener('click',handleEvent);
    
}


let card1: HTMLElement | null = null;
let card2: HTMLElement | null = null;
let lockBoard:boolean = false;
function toggleCardImg(cardElement: HTMLElement){
    let moveCounter: number = 2;
    if(cardElement===card1 || !gameHasBegun)return;
        
        cardElement.classList.add('is-flipped');
        if(!card1){
            card1 = cardElement;
            //console.log('card1: ',card1);
            return
        }else{
            card2 =cardElement
            //console.log('card2: ',card2)
            matchChecking();
            //return
        }
        //
}

function matchChecking(){
    const isMatch = card1?.getAttribute('data-index')===card2?.getAttribute('data-index');
    if(isMatch){
        console.log('match zwei identische Karten')
        card1 = null;
        card2 = null;
        //checkCurrentPlayer();
        getAPoint();
        setTimeout(()=>{
            switchPlayer();
        },500)

    }else{
        console.log('kein Match Karten wieder Umdrehen');
        //checkCurrentPlayer()
        
        setTimeout(()=>{
            card1?.classList.remove('is-flipped')
            card1 = null;
            card2?.classList.remove('is-flipped');
            card2 = null;
            switchPlayer();
        },1000)
    }
}


function switchPlayer(){
    if(currentPlayer === 'Blue'){
        currentPlayer = 'Orange'
        checkCurrentPlayerColor();
    }else{
        currentPlayer = 'Blue'
        checkCurrentPlayerColor();
    }
}

//Muss noch entsprächend dem Theme angepasst werden 
function checkCurrentPlayerColor(){
    let currentPlayerColor = document.getElementById('playerColor') as HTMLImageElement;
   
    if(cardThemes === 'food'){
        if(currentPlayerColor){
            if(currentPlayer === 'Blue'){
                currentPlayerColor.src = '/img/memory-header/food/activ_blue.svg';
            }else{
                currentPlayerColor.src = '/img/memory-header/food/activ_orange.svg'
            }
        }
    }else{
        if(currentPlayerColor){
            if(currentPlayer === 'Blue'){
                currentPlayerColor.src = '/img/memory-header/code/blue-label.svg';
            }else{
                currentPlayerColor.src = '/img/memory-header/code/orange-label.svg'
            }
        }
    }
    

}

function getAPoint(){
    let blue = document.getElementById('blue-score') as HTMLElement;
    let orange = document.getElementById('orange-score') as HTMLElement;
    let blueScore:number = 0;
    let orangeScore: number = 0;
    if(blue && orange){
        if(currentPlayer=== 'Blue'){
            blueScore = blueScore +1;
            console.log(blueScore);
            blue.innerText = blueScore.toString();
        }else{
            orangeScore = orangeScore + 1;
            console.log(orangeScore);
            orange.innerText = orangeScore.toString();
        }
    }    
}

export function toggleOverlay(){
    let overlay = document.getElementById('exit-overlay') as HTMLElement;
    if(overlay){
        overlay.classList.toggle('d-none');

    }

}

export function preventBubbling (event:MouseEvent){
    event.stopPropagation();   
}

export function renderOverlay(){
    let overlay = document.getElementById('exit-overlay') as HTMLElement;
    if(overlay){
        overlay.innerHTML = '';
        overlay.innerHTML = renderExitOverlayToHTML();
    }

}



export function backToSettings(){
    goToSettings();
    localStorage.removeItem('settings');
    toggleOverlay();
} 