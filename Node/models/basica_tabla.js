module.exports = (sequelize, Sequelize) => {

    const BasicaTabla = sequelize.define("basica_tabla", {
        bat_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        bat_code: {
            type: Sequelize.STRING
        },
        bat_name: {
            type: Sequelize.STRING
        },
        bat_order: {
            type: Sequelize.STRING
        },
        bat_desc1: {
            type: Sequelize.NUMBER
        },
        bat_desc2: {
            type: Sequelize.STRING
        },
        bat_desc3: {
            type: Sequelize.STRING
        },
        bat_date: {
            type: Sequelize.DATE
        },        
        bat_status: {
            type: Sequelize.STRING
        }
    });

    return BasicaTabla;
};