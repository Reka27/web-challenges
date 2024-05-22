console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const newArticle = document.createElement("article");
newArticle.classList.add("post");
document.body.append(newArticle);

const newPost = document.createElement("p");
newPost.classList.add("post__content");
newPost.textContent = "Here is my new comment";
newArticle.append(newPost);

const newFooter = document.createElement("footer");
newFooter.classList.add("post__footer");
newArticle.append(newFooter);

const newUsername = document.createElement("username");
newUsername.classList.add("post__username");
newUsername.textContent = "@username";
newFooter.append(newUsername);

const newButton = document.createElement("button");
newButton.classList.add("post__button");
newButton.textContent = "♥ Like";
newFooter.append(newButton);
newButton.addEventListener("click", (event) => {
  event.preventDefault();
  handleLikeButtonClick(event);
});
