import Product from "../models/productModels.js";

export const addProduct = async(req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(401).json({ message: error.message })
    }
};

export const getAllProduct = async(req, res) => {
    try {
        const product = await Product.find();
        res.json(product);
    } catch (error) {
        res.status(501).json({ message: error.message });
    }
};

export const deleteProduct = async(req, res) => {
    try {


        const product = await Product.findByIdAndDelete(req.params.id);
        res.json({ message: "Product delete Successfully" })
    } catch (error) {
        res.status(403).json({ message: error.message });
    }
};
