import multer from 'multer';


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './Public/Temp');
  },

  fileName: function(req ,res, next){

    cb(null, file.originalname);
  }
});


export const upload = multer({ storage: storage });

