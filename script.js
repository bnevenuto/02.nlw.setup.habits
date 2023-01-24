const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('header button');

button.addEventListener("click", add);
form.addEventListener('change', save);

function add() {
    const date = new Date().toLocaleDateString('pt-br').slice(0, -5);
    const dayExists = nlwSetup.dayExists(date);

    dayExists ? alert(`⚠ Atenção: Já existe registro de hoje (${date}) no habits. Tente novamente amanhã.`) : nlwSetup.addDay(date); 
}

function save() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {};

nlwSetup.setData(data);
nlwSetup.load();