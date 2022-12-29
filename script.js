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
  { answer: 'я советую больше полагаться на рациональное мышление и анализ, а не на магичекие шары', chance: '50%'},
  { answer: 'мне не хватает данных для ответа на этот вопрос', chance: '50%'},
  { answer: 'всё возможно', chance: '60%'},
  { answer: 'в одной из альтернативных реальностей ответ однозначно положительный', chance: '58%'},
  { answer: 'я знаю, что глубоко внутри вы и так уже знаете ответ', chance: '100%'},
  { answer: 'я знаю, что глубоко внутри вы и так уже знаете ответ', chance: '0'},
  { answer: 'шансов почти нет', chance: '2%'},
  { answer: 'вероятность успеха очень высока', chance: '99%'},
  { answer: 'да нет, наверное', chance: '20%'},
  { answer: 'вероятность успеха - более 100%. вот это да!', chance: '120%'},
];

const input = document.querySelector('#input');
const result = document.querySelector('#result');
const measure = document.querySelector('#measure');

function shake() {
  let index = Math.floor(Math.random() * 21);
  let possibility = answers[index].chance;
  
  result.textContent = answers[index].answer;
  result.style.padding = '20px';
  measure.style.height = possibility;
  measure.style.width = possibility;

}

function getKey(e) {
  if (e.code === 'Enter') {
    shake();
  }
}

input.addEventListener('keydown', getKey);
