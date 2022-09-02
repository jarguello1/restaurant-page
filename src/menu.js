function createMenu () {
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');

    const beefContainer = document.createElement('div');
    beefContainer.classList.add('menuContainer');

    const porkContainer = document.createElement('div');
    porkContainer.classList.add('menuContainer');

    const cheeseContainer = document.createElement('div');
    cheeseContainer.classList.add('menuContainer');

    const nacaContainer = document.createElement('div');
    nacaContainer.classList.add('menuContainer');


    const beef = document.createElement('img');
    beef.src ='images/nicaraguan_food.jpg';
    beef.alt = 'Servicio de Carne Asada ';
    beefContainer.appendChild(createParagraph('Carne Asada'))
    beefContainer.appendChild(createParagraph('Grilled Steak'));
    beefContainer.appendChild(beef);

    const pork = document.createElement('img');
    pork.src ='images/cerdo_frito.jpg';
    pork.alt = 'Servicio de Cerdo Frito ';
    porkContainer.appendChild(createParagraph('Cerdo Frito'));
    porkContainer.appendChild(createParagraph('Fried Pork'));
    porkContainer.appendChild(pork);
    
    const cheese = document.createElement('img');
    cheese.src = 'images/queso_frito.png';
    cheese.alt = 'Queso Frito';
    cheeseContainer.appendChild(createParagraph('Queso Frito'));
    cheeseContainer.appendChild(createParagraph('Fried Cheese'));
    cheeseContainer.appendChild(cheese);

    const nacatamal = document.createElement('img');
    nacatamal.src = 'images/nacatamal.jpg';
    nacatamal.alt = 'Nacatamal'
    nacaContainer.appendChild(createParagraph('Nacatamal'));
    nacaContainer.appendChild(createParagraph('Nicaraguan Tamale'));
    nacaContainer.appendChild(nacatamal);

    menu.appendChild(beefContainer);
    menu.appendChild(porkContainer);
    menu.appendChild(cheeseContainer);
    menu.appendChild(nacaContainer);

    return menu;
}

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
  }
  
  export default loadMenu;