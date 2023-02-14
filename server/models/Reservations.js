module.exports = (sequelize, DataTypes) => {
    const Reservations = sequelize.define("Reservations", {
        bronie: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        data: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });


    return Reservations;
};