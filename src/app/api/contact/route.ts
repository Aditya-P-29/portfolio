import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      // You can now officially use your custom domain!
      from: 'Portfolio Contact <hello@adityapoddar.site>', 
      to: 'adityapotdar7309@gmail.com',
      subject: `New Inquiry from ${name} | Portfolio`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 40px 0; margin: 0;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
              
              <!-- Premium Gradient Header -->
              <div style="background-image: linear-gradient(to right, #1e3a8a, #3b82f6); padding: 35px 40px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 0.5px;">New Message Received</h1>
                <p style="color: #bfdbfe; margin: 8px 0 0 0; font-size: 15px;">via adityapoddar.site</p>
              </div>
              
              <!-- Clean Data Section -->
              <div style="padding: 40px;">
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                  <tr>
                    <td style="padding-bottom: 15px; border-bottom: 1px solid #e5e7eb;">
                      <span style="color: #6b7280; font-size: 13px; text-transform: uppercase; font-weight: 600; letter-spacing: 1px;">Sender Name</span><br/>
                      <span style="color: #111827; font-size: 18px; font-weight: 500;">${name}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 15px 0; border-bottom: 1px solid #e5e7eb;">
                      <span style="color: #6b7280; font-size: 13px; text-transform: uppercase; font-weight: 600; letter-spacing: 1px;">Email Address</span><br/>
                      <a href="mailto:${email}" style="color: #2563eb; font-size: 16px; text-decoration: none; font-weight: 500;">${email}</a>
                    </td>
                  </tr>
                </table>

                <!-- Message Box -->
                <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 25px;">
                  <span style="color: #6b7280; font-size: 13px; text-transform: uppercase; font-weight: 600; letter-spacing: 1px;">Message</span><br/>
                  <p style="color: #334155; font-size: 16px; line-height: 1.6; margin: 10px 0 0 0; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
              
              <!-- Footer -->
              <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #f3f4f6;">
                <p style="color: #9ca3af; font-size: 12px; margin: 0;">This email was securely routed from your Next.js application.</p>
              </div>

            </div>
          </body>
        </html>
      `,
    });

    if (error) return Response.json({ error }, { status: 500 });
    return Response.json({ success: true });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return Response.json({ error: errorMessage }, { status: 500 });
  }
}