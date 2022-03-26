



function createRestaurant(restaurantName){
  restaurant = {
    name: restaurantName,
    menus: {
        breakfast: [],
        lunch: [],
        dinner: [],
    },
  }
  return restaurant;
};


function addMenuItem(restaurant,item){
  if(item.type === "breakfast"){
    if(!restaurant.menus.breakfast.includes(item)){
      restaurant.menus.breakfast.push(item)
      }
    }else if(item.type === "lunch"){
      if(!restaurant.menus.lunch.includes(item)){
        restaurant.menus.lunch.push(item)
        }
    }else{
      if(!restaurant.menus.dinner.includes(item)){
        restaurant.menus.dinner.push(item)
          }
      }
}

function removeMenuItem(restaurant, itemName, itemType){
  if(itemType === 'breakfast'){
    menuItems = restaurant.menus.breakfast.map(value => value.name)
    if(menuItems.includes(itemName)){
      for (var i = 0; i < restaurant.menus.breakfast.length; i++){
        if (restaurant.menus.breakfast[i].name === itemName){
          restaurant.menus.breakfast.splice(i,1)
          var result = "No one is eating our "+itemName+" - it has been removed from the "+itemType+" menu!"
          return result
        }
      }
    }
    else {
      return "Sorry, we don't sell "+itemName+", try adding a new recipe!"
    }
  } else if (itemType === 'lunch'){
    menuItems = restaurant.menus.lunch.map(value => value.name)
    if(menuItems.includes(itemName)){
      for (var i = 0; i < restaurant.menus.lunch.length; i++){
        if (restaurant.menus.lunch[i].name === itemName){
          restaurant.menus.lunch.splice(i,1)
          var result = "No one is eating our "+itemName+" - it has been removed from the "+itemType+" menu!"
          return result
        }
      }
    }
    else{
      return "Sorry, we don't sell "+itemName+", try adding a new recipe!"
    }
  } else {
    menuItems = restaurant.menus.dinner.map(value => value.name)
    if(menuItems.includes(itemName)){
      for (var i = 0; i < restaurant.menus.dinner.length; i++){
        if (restaurant.menus.dinner[i].name === itemName){
          restaurant.menus.dinner.splice(i,1)
          var result = "No one is eating our "+itemName+" - it has been removed from the "+itemType+" menu!"
          return result
        }
      }
    }
  else{
    return "Sorry, we don't sell "+itemName+", try adding a new recipe!"
    }
  }
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
