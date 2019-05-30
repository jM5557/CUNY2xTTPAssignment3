// index.html

if (document.getElementById('msg-wrapper')) {

	let btnOne = document.getElementById('btn-one');
	let btnTwo = document.getElementById('btn-two');

	let msgWrapper = document.getElementById('msg-wrapper');
	let timer;

	let sayPhrase = function (t, phrase) {

		clearTimeout(timer);

		btnOne.disabled = true;
		btnTwo.disabled = true;

		if (btnOne.id == t.id) {

			btnTwo.style.opacity = 0.45;
			msgWrapper.style.color = "red";

		} else {

			btnOne.style.opacity = 0.45;
			msgWrapper.style.color = "blue";

		}

		msgWrapper.innerHTML = phrase;

		timer = setTimeout(function () {
			
			btnOne.disabled = false;
			btnTwo.disabled = false;

			btnOne.style.opacity = 1;
			btnTwo.style.opacity = 1;

			msgWrapper.innerHTML = "";

		}, 2000);

	}

	btnOne.addEventListener('click', function () {

		sayPhrase(this, "I'm right");

	});

	btnTwo.addEventListener('click', function () {

		sayPhrase(this, "No, I'm right!");

	});

}


// hover.html

if (document.getElementById('hover-container')) {

	let hoverCont = document.getElementById('hover-container');

	hoverCont.addEventListener('mouseover', function () {

		alert('Hey I told you not to hover over me!');

	});

}


if (document.getElementById('form-wrapper')) {

	let username = document.getElementsByName("username")[0];
	let email = document.getElementsByName("emailaddress")[0];
	let password = document.getElementsByName("password")[0];

	let submitBtn = document.getElementById("submit-btn");
	let logoutBtn = document.getElementById("logout-btn");

	let loggedInAccount = {};



	let signOut = function () {

		document.getElementById('header').innerHTML = "Log In";

		document.getElementById('form-wrapper').style.display = "block";
		document.getElementById('success-container').style.display = "none";

		loggedInAccount = {};

	}

	let signIn = function () {

		document.getElementById('header').innerHTML = username.value + " Page";

		document.getElementById('form-wrapper').style.display = "none";
		document.getElementById('success-container').style.display = "block";

		document.getElementById('details-container').innerHTML = "<h2>" + email.value + "</h2>";

		username.value = "";
		password.value = "";
		email.value = "";

		loggedInAccount = {

			username: username.value,
			email: username.value

		};

	}

	submitBtn.addEventListener('click', function (e) {
		
		e.preventDefault();

		if (username.value.length < 1
			|| email.value.length < 1
			|| password.value.length < 1) {

			alert('Enter all required fields');
			return;

		}

		if (password.value != 12345678) {

			alert('You have the wrong password');

		}

		else {

			signIn();

		}

	});


	logoutBtn.addEventListener("click", function () {

		signOut();

	});

}


if (document.getElementById('circle-form-wrapper')) {

	let radius = document.getElementById("radius");

	let submitBtn = document.getElementById("submit-btn");

	let getVolume = function () {

		// Volume of a Sphere: (4/3) * (pi * r^3)
		let volume = (4/3) * (Math.PI * Math.pow(radius.value, 3));

		document.getElementById('result').innerHTML = "<h2> Volume </h2>" + volume;

	}

	submitBtn.addEventListener('click', function (e) {

		e.preventDefault();

		getVolume();

	})

}