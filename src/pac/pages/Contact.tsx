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
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Schedule,
  Send,
  CheckCircle,
} from '@mui/icons-material';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

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
      // EmailJS configuration
      const serviceID = 'service_pac_demo';
      const templateID = 'template_pac_quote';
      const publicKey = 'demo_public_key_123';

      // Email template parameters
      const templateParams = {
        from_name: 'PAC Recycle Works Contact Form',
        from_email: 'contact@pacrecycleworks.com',
        to_email: 'gichukisimon@gmail.com',
        to_name: 'Simon Gichuki',
        subject: `Quote Request from ${formData.name} - ${formData.service || 'General Inquiry'}`,
        client_name: formData.name,
        client_email: formData.email,
        client_company: formData.company || 'Not provided',
        client_phone: formData.phone || 'Not provided',
        service_interest: formData.service || 'General Inquiry',
        message: formData.message || 'No message provided',
        submission_date: new Date().toLocaleString(),
      };

      console.log('📧 Sending email with details:');
      console.log('From: contact@pacrecycleworks.com');
      console.log('To: gichukisimon@gmail.com');
      console.log('Subject:', templateParams.subject);
      console.log('Template Params:', templateParams);

      // For demo purposes, we'll simulate the email sending
      // In production, you would use:
      // await emailjs.send(serviceID, templateID, templateParams, publicKey);

      // Simulate email sending delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Create a sample email content for demonstration
      const sampleEmailContent = `
=== PAC RECYCLE WORKS - QUOTE REQUEST ===

From: contact@pacrecycleworks.com
To: gichukisimon@gmail.com
Subject: ${templateParams.subject}
Date: ${templateParams.submission_date}

---

Dear Simon,

You have received a new quote request through the PAC Recycle Works website:

Client Information:
• Name: ${templateParams.client_name}
• Email: ${templateParams.client_email}
• Company: ${templateParams.client_company}
• Phone: ${templateParams.client_phone}
• Service Interest: ${templateParams.service_interest}

Message:
${templateParams.message}

---
This quote request was submitted through the PAC Recycle Works website.
Please respond within 24 hours for optimal customer service.

Best regards,
PAC Recycle Works Contact System
contact@pacrecycleworks.com
+1 (832) 630-0738
      `;

      console.log('📧 SAMPLE EMAIL CONTENT:');
      console.log(sampleEmailContent);

      alert(`📧 DEMO: Email would be sent to gichukisimon@gmail.com\n\nCheck the browser console to see the email content that would be delivered.`);

      setSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your message. Please try again or call us directly.');
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
              onClick={() => setSubmitted(false)}
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
                        rows={4}
                        placeholder="Tell us about your waste management needs, volume estimates, and any specific requirements..."
                        variant="outlined"
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        endIcon={<Send />}
                        sx={{
                          backgroundColor: '#00bcd4',
                          '&:hover': { backgroundColor: '#0097a7' },
                          py: 1.5,
                          fontSize: '1.1rem',
                        }}
                      >
                        Send Message
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
