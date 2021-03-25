// functions.js
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

addTwoNumbers(1, 1)
addTwoNumbers(0, 0)
addTwoNumbers(1, 0)

function sayHello(name) {
  name = name;
  if (name === "Will") {
    return "No more testing " + name + "!"
  }
  else {
		return "Hi there " + name + "!"
  }
}















///////works

// function buildCar(color, type) {
//   var car = {
//     color:color,
//     type:type,
//   };
//   return car
//
//   color + " " + type;
// }
//
// buildCar("red", "truck")


//drafts


function buildCar(color, type) {
    var car = {
      color:color,
      type:type,
    };
  if (color === undefined && type === undefined) {
    return {}
  } else {
		return car
  }
}

// npm test functions.js

//   var car = {
//     color:color,
//     type:type,
//   };
//   return car
//
//   color + " " + type;
// }

// buildCar("red", "truck")



// function count_obj(obj){
//     var i = 0;
//     for(var key in obj){
//         ++i;
//     }
//
//     return i;
// }


















module.exports = {
    addTwoNumbers,
    sayHello,
    buildCar
}
