import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, phone, email, shootType } = req.body;

  if (!name || !phone || !shootType) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    await resend.emails.send({
      from: 'Technovita Solution <onboarding@resend.dev>',
      to: 'technovitasolution@gmail.com',
      subject: `📸 New E-commerce Photo Shoot Booking: ${shootType}`,
      html: `
        <h2>New E-commerce Photo Shoot Booking</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Shoot Type:</strong> ${shootType}</p>
      `,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending shoot booking email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
} 