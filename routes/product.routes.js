const router = require("express").Router();
const productControllers = require("../controllers/product.controllers");

router.get("/", productControllers.getProducts);
router.post("/", productControllers.createProduct);
router.delete("/:productid", productController.deleteProduct);
router.put("/:productid", productController.updateProduct);



module.exports = router;