// You're playing a game with a friend called "Target and Vicinity". One person thinks up a number in their head, and the other makes a guess.

// To estimate proximity of the guess to the actual number, we use the concept of "targets" and "vicinities". Targets are digits in the guess that have the same value of the digit in actual with the same position. Here's an example of two "targets":

// Vicinities are digits in guess that have the same value as some digit in actual, but don't share the same position.

// Person 1 has to tell person 2 how many targets and vicinities there are by providing a string in this format.


// `${number of targets}T${number of vicinities}V"

// Actual:  "345"
// Guess:   "135"

// "1T1V"

// Actual:  "45624"
// Guess:   "24325"

// "1T2V"

// You're given two strings, an actual and a guess. Write a function to return the number of targets and vicinities.

// function getTV(actual, guess) {
//   let targets = 0, vicinities = 0, done = [...actual];
//   for (let i = 0; i < guess.length; i++) {
//     if (guess[i] === actual[i]) {  // exact match
//       targets++;
//       done[i] = '_';
//     } else {  // we check for vicinities
//       let index = done.findIndex(val => val === guess[i]);
//       if (index !== -1) {
//         vicinities++;
//         done[i] = "_";
//       }
//     }
//   }
//   return `${targets}T${vicinities}V`;
// }

function getTV(actual, guess) {
	let targets = 0;
	let vicinities = 0;

  // this is just filling up the num array with 0s
	let num = [];
	for (let i = 0; i < 10; i++) {
		num[i] = 0;
	}

	for (let pos in guess) {
		let actualChar = actual[pos];
		let guessChar = guess[pos];
		if (guessChar == actual[pos]) {
			targets++;
		} else {
			if (num[actualChar] < 0) vicinities++;    
			if (num[guessChar] > 0) vicinities++;
			num[actualChar]++;
      num[guessChar]--;
		}
    console.log(num);
    console.log(targets, vicinities);
	}

	return `${targets}T${vicinities}V`;
}

console.log(getTV('345', '135'));
// console.log(getTV('45624', '24325'));