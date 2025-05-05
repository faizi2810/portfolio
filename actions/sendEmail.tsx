"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailTemplateProps {
  senderEmail: string;
  message: string;
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  senderEmail,
  message
}) => (
  <div>
    <h1>You received the following message from {senderEmail}</h1>
    <p>{message}</p>
  </div>
);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  console.log('Sender Email',senderEmail);
  console.log('message',message);

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "ifaizanasif@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail,
      react: React.createElement(EmailTemplate, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
