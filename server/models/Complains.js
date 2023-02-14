module.exports = (sequelize, DataTypes) => {
    const Complains = sequelize.define("Complains", {
        imie: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nazwisko: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        temat: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        wiadomosc: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return Complains;
};