import Joi from "joi";

export const contactSchema = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Name is required",
    "string.min": "Name should have at least 3 characters",
    "string.max": "Name should have at most 50 characters",
  }),
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    "string.empty": "Email is required",
    "string.email": "Email must be a valid email address",
  }),
  message: Joi.string().min(10).max(500).required().messages({
    "string.empty": "Message is required",
    "string.min": "Message should have at least 10 characters",
    "string.max": "Message should have at most 500 characters",
  }),
});
