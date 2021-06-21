const $buttons = document.querySelectorAll('.button');
const $input = document.querySelector('.input');
const $equal = document.getElementById('equal');
const $plus = document.getElementById('plus');
const $minus = document.getElementById('minus');
const $multiply = document.getElementById('multiply');
const $devide = document.getElementById('devide');
const $clear = document.getElementById('clear');

let numberOne = 0;
let numberTwo = 0;
let result = '';

let operation;

$buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    result += event.target.innerHTML;
    $input.innerHTML = result;
  });
});

$equal.addEventListener('click', equal);
$plus.addEventListener('click', plus);
$minus.addEventListener('click', minus);
$multiply.addEventListener('click', multiply);
$devide.addEventListener('click', devide);
$clear.addEventListener('click', clear);

function clear() {
  $input.innerHTML = '';
  numberOne = 0;
  result = '';
}

function devide() {
  operation = '/';
  numberOne = parseFloat(result);
  $input.innerHTML = '/';
  result = '';
}

function multiply() {
  operation = '×';
  numberOne = parseFloat(result);
  $input.innerHTML = '×';
  result = '';
}

function plus() {
  operation = '+';
  numberOne = parseFloat(result);
  $input.innerHTML = '+';
  result = '';
}

function minus() {
  operation = '−';
  numberOne = parseFloat(result);
  $input.innerHTML = '−';
  result = '';
}

function equal() {
  numberTwo = parseFloat($input.innerHTML);
  switch (operation) {
    case '/':
      if (numberTwo == 0) {
        $input.innerHTML = 'Ошибочка вышла';
        break;
      } else {
        $input.innerHTML = numberOne / numberTwo;
        break;
      }
    case '×':
      $input.innerHTML = numberOne * numberTwo;
      operation = '×';
      break;
    case '+':
      $input.innerHTML = numberOne + numberTwo;
      break;
    case '−':
      $input.innerHTML = numberOne - numberTwo;
      operation = '−';
      break;
    default:
      $input.innerHTML = 'Ошибочка вышла';
      break;
  }
  $input.insertAdjacentText('afterbegin', `${numberOne} ${operation} ${numberTwo} = `);
  operation = null;
  result = '';
  numberOne = 0;
}
