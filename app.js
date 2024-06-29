// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let {numPlanets, yearNeptuneDiscovered } = facts;
console.log(numPlanets); // 8 เป็นการใช้ object destructuring เพื่อดึงค่าที่อยู่ใน object facts ของ numPlanets
console.log(yearNeptuneDiscovered); // 1846 เป็นการใช้ object destructuring เพื่อดึงค่าที่อยู่ใน object facts ของ yearNeptuneDiscovered