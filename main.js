const bigDiv = document.querySelectorAll('.big');
const small1 = document.querySelector('.one ul');
const container = document.querySelector('#container');
const text = document.querySelector('.text');

const totalTime = 15000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breatheAnimation();

function breatheAnimation() {
  text.innerText = 'andas in';

  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'håll';

    setTimeout(() => {
      text.innerText = 'andas ut';

      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breatheAnimation, totalTime);
