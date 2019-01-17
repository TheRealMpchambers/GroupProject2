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
    db.Schedule.create(req.body
      //need to correlate the req.body.?? and the key in the object that is created on the front ed js post for creating a new post
      ).then(function(dbSchedule) {
      res.json(dbSchedule);
    });
  });

  // Delete an example by id
  app.delete("/api/schedule/:id", function(req, res) {
    db.Schedule.destroy({ where: { id: req.params.id } }).then(function(dbSchedule) {
      res.json(dbSchedule);
    });
  });

  app.get("/api/weeks", function(req, res) {
    db.Weeks.findAll({}).then(function(dbWeeks) {
      res.json(dbWeeks);
    });
  });

  app.post("/api/weeks", function(req, res) {
    db.Weeks.create(req.body).then(function(dbWeeks) {
      res.json(dbWeeks);
    });
  });

  app.delete("/api/weeks/ :id", function(req, res) {
    app.Weeks.destroy({ where: { id: req.params.id } }).then(function(dbWeeks) {
      res.json(dbWeeks);
    });
  });

  app.get("/api/owners", function(req, res) {
    db.Owners.findAll({}).then(function(dbOwners) {
      res.json(dbOwners);
    });
  });

  app.post("/api/owners", function(req, res) {
    db.Owners.create(req.body).then(function(dbOwners) {
      res.json(dbOwners);
    });
  });

  app.delete("/api/owners/ :id", function(req, res) {
    db.Owners.destroy({ where: { id: req.params.id } }).then(function(dbOwners) {
      res.json(dbOwners);
    });
  });

  // getting owners roster
  app.get("/api/owners/roster", function(req, res) {
    // notice the lowercase "o" on owners, name of the actual tabel, not the model
    db.owners.findAll({}).then(function(data) {
      res.json(data);
    });
  });
};


