
let createProfile = function(product){
    let newDiv = document.createElement('div');
    let image = document.createElement('img');
    let name = document.createElement('p');
    let description = document.createElement('p');
    let price = document.createElement('p');
    
    let nameTxt = document.createTextNode(product.title);
    let descriptionTxt = document.createTextNode(product.description);
    let priceTxt = document.createTextNode(product.price);
    image.src = product.image;

    name.appendChild(nameTxt);
    description.appendChild(descriptionTxt);
    price.appendChild(priceTxt);
    
    newDiv.appendChild(image);
    newDiv.appendChild(name);
    newDiv.appendChild(description);
    newDiv.appendChild(price);
    name.classList.add('title');
    description.classList.add('description');
    newDiv.classList.add('product');
    price.classList.add('price');
    image.classList.add('image');
    let content = document.getElementById('products');

    content.appendChild(newDiv);
}

let createElementsFromJson = function(products){
    for(let product of products){
        createProfile(product)
    }
}

fetch('products.json').then( (response)=>response.json()  )
                    .then( (products)=> createElementsFromJson(products) );
