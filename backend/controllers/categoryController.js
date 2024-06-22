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
        const category = await categoryModel.findAll({
            where: { is_delete: false }
        });

        // Increment visitor count for each category
        for (let category of categories) {
            category.category_visitor += 1;
            await category.save();
        }

        return responseHandle.successResponseWithData(res, 'Category created successfully', category);
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            return responseHandle.validationErrorWithData(res, 'Validation Error', error.errors);
        } else {
            return responseHandle.errorResponse(res, 'Error occurred while creating category');
        }
    }
}

const updateCategory = async (req, res) => {
    try {
        const { category_id, category_name, category_description } = req.body;

        const category = await categoryModel.findByPk(category_id);
        if (!category) {
            return responseHandle.errorResponse(res, 'Category not found');
        }

        category.category_name = category_name;
        category.category_description = category_description;

        if (req.files['category_img']) {
            category.category_img = req.files['category_img'][0].filename;
        }

        if (req.files['category_bg_img']) {
            category.category_bg_img = req.files['category_bg_img'][0].filename;
        }

        await category.save();

        return responseHandle.successResponse(res, 'Category updated successfully');
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            return responseHandle.validationErrorWithData(res, 'Validation Error', error.errors);
        } else {
            return responseHandle.errorResponse(res, 'Error occurred while updating category');
        }
    }

}


const deleteCategory = async (req, res) => {
    try {
        const { category_id } = req.body;

        const category = await categoryModel.findByPk(category_id);
        if (!category) {
            return responseHandle.errorResponse(res, 'Category not found');
        }

        category.is_delete = true;
        await category.save();

        return responseHandle.successResponse(res, 'Category deleted')
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            return responseHandle.validationErrorWithData(res, 'Validation Error', error.errors);
        } else {
            return responseHandle.errorResponse(res, 'Error occurred while updating category');
        }
    }
}


const statusCategory = async (req, res) => {
    try {
        const { category_id } = req.body;

        const category = await categoryModel.findByPk(category_id);
        if (!category) {
            return responseHandle.errorResponse(res, 'Category not found');
        }

        if (category && category.category_status == true) {
            category.category_status = false;
        } else {
            category.category_status = true;
        }
        await category.save();

        return responseHandle.successResponse(res, 'Category Status Update.')
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            return responseHandle.validationErrorWithData(res, 'Validation Error', error.errors);
        } else {
            return responseHandle.errorResponse(res, 'Error occurred while updating category');
        }

    }

}


module.exports = { createCategory, categoryList, deleteCategory, updateCategory, statusCategory }