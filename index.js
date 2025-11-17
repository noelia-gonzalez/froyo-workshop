//use a function to keep the counting of frequencies of elements in an array
const trackFroyoFlavors = () => {
  //prompt the user for froyo flavors with them being separated by commas
  const userInput = prompt(
    `Please enter a list of froyo flavors, separated by commas:`
  );
  //split user input string into an array of strings
  const froyoFlavors = userInput.split(",");
  //.map creates a new array, .trim takes out unneccessary spaces(i looked this up)
  const newFlavors = froyoFlavors.map((froyo) => froyo.trim());
  //use an object to keep count of how many orders there are of each flavor
  const userFroyoCount = {};
  //use loop to iterate through the array of flavors
  for (const key in newFlavors) {
    const flavor = newFlavors[key];

    if (userFroyoCount[flavor]) {
      userFroyoCount[flavor] += 1;
    } else {
      userFroyoCount[flavor] = 1;
    }
  }
  console.log(userFroyoCount);
};

trackFroyoFlavors();

/* NOTE:
Variables and functions should have meaningful names. 
Console outputs should change depending on the user's input

USE THIS TO TEST: vanilla, vanilla, vanilla, strawberry, coffee, coffee
*/
