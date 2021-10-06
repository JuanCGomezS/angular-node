module.exports = app => {
    const basica_tabla = require("../controllers/basica_tabla.controller");

    var router = require("express").Router();

    // Create a new Persona
    router.post("/", basica_tabla.create);

    // Retrieve all Personas
    router.get("/", basica_tabla.findAll);

    // Retrieve all published Personas
    router.get("/published", basica_tabla.findAllPublished);

    // Retrieve a single Persona with id
    router.get("/:id", basica_tabla.findOne);

    // Update a Persona with id
    router.put("/:id", basica_tabla.update);

    // Delete a Persona with id
    router.delete("/:id", basica_tabla.delete);

    // Create a new Persona
    router.delete("/", basica_tabla.deleteAll);

    app.use('/api/basica_tabla', router);
};