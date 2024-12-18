export default class FiltersComponent {
    constructor() {
        this.filtersContainer = document.createElement('div');
        this.filtersContainer.classList.add('filters');

        this.typeFilter = document.createElement('select');
        this.typeFilter.id = 'type-filter';
        this.typeFilter.innerHTML = `
            <option value="">Все операции</option>
            <option value="income">Доходы</option>
            <option value="expense">Расходы</option>
        `;

        this.categoryFilter = document.createElement('select');
        this.categoryFilter.id = 'category-filter';
        this.categoryFilter.innerHTML = `
            <option value="">Все категории</option>
            <option value="salary">Зарплата</option>
            <option value="food">Еда</option>
            <option value="transport">Транспорт</option>
            <option value="entertainment">Развлечения</option>
        `;
    }

    render() {
        this.filtersContainer.appendChild(this.typeFilter);
        this.filtersContainer.appendChild(this.categoryFilter);
        return this.filtersContainer;
    }
}
