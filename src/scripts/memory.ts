import { settingsBase } from "./db";
import { SelectionInfos } from "./settings";




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
    let cardtable = document.getElementById('card-table');HTMLElement
    let cardStack = document.getElementById('card-wrapper'); HTMLElement
    let tableSize: string | undefined
    let cardTheme: string | undefined

    if(settings !== undefined ){
        tableSize = settings.board
        cardTheme = settings.theme
        console.log('Kartenanzahl:',tableSize ,'Theme:', cardTheme)
        if(tableSize?.includes('16')){
            cardStack?.classList.add('Count-16');
            cardtable?.classList.add('--size-16')
        }
        if(tableSize?.includes('24')){
            cardStack?.classList.add('Count-24');
            cardtable?.classList.add('--size-24')
        }
        if(tableSize?.includes('36')){
            cardStack?.classList.add('Count-36');
            cardtable?.classList.add('--size-36')
        }
        else{
            console.log('fehler in der memory.ts toggleTableSize')
        }
    }else{
        console.log('Ein Fehler ist in den Settings aufgetretten oder checke den local Storage')
    } 
    
}