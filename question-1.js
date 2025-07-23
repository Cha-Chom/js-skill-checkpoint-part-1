// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];

//1 เพิ่ม Obj ใหม่
let id5 = {id: 5, todo: "Walk the dog"};
myTodo.push(id5);

//2 แก้ไข value ภายใน Obj
myTodo[3].todo = "Go to the gym";

//3 ลบ Obj สุดท้ายใน array ออก
myTodo.pop();

//4 นำ myTodo แสดงบนหน้าจอ
console.log(myTodo);

//5 แสดงข้อมูล Obj สุดท้ายตามฟอร์ม
console.log(`To-do id: ${myTodo[myTodo.length-1].id}, ${myTodo[myTodo.length-1].todo}`);