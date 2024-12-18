export class Model {
    constructor() {
        this.transactions = [];
    }

    addTransaction(type, category, amount) {
        const transaction = {
            id: Date.now(),
            type,
            category,
            amount
        };
        this.transactions.push(transaction);
    }

    deleteTransaction(id) {
        this.transactions = this.transactions.filter(t => t.id !== id);
    }

    filterTransactions(typeFilter, categoryFilter) {
        return this.transactions.filter(transaction => {
            const typeMatch = typeFilter ? transaction.type === typeFilter : true;
            const categoryMatch = categoryFilter ? transaction.category === categoryFilter : true;
            return typeMatch && categoryMatch;
        });
    }

    getTotalBalance() {
        return this.transactions.reduce((balance, t) => {
            return t.type === 'income' ? balance + t.amount : balance - t.amount;
        }, 0);
    }
}
