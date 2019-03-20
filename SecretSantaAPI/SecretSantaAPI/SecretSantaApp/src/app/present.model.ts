export class Present {
    constructor(private _name, private _price: number) {}

    static fromJSON(json: any): Present {
        const ing = new Present(json.name, json.price);
        return ing;
    }

    get name(){
        return this._name;
    }

    get price(){
        return this._price;
    }
}