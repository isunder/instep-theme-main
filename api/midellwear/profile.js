const multer = require("multer");

const whitelist = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

const profilestorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./profile");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const profileupload = multer({
  storage: profilestorage,
  fileFilter: (req, file, cb) => {
    if (!whitelist.includes(file.mimetype)) {
      return cb(new Error("File type is not allowed"));
    }
    cb(null, true);
  },
});

module.exports = { profileupload };
