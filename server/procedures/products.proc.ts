import { row, rows } from "../config/db";

export function all(): Promise<Array<models.IProduct>> {
  return rows("getAllProducts");
}

export function product(id: number): Promise<Array<models.IProduct>> {
  return row("getProductByID");
}
