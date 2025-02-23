// validators/basicInfoSchema.ts
import Joi from "joi";

export const basicInfoSchema = Joi.object({
  fullName: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Full Name is required",
    "string.min": "Full Name should have at least 3 characters",
    "string.max": "Full Name should have at most 50 characters",
  }),
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    "string.empty": "Email is required",
    "string.email": "Email must be a valid email address",
  }),
  phone: Joi.string()
    .pattern(/^[+]*[(]?\d{1,4}[)]?[-\s./\d]*$/)
    .min(10)
    .max(15)
    .required()
    .messages({
      "string.empty": "Phone is required",
      "string.pattern.base": "Phone must be a valid phone number",
    }),
  bio: Joi.string().min(10).max(500).required().messages({
    "string.empty": "Bio is required",
    "string.min": "Bio should have at least 10 characters",
    "string.max": "Bio should have at most 500 characters",
  }),
  location: Joi.string().min(3).max(100).required().messages({
    "string.empty": "Location is required",
    "string.min": "Location should have at least 3 characters",
    "string.max": "Location should have at most 100 characters",
  }),
  website: Joi.string()
    .uri({ scheme: ["http", "https"] })
    .required()
    .messages({
      "string.empty": "Website is required",
      "string.uri": "Website must be a valid URL",
    }),
  birthDate: Joi.date()
    .max("now")
    .required()
    .messages({
      "date.base": "Birth Date must be a valid date",
      "date.max": "Birth Date cannot be in the future",
      "any.required": "Birth Date is required",
    }),
  gender: Joi.string()
    .valid("male", "female", "other", "prefer-not-to-say")
    .required()
    .messages({
      "any.only": "Gender must be one of: male, female, other, prefer-not-to-say",
      "any.required": "Gender is required",
    }),
});