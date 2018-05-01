"use strict";
exports.__esModule = true;
var typed_prompts_1 = require("typed-prompts");
var EventBus_1 = require("./EventBus");
var presenter_1 = require("./presenter");
var model_1 = require("./model");
var View = /** @class */ (function () {
    /**
     *
     */
    function View() {
        this._bus = EventBus_1.EventBus.Instance();
    }
    View.prototype.WriteUser = function (user) {
        console.log('User Added: ' + user);
        this.Main();
    };
    View.prototype.WriteUsers = function (users) {
        users.forEach(function (user) { return console.log(user); });
        this.Main();
    };
    View.prototype.Main = function () {
        this.Execute();
    };
    // Decision Tree
    View.prototype.Execute = function () {
        var _this = this;
        typed_prompts_1.prompt([
            typed_prompts_1.list('todo', 'What you want to do?', [
                'Add User',
                'Get Users',
                'Add Home',
                'Exit'
            ])
        ])
            .then(function (answers) {
            switch (answers.todo) {
                case 'Add User':
                    typed_prompts_1.prompt([
                        typed_prompts_1.input('fullName', 'Add your full name')
                    ])
                        .then(function (userInput) {
                        _this._bus.emit('AddUser', userInput.fullName);
                    });
                    break;
                case 'Get Users':
                    _this._bus.emit('GetUsers');
            }
        });
    };
    return View;
}());
exports.View = View;
var view = new View();
var model = new model_1.Model();
var presenter = new presenter_1.Presenter(view, model);
view.Main();
