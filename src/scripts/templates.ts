


export function renderCardsImgsToHTML(i:number, codeViebeImgs:string[]){

    return `
        <section id="single-card${i}" class="single-card">
            <img id="${i}" class="card-front" src="/img/cards/code-vibes-theme/${codeViebeImgs[i]}" alt="memory-card">
            <img class="card-back" src="/img/cards/code-vibes-theme/code-background.svg" alt="background-img">
        </section>
        

    `
}



