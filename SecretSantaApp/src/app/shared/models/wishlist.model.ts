import { Present } from './present.model';

export class Wishlist {
  private _id: number;

  constructor(
    private _ownerName: string,
    private _presents = new Array<Present>(),
    private _dateAdded = new Date()
  ) {}

  get id(): number {
    return this._id;
  }

  get ownerName(): string {
    return this._ownerName;
  }

  get dateAdded(): Date {
    return this._dateAdded;
  }

  get presents(): Present[] {
    return this._presents;
  }

  addPresent(present: Present) {
    this._presents.push(present);
  }

  removePresent(present: Present) {
    this._presents.splice(this._presents.indexOf(present), 1);
  }

  static fromJSON(json: any): Wishlist {
    const rec = new Wishlist(
      json.ownerName,
      json.presents.map(Present.fromJSON),
      json.dateAdded
    );
    rec._id = json.id;
    return rec;
  }

  toJSON(): any {
    return {
      id: this._id,
      ownerName: this._ownerName,
      dateAdded: this._dateAdded,
      presents: this.presents.map(ing => ing.toJSON())
    };
  }
}
