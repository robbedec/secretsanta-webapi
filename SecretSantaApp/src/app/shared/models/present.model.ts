export class Present {
    private _id: number;
    constructor(private _name, private _price: number, private _category) {}

    static fromJSON(json: any): Present {
        const ing = new Present(json.name, json.price, json.category);
        ing._id = json.id;
        return ing;
    }
    set id(id: number) {
        this._id = id;
    }

    get id() {
        return this._id;
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