"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cross_fetch_1 = __importDefault(require("cross-fetch"));
var constructQuery_1 = __importDefault(require("../construct-query/constructQuery"));
exports.default = (function (options) {
    return cross_fetch_1.default(constructQuery_1.default({
        url: options.url,
        body: options.body,
        units: options.units,
        center: options.center,
        start: options.start,
        stop: options.stop,
        step: options.step
    })).then(function (response) { return response.text(); });
});
