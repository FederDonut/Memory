import { codeViebeImgs , gameThemeImgs } from "./db";
import { SelectionInfos } from "./settings";
import { renderCardsBackgroundToHTML } from "./templates";


let topStack:string = 'card-stack';
let bottomStack:string = 'card-stack-mirror';



export function getSettingsFromLocaStorage(){
    
    let storageData:string | null = localStorage.getItem('settings');
    console.log(storageData)
    if(storageData){
        let settings = JSON.parse(storageData) as SelectionInfos ;
        console.log(settings.theme);
        toggleTableSize(settings)   
    }
    
}

function toggleTableSize(settings:SelectionInfos){
    let cardtable = document.getElementById('card-table')as HTMLElement;
    let cardStack = document.getElementById('card-wrapper') as HTMLElement;
    let tableSize: string | undefined
    let cardTheme: string | undefined
    let cardCounter:number 

    if(settings !== undefined ){
        tableSize = settings.board
        cardTheme = settings.theme
        console.log('Kartenanzahl:',tableSize ,'Theme:', cardTheme)
        if(tableSize?.includes('16')){
            cardStack?.classList.add('Count-16');
            cardtable?.classList.add('--size-16');
            cardCounter = 16;
            randomPositioning(cardCounter)

            //setTimeout(()=>{renderCardsBackground(cardCounter)},500);
        }
        if(tableSize?.includes('24')){
            cardStack?.classList.add('Count-24');
            cardtable?.classList.add('--size-24')
            cardCounter = 24;
            //setTimeout(()=>{renderCardsBackground(cardCounter)},500);
            randomPositioning(cardCounter)
        }
        if(tableSize?.includes('36')){
            cardStack?.classList.add('Count-36');
            cardtable?.classList.add('--size-36');
            cardCounter = 36;
            randomPositioning(cardCounter)
            //renderCards(36);
            //setTimeout(()=>{renderCardsBackground(36)},500);
            //setTimeout(()=>{renderCardsImg(36)},500);
            
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
    //console.log(cardStack);
    //console.log(mirrorStack);
    renderCardsBackground(cardStack, topStack)
    renderCardsBackground(mirrorStack, bottomStack)
}

// Funktion zum laden und rendern der Bilder 
function renderCardsBackground(cardCounter:number[], HTML_Id: string ){
    let cardStack = document.getElementById(HTML_Id) as HTMLElement;
    let array:string[] = codeViebeImgs // test
    //console.log(cardCounter)
    if(cardStack){
        cardStack.innerHTML = "";
        for(let i =0; i< cardCounter.length; i++){
            //console.log(cardCounter[i]);
            let cardIndex:number = cardCounter[i]
            cardStack.innerHTML += renderCardsBackgroundToHTML(cardIndex, array);
        }
    }   
}





//function renderCardsImg(cardCounter:string){
//    let memoryTable = document.getElementById('card-wrapper') as HTMLElement;
//    if(memoryTable){
//        memoryTable.innerHTML = "";
//        for(let i = 0; i < codeViebeImgs.length; i++){
//            memoryTable.innerHTML += renderCardsToHTML(i);
//        }
//
//    }
//}

function toggleCards(id:number){
    let card = document.getElementById('card') as HTMLElement;
    if(card){

    }

}