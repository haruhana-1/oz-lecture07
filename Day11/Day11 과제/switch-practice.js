const age = 12;
const quantity = 3;

const price = age >= 13 ? 20000 : 10000;

const totalPrice = price * quantity;

const discount = quantity >= 3 ? "할인 적용" : "할인 없음";

const finalPrice = quantity >= 3 ? (totalPrice * 0.9) : totalPrice;

console.log(discount);
console.log(finalPrice);