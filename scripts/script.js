
<<<<<<< HEAD
const textArray = [ " mim? ", " quem eu sou?", " de onde eu vim?"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;
=======
>>>>>>> 9274b36fc58bd3782c31991d6792fdd1c5349a64




// ------------Up button click need jquery script in head--------

let btn = $("#btn-up");

btn.click(function (){
  $('html,body').animate({ scrollTop: 0}, 'slow')
})

// -------contact button -------------------------

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

