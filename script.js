let pointBtn = document.getElementById('point');

let resetBtn = document.getElementById('rst');
let delBtn = document.getElementById('del');
let numberBtn = document.getElementsByClassName('number');
let operatorBtn = document.getElementsByClassName('operator');
let result = document.getElementById('displayRes');

let screenVal = '0';
let pendingVal;
let theResultArray = [];

let updateScreen = (clickObj) => {
  let btnText = clickObj.target.innerText;

  if (screenVal === '0') screenVal = '';

  screenVal += btnText;
  result.innerText = screenVal;
};

let performOperation = (clickObj) => {
  let operator = clickObj.target.innerText;

  switch (operator) {
    case '+':
      pendingVal = screenVal;
      screenVal = '0';
      result.innerText = screenVal;
      theResultArray.push(pendingVal);
      theResultArray.push('+');
      break;
    case '-':
      pendingVal = screenVal;
      screenVal = '0';
      result.innerText = screenVal;
      theResultArray.push(pendingVal);
      theResultArray.push('-');
      break;
    case 'x':
      pendingVal = screenVal;
      screenVal = '0';
      result.innerText = screenVal;
      theResultArray.push(pendingVal);
      theResultArray.push('*');
      break;
    case '÷':
      pendingVal = screenVal;
      screenVal = '0';
      result.innerText = screenVal;
      theResultArray.push(pendingVal);
      theResultArray.push('/');
      break;
    case '=':
      theResultArray.push(screenVal);
      let evaluation = eval(theResultArray.join(' '));
      screenVal = evaluation + '';
      result.innerText = screenVal;
      theResultArray = [];
      break;
    default:
      break;
  }
};

for (let i = 0; i < numberBtn.length; i++) {
  numberBtn[i].addEventListener('click', updateScreen, false);
}

for (let i = 0; i < operatorBtn.length; i++) {
  operatorBtn[i].addEventListener('click', performOperation, false);
}

resetBtn.onclick = () => {
  screenVal = '0';
  pendingVal = undefined;
  theResultArray = [];
  result.innerHTML = screenVal;
};

delBtn.onclick = () => {
  let lengthOfScreenVal = screenVal.length;
  screenVal = screenVal.slice(0, lengthOfScreenVal - 1);
  if (screenVal === '') screenVal = '0';
  result.innerText = screenVal;
};

pointBtn.onclick = () => {
  if (!screenVal.includes('.')) screenVal += '.';
  result.innerText = screenVal;
};
