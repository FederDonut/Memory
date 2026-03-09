import { settingsBase } from "./db";
import { SelectionInfos } from "./settings";
import { renderCardsToHTML } from "./templates";




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
    //let cardCounter:number | undefined

    if(settings !== undefined ){
        tableSize = settings.board
        cardTheme = settings.theme
        console.log('Kartenanzahl:',tableSize ,'Theme:', cardTheme)
        if(tableSize?.includes('16')){
            cardStack?.classList.add('Count-16');
            cardtable?.classList.add('--size-16');
            //cardCounter = 16;
            setTimeout(()=>{renderCards(16)},500);
        }
        if(tableSize?.includes('24')){
            cardStack?.classList.add('Count-24');
            cardtable?.classList.add('--size-24')
            //cardCounter = 24;
            setTimeout(()=>{renderCards(24)},500);
        }
        if(tableSize?.includes('36')){
            cardStack?.classList.add('Count-36');
            cardtable?.classList.add('--size-36');
            //cardCounter = 36;
            //renderCards(36);
            setTimeout(()=>{renderCards(36)},500);
            
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

function renderCards(cardCounter:number){
    let memoryTable = document.getElementById('card-wrapper') as HTMLElement;
    console.log(cardCounter)
    if(memoryTable){
        memoryTable.innerHTML = "";
        for(let i = 0; i< cardCounter; i++){
            memoryTable.innerHTML += renderCardsToHTML(i);
        }
    }
   
    
}