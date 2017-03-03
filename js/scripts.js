//Business Logic
function Pizza(toppings,size,price){
  this.toppings = toppings;
  this.size = size;
  this.price = price;
}

function Order(delieveryMethod, pizza){
  this.delieveryType = delieveryMethod;
  this.pizza = delieveryMethod;
}

Pizza.prototype.cost = function(pizza){
  this.pizza = pizza;

  var cost;

  return cost;
}

Pizza.prototype.waitTime = function(order){
  this.pizza = pizza;

  var waitTime;

  return waitTime;
}

//Varibles
var newOrder = new Order();
var newPizza = new Pizza();
var delieveryType;
var pizzaSize;
var pizzaTopping = [];


//User Logic
$(function(){
  console.log('js is a go');
});
