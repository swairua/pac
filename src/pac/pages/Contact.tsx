import React, { useState } from 'react';
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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // In a real app, this would send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
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
      details: ['123 Industrial Blvd', 'Recycling City, RC 12345', 'United States'],
    },
    {
      icon: <Phone />,
      title: 'Phone',
      details: ['Main: (555) 123-4567', 'Emergency: (555) 123-4568'],
    },
    {
      icon: <Email />,
      title: 'Email',
      details: ['info@pacrecycleworks.com', 'sales@pacrecycleworks.com'],
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
              For urgent matters, please call us directly at <strong>(555) 123-4567</strong>.
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
            <Grid item xs={12} md={7}>
              <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 4, color: '#1e3c72' }}>
                  Get a Free Consultation
                </Typography>
                
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
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
                    <Grid item xs={12} sm={6}>
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
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Company Name"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
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
                    <Grid item xs={12}>
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
                    <Grid item xs={12}>
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
            <Grid item xs={12} md={5}>
              <Box sx={{ pl: { md: 2 } }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 4, color: '#1e3c72' }}>
                  Get in Touch
                </Typography>
                
                <Grid container spacing={3}>
                  {contactInfo.map((info, index) => (
                    <Grid item xs={12} key={index}>
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
                    business hours, call our 24/7 emergency line at (555) 123-4568.
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
              mb: 4,
              color: '#1e3c72',
            }}
          >
            Visit Our Facility
          </Typography>
          <Paper sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: 3 }}>
            <Box
              sx={{
                height: 400,
                background: 'linear-gradient(45deg, #e0e0e0 25%, transparent 25%), linear-gradient(-45deg, #e0e0e0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e0e0e0 75%), linear-gradient(-45deg, transparent 75%, #e0e0e0 75%)',
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#666',
              }}
            >
              <Typography variant="h6">
                Interactive Map Would Be Embedded Here
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}

export default Contact;
