export default class TransactionFormComponent {
    constructor() {
        this.form = document.createElement('form');
        this.form.id = 'transaction-form';

        this.typeSelect = document.createElement('select');
        this.typeSelect.id = 'type';
        this.typeSelect.required = true;
        this.typeSelect.innerHTML = `
            <option value="">Выберите тип операции</option>
            <option value="income">Доход</option>
            <option value="expense">Расход</option>
        `;

        this.categorySelect = document.createElement('select');
        this.categorySelect.id = 'category';
        this.categorySelect.required = true;
        this.categorySelect.innerHTML = `
            <option value="">Выберите категорию</option>
            <option value="salary">Зарплата</option>
            <option value="food">Еда</option>
            <option value="transport">Транспорт</option>
            <option value="entertainment">Развлечения</option>
        `;

        this.amountInput = document.createElement('input');
        this.amountInput.type = 'number';
        this.amountInput.id = 'amount';
        this.amountInput.placeholder = 'Сумма';
        this.amountInput.required = true;

        this.submitButton = document.createElement('button');
        this.submitButton.type = 'submit';
        this.submitButton.textContent = 'Добавить операцию';
    }

    render() {
        this.form.appendChild(this.typeSelect);
        this.form.appendChild(this.categorySelect);
        this.form.appendChild(this.amountInput);
        this.form.appendChild(this.submitButton);
        return this.form;
    }

    clear() {
        this.form.reset();
    }
}
