module.exports = app => {
    const bodegas = require("../controllers/bodega.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", bodegas.create);

    // Retrieve all Tutorials
    router.get("/", bodegas.findAll);

    // Retrieve all published Tutorials
    router.get("/published", bodegas.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", bodegas.findOne);

    // Update a Tutorial with id
    router.put("/:id", bodegas.update);

    // Delete a Tutorial with id
    router.delete("/:id", bodegas.delete);

    // Create a new Tutorial
    router.delete("/", bodegas.deleteAll);

    app.use('/api/bodegas', router);
};