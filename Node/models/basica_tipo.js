const BasicaTabla = require('./basica_tabla');

module.exports = (sequelize, Sequelize) => {

    const BasicaTipo = sequelize.define("basica_tipo", {
        btl_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        btl_code: {
            type: Sequelize.STRING
        },
        btl_name: {
            type: Sequelize.STRING
        },
        btl_order: {
            type: Sequelize.STRING
        },
        btl_desc1: {
            type: Sequelize.NUMBER
        },
        btl_desc2: {
            type: Sequelize.STRING
        },
        btl_desc3: {
            type: Sequelize.STRING
        },
        btl_date: {
            type: Sequelize.DATE
        },        
        btl_status: {
            type: Sequelize.STRING
        },
        /* btl_bat_id: {
            type: Sequelize.NUMBER
        }, */
    });
    
    
    BasicaTipo.associate = (models) => {
        BasicaTipo.belongsTo(BasicaTabla, {as: 'BasicaTabla', foreignKey: 'bat_id'});
        //BasicaTipo.belongsTo(models.BasicaTabla, {foreignKey: 'btl_bat_id'});
      };

    return BasicaTipo;
};