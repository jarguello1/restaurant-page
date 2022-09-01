function createMenu () {
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');

    const beef = document.createElement('img');
    beef.src ='images/nicaraguan_food.jpg';
    beef.alt = 'Servicio de Carne Asada ';
    menu.appendChild(createParagraph('Carne Asada'))
    menu.appendChild(createParagraph('Grilled Steak'));
    menu.appendChild(beef);

    const pork = document.createElement('img');
    pork.src ='images/cerdo-frito.jpg';
    pork.alt = 'Servicio de Cerdo Frito ';
    menu.appendChild(createParagraph('Cerdo Frito'));
    menu.appendChild(createParagraph('Fried Pork'));
    menu.appendChild(pork);
    
    const cheese = document.createElement('img');
    cheese.src = 'images/queso_frito.png';
    cheese.alt = 'Queso Frito';
    menu.appendChild(createParagraph('Queso Frito'));
    menu.appendChild(createParagraph('Fried Cheese'));
    menu.appendChild(cheese);

    const nacatamal = document.createElement('img');
    nacatamal.src = 'images/nacatamal.jpg';
    nacatamal.alt = 'Nacatamal'
    menu.appendChild(createParagraph('Nacatamal'));
    menu.appendChild(createParagraph('Nicaraguan Tamale'));
    menu.appendChild(nacatamal);
}

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
  }

export default loadMenu;