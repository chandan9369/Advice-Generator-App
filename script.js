const advice = document.querySelector(".advice");
const dice = document.querySelector(".dice");
const titleId = document.querySelector("#titleId");

async function getRandomAdvice() {
  try {
    const res = await fetch("	https://api.adviceslip.com/advice");
    const adviceObj = await res.json();
    titleId.innerText = adviceObj.slip.id;
    advice.innerText = `"${adviceObj.slip.advice}"`;
  } catch (err) {
    titleId.innerText = "";
    advice.innerText = "!! No advice for today !!";
  }
}

dice.addEventListener("click", getRandomAdvice);
