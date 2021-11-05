const transactionsUl = document.querySelector('#transactions');
const inputTransactionName = document.querySelector('#text');
const inputTransactionAmount= document.querySelector('#amount');

// objeto literal FICTICIO
const dummyTransactions = [
    { id: 1, name: 'Bolo de brigadeiro', amount: -20 },
    { id: 2, name: 'Salario', amount: 300 },
    { id: 3, name: 'Torta de frango', amount: -10 },
    { id: 4, name: 'Violão', amount: 150 }
]

const addTransactionInArray = (transactionName, transactionAmount) => {
    dummyTransactions.push({ id: 123, name: transactionName, amount: transactionAmount })
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
                            // é o parametro da funcao
const addTransactionIntoDOM = transaction => {
    const li = document.createElement('li') //<li></li>

    li.innerHTML = `${transaction.name}` //<li>'Bolo de brigadeiro'</li>
    //atribuindo um nó para o li
    transactionsUl.append(li);
}

const init = () => {
    // tratamento a nivel de codigo para nao submeter toda a lista novamente
    transactionsUl.innerHTML = '';
    dummyTransactions.forEach(addTransactionIntoDOM);
}

// funcao de inicializacao do JS
init();