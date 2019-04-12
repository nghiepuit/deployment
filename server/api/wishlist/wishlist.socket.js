"use strict";
/**
 * Broadcast updates to client when the model changes
 */
Object.defineProperty(exports, "__esModule", { value: true });
var wishlist_events_1 = require("./wishlist.events");
// Model events to emit
var events = ['save', 'remove'];
function register(socket) {
    // Bind model events to socket events
    for (var i = 0, eventsLength = events.length; i < eventsLength; i++) {
        var event_1 = events[i];
        var listener = createListener("wishlist:" + event_1, socket);
        wishlist_events_1.default.on(event_1, listener);
        socket.on('disconnect', removeListener(event_1, listener));
    }
}
exports.register = register;
function createListener(event, socket) {
    return function (doc) {
        socket.emit(event, doc);
    };
}
function removeListener(event, listener) {
    return function () {
        wishlist_events_1.default.removeListener(event, listener);
    };
}
//# sourceMappingURL=wishlist.socket.js.map