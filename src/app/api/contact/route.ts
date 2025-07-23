import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { firstname, lastname, company, email, phone_number, your_message } = await req.json();
  if (!firstname || !lastname || !company || !email || !your_message) {
    return NextResponse.json({ error: 'Mohon lengkapi semua field yang wajib.' }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `Website Contact <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: 'New Contact Form Submission',
      text: `Nama: ${firstname} ${lastname}\nEmail: ${email}\nPerusahaan: ${company}\nPhone: ${phone_number}\nPesan: ${your_message}`,
      html: `<p><b>Nama:</b> ${firstname} ${lastname}</p><p><b>Email:</b> ${email}</p><p><b>Perusahaan:</b> ${company}</p><p><b>Phone:</b> ${phone_number}</p><p><b>Pesan:</b><br/>${your_message}</p>`
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Email error:', err);
    return NextResponse.json({ error: 'Gagal mengirim email.', detail: err.message }, { status: 500 });
  }
}
