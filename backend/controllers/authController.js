const userModel = require("../models/userModel");

//register controller
exports.registerController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name) {
      next("please provide a name");
    }
    if (!email) {
      next("please provide a email");
    }
    if (!password) {
      next("please provide a password");
    }
    const exisistingUser = await userModel.findOne({ email });
    if (exisistingUser) {
      return res.status(200).send({
        success: false,
        message: "Email already register",
      });
    }
    const user = await userModel.create({
      name,
      email,
      password,
    });
    const token = user.createJWT();
    res.status(201).send({
      success: true,
      message: "user created succssfully",
      user: {
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        location: user.location,
      },
      token,
    });
  } catch (error) {
    next(error);
  }
};

//login controller

exports.loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      next("please provide all fields");
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      next("invalid username or password");
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      next("invalid username or password");
    }
    const token = user.createJWT();
    res.status(200).json({
      success:true,
      message:'user login successfully',
      user,
      token,
    })
  } catch (error) {}
};
