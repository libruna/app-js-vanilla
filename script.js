const transactionsUl = document.querySelector('#transactions');
const inputTransactionName = document.querySelector('#text');
const inputTransactionAmount = document.querySelector('#amount');
const incomeDisplay = document.querySelector('#money-plus'); // id do paragrafo que exibe as receitas
const expenseDisplay = document.querySelector('#money-minus');// id do paragrafo que exibe as despesas
const balanceDisplay = document.querySelector('#balance');// id do paragrafo que exibe o saldo total

let dummyTransactions = [
    { id: 1, name: 'Bolo de brigadeiro', amount: -20 },
    { id: 2, name: 'Salario', amount: 300 },
    { id: 3, name: 'Torta de frango', amount: -10 },
    { id: 4, name: 'Violão', amount: 150 }
]

const geradorID = () => Math.round(Math.random() * 1000);

const addTransactionInArray = (transactionName, transactionAmount) => {
    dummyTransactions.push({
        id: geradorID(),
        name: transactionName,
        amount: Number(transactionAmount)
    })
}

const handleFormSubmit = event => {
    event.preventDefault();

    if (inputTransactionName.value.trim() === '' ||
        inputTransactionAmount.value.trim() === '') {
        alert('Informe a descrição e o valor da transação');
        return;
    }
    addTransactionInArray(inputTransactionName.value, inputTransactionAmount.value);
    init();
}

const removeTransaction =  ID => {
    dummyTransactions = dummyTransactions.filter(transaction => transaction.id !== ID);
    console.log(dummyTransactions);
    init();
}

form.addEventListener('submit', handleFormSubmit);

const addTransactionIntoDOM = transaction => {
    const li = document.createElement('li') 

    li.innerHTML = `${transaction.id} - 
                    ${transaction.name}
                    <span> R$ ${transaction.amount} </span>
                    <button onClick="removeTransaction(${transaction.id})">X</button> ` 
    transactionsUl.append(li);
}

const updateBalanceValues = () => {

    const transactionsAmounts = dummyTransactions.map(({ amount }) => amount)
    console.log('Somente os valores : ' + transactionsAmounts);

    const total = transactionsAmounts.reduce((accumulator, transaction) => accumulator + transaction, 0);
    console.log('Soma dos valores : ' + total);

    const income = transactionsAmounts.filter(value => value > 0).reduce((accumulator, transaction) => accumulator + transaction, 0);
    console.log('Somente os valores positivos : ' + income);

    const expenses = transactionsAmounts.filter(value => value < 0).reduce((accumulator, transaction) => accumulator + transaction, 0);
    console.log('Somente os valores negativos : ' + expenses);

    balanceDisplay.textContent = `R$ ${total}`;
    incomeDisplay.textContent = `R$ ${income}`;
    expenseDisplay.textContent = `R$ ${expenses}`;
}

const init = () => {
    transactionsUl.innerHTML = '';
    dummyTransactions.forEach(addTransactionIntoDOM);
    updateBalanceValues();
}

init();
