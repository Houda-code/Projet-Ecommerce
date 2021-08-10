const router = require("express").Router();
const productControllers = require("../controllers/product.controllers");

router.get("/", productControllers.getProducts);
router.post("/", productControllers.createProduct);
router.get("/:productid", productControllers.getProductById);
router.get("/auto_complete", productControllers.getProductAutoComplete);

router.delete("/:productid", productControllers.deleteProduct);
router.put("/:productid", productControllers.updateProduct);



module.exports = router;