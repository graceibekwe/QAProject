
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('applicants', {
        name: {
            type: DataTypes.STRING
        }, 
        phoneNumber: {
            type: DataTypes.STRING
        },
        budget: {
            type: DataTypes.INTEGER
        }

    });
}