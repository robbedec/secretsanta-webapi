import { User } from "../profile/user.model";


export class Group {
    private _id: number;

    constructor(
        private _groupName: string,
        private _members = new Array<User>()
    ) {}

    get groupName(): string {
        return this._groupName;
    }

    get members(): User[] {
        return this._members;
    }

    static fromJSON(json: any): Group {
        const rec = new Group(json.groupName, json.members.map(User.fromJSON));
        rec._id = json.id;
        return rec;
    }

    toJSON(): any {
        return {
            id: this._id,
            groupName: this._groupName,
            members: this._members
        };
    }
}