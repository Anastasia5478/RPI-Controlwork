export default class TransactionItemComponent {
    constructor(transaction) {
        this.transaction = transaction;
    }

    render() {
        const transactionElement = document.createElement('div');
        transactionElement.classList.add('transaction', this.transaction.type);
        transactionElement.innerHTML = `
            <span>${this.transaction.category}</span>
            <span>${this.transaction.amount} руб.</span>
            <button data-id="${this.transaction.id}">Удалить</button>
        `;

        transactionElement.querySelector('button').addEventListener('click', (e) => {
            this.onDeleteTransaction(e.target.dataset.id);
        });

        return transactionElement;
    }

    onDeleteTransaction(id) {
    }
}
