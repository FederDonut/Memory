

export let goToSettings = ()=>{
    window.location.href = "/src/pages/settings.html";
}
export let goToTheGame = (unlock:boolean)=>{
    if(unlock===true){
        window.location.href = "/src/pages/memory.html";
    }else{
        console.log('chose all settings implemnt an overlay');
    }
    
}