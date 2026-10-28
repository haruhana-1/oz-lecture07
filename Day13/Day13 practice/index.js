const todos = [
  { title: "장보기", done: true },
  { title: "운동하기", done: false },
  { title: "책 읽기", done: true }
];
const result = todos.filter((todo) => !todo.done);
console.log(result);

const greet = document.querySelector("#greeting");
greet.textContent = "좋은 아침입니다"

fruits.forEach((fruit) => {
  console.log(fruit.textContent);
});

fruits.forEach((fruit) => {
  fruit.textContent = "딸기";
})

const message = document.querySelector("#message");
message.classList.add("hidden");
console.log(message.classList.contains("hidden"));


saveButton.addEventListener("click", () => {
  message.classList.add("active");
  console.log(message.classList.contains("active"));
});



const diary = document.createElement("p");
diary.textContent = "오늘도 좋은 하루";
document.body.appendChild(diary);

const notice = document.querySelector("#notice");
notice.remove();

const study = document.createElement("p");
study.textContent = "자바스크립트 공부 중";
document.body.appendChild(study);
study.remove();

const helloButton = document.querySelector("#hello");
helloButton.addEventListener("click", () => {
  console.log("안녕하세요");
});

helloButton.addEventListener("click", () => {
  message.textContent = "클릭했어요!";
})

saveButton.addEventListener("click", () => {
  message.textContent = "저장 완료!";
});

saveButton.addEventListener("click", () => {
  document.classList(success);
});


saveBtn.addEventListener("click", ()=> {
  console.log("저장 완료");
});

btn.addEventListener("click", (event) => {
  message.textContent = "반갑습니다!";
})

const helloBtn = document.querySelector("#hello");
helloBtn.addEventListener("click", () => {
  console.log("반가워요!");
});

helloBtn.addEventListener("click", sayHello);

const saveBtn = document.querySelector("#save");
saveBtn.addEventListener("click", ()=> {
  console.log("저장 버튼을 클릭했어요!");
});

const greeting = document.querySelector("#greeting");
greeting.textContent = "오늘도 좋은 하루!";
console.log(greeting.textContent);