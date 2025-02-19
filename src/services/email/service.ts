export interface EmailTemplate {
  templateId: string;
  variables: Record<string, string>;
}

export abstract class Service {
  abstract sendEmail(to: string, subject: string, message: string): Promise<boolean>;
  abstract sendTemplateEmail(to: string, template: EmailTemplate): Promise<boolean>;
}
