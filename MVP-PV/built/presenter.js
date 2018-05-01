"use strict";
exports.__esModule = true;
var EventBus_1 = require("./EventBus");
var Presenter = /** @class */ (function () {
    function Presenter(view, model) {
        this.view = view;
        this.model = model;
        this._bus = EventBus_1.EventBus.Instance();
        this._view = view;
        this._model = model;
        this.Subscribe();
    }
    Presenter.prototype.Subscribe = function () {
        var _this = this;
        this._bus.on('AddUser', function (user) {
            _this._model.saveUser(user);
        });
        this._bus.on('UserAdded', function (user) {
            _this._view.WriteUser(user);
        });
        this._bus.on('GetUsers', function () {
            _this._model.sendUsers();
        });
        this._bus.on('UsersSent', function (users) {
            _this._view.WriteUsers(users);
        });
    };
    return Presenter;
}());
exports.Presenter = Presenter;
