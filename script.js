// Variables

const menu = document.getElementById('nav');
const navigate = document.getElementById('navigate');
const navbarText = document.getElementById('navtext');
const nav = document.getElementById('nav');
const home = document.getElementById('nav01');
const about = document.getElementById('nav02');
const portfolio = document.getElementById('nav03');
const identity = document.getElementById('identity');
const siteTitle = document.getElementById('siteTitle');
const alertDiv = document.getElementById('alert');
let alertMessage = document.createElement('p');

// Variables

// Alert

function showAlert(type) {
	switch(type) {
		case 'success':
			alertDiv.appendChild(alertMessage);
			alertMessage.classList.toggle(type);
			alertDiv.classList.toggle('opacity0');
			alertDiv.classList.toggle('slideUp');
			setTimeout(function() {
				alertDiv.classList.toggle('slideUp');
				alertDiv.classList.toggle('opacity0');
				setTimeout(function() {
				alertMessage.classList.toggle(type);
				}, 500);
			}, 3000);
			break;
		case 'error':
			alertDiv.appendChild(alertMessage);
			alertMessage.classList.toggle(type);
			alertDiv.classList.toggle('opacity0');
			alertDiv.classList.toggle('slideUp');
			setTimeout(function() {
				alertDiv.classList.toggle('slideUp');
				alertDiv.classList.toggle('opacity0');
				setTimeout(function() {
				alertMessage.classList.toggle(type);
				}, 500);
			}, 3000);
			break;
	}
}

// Alert

// Remove water mark "use to navigate"

menu.addEventListener('mouseenter', function(e) {
	navigate.classList.add('opacity0');
});

// Remove water mark "use to navigate"

// Colorized active section

home.addEventListener('click', function(e) {
	about.classList.remove('active');
	portfolio.classList.remove('active');
});

about.addEventListener('click', function(e) {
	home.classList.remove('active');
	about.classList.add('active');
	portfolio.classList.remove('active');
});

portfolio.addEventListener('click', function(e) {
	home.classList.remove('active');
	about.classList.remove('active');
	portfolio.classList.add('active');
});

// Colorized active section

// Change text menu on hover

navbarText.addEventListener('mouseover', function() {
	if (home.innerHTML === '<span>USE</span>') {
		revealMenu();
	}
});

function revealMenu(completed) {
	home.innerHTML = '<span>UPS...</span>';
	setTimeout(function() {
		about.innerHTML = '<span>LET ME</span>';
	}, 500);
	setTimeout(function() {
		portfolio.innerHTML = '<span>FIX IT😬</span>';
	}, 1000);

	completed = true;
	setTimeout(function() {
		changeMenu(completed);
	}, 2000);
}
function changeMenu(completed) {
	if (completed === true) {
		navbarText.classList.add('opacity0');
		setTimeout(function() {
			home.innerHTML = '<span>01.</span>';
			about.innerHTML = '<span>02.</span>';
			portfolio.innerHTML = '<span>03.</span>';
			console.log('Menu changed');
		}, 500);
		setTimeout(function() {
			navbarText.classList.add('opacity100');
		}, 1000);
	}
}

// Change text menu on hover

// Shake identity and remove the last char.

let RemovedChars = [];

function RecoverAndRemove(e) {
	let idText = [];
	let lastPosition = 0;
	let lastWord = '';

	for (let i = 0; i < identity.innerText.length; i++) {
		idText.push(identity.innerText[i]);
		if (lastPosition < i) {
			lastPosition = i;
		}
	}
	lastWord = idText[lastPosition];

	if (e.keyCode === 37) {
		if (siteTitle.innerText.length > 0) {
			idText.splice(-1);
			siteTitle.innerHTML = `<h1>${idText.join('')}</h1>`;
			identity.classList.add('shake');
			setTimeout(function() {
				identity.classList.remove('shake');
			}, 500);
			RemovedChars.push(lastWord);
		}
		if (siteTitle.innerText.length === 0) {
			RemovedChars.length = 0;
			alertMessage.innerText = 'I\'ll restore it for you 😉.';
			siteTitle.innerHTML = `<h1>Mauricio&nbsp;J.&nbsp;Monta</h1>`;
			showAlert('error');
		}
	}

	if (e.keyCode === 39) {
		idText.push(RemovedChars[RemovedChars.length - 1]);
		RemovedChars.splice(-1);
		siteTitle.innerHTML = `<h1>${idText.join('')}</h1>`;
		identity.classList.add('shake');
		setTimeout(function() {
			identity.classList.remove('shake');
		}, 500);
	}
}

document.addEventListener('keydown', function(e) {
	if (e.keyCode === 37 || e.keyCode === 39) {
		RecoverAndRemove(e);
	}
});

// Shake identity and remove the last char.

// HESOYAM cheat code

let cheatCode = [];

function cheat(e) {
	let lastKey = e.key;
	cheatCode.push(lastKey.toUpperCase());

	if (cheatCode.join('') === 'HESOYAM') {
		console.log('HESOYAM');
		alertMessage.innerText = '+ $250.000';
		showAlert('success');
	}

	setTimeout(function() {
		cheatCode.length = 0;
		console.log('cheat code cleared');
	}, 5000);

	console.log(cheatCode);
}

document.addEventListener('keydown', function(e) {
	cheat(e);
});
