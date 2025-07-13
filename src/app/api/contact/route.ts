import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, company, message } = await req.json();

    if (!name || !email || !company || !message) {
      return NextResponse.json({ error: 'Please fill all fields' }, { status: 400 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, // your gmail
        pass: process.env.EMAIL_PASS, // your app password
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_RECEIVER, // your receiving email
      subject: 'New Full Stack Developer Hiring Inquiry',
      html: `
        <h2>Hiring Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
