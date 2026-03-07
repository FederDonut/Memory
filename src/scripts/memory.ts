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
    let cardStack = document.getElementById('card-wrapper'); HTMLElement
    let tableSize: string | undefined
    let cardTheme: string | undefined

    if(settings !== undefined ){
        tableSize = settings.board
        cardTheme = settings.theme
        console.log('Kartenanzahl:',tableSize ,'Theme:', cardTheme)
    }else{
        console.log('Ein Fehler ist in den Settings aufgetretten oder checke den local Storage')
    } 
    
}