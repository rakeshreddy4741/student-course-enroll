const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: 0,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
const Enrollment = sequelize.define("enrollment", {});

db.student = require("../models/student.model.js")(sequelize, Sequelize);
db.course = require("../models/course.model.js")(sequelize, Sequelize);
db.enrollment = Enrollment;

db.student.belongsToMany(db.course, {
  through: db.enrollment,
  foreignKey: "studentId",
  otherKey: "courseId"
});
db.course.belongsToMany(db.student, {
  through: db.enrollment,
  foreignKey: "courseId",
  otherKey: "studentId"
});

module.exports = db;