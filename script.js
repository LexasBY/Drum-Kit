const musicBtns = document.querySelectorAll(".key");
for (let i=0; i<musicBtns.length; i++){
  let musBtn = musicBtns[i];
  musBtn.addEventListener('click', function(e){
    const butt = musBtn.getAttribute('data-key');
    //console.log(butt);
    const mouseAudio = document.querySelector(`audio[data-key="${butt}"]`);
    const mouseKey = document.querySelector(`div[data-key="${butt}"]`);
    if (!mouseAudio) return;
    mouseKey.classList.add('playing');
    mouseAudio.currentTime = 0;
    mouseAudio.play();
  });
};

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

document.addEventListener('keydown', playSound);
