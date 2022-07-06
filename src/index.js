import intro from './intro.js';
import menu from './menu.js';
import contact from './contact.js';

function clearScreen() {
  contentContainer.innerHTML ='';
}

function addIntro() {
  clearScreen();
  contentContainer.appendChild(intro());
}

function addMenu() {
  clearScreen();
  contentContainer.appendChild(menu());
}

function addContact() {
  clearScreen();
  contentContainer.appendChild(contact());
}

const contentContainer = document.getElementById('content-container');
const introButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const contactButton = document.getElementById('contact');

introButton.addEventListener('click', () => {addIntro()});
menuButton.addEventListener('click', () => {addMenu()});
contactButton.addEventListener('click', () => {addContact()});

addIntro();
