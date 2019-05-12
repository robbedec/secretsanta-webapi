import { User } from '../profile/user.model';
import { Message } from '../../shared/models/message.model';

export class Group {
  private _id: number;

  constructor(
    private _groupName: string,
    private _maxPrice: number,
    private _partyDate: Date,
    private _public: boolean,
    private _members = new Array<User>(),
    private _messages = new Array<Message>()
  ) {}

  get id(): number {
    return this._id;
  }

  get groupName(): string {
    return this._groupName;
  }

  get members(): User[] {
    return this._members;
  }

  get maxPrice() {
    return this._maxPrice;
  }

  get partyDate() {
    return this._partyDate;
  }

  get public() {
    return this._public;
  }

  get messages() {
    return this._messages;
  }

  static fromJSON(json: any): Group {
    // tslint:disable-next-line: max-line-length
    const rec = new Group(
      json.groupName,
      json.maxPrice,
      json.partyDate,
      json.public,
      json.members.map(User.fromJSON),
      json.messages.map(Message.fromJSON)
    );
    rec._id = json.id;
    return rec;
  }

  toJSON(): any {
    return {
      id: this._id,
      groupName: this._groupName,
      maxPrice: this._maxPrice,
      partyDate: this._partyDate,
      public: this._public,
      members: this._members,
      messages: this._messages
    };
  }
}
