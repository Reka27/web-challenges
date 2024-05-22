console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((item) => item.id === "2");

const allCardsWith3Tags = cards.filter((item) => item.tags.length == 3);

const allCardsThatAreNotBookmarked = cards.filter(
  (item) => item.isBookmarked == false
);

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((item) => {
  /* return (
    (item.tags.includes("HTML") || item.tags.includes("JS")) &&
    item.isBookmarked == true
  );*/
  return (
    (item.tags.includes("html") || item.tags.includes("js")) &&
    item.isBookmarked == true
  );
});
console.log(allCardsWithTagsHTMLOrJSThatAreBookmarked);

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
