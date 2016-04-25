


function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = run;
}
window.onload = init;

function toma(fname,lname,department) {
	this.fname = fname;
	this.lname = lname;
	this.department = department;
	this.changeFname = function (fname){
		this.fname = fname;
	};
}
var bank = new Array;

function run(){
	'use script';
var arr =[];

var fn = document.getElementById("fname").value;	
var ln = document.getElementById("dept").value;
var dept = document.getElementById("dept").value;	
	
var person = new toma(fn,ln,dept);	
	
arr.push(person);
bank.push(person);
window.alert(arr.length);
window.alert(bank.length);
}