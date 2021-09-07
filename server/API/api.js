import  express  from "express";
import User from '../schema/User.js';

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

router.post('/login', async (req,res,next)=>{
    const exist = await User.findOne({phone :req.body.phone, password:req.body.password });
    if(exist)
    {
        return res.status(200).json(`${req.body.phone} login successfull`);
        // 
    }
    else 
    {
        return res.status(400).json('Invalid Login');
    }
    
})

export default router;