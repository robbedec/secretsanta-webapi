import { Wishlist } from './wishlist.model';

export class User {
  private _id: number;
  constructor(
    private _username: string,
    private _firstName: string,
    private _lastName: string,
    private _email: string,
    public _avatarUrl: string,
    public _wishlist: Wishlist
  ) {}

  get username(): string {
    return this._username;
  }

  get name(): string {
    return this._firstName + ' ' + this._lastName;
  }

  get email(): string {
    return this._email;
  }

  get avatarUrl(): string {
    return this._avatarUrl;
  }

  get wishlist(): Wishlist {
    return this._wishlist;
  }

  static fromJSON(json: any): User {
    let rec = null;
    if (json != null) {
      rec = new User(
        json.username,
        json.firstName,
        json.lastName,
        json.email,
        json.avatarUrl,
        Wishlist.fromJSON(json.wishlist)
      );
      rec._id = json.id;
    }
    return rec;
  }
}
