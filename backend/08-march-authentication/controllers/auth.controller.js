import crypto from "crypto";
import User from "../models/user.model.js";
import { sendEmail } from "../utils/mail.js";

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

    const {token} = req.params; 

    

  } catch (error) {
    res.status(500).json({
      message: "Error while verifying user",
    });
  }
};

export { registerUser, verifyUser };
