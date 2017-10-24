import { row, rows } from "../config/db";

export function all(): Promise<Array<models.IProduct>> {
  return rows("getAllProducts");
}

export function product(): Promise<Array<models.IProduct>> {
  return row("getProductByID");
}
