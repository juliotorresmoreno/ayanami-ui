import Joi from "joi";

export const changePasswordSchema = Joi.object({
  currentPassword: Joi.string().required().messages({
    "string.empty": "Current password is required",
    "any.required": "Current password is required",
  }),
  newPassword: Joi.string()
    .required()
    .min(8)
    .messages({
      "string.empty": "New password is required",
      "any.required": "New password is required",
      "string.min": "Password must be at least 8 characters",
    }),
  confirmPassword: Joi.string()
    .valid(Joi.ref("newPassword"))
    .required()
    .messages({
      "string.empty": "Confirm password is required",
      "any.required": "Confirm password is required",
      "any.only": "Passwords must match",
    }),
});
