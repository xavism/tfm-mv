import { IView, View } from "./View/view";
import { IModel, Model } from "./Model/model";
import { IPresenter, Presenter } from "./Presenter/presenter";
import { EventBus } from "./Xcutting/EventBus";

var bus: EventBus = EventBus.Instance();
var view: IView = new View(bus);
var model: IModel = new Model(bus);
var presenter: IPresenter = new Presenter(view, model, bus);
view.Main()