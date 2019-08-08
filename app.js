const express = require('express'),
    multer = require('multer'),
    upload = multer(),
    bodyParser = require('body-parser');




let port = process.env.PORT || 3000;

let app = express();

// bodyparser used by post requests
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/analyse', upload.single('upfile'), (req, res) => {
  let meta = {
    filename: req.file.originalname,
    size: req.file.size
  }
  res.json(meta);
});

app.listen(port, () => {
  console.log('Server listening on ' + port);
});
