export default class HeaderComponent {
    constructor(title) {
        this.title = title;
    }

    render() {
        const header = document.createElement('h1');
        header.textContent = this.title;
        return header;
    }
}
