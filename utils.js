//create monsters function

export function createMonsterListing() {
    const li = document.createElement('li');

    li.classList.add('monsters');
    li.style.background = monsters.dangerLevel;

    const pName = document.createElement('p');

    pName.classList.add('name');
    pName.textContent = monsters.name;

    const pCategory = document.createElement('p');

    pCategory.classList.add('category');
    pCategory.textContent = monsters.category;

    const image = document.createElement('img');

    image.src = monsters.image;

    const pDescription = document.createElement('p');

    pDescription.classList.add('description');
    pDescription.textContent = monsters.description;

    const pTamed = document.createElement('p');

    pTamed.textContent = monsters.isTamed ? 'Ready to obey you' : 'A danger to you and everyone else';

    const pPrice = document.createElement('p');

    pPrice.textContent = monsters.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    }); 
    const button = document.createElement('button');

    button.textContent = 'Add to defense budget';

    li.append(pName, pCategory, image, pDescription, pTamed, pPrice, button);

    return li;
}