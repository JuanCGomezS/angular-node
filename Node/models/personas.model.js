module.exports = (sequelize, Sequelize) => {
    return sequelize.define("personas", {
        per_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        per_type_identification: {
            type: Sequelize.NUMBER
        },
        per_identification: {
            type: Sequelize.STRING
        },
        per_first_name: {
            type: Sequelize.STRING
        },
        per_last_name: {
            type: Sequelize.STRING
        },
        per_gender: {
            type: Sequelize.NUMBER
        },
        per_email: {
            type: Sequelize.STRING
        },
        per_birth_date: {
            type: Sequelize.DATE
        },
        per_address: {
            type: Sequelize.STRING
        },
        per_phone: {
            type: Sequelize.NUMBER
        },
        per_city: {
            type: Sequelize.NUMBER
        },
        per_status: {
            type: Sequelize.STRING
        }
    });
};