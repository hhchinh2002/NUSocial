module.exports = (sequelize, DataTypes) => {
    const Chat = sequelize.define("Chat", {
        sender_nusocial_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return Chat;
};

