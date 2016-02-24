var appRouter = function(app) {

    var patronList = {
        "patronid": "0002000",
        "name": "test patron",
        "class": "FULL"
    }

    app.get("/api", function(req, res) {
         res.send("This is a test node app running in Azure Cloud.");
    });

     app.get("/api/patronlist", function(req, res) {
         return res.send(patronList);
    });

}

module.exports = appRouter;
