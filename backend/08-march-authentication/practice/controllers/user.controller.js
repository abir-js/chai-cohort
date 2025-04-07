import User from "../models/User.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  // get data
  // validate
  // check if exists
  // create a user in db
  // create a verification token
  // save token in database
  // send token to user
  // send success status to user

  // get data
  const { name, email, password } = req.body;

  // validate
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "all fields are required",
    });
  }
  console.log(name);

  // check if exists
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({
        message: "user already exists",
      });
    }

    // create a user in db
    const user = await User.create({
      name,
      email,
      password,
    });
    if (!user) {
      res.status(400).json({
        message: "Unable to create new user",
      });
    }

    // create a verification token
    const token = crypto.randomBytes(32).toString("hex");
    console.log(token);

    // save token in database
    user.verificationToken = token;
    await user.save();

    // send token as email to user
    // Looking to send emails in production? Check out our Email API/SMTP product!
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailOptions = await transporter.sendMail({
      from: process.env.MAILTRAP_SENDEREMAIL,
      to: user.email,
      subject: "Hello ✔", // Subject line
      text: `Please click on the following link:
      ${process.env.BASE_URL}/api/v1/users/verify/${token}
      `,
    });

    await transporter.sendMail(mailOptions);

    // send success status to user
    res.status(200).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      message: "User registration failed",
      success: false,
    });
  }
};

const verifyUser = async (req, res) => {
  // get token from url
  // validate url
  // find user based on token
  // set isVerified to true
  // remove token from db
  // save
  // response

  // get token from url
  const { token } = req.params;
  // validate url
  if (!token) {
    return res.status(400).json({
      message: "invalid token",
    });
  }
  // find user based on token
  const user = await User.findOne({ verificationToken: token });
  if (!user) {
    return res.status(400).json({
      message: "invalid token",
    });
  }
  // set isVerified to true
  user.isVerified = true;
  // remove token from db
  user.verificationToken = undefined;
  // save
  await user.save();
  // response
  return res.status(200).json({
    message: "user verified successfully",
  });
};

const loginUser = async (req, res) => {
  /**
   * user sends email pass
    check in database
    if exists
      check pass with hashed pass
      if matches
        create session or use JWT
        session
          create session token
          save token in db 
          check for session token and allow access
        JWT
  */
  // user sends email pass
  const { email, password } = res.body;
  // check in database
  if (!email || !password) {
    return res.status(400).json({
      message: "all fields are required",
    });
  }
  // if exists
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "invalid email or password",
      });
    }

    // check pass with hashed pass
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    if (!isMatch) {
      return res.status(400).json({
        message: "invalid email or password",
      });
    }

    // if matches
    // create session or use JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
       "shhhhh", {
      expiresIn: "24h",
    });

    

  } catch (error) {}
};

const resetPass = async (req, res) => {};

export { registerUser, verifyUser, loginUser, resetPass };
