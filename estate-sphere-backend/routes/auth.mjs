import express from 'express';
import * as auth from '../controllers/auth.mjs';
import { requireLogin } from '../middlewares/auth.mjs';

// create an instance of express application which has methods for routing http requests,configuring middleware.
const router = express.Router();


// Routes 
// app.get() is a method in express that defines a route for http get requests
// the first argument is the path of the route
// the second argument is a callback function that is called when the route is matched
router.get('/', auth.welcome);
router.post('/pre-signup',auth.preSignup);
router.post('/signup',auth.signup);
router.post('/login',auth.login);
router.post('/forgot-password',auth.forgotPassword);
router.post('/access-account',auth.accessAccount);
router.get('/refresh-token',auth.refreshToken);
router.get('/current-user', requireLogin, auth.currentUser);
router.get('/profiles/:username', auth.publicProfile);
router.put('/update-password', requireLogin, auth.updatePassword);
router.put('/update-profile', requireLogin, auth.updateProfile);
router.get('/agents', auth.agents);
router.get('/agent-ad-count/:_id', auth.agentAdCount);
router.get('/agent/:username', auth.agent);

// export the router
export default router;