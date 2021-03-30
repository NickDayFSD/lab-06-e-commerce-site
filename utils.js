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
}