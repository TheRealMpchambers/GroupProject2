var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/schedule", function(req, res) {
    db.Schedule.findAll({}).then(function(dbSchedule) {
      res.json(dbSchedule);
    });
  });

  // Create a new example
  app.post("/api/schedule", function(req, res) {
    db.Schedule.create(req.body).then(function(dbSchedule) {
      res.json(dbSchedule);
    });
  });

  // Delete an example by id
  app.delete("/api/schedule/:id", function(req, res) {
    db.Schedule.destroy({ where: { id: req.params.id } }).then(function(dbSchedule) {
      res.json(dbSchedule);
    });
  });
};
