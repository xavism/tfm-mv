import { EventBus } from "../XCutting/EventBus";

export interface IModel {
    saveUser(user: string);
    sendUsers();
}

export class Model implements IModel {

    private readonly _bus : EventBus;
    private users: string[] = []

    constructor(private bus: EventBus) {
        this._bus = bus;
    }

    public saveUser(user: string) {
        this.users.push(user);
        this._bus.emit('UserAdded', user);
    }

    public sendUsers() {
        this._bus.emit('UsersSent', this.users)
    }
}
