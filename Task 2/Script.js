const bodySlt = document.querySelector("body");
bodySlt.innerHTML = `
    <section class="CalcBody">
        <article class="display">
            <span>0</span>
        </article>        
        <article class="Numpad firstRow">
            <button class="other" onclick="empty()">AC</button>
            <button class="other" onclick="digits('%')">Modulo</button>     
            <button class="symbols" onclick="digits('/')">/</button>          
        </article>
        <article class="lastDigits Numpad">            
            
        </article>
        <article class="middleDigits Numpad">      
            
        </article>
        <article class="firstDigits Numpad">
                    
        </article>
        <article class="Numpad lastRow">
            <button class="num" onclick="digits(0)">0</button>        
            <button class="num">.</button>
            <button class="symbols" onclick="result()">=</button>            
        </article>
    </section>
`;

function addNumToCalc(start, end, tagSlt, symbol) {
  for (let i = start; i <= end; i++) {
    tagSlt.innerHTML += `
        <button class="num" onclick="digits(${i})">${i}</button>
        `;
  }
  tagSlt.innerHTML += `
        <button class="symbols" onclick="digits('${symbol}')">${symbol}</button>
        `;
}

const lastDigitsSlt = document.querySelector(".lastDigits");
addNumToCalc(7, 9, lastDigitsSlt, "*");

const middleDigitsSlt = document.querySelector(".middleDigits");
addNumToCalc(4, 6, middleDigitsSlt, "-");

const firstDigitsSlt = document.querySelector(".firstDigits");
addNumToCalc(1, 3, firstDigitsSlt, "+");

const spanSlt = document.querySelector("span");
const displaySlt = document.querySelector(".display");

function digits(value) {
  if (displaySlt.innerText === "0") {
    spanSlt.innerText = "";
    spanSlt.innerText += value;
  } else {
    spanSlt.innerText += value;
  }
}

function empty() {
  spanSlt.innerText = 0;
}

function result() {
  let inputArray = spanSlt.innerText.split("");
  console.log(inputArray);
  let i = -1;
  for (let value of inputArray) {
    i++;
    if (
      value == "*" ||
      value == "/" ||
      value == "+" ||
      value == "-" ||
      value == "%"
    ) {
      console.log(i);
      break;
    }
  }
  let firstNum = [];
  for (let j = 0; j < i; j++) {
    console.log("j", j);
    firstNum.push(inputArray[j]);
  }
  firstNum = parseInt(firstNum.join(""));

  let secondNum = [];
  for (let j = i + 1; j < inputArray.length; j++) {
    console.log("j", j);
    secondNum.push(inputArray[j]);
  }
  secondNum = parseInt(secondNum.join(""));

  if (inputArray[i] === "*") {
    let ans = firstNum * secondNum;
    spanSlt.innerText = ans;
  } else if (inputArray[i] === "/") {
    let ans = firstNum / secondNum;
    spanSlt.innerText = ans;
  } else if (inputArray[i] === "+") {
    let ans = firstNum + secondNum;
    spanSlt.innerText = ans;
  } else if (inputArray[i] === "-") {
    let ans = firstNum - secondNum;
    spanSlt.innerText = ans;
  } else if (inputArray[i] === "%") {
    let ans = firstNum % secondNum;
    spanSlt.innerText = ans;
  }
}
