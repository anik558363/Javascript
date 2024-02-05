// abul vai biye korbe. per bus 50, per car 11, rikshaw per person 70 


var people = 213;

var carPeople = people % 50;
var rikshawPeople = carPeople % 11;
var totalVara = rikshawPeople * 70;



console.log(totalVara);