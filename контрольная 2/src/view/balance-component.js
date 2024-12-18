export default class BalanceComponent {
    constructor() {
        this.balanceElement = document.createElement('h2');
        this.balanceElement.innerHTML = `Общий баланс: <span id="total-balance">0</span> руб.`;
    }

    render() {
        return this.balanceElement;
    }

    updateBalance(balance) {
        const balanceSpan = this.balanceElement.querySelector('#total-balance');
        balanceSpan.textContent = balance;
    }
}
