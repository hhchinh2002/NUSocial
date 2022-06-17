module.exports = (sequelize, DataTypes) => {
    const Students = sequelize.define("students", {
        nus_email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nusnet_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        course_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year_of_study: {
            type: DataTypes.INTEGER,
        }
    });

    return Students;
};
