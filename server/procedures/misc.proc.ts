import { row } from '../config/db';

export function read(id: number) {
    return row('getProductsByCategory', []);
}