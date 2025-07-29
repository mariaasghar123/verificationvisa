require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: 'dr7dpuw0e',      // apna cloud name yahan likho
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'uploads',        // folder name on Cloudinary
    allowed_formats: ['jpg', 'png', 'jpeg', 'pdf'],
    resource_type: 'auto',
  },
});

module.exports = { cloudinary, storage };
 