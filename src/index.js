import loadHome from "../home";

const content = document.querySelector('#content');
const header = document.createElement('header');
const main = document.createElement('div');
const footer = document.createElement('footer');

//create header
function createHeader() {

    header.classList.add('header');
    header.textContent = "Fritanga";
    
    const navBar = document.createElement('div');
    navBar.classList.add('navBar');
    header.appendChild(navBar);

    (function createNav() {
        const homeBtn = document.createElement('button');
        homeBtn.classList.add('navBtn');
        homeBtn.setAttribute('id', 'home');
        homeBtn.textContent = 'Home';
        homeBtn.addEventListener('click', loadHome);

        const menuBtn = document.createElement('button');
        menuBtn.classList.add('navBtn');
        menuBtn.setAttribute('id', 'menu');
        menuBtn.textContent = 'Menu';
        //menuBtn.addEventListener('click', menuPage);

        const contactBtn = document.createElement('button');
        contactBtn.classList.add('navBtn');
        contactBtn.setAttribute('id', 'contact');
        contactBtn.textContent = 'Contact';
        //contactBtn.addEventListener('click', contactPage);


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
    footer.textContent = `Copyright © ${new Date().getFullYear()} josearguello`;
    content.appendChild(footer);
}

(function () {
    createHeader();
    createMain();
    createFooter();

    loadHome();
})();

