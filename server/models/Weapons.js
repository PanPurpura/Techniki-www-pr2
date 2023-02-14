module.exports = (sequelize, DataTypes) => {
    const Weapons = sequelize.define("Weapons", {
        photo: {
            type: DataTypes.BLOB('long'),
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        bullets_num: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

    return Weapons;
};