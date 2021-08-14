const ProductManager = require("../models/productmanager.model");

module.exports ={
    getAll: (req, res) => {
        ProductManager.find({})
        .then((allProductManageritems) => {
            console.log(allProductManageritems);
            res.json(allProductManageritems);
        })
        .catch((err) => {
          console.log("Error was found in getAll");
          console.log(err);
          res.json(err);  
        });
    },

    create: (req, res) => {
        console.log(req.body);

        ProductManager.create( req.body )
        .then((newProductManageritem) => {
            console.log(newProductManageritem);
            res.json(newProductManageritem)
        })
        .catch((err) => {
           console.log("Error was found in Create");
           console.log(err);
           res.json(err); 
        });
    },

    getOneId: (req, res) => {
        console.log(req.params.id);

        ProductManager.findById( req.params.id )
        .then((oneProductManageritem) => {
            console.log(oneProductManageritem);
            res.json(oneProductManageritem);
        })
        .catch((err) => {
           console.log("Error was found in getOneId");
           console.log(err);
           res.json(err); 
        });
    },

    updateItem: (req, res) => {
        console.log(req.params.id);
        console.log(req.body);

        ProductManager.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
        .then((updatedProductManagerItem) => {
            console.log(updatedProductManagerItem);
            res.json(updatedProductManagerItem);
        })
        .catch((err) => {
           console.log("Error was found in update");
           console.log(err);
           res.json(err); 
        });
    },

    deleteItem: (req, res) => {
        console.log(req.params.id);

        ProductManager.findByIdAndDelete( req.params.id )
        .then((deletedProductManageritem) => {
            console.log(deletedProductManageritem);
            res.json(deletedProductManageritem);
        })
        .catch((err) => {
           console.log("Error was found in delete");
           console.log(err);
           res.json(err); 
        });
    },

}