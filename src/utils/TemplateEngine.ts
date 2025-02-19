import fs from "fs-extra";
import path from "path";
import handlebars from "handlebars";

export class TemplateEngine {
  static async render(templateName: string, variables: Record<string, string>): Promise<string> {
    try {
      const templatePath = path.join(process.cwd(), "templates/emails", `${templateName}.hbs`);
      const templateContent = await fs.readFile(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateContent);
      return compiledTemplate(variables);
    } catch (error) {
      console.error("Error rendering template:", error);
      throw new Error("Template rendering failed.");
    }
  }
}
