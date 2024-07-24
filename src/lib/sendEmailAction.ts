"use server";
import { sendMail } from "@/lib/sendMail";
import fs from "fs";
import path from "path";

const loadLocale = (locale: string) => {
  const filePath = path.resolve(process.cwd(), `src/lang/${locale}.json`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Locale file not found: ${filePath}`);
  }
  const fileContent = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContent);
};

export const send = async (formData: FormData, locale: string) => {
  try {
    const template = loadLocale(locale);

    const data = {
      to: formData.get('email') as string,
      name: formData.get('userName') as string,
      subject: template.mail.subject,
      body: `
        <html>
        <body>
          <h1 style="text-align: center;">${template.mail.subject}</h1>
          <p>${template.mail.greeting.replace("{userName}", formData.get('userName') as string)}</p>
          <p>${template.mail.body}</p>
          <ul>
            <li><strong>${template.mail.nameLabel}:</strong> ${formData.get('userName')}</li>
            <li><strong>${template.mail.phoneLabel}:</strong> ${formData.get('phone')}</li>
            <li><strong>${template.mail.reservationLabel}:</strong> ${formData.get('orderDate')} ${formData.get('orderTime')}</li>
            <li><strong>${template.mail.notesLabel}:</strong> ${formData.get('notes')}</li>
          </ul>
          <p>${template.mail.footer}</p>
          <p>${template.mail.regards}</p>
        </body>
        </html>
      `,
    };

    await sendMail(data);
    return { success: true };
  } catch (error) {
    console.error("Error in sendEmailAction:", error);
    return { success: false, error: error };
  }
};
