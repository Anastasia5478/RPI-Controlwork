export class View { 
    constructor() {
        this.transactionList = document.getElementById('transactions-list');
        this.totalBalanceElement = document.getElementById('total-balance');
    }

    renderTransactions(transactions) {
        this.transactionList.innerHTML = '';
        transactions.forEach(transaction => {
            const transactionElement = document.createElement('div');
            transactionElement.classList.add('transaction', transaction.type);
            transactionElement.innerHTML = `
                <span>${transaction.category}</span>
                <span>${transaction.amount} руб.</span>
                <button class="delete-button" data-id="${transaction.id}">Удалить</button>
            `;
            transactionElement.querySelector('.delete-button').addEventListener('click', (e) => {
                this.onDeleteTransaction(e.target.dataset.id);
            });
            this.transactionList.appendChild(transactionElement);
        });
    }

    updateBalance(balance) {
        this.totalBalanceElement.textContent = balance;  
    }

    setOnDeleteTransactionHandler(handler) {
        this.onDeleteTransaction = handler;  
    }

    getTransactionData() {
        const type = document.getElementById('type').value;
        const category = document.getElementById('category').value;
        const amount = parseFloat(document.getElementById('amount').value);
        return { type, category, amount };
    }

    clearForm() {
        document.getElementById('transaction-form').reset();  
    }

    showError(message) {
        alert(message); 
    }
}
