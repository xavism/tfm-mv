"use strict";
exports.__esModule = true;
var Model = /** @class */ (function () {
    function Model(bus) {
        this.bus = bus;
        this.users = [];
        console.log('Creating Model PRE BUS');
        this._bus = bus;
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
