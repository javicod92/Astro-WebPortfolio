import { Resend } from "resend";
import type { APIRoute } from "astro";

// since Astro by default only generates static content
// (content that does not change over time).
// I have to configure the directive to run on the server and be dynamic.
export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, subject, message, honeypot } =
      (await request.json()) as {
        name: string;
        email: string;
        subject: string;
        message: string;
        honeypot: string;
      };

    // Verify if the Honeypot has content to protect against bots
    if (honeypot) {
      return new Response("Bot detected", { status: 400 });
    }

    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "javi.javier.jc@gmail.com",
      subject: `${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return new Response(JSON.stringify({ success: true, data: response }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    const err = error as Error;
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
};
