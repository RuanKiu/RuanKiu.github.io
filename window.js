//buttons and whatnot
var beatStart = document.getElementById('beat')
var padOne = document.getElementById('pad1');
var mainHeading = document.getElementById('main_heading');
var pieceLabel = document.getElementById('piecelabel');
var pieceNamePlate = document.getElementById('pieceNamePlate');
var titleNamePlate = document.getElementById('titleNamePlate');
var helpButton = document.getElementById('helpButton');
var body = document.getElementById('body');
//cursor shennanigaings
var mouseCursor = document.querySelector('.cursorMouse');
window.addEventListener('mousemove', cursor);
window.addEventListener('dblclick', function() {

	if (mouseCursor.classList.contains('clear')) {
		mouseCursor.classList.remove('clear')
		mouseCursor.classList.add('not-clear')
	}
	else {
		mouseCursor.classList.add('clear')
	}
});
function cursor(e) {
	mouseCursor.style.top = e.pageY + 'px';
	mouseCursor.style.left = e.pageX + 'px';
	if (e.clientY <= '70') {
		mouseCursor.classList.add('clear')
	} else {
		mouseCursor.classList.remove('clear')
	}	
};
//mobile stuff
window.addEventListener('mouseleave', blank);
function blank(e) {
	mouseCursor.classList.add('clear')
}
//piece name
pieceNamePlate.addEventListener('mouseover',  () => {
	mouseCursor.classList.add('hovering')
});
pieceNamePlate.addEventListener('mouseleave',  () => {
	mouseCursor.classList.remove('hovering')
});
//title
titleNamePlate.addEventListener('mouseover', () => {
	mouseCursor.classList.add('hovering')
});
titleNamePlate.addEventListener('mouseleave',  () => {
	mouseCursor.classList.remove('hovering')
});
//help 
helpButton.addEventListener('mouseover', () => {
	mouseCursor.classList.add('hovering')
});
helpButton.addEventListener('mouseleave',  () => {
	mouseCursor.classList.remove('hovering')
});


