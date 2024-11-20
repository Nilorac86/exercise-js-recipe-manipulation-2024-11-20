// 1. What is the name of the recipe?

const recipeName = document.querySelector("h1");
const nameOfCake = recipeName.innerText;

console.log(`The cakes name is ${nameOfCake}`);

// 2. What HTML tag is used to display the Recipe name?

const theTag = recipeName.tagName;

console.log(`The tag is ${theTag}`);

// 3. What is the font size of the paragraph tag with the class _"description"_.

const description = document.querySelector(".description");
const fontSize = window.getComputedStyle(description).fontSize;


console.log(`The font size is ${fontSize}`);


// 4. What is the value of the `alt` atrribute on the image?

const img = document.querySelector("img");
const alt = img.getAttribute("alt");

console.log(`The alt attribue are ${img.alt}`);



// 5. What is the dimensions and the url of the image? Create an object that looks like this, 
//and log it to the console:

const width = img.scrollWidth;
const height = img.scrollHeight;

console.log(`The height of the image is: ${height} and the width is: ${width}`);

const imageSrc = document.querySelector(".image-container img");

const imageInfo = {
    url:"image",
    height:612,
    width: 437,
};

console.log(imageInfo);


// 6. How many ingredients has the paste?


// 7. Which is the forth element in the list containing the ingredients for the paste?

// 8. Create an an array of objects from the instructions. Each element in the array 
// should be an object that looks like this:

// ```js
// {
//   order: number;
//   text: instruction;
// }
// ```