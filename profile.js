


let colorButton = document.querySelector('#color');
let placeButton = document.querySelector('#place');
let ritualButton = document.querySelector('#ritual');


const favoriteButton = evt => {
    evt.preventDefault();

    if (evt.target == colorButton){
        alert('Green')
    } else if (evt.target == placeButton){
        alert('At my computer')
    } else if(evt.target == ritualButton){
        alert('Espresso in the morning')
    }
}


colorButton.addEventListener('click', favoriteButton);
placeButton.addEventListener('click', favoriteButton);
ritualButton.addEventListener('click', favoriteButton);