'use strict'
/**
 * file: video.js
 * purpose: display and control video via Js
 **/
let MyVideo = function () {
    this.vid.src = 'videos/video-1.mp4';
    this.vid.style.width = '100%';  
    this.vid.style.height = 'auto';
    this.vid.style.border = '1px solid rgb(240,233,154)';
    // vid.play(); // ... or better: don't do this!
    this.vid.controls = true;
    
    this.vid2.src = 'videos/video-2.mp4';
    this.vid2.style.width = '100%';  
    this.vid2.style.height = 'auto';
    this.vid2.style.border = '1px solid rgb(240,233,154)';
    // vid.play(); // ... or better: don't do this!
    this.vid2.controls = true;
}

// af DOM load run the myVideo function
window.addEventListener('load', MyVideo);
