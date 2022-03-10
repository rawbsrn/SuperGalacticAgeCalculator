import Person from '../src/person.js';

describe ('Person', () => {
  test ('should return Person function', () => {
    let person = new Person ("");
    expect(person.name).toEqual("");
    expect(person.age).toEqual(0);
  });
});

describe ('getAge', () => {
  test ('should take a persons age as an input and return that value', () => {
    let person = new Person ("");
    person.getAge(100);
    expect(person.name).toEqual("");
    expect(person.age).toEqual(100);
  });
});

describe ('calcMercury', () => {
  test ('should take a persons age as an input and return their age in Mercury years', () => {
    let person = new Person ("");
    person.getAge(100);
    person.calcMercury(person.age);
    expect(person.name).toEqual("");
    expect(person.age).toEqual(416);
  });
});
