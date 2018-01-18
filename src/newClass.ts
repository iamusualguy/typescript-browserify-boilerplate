export class NewClass {
    string: string;

    constructor(private element: HTMLElement, s: string) {
        this.fill(s);
    }

    render() {
        this.element.innerText = this.string;
    }

    fill(s: string) {
        this.string = s;
    }
}
