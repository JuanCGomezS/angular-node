const db = require("../models");
const Basica_tabla = db.basica_tabla;
const Op = db.Sequelize.Op;

// Create and Save a new Persona
exports.create = (req, res) => {
    // Save Tutorial in the database
    console.log(req.body)
    Basica_tabla.create(req.body)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

// Retrieve all personas from the database.
exports.findAll = (req, res) => {
    const title = req.query.batName;
    var condition = title ? { batName: { [Op.iLike]: `%${title}%` } } : null;

    Basica_tabla.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Personas."
            });
        });
};

// Find a single Persona with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Basica_tabla.findByPk(Number(id))
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Persona with id=" + id
            });
        });
};

// Update a Persona by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Basica_tabla.update(req.body, {
        where: { bat_id: Number(id) }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Persona was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Persona with id=${id}. Maybe Persona was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Persona with id=" + id
            });
        });
};

// Delete a Persona with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Basica_tabla.destroy({
        where: { bat_id: Number(id) }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Persona was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Persona with id=${id}. Maybe Persona was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Persona with id=" + id
            });
        });
};

// Delete all Personas from the database.
exports.deleteAll = (req, res) => {
    Basica_tabla.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Personas were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Personas."
            });
        });
};

// Find all published Personas
exports.findAllPublished = (req, res) => {
    Basica_tabla.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Personas."
            });
        });
};