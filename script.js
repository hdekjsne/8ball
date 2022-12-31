const answers = [
  { answer: 'точно да', chance: '100%'}, 
  { answer: 'возможно', chance: '35%'}, 
  { answer: 'может быть', chance: '40%'}, 
  { answer: 'хм, вполне возможно', chance: '76%'}, 
  { answer: 'в следующей жизни точно да, насчёт этой уверенности нет', chance: '88%'},
  { answer: 'категорически нет', chance: '0'},
  { answer: '64% да', chance: '64%'},
  { answer: 'неа', chance: '0'},
  { answer: 'скорее нет', chance: '10%'},
  { answer: 'скорее да', chance: '90%'},
  { answer: 'я устал. мне нужен отдых', chance: '0'},
  { answer: 'я советую больше полагаться на рациональное мышление и анализ, чем на магичекие шары', chance: '50%'},
  { answer: 'мне не хватает данных для ответа на этот вопрос', chance: '50%'},
  { answer: 'всё возможно', chance: '60%'},
  { answer: 'в одной из альтернативных реальностей ответ однозначно положительный', chance: '58%'},
  { answer: 'я знаю, что глубоко внутри вы и так уже знаете ответ', chance: '100%'},
  { answer: 'я знаю, что глубоко внутри вы и так уже знаете ответ', chance: '0'},
  { answer: 'шансов почти нет', chance: '2%'},
  { answer: 'вероятность успеха очень высока', chance: '99%'},
  { answer: 'да нет, наверное', chance: '20%'},
  { answer: 'скорее всего да. но уверены ли вы, что это именно то, чего вы действительно хотите?', chance: '80%'},
];

const body = document.querySelector('body');
const input = document.querySelector('#input');
const sphere = document.querySelector('#sphere');
const result = document.querySelector('#result');
const measure = document.querySelector('#measure');

let index;
let possibility = '0';
let prPossibility;

function shake() {
  measure.classList.remove('move');
  
  prPossibility = possibility;
  index = Math.floor(Math.random() * 21);
  possibility = answers[index].chance;
  
  result.textContent = answers[index].answer;
  result.style.padding = '20px';

  document.documentElement.style.setProperty('--pr-size', prPossibility);
  document.documentElement.style.setProperty('--size', possibility);
  measure.className = 'move';
}

function getKey(e) {
  if (e.code === 'Enter') {
    shake();
  }
}

input.addEventListener('keydown', getKey);
