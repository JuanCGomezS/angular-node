module.exports = app => {
    const basica_tipo = require("../controllers/basica_tipo.controller");

    var router = require("express").Router();

    router.post("/", basica_tipo.create);

    router.get("/", basica_tipo.findAll);

    router.get("/published", basica_tipo.findAllPublished);

    router.get("/:id", basica_tipo.findOne);

    router.put("/:id", basica_tipo.update);

    router.delete("/:id", basica_tipo.delete);

    router.delete("/", basica_tipo.deleteAll);

    app.use('/api/basica_tipo', router);
};