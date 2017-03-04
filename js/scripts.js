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

function Customer(name,phone,street,city,state,zip){
  this.name = name;
  this.phone = phone;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
}

//order cost
Pizza.prototype.cost = function(order){
  console.log(order.pizza.size);
  var order = order;
  var pizza = order.pizza;
  var customer = order.customer;
  var delievery = order.delieveryType;
  var orderedPizzaSize = order.pizza.size;
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
  if(orderedPizzaSize == "personal"){
    cost += 5;
  } else if(orderedPizzaSize == "medium"){
    cost += 7.5;
  } else if(orderedPizzaSize == "large"){
    cost += 12;
  } else if(orderedPizzaSize == "party"){
    cost += 20;
  }

  //add $3 for delievery
  if(delievery == "delievery"){
    cost += 3;
  }

  return cost;
}

//order wait time
Pizza.prototype.waitTime = function(order){
  var order = order;
  var waitPizzaSize = order.pizza.size;
  var delieveryType = order.delieveryType;
  var pizzaToppings = order.pizza.toppings;
  var waitTime = 0;

  //cooking time dependant on pizza size
  if(waitPizzaSize == "personal"){
    waitTime += 8;
  } else if(waitPizzaSize == "medium"){
    waitTime += 12;
  } else if(waitPizzaSize == "large"){
    waitTime += 16;
  } else if(waitPizzaSize == "party"){
    waitTime += 25;
  }

  //add a min for each topping
  pizzaToppings.forEach(function(elem){
    elem.forEach(function(){
        waitTime += 1;
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

//User Logic
$(function(){
  $('.pizzaOrderingForm').submit(function(elem){
    event.preventDefault();

    $("#order-status").show(500);
    $(".pizzaOrderingForm").hide(500);

    var newCustomer = new Customer();
    var allToppings = [];
    var cheeseToppings = [];
    var meatToppings = [];
    var veggieToppings = [];
    var num = 0;
    var delieveryMethod = $('input:radio[name=deliever-type]:checked').val()
    var pizzaOrderSize = $('input:radio[name=pizzaSize]:checked').val()

    $(".order-size span").html(pizzaOrderSize);

    $('input:checkbox[name=pizzaCheese]:checked').each(function(){
      cheeseToppings[num] = $(this).val();
      num++;
    });

    num = 0;
    $('input:checkbox[name=pizzaMeat]:checked').each(function(){
      meatToppings[num] = $(this).val();
      num++;
    });
    allToppings[0] = cheeseToppings;
    allToppings[1] = meatToppings;
    // allToppings[2] = veggieToppings;

    var newPizza = new Pizza(allToppings, pizzaOrderSize);
    var newOrder = new Order(newCustomer.name, delieveryMethod, newPizza);

    newPizza.toppings = allToppings;
    newCustomer.name = $('#customer').val();
    newPizza.size = $('input:radio[name=pizzaSize]:checked').val();


    $('.order-customer span').html(newCustomer.name);

    $(allToppings).each(function(el){
      $(".order-toppings span").append(this+", ")
    });

    console.log(newOrder);
    console.log(newPizza.size);

    $(".order-cost span").html(newPizza.cost(newOrder));
    $(".order-wait span").html(newPizza.waitTime(newOrder));


  });//end of pizza ordering form

    $("#delieveryType").click(function(){
      $('.delievery-address').show(500);
    });
});
