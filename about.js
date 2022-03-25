console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Thank you for your submission');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

const MsOvrBtn = document.querySelector('img')
MsOvrBtn.addEventListener('mouseover', () => {
	alert("I'm lying");
})