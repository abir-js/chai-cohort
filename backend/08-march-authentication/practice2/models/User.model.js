import mongoose from "mongoose";

// 1. name
// 2. email
// 3. password
// 4. role - user, admin
// 5. isVerified
// 7. passwordResetToken

// passwordExpires

// verificationToken
// 6. createdAt

const createUser = mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    isVerified: {
      type: Boolean,
      dafault: false,
    },
    passwordResetToken: String,
    passwordExpires: Date,
    verificationToken: String,
  },
  {
    timestamp: true,
  }
);

const User = mongoose.model("User", createUser);

export default User;
