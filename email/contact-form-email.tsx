import React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>📬 New inquiry from your portfolio contact form</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans text-black">
          <Container className="max-w-xl mx-auto my-10 p-6">
            <Section className="bg-white rounded-xl shadow border border-gray-200 px-8 py-6">
              <Heading as="h2" className="text-2xl font-bold mb-4 text-gray-800">
                📩 New Contact Form Submission
              </Heading>

              <Text className="text-gray-700 mb-2">
                You&apos;ve received a message via your portfolio website:
              </Text>

              <Section className="bg-gray-50 border border-gray-200 rounded-md p-4 mb-6">
                <Text className="text-gray-900 whitespace-pre-line">
                  {message}
                </Text>
              </Section>

              <Hr className="my-6 border-gray-300" />

              <Text className="text-sm text-gray-600">
                Sender email:{" "}
                <a
                  href={`mailto:${senderEmail}`}
                  className="text-blue-600 underline"
                >
                  {senderEmail}
                </a>
              </Text>
            </Section>

            <Section className="text-center text-xs text-gray-400 mt-10">
              <Text>
                This email was generated from your portfolio&apos;s contact form.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
