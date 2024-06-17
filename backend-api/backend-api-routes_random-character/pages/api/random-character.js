import { Chance } from "chance";
export default function handler(request, response) {
  const chance = new Chance();
  // example character object with random values
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    gender: chance.gender(),
    twitterName: chance.twitter(),
    geohash: chance.geohash(),
    // ... some more keys here ...
  };
  response.status(200).json(character);
}
