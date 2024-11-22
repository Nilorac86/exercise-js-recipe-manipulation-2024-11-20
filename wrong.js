// 1. The logo text of the site has the wrong color. Change it to the correct one.

const logoText = document.querySelector(".logo-text");
logoText.style.color = "#384241";

// 2. The alignment of the elements inside the header element are wrong. 
// Change it to the correct one. `Hint`, check the flex properties for 
// the correct alignment. Here is a link that might help:
// https://css-tricks.com/snippets/css/a-guide-to-flexbox/


logoText.parentElement.style.justifyContent = "flex-start";


// 3. The header has a border at the bottom, but it has the wrong color. 
// Change it do the correct one.

logoText.parentElement.style.borderBottom = "1px solid lightgray";

// 4. The recipe name is wrong, change it to the correct one.

const recipeName = document.querySelector("#recipe-name");
recipeName.innerText = "Frozen Cheescake";


// 5. The clock icon beneath the recipe name has disappeared and been replaced by 
// a text instead. This can be fixed by adding a class to that element.

const timerClock = document.querySelector(".time-container");
timerClock.firstElementChild.classList.add ("material-icons");

// 6. The estimated time of the recipe is also incorrect. Change it to the 
// correct time estimation.

const time = document.querySelector(".time");
time.innerText = "60+ min";

// 7. The src path to the image is wrong, or atleast it's showing the wrong image. 
// Change it to the correct one. The available images can be found in the assets folder.

const recipeImage = document.querySelector(".image-container");
recipeImage.src = "assets/frozen-cheesecake-slice.jpg";

// 8. The background color of the ingredients list container is wrong. Fix it.

const ingredientContainer =document.querySelector(".ingredients-container");

ingredientContainer.style.backgroundColor = "#f9f9f9";

// 9. The ingredients are divided in to two parts, one for the bottom and one 
// for the paste. In the list of the ingredients to the bottom, there is a text 
// instead of two list items. Remove the text and add those two list items.

const ingredientListBottom = document.querySelector(".ingredients-list-bottom");

ingredientListBottom.removeChild(ingredientListBottom.firstElementChild);
ingredientListBottom.innerHTML = `<li>15st digistivetex</li> <li>Lite smör</li>`;

// 10. The third ingredient in the list of ingredients to the paste is wrong. 
// Change that specific ingredient to the correct one.

const ingredientListPaste = document.querySelectorAll(".ingredients-list-paste li");

ingredientListPaste[2].innerText = "3tsk vaniljsocker";


// 11. There is also a missing ingredient in the list of ingredients to the paste. 
// Look and see what it is and add that one the the end of the list.

const updatedList= document.querySelector(".ingredients-list-paste")
const newIngredient = document.createElement("li");

newIngredient.innerText = "400g naturell philadelphiaost"; 
updatedList.appendChild(newIngredient);

// 12. The text "Instructions" to the left, beneath the image, has some shadow styling 
// applied to it. Remove that styling.

const instruction = document.querySelector(".instructions");
instruction.style.boxShadow = "none";

// 13. Two list elements of the list of instructions are incorrect. Find them and 
// change them to the correct ones.

const instructionList = document.querySelectorAll(".instructions-list li");

instructionList[1].textContent = 
`Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, 
äggulorna i en liten bunke.`;

instructionList[8].textContent = "Ställ in i frysen över natten.";

