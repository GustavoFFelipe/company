const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [ " mim? ", " quem eu sou?", " de onde eu vim?"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});





// Up button click need jquery script in head

let btn = $("#btn-up");

btn.click(function (){
  $('html,body').animate({ scrollTop: 0}, 'slow')
})

// -------contact button --------------------------------

function initialPopUp(popId) {
  const pop =  document.getElementById(popId);
  pop.classList.add('show');
  pop.addEventListener('click', (e) => {
    if(e.target.id == popId || e.target.id == 'popup-close'){
      pop.classList.remove('show');
    }
  })
}

const popBtn = document.getElementById('popup-contact');
popBtn.addEventListener('click', () => initialPopUp('pop-container'));
