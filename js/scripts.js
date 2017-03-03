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
  var pizza = order.pizza;
  var customer = order.customer;
  var delievery = order.delieveryType;
  var pizzaSize = order.pizza.size[1];
  var pizzaToppings = order.pizza.toppings;
  var cost = 0;

  pizzaToppings.forEach(function(elem,i){
    elem.forEach(function(e,k){
      //cheese toppings: if more than 1 then add $1.50 for each cheese topping after the first
      if(i==0 && k > 0){
        cost += 1.5;
      }
      //meat toppings: add $2 for each meat topping
      if(i==1 && k >= 0){
        cost += 2;
      }
      //Veggie toppings: add a dollar for each veggie topping
      if(i==2 && k >= 0){
        cost += 1;
      }
    });
  });

  //adding to cost dependant on size of Pizza
  if(pizzaSize == "8 inch"){
    cost += 5;
  } else if(pizzaSize == "12 inch"){
    cost += 7.5;
  } else if(pizzaSize == "16 inch"){
    cost += 12;
  } else if(pizzaSize == "20 inch"){
    cost += 20;
  }

  //add $3 for delievery
  if(delievery == "delievery"){
    cost += 3;
  }

  return cost;
}

Pizza.prototype.waitTime = function(order){
  var order = order;
  var pizzaSize = order.pizza.size[1];
  var delieveryType = order.delieveryType;
  var pizzaToppings = order.pizza.toppings;
  var waitTime = 0;

  //cooking time dependant on pizza size
  if(pizzaSize == "8 inch"){
    waitTime += 8;
  } else if(pizzaSize == "12 inch"){
    waitTime += 12;
  } else if(pizzaSize == "16 inch"){
    waitTime += 16;
  } else if(pizzaSize == "20 inch"){
    waitTime += 25;
  }

  //add a min for each topping
  pizzaToppings.forEach(function(elem){
    elem.forEach(function(){
        waitTime += 1;
        console.log('adding a minute for topping');
    });
  });

  if(delieveryType == "delievery"){
    waitTime += 15;
  }

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
var newPizza = new Pizza([["cheddar","mozzarella"],["sausage"],["greenOlives","blackOlives"]],pizzaSize[1]);
//arguments: customer, delievery, pizza
var newOrder = new Order("Keith",delieveryType[1],newPizza);

//User Logic
$(function(){

});
