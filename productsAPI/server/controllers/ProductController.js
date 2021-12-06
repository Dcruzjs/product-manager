const ProductModel = require("../models/ProductModel");

const ProductController = {
  createProduct: function (request, response) {
    console.log(request.body);
    // console.log(request.body.product);
    ProductModel.createProduct(request.body)
      .then((product) => {
        response.statusMessage = "success";
        response.status(201).json(product);
      })
      .catch((error) => response.json(error));
  },
  getProducts: function (request, response) {
    ProductModel.getProducts().then((products) => {
      response.statusMessage = "success";
      response.status(200).json({ products });
    });
  },
  getProduct: function (request, response) {
    console.log("request =>", request.params);
    ProductModel.getProduct(request.params)
      .then((product) => {
        if (product === null) throw new Error("That product doesn't exist");
        console.log("response => ", product);
        response.statusMessage = "success";
        response.status(200).json({ product });
      })
      .catch((error) => {
        console.log(error);
        response.status(404).json(error);
      });
  },
  updateProduct: function (request, response) {
    console.log("request.params: ", request.params);
    console.log("request.body: ", request.body);

    if (Object.keys(request.body).length === 0) {
      response.statusMessage =
        "You need to provide at least one of the following fields to update the product ('name')";
      response.status(406).end();
    } else {
      ProductModel.getProduct(request.params)
        .then((result) => {
          if (result === null) {
            throw new Error("That product doesn't exist");
          } else {
            ProductModel.updateProduct(
              { _id: request.params.id },
              {
                name: request.body.name,
              }
            ).then((result) => {
              response.status(202).json(result);
            });
          }
        })
        .catch((error) => {
          response.statusMessage = error.message;
          response.status(404).end();
        });
    }
  },
  deleteProduct: function (request, response) {
    console.log(request.params.id);
    ProductModel.getProduct(request.params)
      .then((product) => {
        if (product === null) {
          throw new Error("That product doesn't exist");
        } else {
          console.log("DELETING:", product.name);
          ProductModel.deleteProduct({ _id: product._id }).then((result) => {
            response.status(204).end();
          });
        }
      })
      .catch((error) => {
        response.statusMessage = error.message;
        response.status(404).end();
      });
  },
};

module.exports = ProductController;
