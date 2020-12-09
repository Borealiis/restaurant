
function filterMenu(pattern){
    const recherche = [] 
    for (let element of collection){
        if(element.name.match(pattern)||element.description.match(pattern) || element.tag.name.match(pattern)){
        recherche.push(element)
        }
    }
    

    const rechercheDiv = document.querySelector("body > div:nth-child(5)")
    rechercheDiv.innerHTML=''
    
    const foodContainer = document.createElement('div');
    foodContainer.className = "container";
    rechercheDiv.appendChild(foodContainer); 

    
    const foodRowCols = document.createElement('div');
    foodRowCols.className = 'columns is-multiline is-centered mb-0';
    foodContainer.appendChild(foodRowCols);

    for (let element of recherche){

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
        foodImg.src = element.image;
        foodImg.alt = element.name;
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
        foodTitle.innerHTML = element.name;
        foodMediaContent.appendChild(foodTitle);
    
        const foodSubtitle = document.createElement('p');
        foodSubtitle.className = "subtitle is-12";
        foodSubtitle.innerHTML = element.description;
        foodMediaContent.appendChild(foodSubtitle);
    
        const foodFooter = document.createElement('footer')
        foodFooter.className = "card-footer"
        foodMediaContent.appendChild(foodFooter);
    
        const foodTag = document.createElement('span');
        foodTag.className = element.tag.class + " is-rounded is-medium";
        foodTag.innerHTML = element.tag.name;
        foodFooter.appendChild(foodTag);
    
        if (element.veg) {
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
    }
document.querySelector("#searchBar").addEventListener('keyup',input=>{
    const inputValue = input.target.value
    const pattern = new RegExp(inputValue, 'gim')
    filterMenu(pattern)
    
})