import Player from '@vimeo/player';
import _throttle from 'lodash.throttle';

const iframeRef = document.querySelector('#vimeo-player');
const STORAGE_KEY = 'videoplayer-current-time';
const player = new Player(iframeRef);
player.on('timeupdate', _throttle(handelPlay, 1000));

getCurrentTime();
function handelPlay(evt) {
  localStorage.setItem(STORAGE_KEY, evt.seconds);
}

function getCurrentTime() {
  const currentTime = localStorage.getItem(STORAGE_KEY);
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}
