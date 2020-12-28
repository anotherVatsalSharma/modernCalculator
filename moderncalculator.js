alert('Please note : This is a very simple form of the Modern Day Calculator. You can only use one operator at once. Example: to perform "a + b + c", you need to do "a + b" = x(say) and then "x + c".');
alert('Using more than one operator at once can produce unexpected results.');

function numo() {
	document.getElementById('display').innerHTML += '1';
}
function numt() {
	document.getElementById('display').innerHTML += '2';
}
function numth() {
	document.getElementById('display').innerHTML += '3';
}
function numf() {
	document.getElementById('display').innerHTML += '4';
}
function numfi() {
	document.getElementById('display').innerHTML += '5';
}
function nums() {
	document.getElementById('display').innerHTML += '6';
}
function numse() {
	document.getElementById('display').innerHTML += '7';
}
function nume() {
	document.getElementById('display').innerHTML += '8';
}
function numn() {
	document.getElementById('display').innerHTML += '9';
}
function numz() {
	document.getElementById('display').innerHTML += '0';
}
function clr() {
	document.getElementById('display').innerHTML = '';
}

var x;
var num1;

function add() {
	if (typeof num1 == 'undefined') {
		num1 = document.getElementById('display').innerHTML;
		num1 = parseInt(num1);
		x = 1;
		document.getElementById('display').innerHTML = '';
	} else if (typeof num1 !== 'undefined') {
		x = 1;
	}
}
function subrt() {
	if (typeof num1 == 'undefined') {
		num1 = document.getElementById('display').innerHTML;
		num1 = parseInt(num1);
		x = 2;
		document.getElementById('display').innerHTML = '';
	} else if (typeof num1 !== 'undefined') {
		x = 2;
	}
}
function mult() {
	if (typeof num1 == 'undefined') {
		num1 = document.getElementById('display').innerHTML;
		num1 = parseInt(num1);
		x = 3;
		document.getElementById('display').innerHTML = '';
	} else if (typeof num1 !== 'undefined') {
		x = 3;
	}
}
function dvd() {
	if (typeof num1 == 'undefined') {
		num1 = document.getElementById('display').innerHTML;
		num1 = parseInt(num1);
		x = 4;
		document.getElementById('display').innerHTML = '';
	} else if (typeof num1 !== 'undefined') {
		x = 4;
	}
}

var num2;

function result() {
	num2 = document.getElementById('display').innerHTML;
	num2 = parseInt(num2);
	var result;
	if (x == 1) {
		result = num1 + num2;
		document.getElementById('hist').innerHTML += '<br>';
		document.getElementById('hist').innerHTML += 'You requested : ' + num1 + ' + ' + num2;
		document.getElementById('hist').innerHTML += '<br>';
		document.getElementById('hist').innerHTML += 'The result : ' + result;
		document.getElementById('hist').innerHTML += '<br>';
		document.getElementById('display').innerHTML = result;

		num1 = undefined;
		num2 = undefined;

	} else if (x == 2) {
		result = num1 - num2;
		document.getElementById('hist').innerHTML += '<br>';
		document.getElementById('hist').innerHTML += 'You requested : ' + num1 + ' - ' + num2;
		document.getElementById('hist').innerHTML += '<br>';
		document.getElementById('hist').innerHTML += 'The result : ' + result;
		document.getElementById('hist').innerHTML += '<br>';
		document.getElementById('display').innerHTML = result;

		num1 = undefined;
		num2 = undefined;
	} else if (x == 3) {
		result = num1 * num2;
		document.getElementById('hist').innerHTML += '<br>';
		document.getElementById('hist').innerHTML += 'You requested : ' + num1 + ' * ' + num2;
		document.getElementById('hist').innerHTML += '<br>';
		document.getElementById('hist').innerHTML += 'The result : ' + result;
		document.getElementById('hist').innerHTML += '<br>';
		document.getElementById('display').innerHTML = result;

		num1 = undefined;
		num2 = undefined;
	} else if (x == 4) {
		result = num1 / num2;
		document.getElementById('hist').innerHTML += '<br>';
		document.getElementById('hist').innerHTML += 'You requested : ' + num1 + ' / ' + num2;
		document.getElementById('hist').innerHTML += '<br>';
		document.getElementById('hist').innerHTML += 'The result : ' + result;
		document.getElementById('hist').innerHTML += '<br>';
		document.getElementById('display').innerHTML = result;

		num1 = undefined;
		num2 = undefined;
	}
}
