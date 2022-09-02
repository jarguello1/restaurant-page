function createContact() {
    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact');

    const nicaMap = document.createElement('img');
    nicaMap.src = 'images/map.png';
    nicaMap.alt = 'Map of Nicaragua';

    contact.appendChild(createParagraph('Contact us now at: '));
    contact.appendChild(createParagraph('+505 5555-5555'));
    contact.appendChild(nicaMap);

    return contact;
}

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());
}

export default loadContact;