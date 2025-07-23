// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];

let LeastProduct = inventory[0].quantity;

for (i=0 ; i < inventory.length ; i=i+1){
  if (inventory[i].quantity < LeastProduct){
    LeastProduct = inventory[i];
  } 
}

console.log (`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${LeastProduct.name} ซึ่งมี ${LeastProduct.quantity} ชิ้น`);
