export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => `${person.firstName} ${person.lastName}`);
}

export function getNameAndAge(people) {
  return people.map((person) => ({
    person.lastName + "(" + person.age + ")"
  }));
}

export function getPeopleByAge(people, age) {
  return people.map(person.age === 38);
}

export function getPeopleNamesOlderThan(people, inputage) {
  return people.age > inputage ? people.map(person.lastName) : "";
}

export function getPeopleByLastName(people, lastName) {}

export function findPersonById(people, id) {}

export function isAnyoneOlderThan(people, age) {}

export function getFullNamesSortedByAge(people) {}
