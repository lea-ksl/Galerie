let pictures = [
    { id: 1, title: "Image 1", description: "Description de l'image 1", url: "https://cdn.pixabay.com/photo/2020/03/24/11/21/winter-4963715_1280.jpg"},
    { id: 2, title: "Image 2", description: "Description de l'image 2", url: "https://cdn.pixabay.com/photo/2020/03/24/11/21/winter-4963715_1280.jpg"},
    { id: 3, title: "Image 3", description: "Description de l'image 3", url: "https://cdn.pixabay.com/photo/2020/03/24/11/21/winter-4963715_1280.jpg"},
    { id: 4, title: "Image 4", description: "Description de l'image 4", url: "https://cdn.pixabay.com/photo/2020/03/24/11/21/winter-4963715_1280.jpg"},
    { id: 5, title: "Image 5", description: "Description de l'image 5", url: "https://cdn.pixabay.com/photo/2020/03/24/11/21/winter-4963715_1280.jpg"},
    { id: 6, title: "Image 6", description: "Description de l'image 6", url: "https://cdn.pixabay.com/photo/2020/03/24/11/21/winter-4963715_1280.jpg"},
];

for(let i = 0; i < pictures.length; i++) {
    let div = document.createElement("div");
    div.classList.add("card");
    

    let title = document.createElement("h2");
    let titleContent = document.createTextNode(pictures[i].title);
    title.appendChild(titleContent);

    let description = document.createElement("h5");
    let descriptionContent = document.createTextNode(pictures[i].description);
    description.appendChild(descriptionContent);

    let img = document.createElement("img");
    img.src = pictures[i].url;

    

    div.appendChild(title);
    div.appendChild(description);
    div.appendChild(img);
    document.getElementById("toto").appendChild(div);
}

