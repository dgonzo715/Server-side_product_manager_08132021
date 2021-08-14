const { updateItem } = require("../controllers/productmanager.controller");
const ProductManagerController = require("../controllers/productmanager.controller");

module.exports = (app) => {
    app.get("/api/productmanager", ProductManagerController.getAll);
    app.post("/api/productmanager", ProductManagerController.create);
    app.get("/api/productmanager/:id", ProductManagerController.getOneId);
    app.put("/api/productmanager/:id", ProductManagerController.updateItem);
    app.delete("/api/productmanager/:id", ProductManagerController.deleteItem);
}