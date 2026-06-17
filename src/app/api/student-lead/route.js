import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer"


export async function POST(request) {
  try {
    const body = await request.json();

    const lead = await prisma.studentGoogleLead.create({
      data: {
        full_name: body.full_name,
        email_id: body.email_id,
        whatsapp_number: body.whatsapp_number,
        year_of_passout: body.year_of_passout,
        qualification: body.qualification,

        utm_source: body.utm_source,
        utm_medium: body.utm_medium,
        utm_campaign: body.utm_campaign,
        utm_term: body.utm_term,
        utm_content: body.utm_content,
        gclid: body.gclid,

        landing_page: body.landing_page,
        page_url: body.page_url,
        form_type: body.form_type,
      },
    });

    // ✅ Pabbly Webhook
    try {
      const webhookRes = await fetch("https://connect.pabbly.com/webhook-listener/webhook/IjU3NjIwNTY0MDYzMTA0MzA1MjZkNTUzZCI_3D_pc/IjU3NjcwNTZlMDYzMDA0MzA1MjZjNTUzNjUxMzEi_pc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: body.full_name,
          email: body.email_id,
          phone: body.whatsapp_number,
          year_of_passout: body.year_of_passout,
          qualification: body.qualification,

          utm_source: body.utm_source,
          utm_medium: body.utm_medium,
          utm_campaign: body.utm_campaign,
          utm_term: body.utm_term,
          utm_content: body.utm_content,
          gclid: body.gclid,

          landing_page: body.landing_page,
          page_url: body.page_url,

          form_type: body.form_type || "STU - Landing Page",
          lead_stage: "New Lead",
          created_at: lead.created_at.toISOString(),
        }),
      });

      const text = await webhookRes.text();
      console.log("Webhook status:", webhookRes.status);
      console.log("Webhook response:", text);
    } catch (err) {
      console.error("Webhook error (Student Google Lead):", err);
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Dandes Academy" <${process.env.EMAIL_USER}>`,
      to: ["chaitanya@dandesacademy.com"],
      subject: `New Google Lead - ${body.full_name} - AI & Machine Learning Program`,
      html: `
        <div style="font-family: Arial, sans-serif; background:#f5f7fa; padding:30px;">
          <div style="max-width:520px; margin:auto; background:#ffffff; border-radius:8px; padding:25px; box-shadow:0 2px 8px rgba(0,0,0,0.05);">
            <h2 style="color:#C41E3A; margin-bottom:20px;">
              New AI & Machine Learning Program
            </h2>

            <table style="width:100%; border-collapse:collapse; font-size:14px;">
              <tr>
                <td style="padding:8px; font-weight:bold;">Name</td>
                <td style="padding:8px;">${body.full_name}</td>
              </tr>

              <tr>
                <td style="padding:8px; font-weight:bold;">Email</td>
                <td style="padding:8px;">${body.email_id}</td>
              </tr>

              <tr>
                <td style="padding:8px; font-weight:bold;">Phone</td>
                <td style="padding:8px;">${body.whatsapp_number}</td>
              </tr>

              <tr>
                <td style="padding:8px; font-weight:bold;">Year of Passout</td>
                <td style="padding:8px;">${body.year_of_passout}</td>
              </tr>

              <tr>
                <td style="padding:8px; font-weight:bold;">Qualification</td>
                <td style="padding:8px;">${body.qualification}</td>
              </tr>

              <tr>
                <td style="padding:8px; font-weight:bold;">Source</td>
                <td style="padding:8px;">${body.utm_source || "-"}</td>
              </tr>

              <tr>
                <td style="padding:8px; font-weight:bold;">Medium</td>
                <td style="padding:8px;">${body.utm_medium || "-"}</td>
              </tr>

              <tr>
                <td style="padding:8px; font-weight:bold;">Campaign</td>
                <td style="padding:8px;">${body.utm_campaign || "-"}</td>
              </tr>

              <tr>
                <td style="padding:8px; font-weight:bold;">Keyword</td>
                <td style="padding:8px;">${body.utm_term || "-"}</td>
              </tr>

              <tr>
                <td style="padding:8px; font-weight:bold;">Ad Content</td>
                <td style="padding:8px;">${body.utm_content || "-"}</td>
              </tr>

              <tr>
                <td style="padding:8px; font-weight:bold;">GCLID</td>
                <td style="padding:8px;">${body.gclid || "-"}</td>
              </tr>

              <tr>
                <td style="padding:8px; font-weight:bold;">Landing Page</td>
                <td style="padding:8px;">${body.landing_page || "-"}</td>
              </tr>

              <tr>
                <td style="padding:8px; font-weight:bold;">Page URL</td>
                <td style="padding:8px;">${body.page_url || "-"}</td>
              </tr>

              <tr>
                <td style="padding:8px; font-weight:bold;">Form Type</td>
                <td style="padding:8px;">${body.form_type || "-"}</td>
              </tr>

              <tr>
                <td style="padding:8px; font-weight:bold;">Created Time</td>
                <td style="padding:8px;">
                  ${lead.created_at.toLocaleString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </td>
              </tr>
            </table>

            <hr style="margin:20px 0; border:none; border-top:1px solid #eee;" />

            <p style="font-size:12px; color:#888;">
              Lead submitted from AI/ML Webinar Landing Page.
            </p>
          </div>
        </div>
      `,
    })

    await transporter.sendMail({
      from: '"Dandes Academy" <hello@dandesacademy.com>',
      to: body.email_id,
      subject: "Thank You for Your Interest in Our AI & Machine Learning Program | Dandes Academy",
      html: `
        <div style="font-family: Arial, sans-serif; font-size:15px; line-height: 1.6; color: #333;">
          <h2 style="color:#111;">Hello ${body.full_name || "there"},</h2>

          <p>Thank you for your interest in our <b>AI & Machine Learning Program:</b></p>
          <p>We're glad you reached out.</p>

          <p><strong>Here's what happens next:</strong></p>

          <ul style="padding-left: 20px;">
            <li>One of our Programe Counsellors will contact you shortly</li>
            <li>We'll understand your goals and answer your questions</li>
            <li>We'll share details about the curriculum, fees, and upcoming batches</li>
          </ul>

          <p>We look forward to speaking with you.</p>

          <p>
            Regards,<br/>
            <strong>Srinivas Dande</strong><br/>
            Founder & Lead Trainer<br/>
            Dandes Academy
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      lead,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}