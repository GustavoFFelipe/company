




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

