import { productDao } from "../containers/daos/product/index.js";
import { cartDao } from "../containers/daos/cart/index.js";
import { userDao } from "../containers/daos/user/index.js"
import { ProductList } from "./repositoryProducts.js";
import { CartList } from "./repositoryCart.js";
import { UserList } from "./repositoryUser.js";

export const productList = new ProductList(productDao)
export const cartList = new CartList(cartDao)
export const userList = new UserList(userDao)