import jwt from "jsonwebtoken";

export const isLoggedin = async (req, res, next) => {
  try {
    const token = req.cookies?.token; // ✅ get from request
    console.log("Token found:", token ? "yes" : "no");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication failed: no token",
      });
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded data:", decodedData);

    req.user = decodedData; // attach user info
    next(); // continue
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Authentication failed: invalid or expired token",
    });
  }
};
