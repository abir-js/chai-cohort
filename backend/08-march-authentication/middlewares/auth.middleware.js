import jwt from "jsonwebtoken";

export const isLoggedIn = async (req, res, next) => {
  try {
    //? 1. get token from cookies
    console.log(req.cookies);
    const token = req.cookies?.token;
    console.log("Token found: ", token ? "Yes" : "No");

    if (!token) {
      console.log("no token");
      return res.status(400).json({
        success: false,
        message: "Invalid or unauthorized token token",
      });
    }

    //? 2. verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);

    req.user = decoded;
    next();
  } catch (error) {
    console.log("Auth middleware failure");
    return res.status(400).json({
      success: false,
      message: "Internal sercer error",
    });

  }

};
