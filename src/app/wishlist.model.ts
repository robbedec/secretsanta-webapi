
export class Wishlist {
    constructor(
        private _ownerName: string,
        private _presents = new Array<string>(),
        private _dateAdded = new Date()
    ) {}

    get ownerName(): string {
        return this._ownerName;
    }

    get dateAdded(): Date {
        return this._dateAdded;
    }

    get presents(): string[] {
        return this._presents;
    }

    addPresent(name: string){
        this._presents.push(name);
    }

    static fromJSON(json: any): Wishlist {
        const rec = new Wishlist(json.ownerName, json.presents, json.dateAdded);
        return rec;
    }
}