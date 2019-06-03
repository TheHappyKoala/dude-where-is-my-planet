"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (_a) {
    var url = _a.url, body = _a.body, units = _a.units, center = _a.center, start = _a.start, stop = _a.stop, step = _a.step;
    return [
        "" + url,
        "&COMMAND='" + body + "'",
        "&OUT_UNITS='" + units + "'",
        "&CENTER=" + center,
        "&MAKE_EPHEM='YES'",
        "&TABLE_TYPE='VECTORS'",
        "&START_TIME='" + start + "'",
        "&STOP_TIME='" + stop + "'",
        "&STEP_SIZE='" + step + "'",
        "&QUANTITIES='1,9,20,23,24'&CSV_FORMAT='YES'"
    ].join('');
});
