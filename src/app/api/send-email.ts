import { NextApiRequest, NextApiResponse } from "next";
import EmailServiceFactory from "@/services/email";

const emailService = EmailServiceFactory.createService();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  try {
    await emailService.sendTemplateEmail(email, {
      templateId: "contact-form",
      variables: {
        name,
        message,
      },
    });

    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Failed to send email:", error);
    res.status(500).json({ success: false, message: "Failed to send message. Please try again." });
  }
}