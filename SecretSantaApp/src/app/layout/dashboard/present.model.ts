export class Present {
    constructor(private _name, private _price: number, private _category) {}

    static fromJSON(json: any): Present {
        const ing = new Present(json.name, json.price, json.category);
        return ing;
    }

    get name(){
        return this._name;
    }

    get price(){
        return this._price;
    }

    get category(){
        return this._category;
    }

    toJSON(): any {
        return {name: this._name, price: this._price, category: this._category};
    }
}