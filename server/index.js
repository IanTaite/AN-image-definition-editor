const express = require('express');
const multer = require('multer'); // uncomment for more control
const cors = require('cors');

const app = express();
const upload = multer({ dest: 'storage/' }); // uncomment for using multer

app.use(cors());
//app.use(express.static('public')); // serve static files (optional)

app.post('/upload', upload.single('file'), (req, res) => {
  // File info is available in req.file (if using multer)
  // or req.body.myfile (without multer)

  console.log(req.file); // or req.body.myfile

  res.send('File uploaded successfully!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
