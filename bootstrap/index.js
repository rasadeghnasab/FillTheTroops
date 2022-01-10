module.exports = (app) => {
    require("./logging");
    require("./routes")(app);

    return require("./server")(app);
};
