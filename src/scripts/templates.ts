


export function renderCardsBackgroundToHTML(i:number, codeViebeImgs:string[]){

    return `
        
        <img id="${i}" class="card${i}" src="/img/cards/code-vibes-theme/${codeViebeImgs[i]}" alt="memory-card">

    `
}

export function renderCardsBackgroundToHTMLMirror(i:number, codeViebeImgs:string[]){

    return `
        
        <img id="${i}" class="card${i}" src="/img/cards/code-vibes-theme/${codeViebeImgs[i]}" alt="memory-card">

    `
}

//export function renderCardsFrontImgToHTML(i:number){
//    return`
//        <section id="card${i}" class="card"></section>
            
//    `
//}