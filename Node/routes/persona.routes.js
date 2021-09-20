module.exports = app => {
    const personas = require("../controllers/personas.controller");

    var router = require("express").Router();

    // Create a new Persona
    router.post("/", personas.create);

    // Retrieve all Personas
    router.get("/", personas.findAll);

    // Retrieve all published Personas
    router.get("/published", personas.findAllPublished);

    // Retrieve a single Persona with id
    router.get("/:id", personas.findOne);

    // Update a Persona with id
    router.put("/:id", personas.update);

    // Delete a Persona with id
    router.delete("/:id", personas.delete);

    // Create a new Persona
    router.delete("/", personas.deleteAll);

    app.use('/api/personas', router);
};