
module.exports = (sequelize, DataTypes) => {
    const Accounts = sequelize.define("Accounts", {
        login: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Accounts;
};