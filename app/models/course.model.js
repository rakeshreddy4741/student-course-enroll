module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define("course", {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Course;
};