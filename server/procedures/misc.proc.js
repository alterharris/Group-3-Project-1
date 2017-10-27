"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
function read(id) {
    return db_1.row('getProductsByCategory', []);
}
exports.read = read;
