// fetch('https://dog.ceo/api/breeds/list/all')
// .then(response => response.json())
// .then(data => console.log(data));

async function getDogList() {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await response.json();
    // console.log(data);
    createDogList(data.message);
}
getDogList();
function createDogList(breedList) {
    document.getElementById('breed').innerHTML = `
            <select onchange="byBreed(this.value)">
                <option>Select a Dog Breed</option>
                ${Object.keys(breedList).map(breed => `<option>${breed}</option>`)}
            </select>
    `
}
async function byBreed(breed) {
    if (breed !== "Select a Dog Breed") {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images
        `);
        const data = await response.json();
        // console.log(data);
        dogImages(data.message);
    }
}
function dogImages(images) {
    // console.log(images);
    const imageContainer = document.querySelector('.dog-images');
    let tempImages = "";
    for (let i = 0; i <= images.length - 1; i++) {
        // let image = "";
        let image = `<img src="${images[i]}" height="100" width="100" style="padding: 0 2px 2px;">`;
        tempImages += image;
    }

    // console.log(tempImages);
    imageContainer.innerHTML = tempImages;
}