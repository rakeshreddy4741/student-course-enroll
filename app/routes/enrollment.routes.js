const controller = require("../controllers/enrollment.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


  app.post("/api/getallenrolled", controller.readAllEnrolled);
  app.post("/api/enroll", controller.enroll);


};