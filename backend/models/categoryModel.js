const { DataTypes, UUIDV1 } = require('sequelize');
const sequelize = require('./index');

const Category = sequelize.define('Category', {
    category_id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV1,
        primaryKey: true,
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'Category name cannot be null' },
            notEmpty: { msg: 'Category name cannot be empty' }
        },
        unique: {
            args: true,
            msg: 'Category name must be unique'
        },
    },
    category_description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'Category description cannot be null' },
            notEmpty: { msg: 'Category description cannot be empty' }
        },
    },
    category_visitor: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
            isInt: { msg: 'Category visitor count must be an integer' },
            min: 0
        },
    },
    category_total_item: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
            isInt: { msg: 'Category total item count must be an integer' },
            min: 0
        },
    },
    category_img: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    category_bg_img: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    is_delete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    category_status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    tableName: 'category__data',
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
});

console.log(Category === sequelize.models.Category);

module.exports = Category;
