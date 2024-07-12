const Image = require('../models/Image');

exports.uploadImage = async (req, res) => {
  const { url } = req.body;
  try {
    const newImage = new Image({ url });
    await newImage.save();
    res.status(201).json(newImage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json(images);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
