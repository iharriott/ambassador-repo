import { Order } from "../order/order";
import { Product } from "../product/product";
import { User } from "../user/user";
export declare class Link {
    id: number;
    code: string;
    user: User;
    products: Product[];
    orders: Order[];
}
