const Category = require('../models/Category');

exports.createCategory = async (req, res) => {
  
  try {
  const category = await Category.create(req.body);

    res.status(201).json({
      message: 'success',
      category,
    });
  } catch (error) {
    res.status(400).json({
      message: 'fail',
      error,
    });
  }
};
