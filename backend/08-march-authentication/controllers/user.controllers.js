import User from "../models/User.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  //? 1. get user data
  const { name, email, password } = req.body;

  //? 2. validate user data
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  //? 3. check if user already exists
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    //? 4. create new user
    const newUser = await User.create({
      name,
      email,
      password,
    });
    if (!newUser) {
      return res.status(400).json({
        message: "Error while creating new user",
      });
    }

    //? 5. create verification token
    const token = crypto.randomBytes(16).toString("hex");

    //? 6. save token in db
    newUser.verificationToken = token;
    await newUser.save();

    //? 7. send token as email to user
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Admin" <${process.env.MAILTRAP_SENDEREMAIL}>`,
      to: newUser.email,
      subject: "Verify your email",
      text: `PLease click on following link:
    ${process.env.BASE_URL}/api/v1/users/verify/${token}
    `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      message: "user registered successfully",
      success: true,
    });
  } catch (error) {
    res.status(201).json({
      message: "user not registered",
      success: false,
      error,
    });
  }
};

const verifyUser = async (req, res) => {
  //? 1. Get token from URL
  const { token } = req.params;
  console.log("Token received:", token);

  //? 2. Validate token
  if (!token) {
    return res.status(400).json({
      message: "Invalid verification token",
    });
  }

  //? 3. Find user based on token
  const user = await User.findOne({ verificationToken: token });

  if (!user) {
    return res.status(400).json({
      message: "Invalid or expired verification token",
    });
  }

  //? 4. Set isVerified true and remove token
  user.isVerified = true;
  user.verificationToken = undefined;
  await user.save();

  //? 5. Send success response (you were missing this)
  return res.status(200).json({
    success: true,
    message: "Email verified successfully!",
  });
};

const loginUser = async (req, res) => {
  //? 1. Get user data
  const { email, password } = req.body;

  //? 2. Validate user data
  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  //? 3. Check if user exists
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    //? 4. Check if password is correct
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return res.status(400).json({
        message: "Invalid Email or password",
      });
    }

    //? 5. Send success response
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    //? 6. Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",

      maxAge: 1000 * 60 * 60 * 24,
    });

    //? 7. Send success response
    res.status(200).json({
      message: "Login Successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: "Login Failed",
      error,
    });
  }
};

const getme = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "User not found",
    });
  }
};

const logout = async (req, res) => {
  try {
    res.cookie("token", "", {});
    res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {}
};

const forgotPassword = async (req, res) => {
  try {
    //? get email
    //? find user based on email
    //? reset token + reset expiery
    //? user save
    //? send email
  } catch (error) {}
};

const resetPassword = async (req, res) => {
  try {
    //? collect token from params
    //? password from body
    //? find user
    const { token } = req.params;
    const { password } = req.body;

    try {
      const user = await User.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: { $gt: Date.now() },
      });
      //? set password in user

      //? reset resetToken and resetExpiry

      //? save
    } catch (error) {}
  } catch (error) {}
};

export {
  registerUser,
  verifyUser,
  loginUser,
  forgotPassword,
  resetPassword,
  logout,
  getme,
};
