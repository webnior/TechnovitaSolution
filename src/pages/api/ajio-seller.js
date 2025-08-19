import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, mobile, business, category } = req.body;
    
    // Validate required fields
    if (!name || !mobile) {
      return res.status(400).json({ error: 'Name and mobile number are required' });
    }

    const data = await resend.emails.send({
      from: 'TechnovitaSolution <onboarding@resend.dev>', // Replace with your verified domain
      to: ['technovitasolution@gmail.com'],
      subject: 'New Ajio Seller Onboarding Request',
      html: `
        <h2>New Ajio Seller Lead</h2>
        <p><strong>Source:</strong> Ajio Brand Launch Ad</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
        <p><strong>Business Name:</strong> ${business || 'Not provided'}</p>
        <p><strong>Product Category:</strong> ${category || 'Not provided'}</p>
        <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
      `
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
