import multer from 'multer';
import 'dotenv/config';

const setPathForUploader = (path = process.env.FOLDERPATH) => {
    try {
        const storage = multer.diskStorage({
            destination(req, file, cb) {
                cb(null, path);
            },
            filename(req, file, cb) {
                const name = `sample.txt`;
                cb(null, name);
            },
        });
        const upload = multer({ storage });
        return upload;
    } catch (error) {
        throw new Error(error.message);
    }
};

export {
    setPathForUploader,
};