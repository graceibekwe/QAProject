module.exports = (sequelize, DataTypes) => {
    return sequelize.define('listing', {
        address: {
            type: DataTypes.STRING
        }, 
        postcode: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        }, 
        Hold: {
            type: DataTypes.STRING
        },
        photo: {
            type: DataTypes.STRING
        }
    });
}
