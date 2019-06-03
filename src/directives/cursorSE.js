import Vue from 'vue';

let seAudio;
const addAudio = function(){
  return new Promise(function (resolve, reject) {
    seAudio = new Audio('./assets/se.mp3');
    seAudio.muted = true;

    resolve('resolved');
  });
};

addAudio();


Vue.directive('cse', {
  inserted: (el, binding) => {
    console.log('inserted');

    el.addEventListener('mouseenter', function () {
      seAudio.currentTime = 0;
      seAudio.muted = false;
      seAudio.play();
    }, false);
  },
  update: (el, binding) => {
    console.log('update');
  },
  unbind: (el) => {
    console.log('unbind');
  }
});