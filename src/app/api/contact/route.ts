import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) { // Fix 1: Typed as Request
  try {
    const { name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', 
      to: 'adityapotdar7309@gmail.com',
      subject: `New Portfolio Inquiry from ${name}`,
      replyTo: email, // Fix 2: Changed to camelCase
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; background-color: #ffffff;">
          <h2 style="color: #111827; margin-bottom: 20px;">New Portfolio Inquiry</h2>
          <p style="color: #4b5563; font-size: 16px; margin-bottom: 8px;"><strong>From:</strong> ${name}</p>
          <p style="color: #4b5563; font-size: 16px; margin-bottom: 20px;"><strong>Email:</strong> ${email}</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <h3 style="color: #374151; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Message:</h3>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; color: #374151; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          <p style="color: #9ca3af; font-size: 12px; margin-top: 30px; text-align: center;">Sent securely via adityapoddar.site</p>
        </div>
      `,
    });

    if (error) return Response.json({ error }, { status: 500 });
    return Response.json({ success: true });
  } catch (error) {
    // Fix 3: Safely handle the unknown error type
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return Response.json({ error: errorMessage }, { status: 500 });
  }
}