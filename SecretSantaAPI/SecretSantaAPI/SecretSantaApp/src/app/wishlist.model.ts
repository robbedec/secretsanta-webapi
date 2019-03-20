import { Present } from "./present.model";

export class Wishlist {
    constructor(
        private _ownerName: string,
        private _presents = new Array<Present>(),
        private _dateAdded = new Date()
    ) {}

    get ownerName(): string {
        return this._ownerName;
    }

    get dateAdded(): Date {
        return this._dateAdded;
    }

    get presents(): Present[] {
        return this._presents;
    }

    addPresent(present: Present){
        this._presents.push(present);
    }

    static fromJSON(json: any): Wishlist {
        const rec = new Wishlist(json.ownerName, json.presents.map(Present.fromJSON), json.dateAdded);
        return rec;
    }
}