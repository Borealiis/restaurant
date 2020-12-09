const body = document.querySelector("body");

const container = document.createElement("div");
container.className = "container";
body.appendChild(container);

const mainColumnLayout = document.createElement("div");
mainColumnLayout.className = "columns";
container.appendChild(mainColumnLayout);

/*Menu navigation*/
const menuColumn = document.createElement("div");
menuColumn.className = "column is-1.5 col-menu is-narrow";
mainColumnLayout.appendChild(menuColumn);

const asideMenu = document.createElement("aside");
asideMenu.className = "menu";
menuColumn.appendChild(asideMenu);

const menuLabel = document.createElement("p");
menuLabel.className = "menu-label";
menuLabel.innerHTML = "Menu"
asideMenu.appendChild(menuLabel);

const menuList = document.createElement("ul");
menuList.className = "menu-list";
asideMenu.appendChild(menuList);

for (let element of menuNav) {

    const newListItem = document.createElement('li');
    // newListItem.className = element.class;


    const newAnchorTag = document.createElement('a');
    newAnchorTag.href = element.link;
    newAnchorTag.textContent = element.name;



    menuList.appendChild(newListItem);
    newListItem.appendChild(newAnchorTag);

}


const foodContainer = document.createElement('div');
foodContainer.className = "container";
body.appendChild(foodContainer);


const foodRowCols = document.createElement('div');
foodRowCols.className = 'columns is-multiline is-centered';
foodContainer.appendChild(foodRowCols);


for (let elem of collection) {

    const foodCol = document.createElement('div');
    foodCol.className = "column is-full-mobile is-half-tablet is-half-desktop is-narrow";
    foodRowCols.appendChild(foodCol);

    const foodCard = document.createElement('div');
    foodCard.className = "card";
    foodCol.appendChild(foodCard);

    const foodImgDiv = document.createElement('div');
    foodImgDiv.className = "card-image";
    foodCard.appendChild(foodImgDiv);

    const foodFigure = document.createElement('figure');
    foodFigure.className = "image is-5by4";
    foodImgDiv.appendChild(foodFigure);

    const foodImg = document.createElement('img');
    foodImg.src = elem.image;
    foodImg.alt = elem.name;
    foodFigure.appendChild(foodImg);

    const foodCardContent = document.createElement('div');
    foodCardContent.className = "card-content"
    foodCard.appendChild(foodCardContent);

    const foodMedia = document.createElement('div');
    foodMedia.className = "media"
    foodCardContent.appendChild(foodMedia);

    const foodMediaContent = document.createElement('div');
    foodMediaContent.className = "media-content"
    foodMedia.appendChild(foodMediaContent);

    const foodTitle = document.createElement('p');
    foodTitle.className = "title is-4";
    foodTitle.innerHTML = elem.name;
    foodMediaContent.appendChild(foodTitle);

    const foodSubtitle = document.createElement('p');
    foodSubtitle.className = "subtitle is-12";
    foodSubtitle.innerHTML = elem.description;
    foodMediaContent.appendChild(foodSubtitle);

    const foodFooter = document.createElement('footer')
    foodFooter.className = "card-footer"
    foodMediaContent.appendChild(foodFooter);

    const foodTag = document.createElement('span');
    foodTag.className = elem.tag.class + " is-rounded is-medium";
    foodTag.innerHTML = elem.tag.name;
    foodFooter.appendChild(foodTag);

    if (elem.veg) {
        const vegBasket = document.createElement('i');
        vegBasket.className = "fas fa-leaf";
        vegBasket.style.color = "green"
        foodFooter.appendChild(vegBasket);
    }

    const foodAnchor = document.createElement('a');
    foodAnchor.href = ""
    foodFooter.appendChild(foodAnchor);

    const foodBasket = document.createElement('i');
    foodBasket.className = "fas fa-shopping-basket";
    foodAnchor.appendChild(foodBasket);

}