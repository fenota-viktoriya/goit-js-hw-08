import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

 //инициализируем Player
const iframe = document.querySelector('iframe');
const player = new Player(iframe);


let currentTimePlay = 0;
 
//присваив. ключ хранилищу
const STORAGE_KEY = 'videoplayer-current-time';

//вешаем слушателя по событию и отложенною колбэк функцию
player.on('play', throttle((onPlay),1000));
//возвращаем текущее время с хранилища после перезагрузки стриницы
setCurrentTime();

//колбэк функция
function onPlay(data){

currentTimePlay = data.seconds;
localStorage.setItem(STORAGE_KEY, currentTimePlay);

};

 function setCurrentTime(){
    const setTime = localStorage.getItem(STORAGE_KEY);
    if(setTime){
        player.setCurrentTime(setTime);
    }
 }