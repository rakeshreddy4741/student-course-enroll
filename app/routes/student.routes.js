const controller = require("../controllers/student.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


  app.post("/api/getallstudent", controller.readAll);
  app.post("/api/createstudent", controller.createStudent);
  app.post("/api/updatestudent", controller.updateStudent);
  app.post("/api/getonestudent", controller.getOneStudent);
  app.post("/api/deletestudent", controller.deleteStudent);

};