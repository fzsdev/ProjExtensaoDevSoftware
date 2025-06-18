const Modal = {
  open() {
    document.querySelector('.modal-overlay').classList.add('active');
  },
  close() {
    document.querySelector('.modal-overlay').classList.remove('active');
  },
};

const Storage = {
  get() {
    return JSON.parse(localStorage.getItem('controlamais:transactions')) || [];
  },

  set(transactions) {
    localStorage.setItem(
      'controlamais:transactions',
      JSON.stringify(transactions)
    );
  },
};

const Transaction = {
  all: Storage.get(),

  add(transaction) {
    Transaction.all.push(transaction);

    App.reload();
  },

  remove(index) {
    Transaction.all.splice(index, 1);

    App.reload();
  },

  incomes() {
    return Transaction.all.reduce((acc, transaction) => {
      return transaction.amount > 0 ? acc + transaction.amount : acc;
    }, 0);
  },

  expenses() {
    return Transaction.all.reduce((acc, transaction) => {
      return transaction.amount < 0 ? acc + transaction.amount : acc;
    }, 0);
  },

  total() {
    return Transaction.incomes() + Transaction.expenses();
  },
};

const DOM = {
  transactionsContainer: document.querySelector('#data-table tbody'),

  addTransaction(transaction, index) {
    const tr = document.createElement('tr');
    tr.innerHTML = DOM.innerHTMLTransaction(transaction, index);
    tr.dataset.index = index;
    DOM.transactionsContainer.appendChild(tr);
  },

  innerHTMLTransaction(transaction, index) {
    const CSSclass = transaction.amount > 0 ? 'income' : 'expense';

    const amount = Utils.formatCurrency(transaction.amount);

    const html = `
      <td class="description">${transaction.description}</td>
      <td class="${CSSclass}">${amount}</td>
      <td class="date">${transaction.date}</td>
      <td>
          <img onclick="Transaction.remove(${index})" src="./assets/minus.svg" alt="Remover transação">
      </td>
      `;

    return html;
  },

  updateBalance() {
    document.getElementById('incomeDisplay').innerHTML = Utils.formatCurrency(
      Transaction.incomes()
    );
    document.getElementById('expenseDisplay').innerHTML = Utils.formatCurrency(
      Transaction.expenses()
    );
    document.getElementById('totalDisplay').innerHTML = Utils.formatCurrency(
      Transaction.total()
    );
  },

  clearTransactions() {
    DOM.transactionsContainer.innerHTML = '';
  },
};

const Utils = {
  formatAmount(value) {
    value = value.replace(/\./g, '').replace(',', '.');
    return Math.round(Number(value) * 100);
  },

  formatDate(date) {
    const splittedDate = date.split('-');
    return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`;
  },

  formatCurrency(value) {
    const signal = Number(value) < 0 ? '-' : '';
    value = Math.abs(value) / 10000;
    value = value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });
    return `${signal} ${value}`;
  },
};

const Form = {
  description: document.querySelector('input#description'),
  amount: document.querySelector('input#amount'),
  date: document.querySelector('input#date'),

  getValues() {
    return {
      description: Form.description.value,
      amount: Form.amount.value,
      date: Form.date.value,
    };
  },

  validateFields() {
    const { description, amount, date } = Form.getValues();

    if (
      description.trim() === '' ||
      amount.trim() === '' ||
      date.trim() === ''
    ) {
      throw new Error('Por favor, preencha todos os campos');
    }
  },

  formatValues() {
    let { description, amount, date } = Form.getValues();

    amount = Utils.formatAmount(amount);

    date = Utils.formatDate(date);

    //console.log(date);

    return {
      description,
      amount,
      date,
    };
  },

  clearFields() {
    Form.description.value = '';
    Form.amount.value = '';
    Form.date.value = '';
  },

  submit(event) {
    event.preventDefault();

    try {
      Form.validateFields();
      const transaction = Form.formatValues();
      Transaction.add(transaction);
      Form.clearFields();
      Modal.close();
    } catch (error) {
      ErrorModal.open(error.message);
    }
  },
};

const App = {
  init() {
    Transaction.all.forEach(DOM.addTransaction);

    DOM.updateBalance();

    Storage.set(Transaction.all);
  },
  reload() {
    DOM.clearTransactions();
    App.init();
  },
};

const ErrorModal = {
  open(message) {
    document.querySelector('.error-modal-overlay').classList.add('active');
    document.querySelector('#error-message').innerText = message;
  },
  close() {
    document.querySelector('.error-modal-overlay').classList.remove('active');
  },
};

let startY = 0;
let pulling = false;

document.addEventListener('touchstart', (e) => {
  if (window.scrollY === 0) {
    startY = e.touches[0].clientY;
    pulling = true;
  }
}, { passive: true });

document.addEventListener('touchend', (e) => {
  if (pulling) {
    let endY = e.changedTouches[0].clientY;
    let pullDistance = endY - startY;

    if (pullDistance > 100) {
      App.reload();
    }

    pulling = false;
  }
});

App.init();
