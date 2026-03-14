var main = document.getElementById('main')
var envelope = document.getElementById('envelope')
var flap = document.getElementById('flap')
var flap2 = document.getElementById('flap2')
var cover = document.getElementById('cover')
var title = document.querySelector('h1');
var prompt = document.querySelector('h3');

function move() {
    flap.classList.add('open');
    cover.textContent = "";
    
    setTimeout(() => {
        main.classList.add('slide');
        flap.style.zIndex = 1;
        flap2.style.zIndex = 1;
         envelope.style.zIndex = 10;
    }, 1000);


    
}



function show(){
    envelope.classList.add('fade');
    cover.classList.add('fade');
    flap.classList.replace('open', 'fade');
    flap2.classList.add('fade'); 
    main.classList.add('grow');
    title.classList.add('fade');
    prompt.classList.add('fade');

}

