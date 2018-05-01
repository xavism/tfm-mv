"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var typescript_events_1 = require("typescript.events");
var EventBus = /** @class */ (function (_super) {
    __extends(EventBus, _super);
    function EventBus() {
        var _this = _super.call(this) || this;
        console.log('Bus created');
        return _this;
    }
    EventBus.Instance = function () {
        if (this.eventBus == null) {
            this.eventBus = new EventBus();
        }
        return this.eventBus;
    };
    EventBus.eventBus = null;
    return EventBus;
}(typescript_events_1.Event));
exports.EventBus = EventBus;
