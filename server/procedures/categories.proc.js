"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
function all() {
    return db_1.rows("getAllCategories");
}
exports.all = all;
function category(id) {
    return db_1.row("getCategory");
}
exports.category = category;
