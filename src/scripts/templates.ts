


export function renderCardsImgsToHTML(i:number, array:string[], srcPath:string){

    return `
        <button id="single-card${i}" class="card" data-index="${i}" >
            <img id="card${i}" class="card__face card__face--back" src="/img/cards/${srcPath}/${array[i]}" alt="memory-card">
            <img class="card__face " src="/img/cards/${srcPath}/background.svg" alt="background-img">
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

export function renderCodeThemeNavbar(){
    return `
        <section class="info-wrapper--code">     
            <section class="left-wrapper">
                <section class="score">
                    <section class="player">
                        <img src="/img/memory-header/code/blue-label.svg" alt="player-lable">
                        <h5 class="blue">Blue <span id="blue-score">0</span></h5>
                    </section>
                    <section class="player">
                        <img src="/img/memory-header/code/orange-label.svg" alt="player-lable">
                        <h5 class="orange">Orange <span id="orange-score">0</span></h5>
                    </section>
                </section>
                <section class="current-player-wrapper">
                    <section class="current-player">
                        <h3>Current player:</h3>
                        <img id="playerColor" src="/img/memory-header/code/orange-label.svg" alt="curren-player-label">
                    </section>
                </section>
            </section>
            <button id="exitBtn" class="exitBtn--code">
                <img src="/img/memory-header/code/move_item.svg" alt="exit">
                <h5>Exit game</h5>
            </button>
        </section>
    `
}

export function renderFoodThemeNavbar(){
    return `
        <section class="info-wrapper--food">
            <section class="position-wrapper--food">
                <section class="score--food">
                    <section class="player--food">
                        <img src="/img/memory-header/food/chess_blue.svg" alt="player-lable">
                        <h5 class="blue"><span id="blue-score">0</span></h5>
                    </section>
                    <section class="player--food">
                        <img src="/img/memory-header/food/chess_orange.svg" alt="player-lable">
                        <h5 class="orange"><span id="orange-score">0</span></h5>
                    </section>
                </section>

                <section class="current-player-wrapper--food">
                    <section class="current-player--food">
                        <h3>Current player:</h3>
                        <img id="playerColor" src="/img/memory-header/food/activ_blue.svg" alt="curren-player-label">
                    </section>
                </section>

                <button id="exitBtn" class="exitBtn--food">
                    <img src="/img/memory-header/food/move_item.svg" alt="exit">
                    <h5>Exit game</h5>
                </button>
            </section>
        </section>
        
    `
}


