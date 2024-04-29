console.log("hello");

// const nameOfFunction = () => {}
// function nameOfFunction() {}

const peopleArray = [
  {
    name: "Oliver Quinn",
    phone: "(148) 664-1145",
    email: "diam.duis@protonmail.ca",
    address: "P.O. Box 645, 6096 Vehicula. Ave",
    postalZip: "6717",
  },
  {
    name: "Rylee Evans",
    phone: "(265) 203-5430",
    email: "scelerisque.mollis@protonmail.edu",
    address: "P.O. Box 975, 6435 Lectus Rd.",
    postalZip: "41856",
  },
  {
    name: "Pamela Douglas",
    phone: "1-890-436-3446",
    email: "mi@aol.ca",
    address: "P.O. Box 372, 230 Semper. Rd.",
    postalZip: "42475",
  },
  {
    name: "Donovan Bridges",
    phone: "1-282-895-1162",
    email: "aenean.eget@outlook.com",
    address: "Ap #624-9930 Mus. St.",
    postalZip: "8244",
  },
  {
    name: "Velma Cain",
    phone: "1-987-723-2454",
    email: "sit.amet.ante@aol.ca",
    address: "2119 Iaculis, Rd.",
    postalZip: "21615",
  },
];

// map from scratch

const customMap = (array, callback) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const object = callback(array[i]);
    newArray.push(object);
  }
  return newArray;
};

const addKey = (item) => {
  item.gender = undefined
  return item 
}

console.log(customMap(peopleArray, addKey))

const foodOrders = [
  {
    name: "hamburger",
    price: "2.89"
  },{
    name: "cheeseburger",
    price: "3.35"
  },
  {

    name: "double cheese hamburger",
    price: "4.89"
  },{
    name: "french fries",
    price: "2.35"
  },
]
 const customReduce = (array, callback)=>{
  let totalPrice = 0
  for (let i = 0; i < array.length; i++) {
    totalPrice = callback(totalPrice, array[i].price)
  }
  return totalPrice
 }

 const getsum = (total, item) => {
  return total + Number(item)
 }

 console.log(customReduce(foodOrders, getsum))

 const customFilter = (array, callback) => {
  const newArray = []
  for (let i = 0; i < array.length; i++) {
    console.log(callback(array[i]), 'in loop')
    if (callback(array[i])) newArray.push(array[i])
  }
return newArray
 }

 const below3 = (item) => {
  return Number(item.price) < 3
 }
 const above3 = (item) => {
  return Number(item.price) > 3
 }

 console.log("food orders that are below $3.00: ", customFilter(foodOrders, below3))
 console.log("food orders that are above $3.00: ", customFilter(foodOrders, above3))