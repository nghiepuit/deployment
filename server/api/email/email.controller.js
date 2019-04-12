"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var base_1 = require("./../base");
var config_1 = require("./../../config");
var config = new config_1.default();
var EmailCtrl = /** @class */ (function (_super) {
    tslib_1.__extends(EmailCtrl, _super);
    function EmailCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = '';
        _this.contactUs = function (req, res) {
            req.body.to = config.CONTACT_US_EMAIL;
            _this.email(req.body);
            res.status(200).json({ message: 'Contact email sent successfully' });
        };
        return _this;
    }
    return EmailCtrl;
}(base_1.default));
exports.default = EmailCtrl;
//# sourceMappingURL=email.controller.js.map