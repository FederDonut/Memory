


export function renderCardsImgsToHTML(i:number, codeViebeImgs:string[]){

    return `
        <button id="single-card${i}" class="card" data-index="${i}" >
            <img id="card${i}" class="card__face card__face--back" src="/img/cards/code-vibes-theme/${codeViebeImgs[i]}" alt="memory-card">
            <img class="card__face " src="/img/cards/code-vibes-theme/code-background.svg" alt="background-img">
        </button>
        

    `
}




