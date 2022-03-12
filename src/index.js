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
    const person = new Person(name);
    const response = person.calcExpectancy(person.getAge(age),person.lifeExpectancy(expectancy));
    $('#response').append("<p>" + response + " " + "years" + "</p>");
  });
});