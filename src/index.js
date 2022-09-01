const content = document.querySelector('#content');
const header = document.createElement('header');
const main = document.createElement('div');
const footer = document.createElement('footer');

//create header
header.classList.add('header');
header.textContent = "Fritanga";
content.appendChild(header);

main.classList.add('main');
main.textContent = "Middle Bit";
content.appendChild(main);

footer.classList.add('footer');
footer.textContent = `Copyright © ${new Date().getFullYear()} josearguello`;
content.appendChild(footer);