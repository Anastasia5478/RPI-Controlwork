export default class TransactionListComponent {
    constructor() {
        this.container = document.createElement('div');
        this.container.id = 'transactions-list';
    }

    render(transactions) {
        this.container.innerHTML = '';
        transactions.forEach(transaction => {
            const transactionItem = new TransactionItemComponent(transaction);
            this.container.appendChild(transactionItem.render());
        });
        return this.container;
    }
}
