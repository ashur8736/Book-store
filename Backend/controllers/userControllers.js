const User = require("../model/userModel");
const bcrypt = require("bcrypt");

exports.signup = async (req, res, next) => {
    try {
      const { fullname, email, password } = req.body;
  
      // Check if user already registered
      const user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ message: "User  already registered" });
      }
  
      // Create new user
      try {
        const newUser = new User({
          fullname,
          email,
          password,
        });
        // Hash password
        const hashedPassword = bcrypt.hashSync(password, 10);
        newUser.password = hashedPassword;
        // Save user to database
        await newUser.save();
        return res.status(200).json({
          success: true,
          message: "User  created successfully",
          user:{
            _id:newUser.id,
            fullname:newUser.fullname,
            email:newUser.email
          },
        });
      } catch (err) {
        console.error(err);
        return res.status(500).json({
          success: false,
          message: "Error in creating user, please try again later",
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    }
  };

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    else{
        return res.status(200).json({message:"Login successful",user:{
            _id:user._id,
            fullname:user.fullname,
            email:user.email
        }})
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
