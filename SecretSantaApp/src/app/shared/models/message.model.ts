import { User } from '../../shared/models/user.model';

export class Message {
  private _id: number;

  constructor(private _sender: User, private _content: String) {}

  get user(): User {
    return this._sender;
  }

  get content(): String {
    return this._content;
  }

  static fromJSON(json: any): Message {
    const rec = new Message(User.fromJSON(json.sender), json.content);
    rec._id = json.id;
    return rec;
  }

  toJSON(): any {
    return {
      id: this._id,
      sender: this._sender,
      content: this._content
    };
  }
}
