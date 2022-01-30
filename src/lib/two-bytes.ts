export default class TwoBytes {
    store: string[];
    constructor(readonly index:number) {
        this.store = [];
    }

    get offset(): string {
        return (this.index * 16) .toString(16).padStart(8, '0');
    }
}