import  express  from "express";
import userSchema from '../schema/User.js';

const router = express.Router();

router.post('/signup', async (req,res,next)=>{
    const exist = await User.findOne({phone :req.body.phone });
    if(exist)
    {
        return res.status(400).json('User already Exist');
    }
    User.create(req.body)
    .then(data => res.json(data))
    .catch(next => console.log(next));
})

export default router;