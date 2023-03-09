import Player from '@vimeo/player';
import _throttle from 'lodash.throttle';

const iframeRef = document.querySelector('#vimeo-player');
const player = new Player(iframeRef);
const STORAGE_KEY = 'videoplayer-current-time';

const handelPlay = function (evt) {
  localStorage.setItem(STORAGE_KEY, evt.seconds);
};

player.on('timeupdate', _throttle(handelPlay, 1000));

const currentTime = localStorage.getItem(STORAGE_KEY);

player.setCurrentTime(currentTime);
