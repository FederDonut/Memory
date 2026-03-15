


export function renderCardsImgsToHTML(i:number, codeViebeImgs:string[]){

    return `
        <button id="single-card${i}" class="card" data-index="${i}" >
            <img id="card${i}" class="card__face card__face--back" src="/img/cards/code-vibes-theme/${codeViebeImgs[i]}" alt="memory-card">
            <img class="card__face " src="/img/cards/code-vibes-theme/code-background.svg" alt="background-img">
        </button>
        

    `
}

export function renderExitOverlayToHTML(){
    return`
         <section id="overlay-content" class="overlay-content">
            <section class="overlay-content_inner">
                <h3>Are you sure you want to quit<br><span>the game ?</span></h3>
                <section class="overlay-content_inner--btn-wrapper">
                    <button><span>Back to game</span></button>
                    <button id="exit-game"><span>Exit game</span></button>
                </section>
            </section>
        </section>
    `
}


