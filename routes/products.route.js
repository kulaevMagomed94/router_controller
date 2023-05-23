const { Router } = require("express");

const { productsController } = require("../controllers/products.controller");

const router = Router();

router.get("/products", productsController.getProducts);
router.post("/products", productsController.createProducts);
router.delete("/products/:id", productsController.deleteProducts);

module.exports = router;
