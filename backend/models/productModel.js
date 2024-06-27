const { DataTypes, UUIDV1 } = require('sequelize');
const sequelize = require('./index');

const Product = sequelize.define('Product', {
    product_id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV1,
        primaryKey: true,
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'Product name cannot be null' },
            notEmpty: { msg: 'Product name cannot be empty' }
        },
        unique: {
            args: true,
            msg: 'Product name must be unique'
        },
    },
    product_description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'Product description cannot be null' },
            notEmpty: { msg: 'Product description cannot be empty' }
        },
    },
    product_original_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: { msg: 'Product original price must be an integer' },
            min: 0
        },
    },
    product_selling_price: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
        validate: {
            isInt: { msg: 'Product selling price must be an integer' },
            min: 0
        },
    },
    product_visitors: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
            isInt: { msg: 'Product visitor count must be an integer' },
            min: 0
        },
    },
    connected_category: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: 'Category IDs cannot be null' }
        },
    },
    product_img: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    is_delete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    product_status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    tableName: 'product__data',
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
});

console.log(Product === sequelize.models.Product);

module.exports = Product;
