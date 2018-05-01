"use strict";
exports.__esModule = true;
var Presenter = /** @class */ (function () {
    function Presenter(view, model, bus) {
        this.view = view;
        this.model = model;
        this.bus = bus;
        console.log('Creating Presenter PRE BUS');
        this._bus = bus;
        this._view = view;
        this._model = model;
        this.Subscribe();
    }
    Presenter.prototype.Subscribe = function () {
        var _this = this;
        console.log('subscribed');
        this._bus.on('AddUser', function (user) {
            console.log('in');
            _this._model.saveUser(user);
        });
        this._bus.on('UserAdded', function (user) {
            console.log('in');
            _this._view.WriteUser(user);
        });
        this._bus.on('GetUsers', function () {
            console.log('in');
            _this._model.sendUsers();
        });
        this._bus.on('UsersSent', function (users) {
            console.log('in');
            _this._view.WriteUsers(users);
        });
    };
    return Presenter;
}());
exports.Presenter = Presenter;
