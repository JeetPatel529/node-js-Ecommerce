const responseHandle = require("../helpers/responseHandlers")
const productModel = require("../models/productModel")

const createProduct = async (req, res) => {
    try {
        const { product_name, product_description, product_original_price, product_selling_price, connected_category } = req.body;

        const product_img = req.files['product_img'] ? req.files['product_img'][0].filename : null;

        const product = await productModel.create({
            product_name, product_description, product_original_price, product_selling_price, connected_category, product_img
        });

        return responseHandle.successResponse(res, 'product created successfully');
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            return responseHandle.validationErrorWithData(res, 'Validation Error', error.errors);
        } else {
            return responseHandle.errorResponse(res, 'Error occurred while creating product');
        }
    }
}

const productList = async (req, res) => {
    try {
        const product = await productModel.findAll({
            where: { is_delete: false }
        });


        return responseHandle.successResponseWithData(res, 'Categories fetched successfully', product);
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            return responseHandle.validationErrorWithData(res, 'Validation Error', error.errors);
        } else {
            return responseHandle.errorResponse(res, 'Error occurred while fetching categories');
        }
    }
}

const updateProduct = async (req, res) => {
    try {
        const { product_id, product_name, product_description } = req.body;

        const product = await productModel.findByPk(product_id);
        if (!product) {
            return responseHandle.errorResponse(res, 'product not found');
        }

        product.product_name = product_name;
        product.product_description = product_description;

        if (req.files['product_img']) {
            product.product_img = req.files['product_img'][0].filename;
        }

        if (req.files['product_bg_img']) {
            product.product_bg_img = req.files['product_bg_img'][0].filename;
        }

        await product.save();

        return responseHandle.successResponse(res, 'product updated successfully');
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            return responseHandle.validationErrorWithData(res, 'Validation Error', error.errors);
        } else {
            return responseHandle.errorResponse(res, 'Error occurred while updating product');
        }
    }

}


const deleteProduct = async (req, res) => {
    try {
        const { product_id } = req.body;

        const product = await productModel.findByPk(product_id);
        if (!product) {
            return responseHandle.errorResponse(res, 'product not found');
        }

        product.is_delete = true;
        await product.save();

        return responseHandle.successResponse(res, 'product deleted')
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            return responseHandle.validationErrorWithData(res, 'Validation Error', error.errors);
        } else {
            return responseHandle.errorResponse(res, 'Error occurred while updating product');
        }
    }
}

const recoverProduct = async (req, res) => {
    try {
        const { product_id } = req.body;

        const product = await productModel.findByPk(product_id);
        if (!product) {
            return responseHandle.errorResponse(res, 'product not found');
        }

        product.is_delete = false;
        await product.save();

        return responseHandle.successResponse(res, 'product deleted')
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            return responseHandle.validationErrorWithData(res, 'Validation Error', error.errors);
        } else {
            return responseHandle.errorResponse(res, 'Error occurred while updating product');
        }
    }
}


const statusProduct = async (req, res) => {
    try {
        const { product_id } = req.body;

        const product = await productModel.findByPk(product_id);
        if (!product) {
            return responseHandle.errorResponse(res, 'product not found');
        }

        if (product && product.product_status == true) {
            product.product_status = false;
        } else {
            product.product_status = true;
        }
        await product.save();

        return responseHandle.successResponse(res, 'product Status Update.')
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            return responseHandle.validationErrorWithData(res, 'Validation Error', error.errors);
        } else {
            return responseHandle.errorResponse(res, 'Error occurred while updating product');
        }

    }

}


module.exports = { createProduct, productList, deleteProduct, updateProduct, statusProduct, recoverProduct }