import { cartList, productList, userList } from "../repositories/index.js";
import { Ecommerce } from "./EcomerceService.js";
import { Products } from "./ProductService.js";

export const productManager = new Products( productList )
export const ecommerce = new Ecommerce( userList, cartList, productList )