var appRouter = function(app) {

    app.get("/api", function(req, res) {
         res.send("This is a test node app running in Azure Cloud.");
    });

}

module.exports = appRouter;
