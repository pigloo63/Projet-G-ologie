const multer = require('multer')

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
}

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images')
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_')
    const extension = MIME_TYPES[file.mimetype]
    callback(null, name + Date.now() + '.' + extension)
  },
})

//Pour l'envoie d'une seule image
module.exports = multer({ storage }).single('image')

//Si plusieurs image par la suite
// module.exports = multer({ storage }).fields([{name:'imgMineral'}, {name:'imgMic'}, {name:'imgDiagram'}])
