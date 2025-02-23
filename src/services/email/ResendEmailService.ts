import { Service, EmailTemplate } from "./service";
import { TemplateEngine } from "@/utils/TemplateEngine";

export class ResendEmailService extends Service {
  private readonly apiKey: string;
  private readonly senderEmail: string;

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

  async sendTemplateEmail(to: string, template: EmailTemplate): Promise<boolean> {
    try {
      const htmlContent = await TemplateEngine.render(template.templateId, template.variables);

      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: this.senderEmail,
          to: [to],
          subject: "Notification from Petra AI",
          html: htmlContent,
        }),
      });

      return response.ok;
    } catch (error) {
      console.error("Failed to send template email:", error);
      return false;
    }
  }
}
