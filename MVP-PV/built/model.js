"use strict";
exports.__esModule = true;
var EventBus_1 = require("./EventBus");
var Model = /** @class */ (function () {
    function Model() {
        this.users = [];
        this._bus = EventBus_1.EventBus.Instance();
    }
    Model.prototype.saveUser = function (user) {
        this.users.push(user);
        this._bus.emit('UserAdded', user);
    };
    Model.prototype.sendUsers = function () {
        this._bus.emit('UsersSent', this.users);
    };
    return Model;
}());
exports.Model = Model;
