const db = require("../models");
const Bodega = db.bodegas;
const Op = db.Sequelize.Op;

// Create and Save a new Bodega
exports.create = (req, res) => {
    // Save Tutorial in the database
    Bodega.create(req.body)
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

// Retrieve all Bodegas from the database.
exports.findAll = (req, res) => {
    const title = req.query.bodNombre;
    var condition = title ? { bodNombre: { [Op.iLike]: `%${title}%` } } : null;

    Bodega.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Bodegas."
            });
        });
};

// Find a single Bodega with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Bodega.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Bodega with id=" + id
            });
        });
};

// Update a Bodega by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Bodega.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Bodega was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Bodega with id=${id}. Maybe Bodega was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Bodega with id=" + id
            });
        });
};

// Delete a Bodega with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Bodega.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Bodega was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Bodega with id=${id}. Maybe Bodega was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Bodega with id=" + id
            });
        });
};

// Delete all Bodegas from the database.
exports.deleteAll = (req, res) => {
    Bodega.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Bodegas were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Bodegas."
            });
        });
};

// Find all published Bodegas
exports.findAllPublished = (req, res) => {
    Bodega.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Bodegas."
            });
        });
};