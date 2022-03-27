
function takeOrder (deliveryOrder, deliveryOrders){
  if (deliveryOrders.length >= 3){
    return deliveryOrders;
  } else{
  deliveryOrders.push(deliveryOrder);
    return deliveryOrders;
  }
}

function refundOrder (deliveryOrderNumber, deliveryOrders){
for (var i = 0; i < deliveryOrders.length; i++){
    if(deliveryOrders[i].orderNumber === deliveryOrderNumber) {
      deliveryOrders.splice(i,1);
    }
  }
  return deliveryOrders;
}

function listItems (orders){
  var items = [];
  for (var i = 0; i < orders.length; i++) {
    items.push(orders[i].item);
  }
  items = items.join(", ");
  return items;
}

function searchOrder(orders, item) {
  // Converts all item key value into a single array using the map function
  items = orders.map(value => value.item);
  // Returns true or false if the item in question exists in the items list
  return items.includes(item);
  //includes is a function that searches an array for a specific item.
}

module.exports = {
   takeOrder,
   refundOrder,
   listItems,
  searchOrder
}
