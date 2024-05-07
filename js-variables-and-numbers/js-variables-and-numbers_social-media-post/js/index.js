console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
const title = "My Page";
const commentText = "My first comment!";
const noOfLikes = 10;
const createdBy = "Reka";
const isReported = true;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/
console.log("Page Title:", title);
console.log("Comment:", commentText);
console.log("Likes:", noOfLikes);
console.log("Author:", createdBy);
console.log("Reported:", isReported);
// --v-- write your code here --v--
const newNoOfLikes = noOfLikes + 1;
console.log("Likes:", newNoOfLikes);
// --^-- write your code here --^--
