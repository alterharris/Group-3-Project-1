"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../config/db");
function all() {
    return db_1.rows('GetAllCategories');
}
exports.all = all;
