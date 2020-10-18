const path = require("path")
const root = path.join(__dirname, "../public");

module.exports = function (app) {
    
    // GET Method for exercise.html
    app.get("/exercise", (req, res) => {
        res.sendFile(root + "/exercise.html")
    });
  
    // GET Method for stats html
    app.get("/stats", (req, res) => {
        res.sendFile(root + "/stats.html")
    });
  };