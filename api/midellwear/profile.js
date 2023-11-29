const multer = require("multer");

const whitelist = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

const profilestorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./profile");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
    fileFilter: (req, file, cb) => {
        console.log(file,"fileee")
        if (!whitelist.includes(file.mimetype)) {
          return cb(new Error("file is not allowed"));
        }
        cb(null, file);   
      },
  });
  
  
const profileupload = multer({ profilestorage: profilestorage });
  
module.exports = { profileupload };  
