import crypto from "crypto";
import User from "../models/user.model.js";
import { sendEmail } from "../utils/mail.js";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).json({
        message: "User already exists",
      });
    }

    const newUser = await User.create({
      name,
      email,
      password,
    });

    if (!newUser) {
      res.status(500).json({
        message: "User not registered",
      });
    }

    const token = crypto.randomBytes(32).toString("hex");
    newUser.verificationToken = token;
    await newUser.save();

    await sendEmail({
      email: newUser?.email,
      subject: "Account Verification",
      text: `Please click the following link to verify your account: ${process.env.BASE_URL}/api/v1/auth/verify/${token}`,
      html: `<p>Please click the following link to verify your account: </p> <br><button style="background-color: #4CAF50; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer;"><a href="${process.env.BASE_URL}/api/v1/auth/verify/${token}">Verify</a></button>`,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error registering user",
      error: error.message,
    });
  }
};

const verifyUser = async (req, res) => {
  try {
    const { token } = req.params;

    if (!token) {
      res.status(400).json({
        message: "Token is required",
      });
    }

    const user = await User.findOne({ verificationToken: token });

    if (!user) {
      res.status(404).json({
        message: "Invalid token",
      });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();

    res.status(200).json({
      message: "User verified successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while verifying user",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        message: "All fields are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({
        message: "User not found, invalid credentials",
      });
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      res.status(401).json({
        message: "Invalid credentials",
      });
    }

    if (!user.isVerified) {
      res.status(401).json({
        message: "User is not verified. Please verify your email.",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while logging in user",
    });
  }
};

const getProfile = async (req, res) => {

}

const logoutUser = async (req, res) => {
    try {
        res.clearCookie("token");
        res.status(200).json({
            message: "User logged out successfully",
        });
        
    } catch (error) {
        res.status(500).json({
            message: "Error while logging out user",
        })
    }
};

const forgotPassword = async (req, res) => {};

const resetPassword = async (req, res) => {};

export {
  registerUser,
  verifyUser,
  loginUser,
  getProfile,
  logoutUser,
  forgotPassword,
  resetPassword,
};
