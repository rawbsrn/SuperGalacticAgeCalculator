import Person from '../src/person.js';

describe ('Person', () => {
  test ('should return Person function', () => {
    let person = new Person ("");
    expect(person.name).toEqual("");
    expect(person.age).toEqual(0);
  });
});