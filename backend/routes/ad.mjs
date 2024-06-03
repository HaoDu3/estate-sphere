import express from 'express';
import * as auth from '../controllers/ad.mjs';
import { requireLogin } from '../middlewares/auth.mjs';

// create an instance of express application which has methods for routing http requests,configuring middleware.
const router = express.Router();

router.post('/upload-image', requireLogin, auth.uploadImage);
router.post('/remove-image', requireLogin, auth.removeImage);
router.post('/ad',requireLogin, auth.create);


export default router;