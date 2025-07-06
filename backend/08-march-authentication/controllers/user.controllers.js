import User from "../models/User.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer";

const registerUser = async (req, res) => {
  /**
   **  1. get user data
   **  2. check if user exists
   **  3. if exists,
   **         return "User already exists"
   **  4. create user in db
   **  5. create a verification token
   **  6. save in db and send to user using email
   **  7. send success response
   */
  //? 1. get user data
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  //? 2. check if user exists
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    //? 4. create user in db
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
  /**
   * * get token from url
   * * validate token
   * * find user based on token
   * * if not
   * * set isVerified field to true
   * * remove verification token
   * * return response
   */
  //? get token from url
  const { token } = req.params;
  //? validate token
  if (!token) {
    return res.status(400).json({
      message: "Invalid verification token",
    });
  }

  //? find user based on token
  const user = await User.findOne({ verificationToken: token });
  if (!token) {
    return res.status(400).json({
      message: "Invalid verification token",
    });
  }

  //? set isverified true
  user.isVerified = true;

  //? remove verification token
  user.verificationToken = undefined;

  await user.save();
};

const loginUser = async (req, res) => {
  
};

export { registerUser, verifyUser, loginUser };

