import { ApiResponse } from "../utils/api-response.js";

const healthCheck = async (req, res) => {
  try {
    return res
      .status(200)
      .json(new ApiResponse(200, { message: "Server is up and running" }));
  } catch (error) {}
};

export { healthCheck };
