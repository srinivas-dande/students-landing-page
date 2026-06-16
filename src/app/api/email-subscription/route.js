import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";
import path from "path";

const prisma = new PrismaClient();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


export async function POST(request) {
  try {
    const { email, section } = await request.json();

    // Validate input
    if (!email || !section) {
      return NextResponse.json(
        {
          success: false,
          message: "Email and section are required.",
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // Save to DB if it doesn't already exist
    const existing = await prisma.emailSubscription.findFirst({
      where: {
        email,
        section,
      },
    });

    if (!existing) {
      await prisma.emailSubscription.create({
        data: {
          email,
          section,
        },
      });
    }

    // Only send the PDF for downloads
    if (section === "download") {
      const pdfPath = path.join(
        process.cwd(),
        "public",
        "pdfs",
        "AI-ML - Course Brochure- v2.0.pdf"
      );

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your AI & Machine Learning Curriculum",
        html: `
          <h2>AI & Machine Learning Curriculum</h2>
          <p>Hello,</p>
          <p>Thank you for your interest in our program.</p>
          <p>Please find the curriculum brochure attached to this email.</p>
          <br />
          <p>Best regards,</p>
          <p>Your Team</p>
        `,
        attachments: [
          {
            filename: "AI-ML - Course Brochure- v2.0.pdf",
            path: pdfPath,
          },
        ],
      });
    }

    // Always return success
    return NextResponse.json({
      success: true,
      message:
        section === "download"
          ? "Curriculum sent successfully."
          : "Subscribed successfully.",
    });
  } catch (error) {
    console.error("Email subscription error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}