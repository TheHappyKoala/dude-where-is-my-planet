"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (query, data) {
    var match = data
        .map(function (entry) { return entry.name.toLowerCase(); })
        .findIndex(function (entry) { return entry.includes(query.toLowerCase()); });
    return match !== -1 ? data[match].id : query;
});
