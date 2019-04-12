"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var email_controller_1 = require("./email.controller");
var controller = new email_controller_1.default();
var express = require('express');
var router = express.Router();
router.post('/contactus/', controller.contactUs);
module.exports = router;
//# sourceMappingURL=index.js.map