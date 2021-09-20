module.exports = (sequelize, Sequelize) => {
    return sequelize.define("bodega", {
        bodId: {
            type: Sequelize.INTEGER
        },
        bodNombre: {
            type: Sequelize.STRING
        },
        bodDireccion: {
            type: Sequelize.STRING
        },
        bodLatitud: {
            type: Sequelize.STRING
        },
        bodLongitud: {
            type: Sequelize.STRING
        }
    });
};