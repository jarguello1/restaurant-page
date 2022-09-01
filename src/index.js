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

    //create Nav Buttons
    navList = ['home', 'menu', 'contact'];
    navList.forEach(function(e) {
        const navBtn = document.createElement('button');
        navBtn.classList.add('navBtn');
        navBtn.setAttribute('id', e);
        navBtn.textContent = e;
        header.appendChild(navBtn);
    })

    content.appendChild(header);
}

//create main body
function createMain() {
    main.classList.add('main');
    main.textContent = "Middle Bit";
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
})();


const homeBtn = document.getElementById('home');
homeBtn.textContent = "Home"
//homeBtn.addEventListener('click', homePage);

const menuBtn = document.getElementById('menu');
menuBtn.textContent = 'Menu';
//menuBtn.addEventListener('click', menuPage);

const contactBtn = document.getElementById('contact');
contactBtn.textContent = "Contact";
//contactBtn.addEventListener('click', contactPage);