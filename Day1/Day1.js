window.addEventListener('keydown',playKeySound);
function playKeySound(e)
{
    var uniCodeVal=e.keyCode
    const audio = document.querySelector(`audio[data-key="${uniCodeVal}"]`);
    const keySound=document.querySelector(`div[data-key="${uniCodeVal}"]`);
    if(!audio) return // function stops executing
    audio.currentTime=0//rewinding the element to the start, so you can play it over and over again
    audio.play();
    keySound.classList.add('playing'); //adding the 'playing class' styles to the key
    setTimeout(function(){
        keySound.classList.remove('playing');
    },1000);
}


/* 
1. Template string, attribute-selector, keycode for a keydown event
2. Placeholder ('${}') element
3. setTimeout() function in js and css(the transition property 'styles') can be a bit confusing
   and out of sync. 
 setTimeout(function(){
        keySound.classList.remove('playing')
    },2000)
4. transitioned event, i.e transitioned from scale 1 black, to scale 2 yellow
5. A lot of things have transitioned, we choose transform property 
how are my code and his code different and what have I learned, what if I want to play the element more
once, I can now do that using currentTime property and also about the setTimeout() method and 
transform property. 
*/

