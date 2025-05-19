import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, phone, email, modelName } = req.body;

  if (!name || !phone || !modelName) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    await resend.emails.send({
      from: 'Technovita Solution <onboarding@resend.dev>',
      to: 'technovitasolution@gmail.com',
      subject: `👤 New Model Booking: ${modelName}`,
      html: `
        <h2>New Model Booking</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Model Name:</strong> ${modelName}</p>
      `,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending model booking email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
} 