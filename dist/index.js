"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var naifObjectIdNumbers_json_1 = __importDefault(require("./src/data/naifObjectIdNumbers.json"));
var mapNameToId_1 = __importDefault(require("./src/map-name-to-id/mapNameToId"));
var callHORIZONS_1 = __importDefault(require("./src/call-horizons/callHORIZONS"));
var parseOutputIntoJson_1 = __importDefault(require("./src/parse-output-into-json/parseOutputIntoJson"));
var fs_1 = __importDefault(require("fs"));
var node_emoji_1 = __importDefault(require("node-emoji"));
var emojify = node_emoji_1.default.emojify;
function fetchBodies(options) {
    return __awaiter(this, void 0, void 0, function () {
        var center, getErrorMessage, data, _i, _a, body, response, json, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    center = mapNameToId_1.default(options.center, naifObjectIdNumbers_json_1.default);
                    getErrorMessage = function () {
                        return emojify('\n\t:robot_face: ERROR :x::x::x: DOES NOT COMPUTE :exclamation::exclamation::exclamation:\n');
                    };
                    if (isNaN(center))
                        throw new Error("\n        " + getErrorMessage() + "\n        " + options.center + " is not a valid origin for the coordinate system. For a valid list of coordinate origins, see: \n      \n        " + JSON.stringify(naifObjectIdNumbers_json_1.default, null, 10) + "\n      ");
                    if (!(options.units === 'AU-D' ||
                        options.units === 'KM-D' ||
                        options.units === 'KM-S'))
                        throw new Error("\n        " + getErrorMessage() + "\n        " + options.units + " is not a valid set of units. Valid units are limited to the following:\n\n          AU-D\n          or KM-D \n          or KM-S\n      ");
                    data = [];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 7, , 8]);
                    _i = 0, _a = options.bodies;
                    _b.label = 2;
                case 2:
                    if (!(_i < _a.length)) return [3 /*break*/, 6];
                    body = _a[_i];
                    return [4 /*yield*/, callHORIZONS_1.default({
                            url: options.url,
                            body: mapNameToId_1.default(body, naifObjectIdNumbers_json_1.default).toString(),
                            units: options.units,
                            center: "@" + center.toString(),
                            start: options.start,
                            stop: options.stop,
                            step: options.step
                        })];
                case 3:
                    response = _b.sent();
                    return [4 /*yield*/, parseOutputIntoJson_1.default(response)];
                case 4:
                    json = _b.sent();
                    data.push(json);
                    _b.label = 5;
                case 5:
                    _i++;
                    return [3 /*break*/, 2];
                case 6:
                    if (options.save)
                        fs_1.default.writeFile("./" + options.save + ".json", JSON.stringify(data), 'utf8', function (error) {
                            if (error)
                                throw error;
                            console.log('\x1b[36m%s\x1b[0m', emojify("\n\n\n:unicorn_face: :owl: :earth_americas: Results:\n"));
                            console.log(data);
                            console.log('\x1b[35m', emojify("\nVectors have been saved to :file_folder: ./" + options.save + ".json"));
                            console.log('\x1b[30m', emojify('\nBrought to you by :koala: :koala: :koala: TheHappyKoala :koala: :koala: :koala:\n\n\n'));
                        });
                    return [3 /*break*/, 8];
                case 7:
                    error_1 = _b.sent();
                    console.log(error_1);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
exports.fetchBodies = fetchBodies;
