
let gameClick:boolean = false;
let gameTheme:boolean = false;


function checkInputStatus(event:any){
    const checkbox = event.target;
    if(checkbox.checked && !gameClick){
        gameClick = true;
        gameTheme = true;
        console.log(`checkbox ${checkbox.id} ist aktiv`)
        //if(gameClick && !){
        //    console.log(`checkbox ${checkbox.id} sollte wieder deaktiviert werden`)
        //    //testSetting();
        //    gameClick = false;
        //}
        
    }else{
        gameClick = false;
        console.log('keine Checkbox aktiv' ,gameClick)
    }
}

//function removeOldDecision(event:any){
//    
//}



export function testSetting(){
    let theme1 = document.getElementById('game1');
    let theme2 = document.getElementById('game2');
    theme1?.addEventListener('change', checkInputStatus);
    //theme2?.addEventListener('change', checkInputStatus);
    
};