import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const {fullname, email, password} = req.body;
        const user = await User.findOne({ email });
        if(user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcryptjs.hash(password, 10);

        const createdUser = new User({
            fullname : fullname,
            email : email, 
            password : hashedPassword });
        await createdUser.save();
        res.status(201).json({message: "User created successfully", user:{
            id: createdUser._id,
            email: createdUser.email,
            fullname: createdUser.fullname,
        } });

    } catch (error) {
        res.status(500).json({ message: error.message });        
    }
}

export const login = async (req, res) => {
     try {
        const {email, password} = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcryptjs.compare(password, user.password);
        if(!user ||!isMatch) {
            return res.status(400).json({message: "Invalid Username or password" });
        }else{
            res.status(200).json({message: "Login successful",
                user:{
                    id: user._id,
                    email: user.email,
                    fullname: user.fullname, 
                }}
            );
        }

     } catch (error) {
         res.status(500).json({ message: error.message }); 
     }
}