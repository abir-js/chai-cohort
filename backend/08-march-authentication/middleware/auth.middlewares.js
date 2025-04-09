import jwt from "jsonwebtoken";

export const isLoggedIn = async (req, res, next) => {
  try {
    // get token
    console.log(req.cookies);
    const token = req.cookies?.token;
    console.log("Token found: ", token ? "YES" : "NO");

    // check if token exists
    if (!token) {
      console.log("No token ");
      return res.status(401).json({
        success: false,
        message: "authentication failed",
      });
    }

    // get data
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded data", decoded);
    req.user = decoded;

    next();


  } catch (error) {
    console.log("Auth Middleware Failure");
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
