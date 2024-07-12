const express = require('express');
const { uploadImage, getImages } = require('../controllers/imageController');
const router = express.Router();

router.post('/upload', uploadImage);
router.get('/', getImages);

module.exports = router;
