const categoryModel = require("../models/categoryModel")
const responseHandle = require('../helpers/responseHandlers');


const createCategory = async (req, res) => {
    try {
        const { category_name, category_visitor, category_total_item, category_img, category_bg_img } = req.body;

        const category = await categoryModel.create({
            category_name,
            category_visitor,
            category_total_item,
            category_img,
            category_bg_img
        });

        return responseHandle.successResponseWithData(res, 'Category created successfully', category);
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            return responseHandle.validationErrorWithData(res, 'Validation Error', error.errors);
        } else {
            return responseHandle.errorResponse(res, 'Error occurred while creating category');
        }
    }
};

const categoryList = (req, res) => {

}

const deleteCategory = (req, res) => {

}

const updateCategory = (req, res) => {

}



module.exports = { createCategory, categoryList, updateCategory, deleteCategory }