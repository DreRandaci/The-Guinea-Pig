
let outputTarget = document.getElementById('output-target');
let pageHeader = document.getElementById('page-header');
let pageTitleH1 = document.getElementById('page-title');
let inputField = document.getElementById('keypress-input');
let addColorBtn = document.getElementById('add-color');
let guineaPig = document.getElementById('guinea-pig');
let hulkifyBtn = document.getElementById('make-large');
let captureItBtn = document.getElementById('add-border');
let roundedBtn = document.getElementById('add-rounding');
let articleSection = document.querySelectorAll('.article-section');
let buttons = document.querySelectorAll('button');

//When any section is clicked the output target text should be "You clicked on the {text of the section} section"
function sectionEvents(target) {
		outputTarget.innerHTML = `<h2>You clicked on the ${target.innerText} section</h2>`;
};

document.body.addEventListener('click', function(event) {
	let sectionTarget = event.target;
	if (event.target.localName === 'section') {
		sectionEvents(sectionTarget);
	};
});

//When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
pageTitleH1.addEventListener('mouseenter', function() {
	outputTarget.innerHTML = `<h2>You moved your mouse over the header</h2>`;
});

//When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
pageTitleH1.addEventListener('mouseleave', function() {
	outputTarget.innerHTML = `<h2>You left me!!</h2>`;
});

//When you type characters into the input field, the output element should mirror the text in the input field.
inputField.addEventListener('input', function() {
	outputTarget.innerHTML = `<h2>${inputField.value}</h2>`;
});

//When you click the "Add color" button, the guinea-pig element's text color should change to blue.
addColorBtn.addEventListener('click', function() {
	// guineaPig.classList.add('blue');
	if (guineaPig.className === 'blue') {
			guineaPig.classList.remove('blue');
		} else {
			guineaPig.classList.add('blue');
		};
});

//When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
hulkifyBtn.addEventListener('click', function() {
		if (guineaPig.className === 'biggerFontSize') {
			guineaPig.classList.remove('biggerFontSize');
		} else {
			guineaPig.classList.add('biggerFontSize');
		};
});

//When you click the "Capture it" button, the guinea-pig element should have a border added to it.
captureItBtn.addEventListener('click', function() {
	if (guineaPig.className === 'border') {
			guineaPig.classList.remove('border');
		} else {
			guineaPig.classList.add('border');
		};
});

//When you click the "Rounded" button, the guinea-pig element's border should become rounded.
roundedBtn.addEventListener('click', function() {
	// guineaPig.classList.add('borderRadius');
	if (guineaPig.className === 'borderRadius') {
			guineaPig.classList.remove('borderRadius');
		} else {
			guineaPig.classList.add('borderRadius');
		};
});

//The first section's text should be bold.
articleSection[0].classList.add('boldTxt');

//The last section's text should be bold and italicized.
articleSection[5].classList.add('boldItalic');

//Make the buttons stop appearing next to each other as inline elements. Change them into block elements.
for (var i = 0; i < buttons.length; i++) {
	buttons[i].classList.add('btnDisplayBlock');
}

// console.log(buttons)



