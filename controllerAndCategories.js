const category = require('../Model/Categories');

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await category.find();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
