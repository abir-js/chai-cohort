import User from "../model/User.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  // get data
  const { name, email, password } = req.body;

  // validate
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields required",
    });
  }

  // chack if user already exists
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // create a user in db
    const user = await User.create({
      name,
      email,
      password,
    });
    console.log(user);

    if (!user) {
      return res.status(400).json({
        message: "User not registered",
      });
    }

    // create a verification token
    const token = crypto.randomBytes(32).toString("hex");
    console.log(token);

    // save token in db
    user.verificationToken = token;
    await user.save();

    // send token as email to user
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.MAILTRAP_SENDEREMAIL,
      to: user.email, // list of receivers
      subject: "Verify your email", // Subject line
      text: `Please click on following link to verify:
      ${process.env.BASE_URL}/api/v1/users/verify/${token}
      `,
    };

    await transporter.sendMail(mailOptions);

    // send success status to user
    res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "Used not registered",
      error,
      success: false,
    });
  }
};

const verifyUser = async (req, res) => {
  // get token from url
  const { token } = req.params;

  // validate token
  if (!token) {
    return res.status(400).json({
      message: "Invalid token",
    });
  }

  // find user based on token
  const user = await User.findOne({ verificationToken: token });

  // if not
  if (!user) {
    return res.status(400).json({
      message: "Invalid token",
    });
  }

  // set isverified to true
  user.isVerified = true;

  // remove verification token
  user.verificationToken = undefined;

  // save
  await user.save();

  // return response
};

const loginUser = async (req, res) => {
  // get email pass
  const { email, password } = req.body;
  // validate
  if (!email || !password) {
    return res.status(400).json({
      message: "both email and password are required",
    });
  }

  // find user based on email
  try {
    const user = await User.findOne({ email }); // not{email: email} because both are same
    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // create JWT
    const token = jwt.sign({ id: user._id, role: user.role }, "shhhhh", {
      expiresIn: "24h",
    });

    const cookieOptions = {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    };
    res.cookie("token", token, cookieOptions);

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "failed to login",
    });
  }
};

export { registerUser, verifyUser, loginUser };