var candy = Math.floor(Math.random() * 9); //assign random num between 0-8
var techSergeant = Math.floor(Math.random() * 9);
var techSergeant2 = Math.floor(Math.random() * 9);
var tries = 3 //adjusts amount of attempts

// makes sure candy and techSergeant can't be in the same spot
while (candy === techSergeant) {
    techSergeant = Math.floor(Math.random() * 9);
}

while (techSergeant === techSergeant2) {
    techSergeant2 = Math.floor(Math.random() * 9);
}

while (candy === techSergeant2) {
    techSergeant2 = Math.floor(Math.random() * 9);
}

var treasure = (location) => {
    if (tries !== 0) {
        if (location === candy) {
            document.getElementById(location).innerHTML = 'ð«';
            document.getElementById('alert').innerHTML = 'ð«ð«ð«You found the candy!ð«ð«ð«';
            tries = 0
        } else if (location === techSergeant) {
            document.getElementById(location).innerHTML = 'ð';
            document.getElementById('alert').innerHTML = 'ðYou found the Tech Sergeant, that\'s game over!ð';
            document.getElementById(candy).innerHTML = 'ð«';
            document.getElementById(techSergeant2).innerHTML = 'ð';
            tries = 0
        } else if (location === techSergeant2) {
            document.getElementById(location).innerHTML = 'ð';
            document.getElementById('alert').innerHTML = 'ðYou found the Tech Sergeant, that\'s game over!ð';
            document.getElementById(candy).innerHTML = 'ð«';
            document.getElementById(techSergeant).innerHTML = 'ð';
            tries = 0
        } else {
            document.getElementById(location).innerHTML = 'â';
            tries -= 1
            if (tries > 1) {
                document.getElementById('alert').innerHTML = `You have ${tries} more tries left.`;
            } else if (tries === 1) {
                document.getElementById('alert').innerHTML = `Last try, make it count!`;
            } else {
                document.getElementById('alert').innerHTML = 'You\'re out of tries, better luck next time!';
                document.getElementById(candy).innerHTML = 'ð«';
                document.getElementById(techSergeant).innerHTML = 'ð';
                document.getElementById(techSergeant2).innerHTML = 'ð';
            }
        }
    }
}