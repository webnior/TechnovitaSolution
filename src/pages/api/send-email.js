// pages/api/send-email.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const emailTemplates = {
  storeSetup: (data) => ({
    subject: 'New Store Setup Consultation Request',
    html: `
      <h2>New Store Setup Request</h2>
      <p><strong>Business Name:</strong> ${data.businessName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.countryCode} ${data.phoneNumber}</p>
      <p><strong>Selected Platforms:</strong> ${data.selectedPlatforms.join(', ')}</p>
    `
  }),
  
  paymentReconciliation: (data) => ({
    subject: 'New Payment Reconciliation Service Request',
    html: `
    <h2>New Trial Request</h2>
    <p><strong>Company Name:</strong> ${data.companyName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Platform:</strong> ${data.platform}</p>
    `
  }),

  advertismentServices: (data) => ({
    subject: 'New Advertisment Services Request',
    html: `
      <h2>New Advertisment Request</h2>
      <p><strong>Business Name:</strong> ${data.businessName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.countryCode} ${data.phoneNumber}</p>
      <p><strong>Selected Platforms:</strong> ${data.selectedPlatforms.join(', ')}</p>
    `
  }),
  seoServices: (data) => ({
    subject: 'New SEO Services Request',
    html: `
      <h2>New seoServices Request</h2>
      <p><strong>Business Name:</strong> ${data.companyName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.countryCode} ${data.phoneNumber}</p>
    `
  }),
  // Add more templates for other forms
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { formType, ...formData } = req.body;
    
    if (!emailTemplates[formType]) {
      return res.status(400).json({ error: 'Invalid form type' });
    }

    const template = emailTemplates[formType](formData);

    const data = await resend.emails.send({
      from: 'Your Website <onboarding@resend.dev>', // Replace with your verified domain
      to: ['technovitasolution@gmail.com'],
      subject: template.subject,
      html: template.html
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}