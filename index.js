let convertType = 'miles';
		let heading = document.querySelector('h1');
		let intro = document.querySelector('p');
		var answer = document.getElementById('answer');
		let form = document.getElementById('convert');

		document.addEventListener('keydown', function (event) {
			let key = event.code;

			if (key === 'KeyK') {
				convertType = 'kilometers';
				heading.innerHTML = 'Kilometers to Miles Converter';
				intro.innerHTML = 'Type in a number of kilometers';
			} else if (key === 'KeyM') {
				convertType = 'miles';
				heading.innerHTML = 'Miles to Kilometers Converter';
				intro.innerHTML = 'Type in a number of miles';
			}
		})

		form.addEventListener('submit', function (event) {
			event.preventDefault();

			let distance = parseFloat(document.getElementById('distance').value);

			if (distance) {
				if (convertType == 'miles') {
					let converted = (distance * 1.609344).toFixed(3);
					answer.innerHTML = `${distance} miles converts to ${converted} kilometers`
				} else {
					let converted = (distance * 0.621371).toFixed(3);
					answer.innerHTML = `${distance} kilometers converts to ${converted} miles`
				}
			} else {
				answer.innerHTML = '<h2>Please provide a number!</h2>';
			}

		})