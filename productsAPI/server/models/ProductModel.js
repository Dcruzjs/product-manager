const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: [3, "The name must be at least 3 characters long."],
    },
    price: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("authors", ProductSchema);

const ProductModel = {
  createProduct: function (newProduct) {
    return Product.create(newProduct);
  },
  getProducts: function () {
    return Product.find();
  },
  getProduct: function (id) {
    console.log("ProductModel =>:", id);
    return Product.findOne({ _id: id.id });
  },
  updateProduct: function (condition, fieldsToUpdate) {
    return Product.findOneAndUpdate(
      condition,
      { $set: fieldsToUpdate },
      { new: true }
    );
  },
  deleteProduct: function (id) {
    return Product.remove(id);
  },
};

module.exports = ProductModel;
