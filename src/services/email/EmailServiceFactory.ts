import { Service } from "./service";
import { ResendEmailService } from "./ResendEmailService";

export class EmailServiceFactory {
  static createService(): Service {
    const provider = process.env.EMAIL_PROVIDER ?? "resend";

    if (provider.toLowerCase() === "resend") {
      return new ResendEmailService(
        process.env.RESEND_API_KEY!,
        process.env.SENDER_EMAIL!
      );
    }

    throw new Error(`Unsupported email provider: ${provider}`);
  }
}
