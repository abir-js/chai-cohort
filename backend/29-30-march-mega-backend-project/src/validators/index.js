import { body } from "express-validator";

const userRefistrationValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid email"),
    body("username")
      .trim()
      .notEmpty()
      .withMessage("username shouldnot be empty")
      .isLength({ min: 3 })
      .withMessage("username should be at lest 3 char")
      .isLength({ max: 13 })
      .withMessage("uaername should not exceed 13 char"),
  ];
};

const userLoginValidator = () => {
  return [
    body("email").isEmail().withMessage("email is not valid"),
    body("password").notEmpty().withMessage("pasword can't be empty"),
  ];
};

export { userRefistrationValidator, userLoginValidator };
