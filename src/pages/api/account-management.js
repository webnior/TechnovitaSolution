import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { 
    mobile, 
    name, 
    business, 
    currentSales, 
    platform,
    service,
    serviceType,
    leadSource,
    inquiry
  } = req.body;

  // Basic validation
  if (!mobile || !name) {
    return res.status(400).json({ error: 'Mobile number and name are required' });
  }

  // Validate mobile number format
  if (!/^\d{10}$/.test(mobile)) {
    return res.status(400).json({ error: 'Please enter a valid 10-digit mobile number' });
  }

  try {
    // Send email notification using Resend
    await resend.emails.send({
      from: 'Account Management <onboarding@resend.dev>',
      to: ['technovitasolution@gmail.com'], // Replace with your actual email
      subject: `🎯 NEW ACCOUNT MANAGEMENT INQUIRY - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%); padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: bold;">🎯 ACCOUNT MANAGEMENT INQUIRY</h1>
            <p style="color: #e2e8f0; margin: 10px 0 0 0; font-size: 16px;">Complete Account Takeover Request</p>
          </div>
          
          <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-bottom: 20px;">
            <h2 style="color: #1e40af; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
              📋 Service Details
            </h2>
            <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 15px; margin-bottom: 15px;">
              <div style="color: #64748b; font-weight: 600;">Service Type:</div>
              <div style="color: #1e293b; font-weight: bold; background: #dbeafe; padding: 8px 12px; border-radius: 6px;">
                ${serviceType || 'Myntra & Ajio Account Management'}
              </div>
              
              <div style="color: #64748b; font-weight: 600;">Lead Source:</div>
              <div style="color: #1e293b;">${leadSource || 'Account Management Landing Page'}</div>
              
              <div style="color: #64748b; font-weight: 600;">Inquiry Type:</div>
              <div style="color: #1e293b;">${inquiry || 'Complete account takeover and management services'}</div>
              
              <div style="color: #64748b; font-weight: 600;">Service Code:</div>
              <div style="color: #7c3aed; font-weight: bold; background: #f3e8ff; padding: 4px 8px; border-radius: 4px;">
                ${service || 'account-management'}
              </div>
            </div>
          </div>

          <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-bottom: 20px;">
            <h2 style="color: #059669; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
              👤 Customer Information
            </h2>
            <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 15px;">
              <div style="color: #64748b; font-weight: 600;">Name:</div>
              <div style="color: #1e293b; font-weight: bold; font-size: 18px;">${name}</div>
              
              <div style="color: #64748b; font-weight: 600;">Mobile:</div>
              <div style="color: #1e293b; font-weight: bold;">
                <a href="tel:+91${mobile}" style="color: #059669; text-decoration: none;">+91 ${mobile}</a>
              </div>
              
              <div style="color: #64748b; font-weight: 600;">Business/Brand:</div>
              <div style="color: #1e293b;">${business || 'Not provided'}</div>
            </div>
          </div>

          <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-bottom: 20px;">
            <h2 style="color: #dc2626; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
              📊 Business Details
            </h2>
            <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 15px;">
              <div style="color: #64748b; font-weight: 600;">Current Sales:</div>
              <div style="color: #1e293b; font-weight: bold; background: ${currentSales ? '#dcfce7' : '#fef3c7'}; padding: 8px 12px; border-radius: 6px;">
                ${currentSales || 'Not provided'}
              </div>
              
              <div style="color: #64748b; font-weight: 600;">Current Platform:</div>
              <div style="color: #1e293b; font-weight: bold; background: ${platform ? '#dbeafe' : '#fef3c7'}; padding: 8px 12px; border-radius: 6px;">
                ${platform || 'Not provided'}
              </div>
            </div>
          </div>

          <div style="background: linear-gradient(135deg, #059669 0%, #047857 100%); padding: 20px; border-radius: 12px; text-align: center; margin-bottom: 20px;">
            <h3 style="color: white; margin: 0 0 15px 0; font-size: 18px;">🚀 IMMEDIATE ACTIONS REQUIRED</h3>
            <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 8px; margin-bottom: 15px;">
              <p style="color: white; margin: 0; font-weight: 600;">
                ⚡ Call within 30 minutes for maximum conversion<br/>
                🎯 This is a HIGH-INTENT account management lead<br/>
                💰 Potential for complete account takeover service
              </p>
            </div>
            <a href="tel:+91${mobile}" style="background: white; color: #059669; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">
              📞 CALL +91 ${mobile} NOW
            </a>
          </div>

          <div style="background: #fef3c7; border: 2px solid #f59e0b; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
            <h3 style="color: #92400e; margin: 0 0 10px 0; font-size: 16px;">⚠️ ACCOUNT MANAGEMENT LEAD NOTES:</h3>
            <ul style="color: #92400e; margin: 0; padding-left: 20px;">
              <li>This customer wants <strong>complete account takeover</strong></li>
              <li>They're looking for professional management services</li>
              <li>Discuss: Inventory management, returns handling, customer service</li>
              <li>Focus on: Stress relief and business growth benefits</li>
              <li>Pricing: Premium service - justify with ROI and time savings</li>
            </ul>
          </div>

          <div style="text-align: center; padding: 20px; border-top: 2px solid #e2e8f0;">
            <p style="color: #64748b; margin: 0; font-size: 14px;">
              Submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST<br/>
              From: Account Management Landing Page
            </p>
          </div>
        </div>
      `
    });

    // Return success response
    res.status(200).json({ 
      message: 'Account management inquiry submitted successfully',
      leadType: 'account-management',
      service: serviceType || 'Myntra & Ajio Account Management'
    });

  } catch (error) {
    console.error('Error sending account management inquiry:', error);
    res.status(500).json({ 
      error: 'Failed to submit inquiry. Please try again.',
      details: error.message 
    });
  }
}
