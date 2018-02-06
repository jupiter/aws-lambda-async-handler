"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wrapHandler(handler) {
    return (event, context, callback) => {
        handler(event, context)
            .then((response) => {
            callback(null, response);
        })
            .catch(callback);
    };
}
exports.default = wrapHandler;
//# sourceMappingURL=index.js.map