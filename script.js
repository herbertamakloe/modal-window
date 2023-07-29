'use strict';

const modal = document.querySelector('.modal');
const showModalBtns = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');

// console.log(modal.classList, overlay.classList);

// console.log(showModalBtn);

//For looping each button with the 'show-modal' class name
for (let i = 0; i < showModalBtns.length; i++) {
  // console.log(btn);
  showModalBtns[i].addEventListener('click', openNclose);
}

//When you click on close (X) button
closeModalBtn.addEventListener('click', openNclose);

//When you click on blurred background
overlay.addEventListener('click', openNclose);

//Open and close modal function
function openNclose() {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
}

//NOTE:
//classList.remove(): We can remove multiple classes from an element by adding them
//in the parenthese and separating them with commas. DO NOT ADD A DOT(.) to the
//class name in the parenthese.

//ADDING KEYBOARD EVENTS
//Keyboard events are so-called global events because they do not happen on one
//specific element. And for global events, we usually listen on the whole document.

document.addEventListener('keydown', function (e) {
  // console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    openNclose();
  }
});

//On the document itself, there is an event listener. This

//HUGE NOTE FOR MYSELF
//Anytime a function is called on an event (like 'addEventListener'), the fucntion
//receive access to event objects. Or the function has access to event objects. The
//Event object keeps tracks of various events that occur on the page

//We also use classList to find all the classes given to an element
