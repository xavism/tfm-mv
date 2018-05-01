import { IView } from "../View/view";
import { EventBus } from "../Xcutting/EventBus";
import { IModel } from "../Model/model";

export interface IPresenter {

}

export class Presenter implements IPresenter {

    private readonly _bus: EventBus;
    private readonly _view: IView;
    private readonly _model: IModel;

    constructor(private view: IView, private model: IModel, private bus: EventBus) {
        this._bus = bus;
        this._view = view;
        this._model = model;
        this.Subscribe();
    }

    private Subscribe() {
        console.log('subscribed')
        this._bus.on('AddUser', (user: string) => {
            this._model.saveUser(user);
        });
        this._bus.on('UserAdded', (user: string) => {
            this._view.WriteUser(user);
        });
        this._bus.on('GetUsers', () => {
            this._model.sendUsers();
        });
        this._bus.on('UsersSent', (users: string[]) => {
            this._view.WriteUsers(users);
        })
    }
}