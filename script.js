const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
  mario.classList.add('jump');

setTimeout(() => {

mario.classList.remove('jump');
}, 500);

}

const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
  console.log(marioPosition);
  if (pipePosition ≤ 120 && pipePosition > 0 && marioPosition < 80) {
    
    pipe.style.animation ='none';
    pipe.style.left ='${pipePosition}px';
    
    mario.style.animation ='none';
    mario.style.bottom ='${marioPosition}px';
    
    mario.src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Dwap29ECO9rI82NVMF-9ZRNXQDzqGM8TcA&usqp=CAU'
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'
    
    clearInterval('loop');
  }
}, 10);

const loop = setInterval(()=> {
  
  console.log('loop')

document.addEventListener('touchstart', jump);
