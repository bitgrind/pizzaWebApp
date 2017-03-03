//Business Logic
function Pizza(toppings,size){
  this.toppings = toppings;
  this.size = size;
}

function Order(customer, delievery, pizza){
  this.customer = customer;
  this.delieveryType = delievery;
  this.pizza = pizza;
}

Pizza.prototype.cost = function(order){
  var order = order;
  var customer = order.customer;
  var delievery = order.delievery;
  var pizza = order.pizza;
  var pizzaSize = order.pizza.size[1];
  var pizzaToppings = order.pizza.toppings;
  var cost;

  pizzaToppings.forEach(function(){
    cost
  });

  console.log(pizzaToppings);


  return cost;
}

Pizza.prototype.waitTime = function(order){
  var order = order;
  var waitTime;

  return waitTime;
}

//Varibles
//Static
var pizzaSize = [["personal", "8 inch"],["medium", "12 inch"],["large", "16 inch"],["party", "20 inch"]];
var delieveryType = ["pickup","delievery","in-store"];
var cheeseToppings = ["cheddar","mozzarella","provolone","parmesan"]
var meatToppings = ["cheese","perperoni","canadianBacon","bacon","chicken"]
var veggieToppings = ["blackOlives","greenOlives","greenPeppers","redPeppers","jalapenos","greenOnion","redOnion","mushrooms","pepperoncini","tomatoes","pineapple"]

//Dynamtic
var newCustomer = "Keith";
//arguments: toppings,size,price
var newPizza = new Pizza([["cheddar"],["sausage"],["greenOlives","blackOlives"]],pizzaSize[1]);
//arguments: customer, delievery, pizza
var newOrder = new Order("Keith",delieveryType[0],newPizza);
var newPizzaDelieveryType;
var newPizzaSize;

//User Logic
$(function(){

});
