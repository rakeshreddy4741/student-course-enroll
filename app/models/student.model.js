const {DataTypes} = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Student;
};