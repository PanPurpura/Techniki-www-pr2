module.exports = (sequelize, DataTypes) => {
    const Test = sequelize.define("Test", {
        photo: {
            type: DataTypes.BLOB,
            allowNull: true,
        },
    });

    return Test;
};