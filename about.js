console.log("hello world");


let form = document.querySelector('form#contact');
let catPic = document.querySelector('img')

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Contact Form successfully submitted!')
}

const picAlert = (evt) => {
	evt.preventDefault();

	alert('Have I mentioned how fine you look today?')
}


form.addEventListener('submit', handleSubmit);

catPic.addEventListener('mouseover', picAlert);