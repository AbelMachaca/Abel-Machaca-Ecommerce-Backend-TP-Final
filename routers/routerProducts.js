import { Router } from "express"

import { 
    listProductsController,
    listProductByIdController,
    addProductController,
    updateProductController,
    deleteProductController
} from "../controllers/productController.js"
import { checkAdmin } from "../middlewares/adminCheck.js"

const products = new Router()
// controllers
products.get("/", listProductsController)
products.get("/:id_product", listProductByIdController)
products.post("/", checkAdmin ,addProductController)
products.put("/:id_product", checkAdmin ,updateProductController) 
products.delete("/:id_product", checkAdmin ,deleteProductController) 

export default products