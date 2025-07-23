// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";

function calculateTotalPrice (products,promotionCode){
  //คำนวณราคาสินค้าทั้งหมด
  let totalPrice = 0
  for (i=0 ; i < products.length ; i=i+1){
    totalPrice = totalPrice + (products[i].price * products[i].quantity);
  }
  //คำนวณราคาตามส่วนลด
  if(promotionCode === ""){
    return totalPrice;
  }
  else if (promotionCode === "SALE20"){
    return totalPrice - (totalPrice*0.20);
  }
  else if (promotionCode === "SALE50"){
    return totalPrice - (totalPrice*0.50);
  }
}

//console.log(calculateTotalPrice (products,promotionCode));