//audio and whatnot
var audioFiles = document.querySelectorAll('.music')
var startPosition = Math.floor(Math.random() * audioFiles.length)
var audioNames = [
	'Ballade No.1 in G minor - Chopin - Frank Levy (2)',
	'Etudes Op.10 - Chopin - Alfred Cortot',
	'Etudes Op.25 - Chopin - Alfred Cortot',
	'Waltz in A minor, B.150 - Chopin - Aya Higuchi (3)',
	"Salut d'amour - Elgar - Emanuel Salvador (4)",
	"Symphony No.9 'From the New World' - II. Largo - Dvorak - Barbara Schubert (5)",
	"String Quartet No.12 in F major, Op.96 'American' - I. Allegro ma non troppo - Dvorak - Musopen String Quartet (6)", 
	"String Quartet No.12 in F major, Op.96 'American' - II. Largo - Dvorak - Musopen String Quartet (6)", 
	"String Quartet No.12 in F major, Op.96 'American' - III. Molto vivace - Dvorak - Musopen String Quartet (6)", 
	"String Quartet No.12 in F major, Op.96 'American' - IV. Finale. Vivace ma non troppo - Dvorak - Musopen String Quartet (6)", 
	"Un Sospiro - Liszt - Cziffra",
	"Hungarian Rhapsody No.2 - Liszt - Jean Laforge",
	"Three Preludes - I. Allegro ben ritmato e deciso - Gershwin - Played by composer (7)",
	"Three Preludes - II. Andante con moto e poco rubato - Gershwin - Played by composer (7)",
	"Three Preludes - III. Allegro ben ritmato e deciso - Gershwin - Played by composer(7)",
	"Liebesleid - Kreisler - Emanuel Salvador",
	"Hungarian dance No.5 - Brahms - Antal Dorati, London Symphony Orchesctra",
	"Hungarian dance No.6 - Brahms - Antal Dorati, London Symphony Orchesctra",
	"Piano concerto No.1, Op.23 - Tchaikovsky - Shura Cherkassky",
	"Romeo and Juliet overture - Tchaikovsky - DuPage Symphony Orchesctra (8)",
	"Romance Op.34 No.14 'Vocalise' - Rachmaninoff - Frasse-Sombet & Jean Dubé (9)",
	"Prelude in G minor, Op.23 No.5 - Rachmaninoff - Peter Bradley-Fulgoni (10)",
	"Pictures at an Exhibition - I. Promenade I - Mussorgsky - Mikhail Arkadiev (11)",
	"Pictures at an Exhibition - II. The Gnome - Mussorgsky - Mikhail Arkadiev (11)",
	"Pictures at an Exhibition - III. Promenade II - Mussorgsky - Mikhail Arkadiev (11)",
	"Pictures at an Exhibition - IV. The Old Castle - Mussorgsky - Mikhail Arkadiev (11)",
	"Pictures at an Exhibition - V. Promenade III - Mussorgsky - Mikhail Arkadiev (11)",
	"Pictures at an Exhibition - VI. The Tuileries - Mussorgsky - Mikhail Arkadiev (11)",
	"Pictures at an Exhibition - VII. Bydlo - Mussorgsky - Mikhail Arkadiev (11)",
	"Pictures at an Exhibition - VIII. Promenade IV - Mussorgsky - Mikhail Arkadiev (11)",
	"Pictures at an Exhibition - IX. Ballet of the unhatched chicks - Mussorgsky - Mikhail Arkadiev (11)",
	"Pictures at an Exhibition - X. The two Jews - Mussorgsky - Mikhail Arkadiev (11)",
	"Pictures at an Exhibition - XII. The market at Limoges - Mussorgsky - Mikhail Arkadiev (11)",
	"Pictures at an Exhibition - XIII. Roman Catacombs - Mussorgsky - Mikhail Arkadiev (11)",
	"Pictures at an Exhibition - XIII. (Roman Catacombs) With the dead in a dead language - Mussorgsky - Mikhail Arkadiev (11)",
	"Pictures at an Exhibition - XIV. Baba Yaga - Mussorgsky - Mikhail Arkadiev (11)",
	"Pictures at an Exhibition - XV. The Heroes Gate at Kiev - Mussorgsky - Mikhail Arkadiev (11)",
	"Liebestraume, S.541 - Liszt - Martha Goldstein (12)",
	"Polonaise brillante No.2, Op.21 - Weiniawski - Franz Marszalek (13)",
	"Maple leaf rag - Joplin - Stefano Ligoratti (14)",
	"Le petit negre - Debussy - Stefano Ligoratti (15)",
	"Suite Bergamasque - III. Clair de lune - Debussy - Jacopo Salvatori (16)",
	"Arabasque No.1 - Debussy - Simone Renzi (17)",
	"Introduction et rondo capriccioso, Op.28 - Saint-Saens - Elias Goldstein (18)",
	"Le carnaval des animaux - XIII. Le Cygne - Saint-Saens -  Stefano Ligoratti and Matilda Colliard (19)",
	"Reminiscences of New York, Book 1 - I. Overture - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 1 - II. Subway Ragtime - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 1 - III. Nocturne - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 1 - IV. The Street Entertainer and the Homeless - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 1 - V. Canzione - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 1 - VI. Ice Cream Truck - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 1 - VII. Valse Triste - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 1 - VIII. Coffe Bear - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 1 - IX. Sunny Riverside - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 1 - X. China Town Scherzo - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 1 - XI. Farewell - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 1 - XII. Finale - Shuwen Zhang - Played by composer (20)",

];
var pieceLabel = document.getElementById('piecelabel')
//functions and whatnot
pieceNamePlate.addEventListener('click', function() {
	for(i=0; i<audioFiles.length; i++) {
		audioFiles[i].pause()
		audioFiles[i].currentTime = 0
	}
	var randomPosition = Math.floor(Math.random() * audioFiles.length)
	pieceLabel.innerHTML = audioNames[randomPosition]
	var randomPiece = audioFiles[randomPosition]
	//time for the stop button instance!!!!
	beatStart.currentTime = 0
	beatStart.play()
	randomPiece.play()
	console.log(randomPiece)
});

titleNamePlate.addEventListener('click', function() {
	beatStart.play()
	window.open('attributions.html')
});
helpButton.addEventListener('click', function() {
	beatStart.play()
	window.open('help.html')
});
for(i=0; i<audioFiles.length; i++) {
	audioFiles[i].pause()
	audioFiles[i].currentTime = 0
	audioFiles[i].addEventListener('ended', function() {
		pieceLabel.style.animation = 'grow 0.5s'
		var randomPosition = Math.floor(Math.random() * audioFiles.length)
		var nextRandomPiece = audioFiles[randomPosition]
		nextRandomPiece.play()
		pieceLabel.innerHTML = audioNames[randomPosition]
		console.log(nextRandomPiece)

	});	
};

//audio shennagigains


//universal console testing

console.log(audioFiles.length)
console.log(audioNames.length)
