import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, phone, email ,guideUrl,guideTitle} = req.body;

  try {
    // Send email notification
    await resend.emails.send({
      from: 'Technovita Solutions <onboarding@resend.dev>',
      to: 'technovitasolution@gmail.com', 
      subject: '🎯 New Lead from technovitasolution.in',
      html: `
        <h2>New Lead Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Source URL:</strong> ${req.headers.referer || 'Direct'}</p>
      `,
    });

    // If email is provided, send the free guide
    if (email) {
      await resend.emails.send({
        from: 'Technovita Solutions <onboarding@resend.dev>',
        to: email,
        subject: '🎁 Your Free Business Growth Guide is Here!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 12px; padding: 32px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="text-align: center; margin-bottom: 32px;">
              <h2 style="color: #1F2937; font-size: 24px; margin-bottom: 16px;">Thank you, ${name}! 🎉</h2>
              <p style="color: #4B5563; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
                We're excited to help you grow your business. As promised, here's your free guide to help you get started.
              </p>
              <a href="${guideUrl}" style="display: inline-block; background: linear-gradient(to right, #7C3AED, #4F46E5); color: white; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-weight: 600; margin-bottom: 32px;">
                ${guideTitle || 'Download Your Free Guide'}
              </a>
            </div>

            <div style="background-color: #F3F4F6; border-radius: 8px; padding: 24px; margin-bottom: 32px;">
              <p style="color: #1F2937; font-size: 18px; font-weight: 600; margin-bottom: 16px;">Need help? We're here for you!</p>
              <div style="display: flex; gap: 16px; justify-content: center;">
                <a href="tel:+917451073504" style="display: inline-block; background-color: #FB923C; color: white; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 500; text-align: center; width: 45%;">
                  📞 Call Expert
                </a>
                <a href="https://wa.me/917451073504?text=Hi,%20I%20just%20downloaded%20the%20guide.%20Can%20you%20help%20me%20with%20some%20questions?" style="display: inline-block; background-color: #22C55E; color: white; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 500; text-align: center; width: 45%;">
                  💬 WhatsApp
                </a>
              </div>
            </div>

            <div style="text-align: center; border-top: 1px solid #E5E7EB; padding-top: 24px;">
              <p style="color: #6B7280; font-size: 14px; margin-bottom: 8px;">Best regards,</p>
              <p style="color: #374151; font-weight: 600; font-size: 16px;">Team Technovita Solutions</p>
            </div>
          </div>
        `,
      });
    }

    res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.error('Error submitting lead:', error);
    res.status(500).json({ message: 'Error submitting lead' });
  }
}
