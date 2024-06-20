const responseHandle = require("../helpers/responseHandlers")
const categoryModel = require("../models/categoryModel")

const createCategory = async (req, res) => {
    try {
        const { category_name, category_description } = req.body;

        const category_img = req.files['category_img'] ? req.files['category_img'][0].filename : null;
        const category_bg_img = req.files['category_bg_img'] ? req.files['category_bg_img'][0].filename : null;

        const category = await categoryModel.create({
            category_name,
            category_img,
            category_bg_img,
            category_description
        });

        return responseHandle.successResponse(res, 'Category created successfully');
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            return responseHandle.validationErrorWithData(res, 'Validation Error', error.errors);
        } else {
            return responseHandle.errorResponse(res, 'Error occurred while creating category');
        }
    }
}

const categoryList = async (req, res) => {
    try {
        const category = await categoryModel.findAll()

        return responseHandle.successResponseWithData(res, 'Category created successfully', category);
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            return responseHandle.validationErrorWithData(res, 'Validation Error', error.errors);
        } else {
            return responseHandle.errorResponse(res, 'Error occurred while creating category');
        }
    }
}

const updateCategory = (req, res) => {

}


const deleteCategory = (req, res) => {

}


module.exports = { createCategory, categoryList, deleteCategory, updateCategory }