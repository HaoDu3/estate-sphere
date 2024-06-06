import express from 'express';
import * as ad from '../controllers/ad.mjs';
import { requireLogin } from '../middlewares/auth.mjs';

// create an instance of express application which has methods for routing http requests,configuring middleware.
const router = express.Router();

router.post('/upload-image', requireLogin, ad.uploadImage);
router.post('/remove-image', requireLogin, ad.removeImage);
router.post('/ad',requireLogin, ad.create);
router.get('/adsList',ad.ads);
router.get('/ad/:slug',ad.read);
router.post('/contact-seller',requireLogin, ad.contactSeller);


router.get('/user-ads/:pages',requireLogin, ad.userAds); 
router.post("/wishlist", requireLogin, ad.addToWishlist);
router.delete("/wishlist/:adId", requireLogin, ad.removeFromWishlist);
router.put('/ad/:slug',requireLogin, ad.update);

export default router;