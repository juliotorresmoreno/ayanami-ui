
export abstract class Service {
    abstract sendEmail(to: string, subject: string, message: string): Promise<boolean>;
}
