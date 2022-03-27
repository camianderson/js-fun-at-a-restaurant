
function nameMenuItem(name) {
  makeNameDelicious = "Delicious " + name;
  return makeNameDelicious;
}


function createMenuItem(itemName, itemPrice, itemType){
      menuItem = {
        name: itemName,
        price: itemPrice,
        type: itemType
  }
  return menuItem;
}


function addIngredients(ingredient, ingredients){
  if (ingredients.includes(ingredient)){ //ingredients.includes is comparing ingredient(the parameter) to each value of the array
    return ingredients;
  } else {
    ingredients.push(ingredient);
      return ingredients;
  }
}

function formatPrice(initialPrice){
  formattedPrice = "$" + initialPrice;
  return formattedPrice;
}


function decreasePrice (parameter){
  less10percent = parameter * .9;
  return less10percent;
}


function createRecipe (title, ingredients, menuItemType){
  addRecipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
  return addRecipe;

}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
