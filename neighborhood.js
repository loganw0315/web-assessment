


let recButton = document.querySelector('#recommendation');


const recommend = evt => {
    evt.preventDefault();
    let arr = ['My Place Bar & Grill', 'La Costeñita', 'Taqueria El Cazador', 'Tropical Smoothie Cafe'];

    const randomElem = arr[Math.floor(Math.random() * arr.length)];
    alert(`You should eat at ${randomElem}`)
}


recButton.addEventListener('click', recommend);







