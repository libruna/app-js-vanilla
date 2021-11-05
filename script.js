const transactionsUl = document.querySelector('#transactions');
const inputTransactionName = document.querySelector('#text');
const inputTransactionAmount= document.querySelector('#amount');

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

    //pega todos os valores(amount) de cada linha do array
    const transactionAmounts = dummyTransactions.map(({ amount }) => amount);
    console.log(transactionAmounts);

    //totalizador
    const total = transactionAmounts.reduce((accumulator, transaction) => accumulator + transaction,0);
    console.log('Soma dos valores: ' + total);

    //somente as receitas
    const income = transactionAmounts.filter(value => value > 0).reduce((accumulator, transaction) => accumulator + transaction, 0);
    console.log('Somente a soma dos valores positivos: ' + income);

    //somente as despesas
    const expenses = transactionAmounts.filter(value => value < 0).reduce((accumulator, transaction) => accumulator + transaction, 0);
    console.log('Somente a soma dos valores negativos: ' + expenses);
}

const init = () => {
    transactionsUl.innerHTML = '';
    dummyTransactions.forEach(addTransactionIntoDOM);
    updateBalancesValues();
}

init();