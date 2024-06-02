const { DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('./index');

const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
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
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isUrl: { msg: 'Category image must be a valid URL' },
        },
    },
    category_bg_img: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isUrl: { msg: 'Category background image must be a valid URL' },
        },
    },
    is_delete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    tableName: 'category__data',
    timestamps: true,
});

console.log(Category === sequelize.models.Category);

module.exports = Category;
