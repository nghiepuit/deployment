"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var PaymentMethodSchema = new mongoose.Schema({
    name: String,
    email: String,
    options: Object,
    q: String,
    active: { type: Boolean, default: true }
}, {
    versionKey: false,
    timestamps: true
});
PaymentMethodSchema.pre('save', function (next) {
    this.q = this.name ? this.name + ' ' : '';
    this.q += this.email ? this.email + ' ' : '';
    this.q += ' ';
    next();
});
exports.default = mongoose.model('PaymentMethod', PaymentMethodSchema);
//# sourceMappingURL=payment-method.model.js.map