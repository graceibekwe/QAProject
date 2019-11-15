module.exports = (sequelize, DataTypes) => {
    return sequelize.define('viewings', {
            date: {
                type: DataTypes.STRING
            }
    });
}