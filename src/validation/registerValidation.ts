import Joi from "joi";

export const registerSchema = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Name is required",
    "string.min": "Name should have at least 3 characters",
    "string.max": "Name should have at most 50 characters",
  }),
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    "string.empty": "Email is required",
    "string.email": "Email must be a valid email address",
  }),
  password: Joi.string()
    .min(8)
    .max(30)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.min": "Password should have at least 8 characters",
      "string.max": "Password should have at most 30 characters",
      "string.pattern.base":
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    }),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .messages({
      "string.empty": "Confirm Password is required",
      "any.only": "Passwords do not match",
    }),
  acceptTerms: Joi.boolean().valid(true).required().messages({
    "any.only": "You must accept the terms and conditions",
  }),
  subscribeNewsletter: Joi.boolean().optional(),
});