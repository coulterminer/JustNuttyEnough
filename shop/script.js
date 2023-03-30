let item1_cart = 0;
let item2_cart = 0;  // this sets up a var to remember how much of what is
let item3_cart = 0;  // in the cart
let item4_cart = 0;
let total_items = item1_cart + item2_cart + item3_cart + item4_cart;

let item1_price = 9.0;
let item2_price = 8.0;
let item3_price = 8.0;  // Please set prices!
let item4_price = 8.0;



let item1_num = document.getElementById("item1_num");
let item2_num = document.getElementById("item2_num");
let item3_num = document.getElementById("item3_num");
let item4_num = document.getElementById("item4_num");
let tp_1 = document.getElementById("tp_1");
let tp_2 = document.getElementById("tp_2");  // grabs elements from website
let tp_3 = document.getElementById("tp_3");
let tp_4 = document.getElementById("tp_4");
let tp = document.getElementById("tp")

let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let p3 = document.getElementById("p3")
let p4 = document.getElementById("p4")


/* function getCookie(cookieName) { // coookie monster :[] < --- NOM NOM NOM
  var cookies = document.cookie.split(';');
  for(var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.indexOf(cookieName + '=') == 0) {
      return cookie.substring(cookieName.length + 1);
    }
  }
  return null;
}

function updateCookie(cookieName, cookieValue, expiresDays) {
  var d = new Date();
  d.setTime(d.getTime() + (expiresDays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
} */



window.onload = function(){
  item1_num.value = item1_cart;  // a function setup to change
  item2_num.value = item2_cart;  // the display values of how much
  item3_num.value = item3_cart;  // is in your cart when the site is
  item4_num.value = item4_cart;  // loaded!

  p1.textContent = "$" + item1_price + ".00";
  p2.textContent = "$" + item2_price + ".00";
  p3.textContent = "$" + item3_price + ".00";
  p4.textContent = "$" + item4_price + ".00";
}

/* function parse_cookie_string(inputString) {
  var values = inputString.split(';');
  var result = [];
  for (var i = 1; i < values.length; i++) {
    var value = values[i].split(':');
    result.push(parseInt(value[1]));
  }
  return result;
}
*/

function update_pricing(){
  let item1_tp = item1_price * item1_cart;
  let item2_tp = item2_price * item2_cart;
  let item3_tp = item3_price * item3_cart; // sets up total pricing calc
  let item4_tp = item4_price * item4_cart;

  let tp_v = item1_tp + item2_tp + item3_tp + item4_tp;
  tp.textContent = tp_v;
}

function addtocart(item){
  if (item == 1) {
    item1_cart += 1;
    item1_num.value = item1_cart;
    tp_1.textContent = item1_price * item1_cart;
    update_pricing()
  } else if (item == 2) {
    item2_cart += 1;
    item2_num.value = item2_cart;
    tp_2.textContent = item2_price * item2_cart;  // add to cart func
    update_pricing()
  } else if (item == 3) {
    item3_cart += 1;
    item3_num.value = item3_cart;
    update_pricing()
    tp_3.textContent = item3_price * item3_cart;
  } else if (item == 4) {
    item4_cart += 1;
    item4_num.value = item4_cart;
    tp_4.textContent = item4_price * item4_cart;
    update_pricing()
  }
}

function subfromcart(item){
  if (item == 1) {
    if (item1_cart <= 0) {} else {
      item1_cart -= 1;
      tp_1.textContent = item1_price * item1_cart;
      update_pricing()
    }
    item1_num.value = item1_cart;
  } else if (item == 2) {
    if (item2_cart <= 0) {} else {
      item2_cart -= 1;
      tp_2.textContent = item2_price * item2_cart;  // sub from cart func
      update_pricing()
    }
    item2_num.value = item2_cart;
  } else if (item == 3) {
    if (item3_cart <= 0) {} else {
      item3_cart -= 1;
      tp_3.textContent = item3_price * item3_cart;
      update_pricing()
    }
    item3_num.value = item3_cart;
  } else if (item == 4) {
    if (item4_cart <= 0) {} else {
      item4_cart -= 1;
      tp_4.textContent = item4_price * item4_cart;
      update_pricing()
    }
    item4_num.value = item4_cart;
  }
}

item1_num.onchange = function(){
  if (parseInt(item1_num.value) <= 0) {} else {
    item1_cart = parseInt(item1_num.value);
    tp_1.textContent = item1_price * item1_cart;
    update_pricing()
  }
}

item2_num.onchange = function(){
  if (parseInt(item2_num.value) <= 0) {} else {
    item2_cart = parseInt(item2_num.value);
    tp_2.textContent = item2_price * item2_cart;
    update_pricing()
  }
}

item3_num.onchange = function(){
  if (parseInt(item3_num.value) <= 0) {} else {
    item3_cart = parseInt(item3_num.value);
    tp_3.textContent = item3_price * item3_cart;
    update_pricing()
  }
}

item4_num.onchange = function(){
  if (parseInt(item4_num.value) <= 0) {} else {
    item4_cart = parseInt(item4_num.value);
    tp_4.textContent = item4_price * item4_cart;
    update_pricing()
  }
}