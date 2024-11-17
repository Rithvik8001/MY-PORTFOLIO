"use server";

import { emailFormSchema } from "@/schemas/email-form-schema";
import { createSafeActionClient } from "next-safe-action";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/contact/email-template";

const actionClient = createSafeActionClient();
const resend = new Resend("asdf");

export const sendEmail = actionClient
  .schema(emailFormSchema)
  .action(async ({ parsedInput }) => {
    const { name, email, message } = parsedInput;

    const { error } = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: ["rithvik.utd@outlook.com"],
      subject: `Email from ${name}`,
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return { error: "Failed to send email" };
    }

    return { success: "Email sent successfully" };
  });
