import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config.mjs';


// take the token from the header and verify it
// if the token is valid, the user is authenticated 
// and the user object is appended to the request object
export const requireLogin = (req, res, next) => {
    try{
        const decoded = jwt.verify(req.headers.authorization, JWT_SECRET);
        req.user = decoded;
        next();
    }catch (error){
        return res.status(401).json({
            error: "Unauthorized Access"
        })
    }  
}