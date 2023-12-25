const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const astroneerImage = document.getElementById('astroneerImage');
const backgroundMusic = document.getElementById('backgroundMusic');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnReact = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () =>{
    
    question.innerHTML = "Yayyyy, HOP ON NOW!! >:3";
    astroneerImage.src = "giphy.gif"; 
    backgroundMusic.play();

    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';

});

noBtn.addEventListener('mouseover',() =>{
    const i = Math.floor(Math.random()* (wrapperRect.width - noBtnReact.width))+1;
    const j = Math.floor(Math.random()* (wrapperRect.height - noBtnReact.height))+1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});