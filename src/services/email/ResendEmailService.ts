import { Service } from "./service";

export class ResendEmailService extends Service {
  private apiKey: string;
  private senderEmail: string;

  constructor(apiKey: string, senderEmail: string) {
    super();
    this.apiKey = apiKey;
    this.senderEmail = senderEmail;
  }

  async sendEmail(to: string, subject: string, message: string): Promise<boolean> {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: this.senderEmail,
          to: [to],
          subject: subject,
          text: message,
        }),
      });

      return response.ok;
    } catch (error) {
      console.error("Failed to send email:", error);
      return false;
    }
  }
}
