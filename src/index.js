import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Person from './person.js';

$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    const age = $('#age').val();
    const name = $('#name').val();
    const expectancy = $('#expectancy').val();
    const planet = $('#planet').val();
    const person = new Person(name);
    switch (planet) {
      case ("Mercury"):
        person.calcMercury(person.getAge(age));
        break;
      case ("Venus"):
        person.calcVenus(person.getAge(age));
        break;
      case ("Mars"):
        person.calcMars(person.getAge(age));
        break;
      case ("Jupiter"):
        person.calcJupiter(person.getAge(age));
        break;
      default:
        person.getAge(age);
    }
    const response = person.calcExpectancy(person.age,person.lifeExpectancy(expectancy));
    $('#response').append("<p>" + response + " , " + name + "</p>");
  });
});