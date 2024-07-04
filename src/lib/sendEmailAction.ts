"use server";
import { sendMail } from "@/lib/sendMail";

export const send = async (formData: FormData) => {
  const data = {
    to: formData.get('email') as string,
    name: formData.get('name') as string,
    subject: "[ORDER] TABLE RESERVATION CONFIRMATION",
    body: `
      <html>
      <body>
        <h1 style="text-align: center;">TABLE RESERVATION CONFIRMATION</h1>
        <p>Dear ${formData.get('userName')},</p>
        <p>Thank you for choosing Diệu Thiện Restaurant. We are pleased to confirm your table reservation with the following details:</p>
        <ul>
          <li><strong>Name:</strong> ${formData.get('userName')}</li>
          <li><strong>Phone:</strong> ${formData.get('phone')}</li>
          <li><strong>Reservation Date:</strong> ${formData.get('orderDate')} ${formData.get('orderTime')}</li>
          <li><strong>Notes:</strong> ${formData.get('notes')}</li>
        </ul>
        <p>We look forward to serving you at our restaurant. If you have any questions or need further assistance, please do not hesitate to contact us.</p>
        <p>Best regards,<br/>
        Diệu Thiện Restaurant</p>
      </body>
      </html>
    `,
  };

  await sendMail(data);
};
