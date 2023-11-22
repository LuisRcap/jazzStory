const cuteTexts = [
    `<div class="slider_caption"><span>Esto inició hace un tiempo y he disfrutado cada segundo que he pasado contigo,
    por eso quiero hacerte unas preguntas y saber si tu has sentido algo parecido y la
    primera es ¿Realmente te gusto?</span>
    <div class="btn-container">
        <button id="si" class="btn btn-primary">¡Me encantas!</button>
        <button id="no" class="btn btn-danger">No realmente</button>
    </div>
    </div>`,
    `<div class="slider_caption"><span>Tú también me gustas como no tienes idea 🥰 cada beso tuyo hace que el tiempo
    se detenga y que todo alrededor desaparesca, haciendo que lo único que quiera ver seas tú.<br>¿Te gustarían más
    momentos como estos?</span>
    <div class="btn-container">
        <button id="si" class="btn btn-primary">Por supuesto 🥰</button>
        <button id="no" class="btn btn-danger">Estoy bien así</button>
    </div></div>`,
    `<div class="slider_caption"><span>No puedo pensar en mejor forma de pasar mis días que estando contigo,
    me alegras los días y me llenas de vida ✨ quisiera que esto dure por mucho tiempo ¿Piensas de la misma forma?</span>
    <div class="btn-container">
        <button id="si" class="btn btn-primary">Me leíste la mente 😍</button>
        <button id="no" class="btn btn-danger">Pienso diferente</button>
    </div>
    </div>`,
    `<div class="slider_caption"><span>Si pensamos igual, no veo por qué no cerrar el trato 🤍 si respondes que
    si a esto me harás la persona más feliz en el mundo.</span>
    <h2>¿Quieres ser mi novia? 💖</h2>
    <div class="btn-container">
        <button id="si" class="btn btn-primary">Me encantaría 💓</button>
        <button id="no" class="btn btn-danger">No, paso</button>
    </div></div>`,
]

const messagesTryAgain = [
    '¿Estás segura?',
    'Tal vez tengas que tomarte un tiempo para pensarlo',
    'Vuelve a intentarlo, encontrarás la respuesta correcta',
    '¡Vaya! de verdad quieres ir por este camino',
    'Está bien, es tu decisión 😢'
]

const animateClasses = [
    'animate__backInLeft',
    'animate__backInRight',
    'animate__bounceInDown',
    'animate__rotateIn',
    'animate__zoomInUp'
]

const container = document.querySelector('#container');

let counterQuestion = 0;

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const changeSlide = () => {
    if( counterQuestion > 0 ) {
        console.log("remueve")
        container.removeChild( document.querySelector('.slider-area') );
    }
    const sliderArea = document.createElement('div');
    sliderArea.className = `slider-area animate__animated ${ animateClasses[( Math.random() * 73437 | 0 ) % 5] }`;
    sliderArea.style = `background-image: url("./assets/imgs/question${ counterQuestion + 1 }.jpg");`
    sliderArea.innerHTML = cuteTexts[counterQuestion];

    container.appendChild( sliderArea );

    let msgNoCounter = 0

    const buttonSi = document.querySelector('#si');
    const buttonNo = document.querySelector('#no');

    const btnNoWidth = buttonNo.offsetWidth;
    const btnNoHeight = buttonNo.offsetHeight;

    const maxWidth = windowWidth - btnNoWidth;
    const maxHeigth = windowHeight - btnNoHeight;

    buttonSi.addEventListener( 'click', (e) => {
        e.preventDefault();
        if( counterQuestion === 3 ) {
            window.location.replace("dijo_si.html");
        }
        counterQuestion++;
        changeSlide()
    })

    buttonNo.addEventListener( 'click', (e) => {
        e.preventDefault();
        buttonNo.style = "background-color: transparent"
        buttonNo.style.position = 'absolute';
        buttonNo.style.right = `${ ( Math.random() * 73437 | 0 ) % maxWidth }px`;
        buttonNo.style.top = `${ ( Math.random() * 73437 | 0 ) % maxHeigth }px`;
        buttonNo.classList.add( 'btn-no-click' )

        setTimeout( () => {
            buttonNo.classList.remove( 'btn-no-click' );
            alert(messagesTryAgain[msgNoCounter]);
            if(msgNoCounter === 4) {
                window.location.replace("dijo_no.html");
            }
            msgNoCounter ++;
        }, 300);
    })
    


}

changeSlide();