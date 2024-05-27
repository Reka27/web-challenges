export function getAnimal(animals) {
  if (typeof animals === "string") {
    if (animals === "cats") {
      return "I totally love cats!";
    } else {
      return `I like ${animals}!`;
    }
  } else {
    return "I do not like animals at all!";
  }
}
