// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];

//1 แก้ไขจำนวน apple 
inventory[0].quantity = 200;

//2 เพิ่มสินค้าใหม่
let newProduct = {name: "Orange", price: 20, quantity: 300};
inventory.push(newProduct);

//3 คำนวณมูลค่ารวมของสินค้าทั้งหมด
let totalPrice = 0;
for(i=0 ; i < inventory.length ; i=i+1){
  totalPrice = totalPrice + (inventory[i].price * inventory[i].quantity);
}

//แสดงผลลัพธ์
console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalPrice} บาท`);

