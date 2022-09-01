const multer = require('multer');

const MIMETYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  filename: (req, file, callback) => {
    const name = file.originalname;
    
    callback(null, name);
  }
});

module.exports = multer({storage: storage}).single('image');