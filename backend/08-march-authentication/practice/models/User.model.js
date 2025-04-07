import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { type } from "os";

// 1. name
// 2. email
// 3. password
// 4. role - user, admin
// 5. isVerified
// 7. passwordResetToken

// passwordExpires

// verificationToken
// 6. createdAt

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: String,
    resetPasswordToken: Date,
    passwordtokenExpiery: Date,
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  next();
});

const User = mongoose.model("User", userSchema);

export default User;
