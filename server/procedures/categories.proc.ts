import { row, rows } from "../config/db";

export function all(): Promise<Array<models.ICategory>> {
  return rows("getAllCategories");
}

export function category(id: number): Promise<Array<models.ICategory>> {
  return row("getCategory");
}
