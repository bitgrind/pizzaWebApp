//Business Logic
function pizza(toppings,size,price){
  this.toppings = toppings;
  this.size = size;
  this.price = price;
}

function order(delieveryMethod, pizza){
  this.delieveryType = delieveryMethod;
  this.pizza = delieveryMethod;
}

pizza.prototype.cost = function(pizza){
  this.pizza = pizza;

  var cost;

  return cost;
}

pizza.prototype.waitTime = function(order){
  this.pizza = pizza;

  var waitTime;

  return waitTime;
}

//Varibles
//Static
var pizzaSize = [["personal", "8 inch"],["medium", "12 inch"],["large", "16 inch"],["party", "20 inch"]];
var cheeseToppings = ["cheddar","mozzarella","provolone","parmesan"]
var meatToppings = ["cheese","perperoni","canadianBacon","bacon","chicken"]
var veggieToppings = ["olives","greenOlives","greenPeppers","redPeppers","jalapenos","greenOnion","redOnion","mushrooms","pepperoncini","tomatoes","pineapple"]

//Dynamtic
var newPizzaOrder = new order();
var newPizza = new pizza();
var newPizzaDelieveryType;
var newPizzaSize;
var newPizzaTopping = [];

//User Logic
$(function(){

});
