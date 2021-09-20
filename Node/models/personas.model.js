module.exports = (sequelize, Sequelize) => {
    return sequelize.define("personas", {
        per_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        per_ident: {
            type: Sequelize.STRING
        },
        per_first_name: {
            type: Sequelize.STRING
        },
        per_last_name: {
            type: Sequelize.STRING
        },
        per_email: {
            type: Sequelize.STRING
        },
        per_birth_date: {
            type: Sequelize.DATE
        },
        per_address: {
            type: Sequelize.STRING
        }
    });
};