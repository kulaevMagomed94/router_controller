const { Router } = require("express");
const { brandsController } = require("../controllers/brands.controller");

const router = Router();

router.get("/brands", brandsController.getBrands);
router.post("/brands", brandsController.createBrands);

module.exports = router;
