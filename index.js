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



const imageInfo = {
  url: img.src,
  height: img.scrollHeight,
  width: img.scrollWidth,
};
console.log("Image Info:", imageInfo);


// 6. How many ingredients has the paste?

const ingredientsContainer = document.querySelector(".ingredients-list-paste");

const ingredients =ingredientsContainer.childElementCount;

console.log(`There is ${ingredients} ingredients in the paste`);

// 7. Which is the forth element in the list containing the ingredients for the paste?

const forthIngredient= ingredientsContainer.children[3];


console.log(`The forth ingredient is ${forthIngredient.textContent}`);
 

// 8. Create an an array of objects from the instructions. Each element in the array 
// should be an object that looks like this:

// ```js
// {
//   order: number;
//   text: instruction;
// }
// ```
  

const instructionsList = document.querySelectorAll(".instructions-list li");
const instructionsArray = [];

instructionsList.forEach((item, index)=> {
  
  instructionsArray.push({
    order: index +1,
    text:item.innerText
  });
});

console.log("InstructionArray:", instructionsArray);
 