"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
function all() {
    return db_1.rows("getAllProducts");
}
exports.all = all;
function product(id) {
    return db_1.row("getProductByID", [id]);
}
exports.product = product;
function prodcategories(categoryid) {
    return db_1.rows("getProductsByCategory", [categoryid]);
}
exports.prodcategories = prodcategories;
