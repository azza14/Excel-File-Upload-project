module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define('tutorials', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            // autoIncrement : true
        },
        title: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING,
        }
    }, {
        freezeTableName: true
    });
    return Tutorial;

}