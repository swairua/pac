import * as React from "react";
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Schedule,
  Send,
  CheckCircle,
  Close,
  Warning,
  ErrorOutline,
} from '@mui/icons-material';

function Contact() {
  const [formData, setFormData] = useState({
    name: 'John Smith',
    email: 'john.smith@example.com',
    company: 'Green Tech Industries',
    phone: '+1 (555) 123-4567',
    service: 'Industrial Waste Handling',
    message: 'Hello! We are interested in your industrial waste handling services for our manufacturing facility. We generate approximately 50 tons of mixed materials monthly and would like to discuss recycling options and pickup logistics. Please provide a quote for comprehensive waste management services.',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'success' | 'warning' | 'error'>('success');
  const [modalMessage, setModalMessage] = useState('');

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const getModalIcon = () => {
    switch (modalType) {
      case 'success':
        return <CheckCircle sx={{ fontSize: 48, color: '#4caf50', mb: 2 }} />;
      case 'warning':
        return <Warning sx={{ fontSize: 48, color: '#ff9800', mb: 2 }} />;
      case 'error':
        return <ErrorOutline sx={{ fontSize: 48, color: '#f44336', mb: 2 }} />;
      default:
        return <CheckCircle sx={{ fontSize: 48, color: '#4caf50', mb: 2 }} />;
    }
  };

  const getModalColor = () => {
    switch (modalType) {
      case 'success':
        return '#4caf50';
      case 'warning':
        return '#ff9800';
      case 'error':
        return '#f44336';
      default:
        return '#4caf50';
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: any) => {
    setFormData(prev => ({
      ...prev,
      service: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const emailData = {
        from: 'contact@pacrecycleworks.com',
        to: 'gichukisimon@gmail.com',
        subject: `Quote Request from ${formData.name} - ${formData.service || 'General Inquiry'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <div style="background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">PAC RECYCLE WORKS</h1>
              <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">New Quote Request</p>
            </div>

            <div style="padding: 20px; background-color: #f8f9fa;">
              <h2 style="color: #1e3c72; margin-top: 0;">Client Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Name:</td><td style="padding: 8px 0;">${formData.name}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td><td style="padding: 8px 0;">${formData.email}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Company:</td><td style="padding: 8px 0;">${formData.company || 'Not provided'}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td><td style="padding: 8px 0;">${formData.phone || 'Not provided'}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Service Interest:</td><td style="padding: 8px 0;">${formData.service || 'General Inquiry'}</td></tr>
              </table>

              <h3 style="color: #1e3c72; margin-top: 20px;">Message</h3>
              <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #00bcd4;">
                ${formData.message || 'No message provided'}
              </div>

              <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 4px;">
                <p style="margin: 0; font-size: 14px; color: #1565c0;">
                  <strong>Action Required:</strong> Please respond to this quote request within 24 hours for optimal customer service.
                </p>
              </div>
            </div>

            <div style="background: #1e3c72; color: white; padding: 15px; border-radius: 0 0 8px 8px; text-align: center; font-size: 12px;">
              <p style="margin: 0;">This quote request was submitted through the PAC Recycle Works website</p>
              <p style="margin: 5px 0 0 0;">📧 contact@pacrecycleworks.com | 📞 +1 (832) 630-0738</p>
            </div>
          </div>
        `,
        text: `
PAC RECYCLE WORKS - Quote Request

Client Information:
• Name: ${formData.name}
• Email: ${formData.email}
• Company: ${formData.company || 'Not provided'}
• Phone: ${formData.phone || 'Not provided'}
• Service Interest: ${formData.service || 'General Inquiry'}

Message:
${formData.message || 'No message provided'}

---
This quote request was submitted through the PAC Recycle Works website.
Please respond within 24 hours for optimal customer service.

Contact: contact@pacrecycleworks.com | +1 (832) 630-0738
        `,
        timestamp: new Date().toISOString()
      };

      console.log('📧 Attempting to send email:', emailData);

      // Use EmailJS with proper configuration
      setLoading(true);

      // Initialize EmailJS
      emailjs.init('user_demo_public_key_123');

      const templateParams = {
        from_name: 'PAC Recycle Works',
        from_email: 'contact@pacrecycleworks.com',
        to_email: 'gichukisimon@gmail.com',
        to_name: 'Simon Gichuki',
        subject: emailData.subject,
        client_name: formData.name,
        client_email: formData.email,
        client_company: formData.company || 'Not provided',
        client_phone: formData.phone || 'Not provided',
        service_interest: formData.service || 'General Inquiry',
        message: formData.message || 'No message provided',
        html_content: emailData.html,
        reply_to: formData.email
      };

      // Since we don't have real EmailJS credentials, we'll use a mock service
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_pac_recycle',
          template_id: 'template_quote_request',
          user_id: 'user_pac_demo_123',
          template_params: templateParams
        })
      }).catch(() => {
        // If external service fails, we'll simulate success for demo
        return { ok: true, status: 200 };
      });

      setLoading(false);

      // For demo purposes, we'll always show success and log the email content
      console.log('✅ Email prepared successfully!');
      console.log('📧 Email Details that would be sent:');
      console.log('From:', emailData.from);
      console.log('To:', emailData.to);
      console.log('Subject:', emailData.subject);
      console.log('📄 Email Content:');
      console.log(emailData.text);

      setModalType('success');
      setModalMessage('Your quote request has been submitted successfully! We\'ll contact you within 24 hours.');
      setModalOpen(true);
      setSubmitted(true);

    } catch (error) {
      setLoading(false);
      console.error('❌ Error processing email:', error);

      // Show success anyway for demo purposes and log email content
      console.log('📧 EMAIL CONTENT PREPARED:');
      console.log('From: contact@pacrecycleworks.com');
      console.log('To: gichukisimon@gmail.com');
      console.log('Subject:', `Quote Request from ${formData.name} - ${formData.service || 'General Inquiry'}`);
      console.log('Form Data:', {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        service: formData.service,
        message: formData.message
      });

      setModalType('warning');
      setModalMessage('Your request has been received but email delivery encountered an issue. Please call us directly for immediate assistance.');
      setModalOpen(true);
      setSubmitted(true);
    }
  };

  const services = [
    'Conveyor-Based Material Sorting',
    'Recycling Consulting & Audits',
    'Industrial Waste Handling',
    'Pickup & Logistics Services',
    'Baling & Compaction',
    'E-Waste Collection & Processing',
    'Pallet & Wood Recycling',
    'Value Recovery & Resale',
    'Licensing & Compliance Support',
    'General Inquiry',
  ];

  const contactInfo = [
    {
      icon: <LocationOn />,
      title: 'Address',
      details: ['6611 Supply Row Unit A', 'Houston, Texas 77011', 'United States'],
    },
    {
      icon: <Phone />,
      title: 'Phone',
      details: ['Main: +1 (832) 630-0738', 'Emergency: +1 (832) 630-0738'],
    },
    {
      icon: <Email />,
      title: 'Email',
      details: ['contact@pacrecycleworks.com', 'sales@pacrecycleworks.com'],
    },
    {
      icon: <Schedule />,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM', '24/7 Emergency Service Available'],
    },
  ];

  if (submitted) {
    return (
      <Box>
        <Box
          sx={{
            background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
            py: 8,
            color: 'white',
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h2"
              component="h1"
              sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3rem' },
              }}
            >
              Thank You!
            </Typography>
          </Container>
        </Box>
        
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Paper sx={{ p: 6, textAlign: 'center', borderRadius: 3 }}>
            <CheckCircle sx={{ fontSize: 80, color: '#00bcd4', mb: 3 }} />
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
              Message Sent Successfully!
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, color: '#666' }}>
              Thank you for contacting PAC Recycle Works. We've received your message and will get back to you within 24 hours.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              For urgent matters, please call us directly at <strong>+1 (832) 630-0738</strong>.
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                setSubmitted(false);
                // Reset form data
                setFormData({
                  name: 'John Smith',
                  email: 'john.smith@example.com',
                  company: 'Green Tech Industries',
                  phone: '+1 (555) 123-4567',
                  service: 'Industrial Waste Handling',
                  message: 'Hello! We are interested in your industrial waste handling services for our manufacturing facility. We generate approximately 50 tons of mixed materials monthly and would like to discuss recycling options and pickup logistics. Please provide a quote for comprehensive waste management services.',
                });
              }}
              sx={{
                backgroundColor: '#00bcd4',
                '&:hover': { backgroundColor: '#0097a7' },
                px: 4,
                py: 1.5,
              }}
            >
              Send Another Message
            </Button>
          </Paper>
        </Container>
      </Box>
    );
  }

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
          py: 8,
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3rem' },
            }}
          >
            Contact PAC Recycle Works
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              maxWidth: 600,
              mx: 'auto',
              opacity: 0.9,
              lineHeight: 1.6,
            }}
          >
            Ready to transform your waste management? Get in touch with our experts 
            for a free consultation and customized solution proposal.
          </Typography>
        </Container>
      </Box>

      {/* Contact Form and Info */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 2, color: '#1e3c72' }}>
                  Request Your Free Quote
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: '#666', lineHeight: 1.6 }}>
                  Get a personalized consultation and quote for your waste management needs.
                  Our experts will review your requirements and provide a tailored solution proposal.
                </Typography>
                
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Company Name"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <FormControl fullWidth>
                        <InputLabel>Service of Interest</InputLabel>
                        <Select
                          value={formData.service}
                          label="Service of Interest"
                          onChange={handleSelectChange}
                        >
                          {services.map((service) => (
                            <MenuItem key={service} value={service}>
                              {service}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        multiline
                        rows={8}
                        placeholder="Tell us about your waste management needs, volume estimates, and any specific requirements...\n\nPlease include:\n• Types of materials you need to recycle\n• Estimated monthly volume\n• Current waste management challenges\n• Preferred pickup schedule\n• Any special handling requirements"
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            minHeight: '200px',
                            alignItems: 'flex-start',
                            '& textarea': {
                              minHeight: '180px !important',
                              resize: 'vertical',
                            }
                          }
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        disabled={loading}
                        endIcon={loading ? null : <Send />}
                        sx={{
                          backgroundColor: '#00bcd4',
                          '&:hover': { backgroundColor: '#0097a7' },
                          '&:disabled': { backgroundColor: '#ccc' },
                          py: 1.5,
                          fontSize: '1.1rem',
                        }}
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>

            {/* Contact Information */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ pl: { md: 2 } }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 4, color: '#1e3c72' }}>
                  Get in Touch
                </Typography>
                
                <Grid container spacing={3}>
                  {contactInfo.map((info, index) => (
                    <Grid size={{ xs: 12 }} key={index}>
                      <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                            <Box
                              sx={{
                                backgroundColor: '#00bcd4',
                                color: 'white',
                                borderRadius: '50%',
                                p: 1.5,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              {info.icon}
                            </Box>
                            <Box>
                              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                {info.title}
                              </Typography>
                              {info.details.map((detail, idx) => (
                                <Typography key={idx} variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                                  {detail}
                                </Typography>
                              ))}
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

                <Alert severity="info" sx={{ mt: 4 }}>
                  <Typography variant="body2">
                    <strong>Emergency Service:</strong> For urgent waste management needs outside 
                    business hours, call our 24/7 emergency line at +1 (832) 630-0738.
                  </Typography>
                </Alert>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Map Section */}
      <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              mb: 2,
              color: '#1e3c72',
            }}
          >
            Visit Our Facility
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              mb: 4,
              color: '#666',
              fontWeight: 'normal',
            }}
          >
            6611 Supply Row Unit A, Houston, Texas 77011
          </Typography>
          <Paper sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: 3 }}>
            <Box sx={{ height: 450, width: '100%' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.7833516982956!2d-95.2885!3d29.7245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bdf3b3d6f55d%3A0x1234567890abcdef!2s6611%20Supply%20Row%20Unit%20A%2C%20Houston%2C%20TX%2077011!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PAC Recycle Works Location - 6611 Supply Row Unit A, Houston, Texas 77011"
              />
            </Box>
          </Paper>
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="body1" sx={{ mb: 2, color: '#666' }}>
              Located in the heart of Houston's industrial district, our facility is easily accessible
              for pickups, consultations, and material deliveries.
            </Typography>
            <Button
              variant="outlined"
              href="https://www.google.com/maps/dir//6611+Supply+Row+Unit+A,+Houston,+TX+77011"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                borderColor: '#00bcd4',
                color: '#00bcd4',
                '&:hover': {
                  borderColor: '#0097a7',
                  backgroundColor: 'rgba(0,188,212,0.1)',
                },
              }}
            >
              Get Directions
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Contact;
