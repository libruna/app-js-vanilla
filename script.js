const transactionsUl = document.querySelector('#transactions');
const inputTransactionName = document.querySelector('#text');
const inputTransactionAmount= document.querySelector('#amount');
const incomeDisplay = document.querySelector('#money-plus');
const expenseDisplay = document.querySelector('#money-minus');
const balanceDisplay = document.querySelector('#balance');

const dummyTransactions = [
    { id: 1, name: 'Bolo de brigadeiro', amount: -20 },
    { id: 2, name: 'Salario', amount: 300 },
    { id: 3, name: 'Torta de frango', amount: -10 },
    { id: 4, name: 'Violão', amount: 150 }
]

const addTransactionInArray = (transactionName, transactionAmount) => {
    dummyTransactions.push({ id: 123, name: transactionName, amount: number(transactionAmount) })
}
const handleFormSubmit = event => {
    event.preventDefault();

    if(inputTransactionName.value.trim() === '' || inputTransactionAmount.value.trim() === '') {
      alert('Informe a descrição e o valor da transação');
      return;
    }
    addTransactionInArray(inputTransactionName.value, inputTransactionAmount.value);
    init();
}

form.addEventListener('submit', handleFormSubmit);

const addTransactionIntoDOM = transaction => {
    const li = document.createElement('li') 

    li.innerHTML = `${transaction.name}`;
    transactionsUl.append(li);
}

const updateBalancesValues = () => {

    const transactionAmounts = dummyTransactions.map(({ amount }) => amount);
    console.log(transactionAmounts);

    const total = transactionAmounts.reduce((accumulator, transaction) => accumulator + transaction,0);
    console.log('Soma dos valores: ' + total);

    const income = transactionAmounts.filter(value => value > 0).reduce((accumulator, transaction) => accumulator + transaction, 0);
    console.log('Somente a soma dos valores positivos: ' + income);

    const expense = transactionAmounts.filter(value => value < 0).reduce((accumulator, transaction) => accumulator + transaction, 0);
    console.log('Somente a soma dos valores negativos: ' + expense);

    balanceDisplay.textContent =`R$ ${total}`; 
    incomeDisplay.textContent = `R$ ${income}`;
    expenseDisplay.textContent = `R$ ${expense}`;
}

const init = () => {
    transactionsUl.innerHTML = '';
    dummyTransactions.forEach(addTransactionIntoDOM);
    updateBalancesValues();
}

init();