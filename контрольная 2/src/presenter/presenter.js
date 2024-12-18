import { Model } from '../model/model.js';
import { View } from '../view/view.js';

export class Presenter {
    constructor() {
        this.model = new Model();
        this.view = new View();
        
        // Связываем обработчики событий
        this.view.setOnDeleteTransactionHandler(this.handleDeleteTransaction.bind(this));
        this.view.renderTransactions(this.model.transactions);
        
        // Обработчик формы
        document.getElementById('transaction-form').addEventListener('submit', this.handleAddTransaction.bind(this));
        
        // Обработчики фильтров
        document.getElementById('type-filter').addEventListener('change', this.handleFilterChange.bind(this));
        document.getElementById('category-filter').addEventListener('change', this.handleFilterChange.bind(this));
    }

    handleAddTransaction(event) {
        event.preventDefault();
        const { type, category, amount } = this.view.getTransactionData();
        
        if (!type || !category || isNaN(amount) || amount <= 0) {
            this.view.showError('Пожалуйста, заполните все поля корректно.');
            return;
        }

        this.model.addTransaction(type, category, amount);
        this.view.clearForm();
        this.updateView();
    }

    handleDeleteTransaction(id) {
        this.model.deleteTransaction(id);
        this.updateView();
    }

    handleFilterChange() {
        const typeFilter = document.getElementById('type-filter').value;
        const categoryFilter = document.getElementById('category-filter').value;
        const filteredTransactions = this.model.filterTransactions(typeFilter, categoryFilter);
        this.view.renderTransactions(filteredTransactions);
    }

    updateView() {
        const transactions = this.model.transactions;
        this.view.renderTransactions(transactions);
        this.view.updateBalance(this.model.getTotalBalance());
    }
}
