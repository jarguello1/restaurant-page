function createHome() {
    const home = document.createElement('div');
    home.setAttribute('id', 'home');

    const chefImage = document.createElement('img');
    chefImage.src = 'images/nicaraguan_food.jpg';
    chefImage.alt = 'Comida Nica';

    home.appendChild(createParagraph('Delicioso Comida Nicaraguense'));
    home.appendChild(createParagraph('Delicious Nicaraguan Food Awaits!'))
    home.appendChild(chefImage);
    home.appendChild(createParagraph('Call, Order Online, or Visit!'));

    return home
}

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
  }

export default loadHome;