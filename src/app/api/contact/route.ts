import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  serviceRequired: string;
  projectDetails: string;
  budget?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    const { fullName, email, phone, serviceRequired, projectDetails } = body;
    if (!fullName || !email || !phone || !serviceRequired || !projectDetails) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Build the HTML email
    const htmlContent = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; border: 1px solid #1a1a1a; border-radius: 4px; overflow: hidden;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #e8461c 0%, #ff6b3d 100%); padding: 28px 32px;">
          <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700; letter-spacing: 1px;">
            🔥 New Project Inquiry
          </h1>
          <p style="margin: 6px 0 0; color: rgba(255,255,255,0.85); font-size: 13px;">
            ShadowPixels Studio — Contact Form Submission
          </p>
        </div>

        <!-- Body -->
        <div style="padding: 28px 32px;">
          <!-- Client Info -->
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; color: #666; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; width: 140px; vertical-align: top;">
                Name
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; color: #e0e0e0; font-size: 14px;">
                ${fullName}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; color: #666; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; vertical-align: top;">
                Email
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; color: #e0e0e0; font-size: 14px;">
                <a href="mailto:${email}" style="color: #e8461c; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; color: #666; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; vertical-align: top;">
                Phone
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; color: #e0e0e0; font-size: 14px;">
                <a href="tel:${phone}" style="color: #e8461c; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            ${body.companyName ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; color: #666; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; vertical-align: top;">
                Company
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; color: #e0e0e0; font-size: 14px;">
                ${body.companyName}
              </td>
            </tr>
            ` : ""}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; color: #666; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; vertical-align: top;">
                Service
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; color: #e0e0e0; font-size: 14px;">
                <span style="display: inline-block; background: rgba(232,70,28,0.15); color: #e8461c; padding: 3px 10px; border-radius: 3px; font-size: 12px; font-weight: 600;">
                  ${serviceRequired}
                </span>
              </td>
            </tr>
            ${body.budget ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; color: #666; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; vertical-align: top;">
                Budget
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; color: #e0e0e0; font-size: 14px;">
                ${body.budget}
              </td>
            </tr>
            ` : ""}
          </table>

          <!-- Project Details -->
          <div style="margin-top: 8px;">
            <div style="color: #666; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px;">
              Project Details
            </div>
            <div style="background: #111; border-left: 3px solid #e8461c; padding: 16px; color: #ccc; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">
${projectDetails}
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div style="padding: 16px 32px; background: #050505; border-top: 1px solid #1a1a1a; text-align: center;">
          <p style="margin: 0; color: #444; font-size: 11px;">
            Sent from shadowpixels.studio contact form
          </p>
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "ShadowPixels Studio <onboarding@resend.dev>",
      to: ["shadowpixels.studio@gmail.com"],
      replyTo: email,
      subject: `New Inquiry from ${fullName} — ${serviceRequired}`,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
