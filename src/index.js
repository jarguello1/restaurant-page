import loadHome from "./home"
import loadMenu from "./menu";
import loadContact from "./contact";

const content = document.querySelector('#content');
const header = document.createElement('header');
const main = document.createElement('div');
const footer = document.createElement('footer');

//create header
function createHeader() {

    header.classList.add('header');
    header.textContent = 'Fritanga';
    
    const navBar = document.createElement('div');
    navBar.classList.add('navBar');
    header.appendChild(navBar);

    (function createNav() {
        const homeBtn = document.createElement('button');
        homeBtn.classList.add('navBtn');
        homeBtn.setAttribute('id', 'homeBtn');
        homeBtn.textContent = 'Home';
        homeBtn.addEventListener('click', (e) => {
            if (e.target.classList.contains('active')) return;
            setActiveButton(homeBtn);
            loadHome();
          });

        const menuBtn = document.createElement('button');
        menuBtn.classList.add('navBtn');
        menuBtn.setAttribute('id', 'menuBtn');
        menuBtn.textContent = 'Menu';
        menuBtn.addEventListener('click', (e) => {
            if (e.target.classList.contains('active')) return;
            setActiveButton(menuBtn);
            loadMenu();
          });

        const contactBtn = document.createElement('button');
        contactBtn.classList.add('navBtn');
        contactBtn.setAttribute('id', 'contactBtn');
        contactBtn.textContent = 'Contact';
        contactBtn.addEventListener('click', (e) => {
            if (e.target.classList.contains('active')) return;
            setActiveButton(contactBtn);
            loadContact();
          });


        navBar.appendChild(homeBtn);
        navBar.appendChild(menuBtn);
        navBar.appendChild(contactBtn);
    })();

    content.appendChild(header);
}

//create main body
function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    content.appendChild(main);
}

//create footer
function createFooter() {
    footer.classList.add('footer');
    footer.textContent = `Copyright ?? ${new Date().getFullYear()} josearguello`;
    content.appendChild(footer);
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll('.navBtn');
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove('active');
      }
    });
  
    button.classList.add('active');
  }

(function () {
    createHeader();
    createMain();
    createFooter();


    setActiveButton(document.querySelector(".navBtn"));
    loadHome();
})();

