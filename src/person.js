export default class Person {
  constructor(name) {
  this.name = name;
  this.age = 0;
}

getAge(age) {
return this.age = parseInt(age);
}

calcMercury(age) {
  return this.age = (parseInt(age) / .24);
}

calcVenus(age) {
  return this.age = (parseInt(age) / .62);
}

calcMars(age) {
  return this.age = (parseInt(age) / 1.88);
}

calcJupiter(age) {
  return this.age = (parseInt(age) / 11.86);
}

lifeExpectancy(life) {
  return this.life = parseInt(life);
}

calcExpectancy(age,life) {
  if (parseInt(life) - parseInt(age) < 0) {
    return (-1 * (parseInt(life) - parseInt(age))); //years lived past expectancy
  } else {
    return (parseInt(life) - parseInt(age)); //years to go before expectancy
  }
}

}