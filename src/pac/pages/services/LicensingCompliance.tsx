import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Paper,
  Chip,
  Alert,
} from '@mui/material';
import {
  Gavel,
  CheckCircle,
  Security,
  Description,
  Support,
  Warning,
  Policy,
  Assignment,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function LicensingCompliance() {
  const services = [
    {
      icon: <Policy />,
      title: 'Regulatory Guidance',
      description: 'Expert navigation of complex federal, state, and local regulations'
    },
    {
      icon: <Description />,
      title: 'Permit Support',
      description: 'Assistance with permit applications and regulatory documentation'
    },
    {
      icon: <Assignment />,
      title: 'Compliance Audits',
      description: 'Comprehensive audits to ensure full regulatory compliance'
    },
    {
      icon: <Support />,
      title: 'Ongoing Support',
      description: '24/7 compliance support and regulatory update notifications'
    }
  ];

  const regulations = [
    {
      category: 'Federal Regulations',
      items: [
        'Resource Conservation and Recovery Act (RCRA)',
        'Comprehensive Environmental Response Act (CERCLA)',
        'Clean Air Act (CAA)',
        'Clean Water Act (CWA)',
        'Toxic Substances Control Act (TSCA)',
        'Department of Transportation (DOT) Regulations'
      ]
    },
    {
      category: 'State Regulations',
      items: [
        'State Waste Management Permits',
        'Environmental Protection Requirements',
        'Transportation Permits',
        'Worker Safety Regulations',
        'Facility Operating Licenses',
        'Emergency Response Plans'
      ]
    },
    {
      category: 'Industry Standards',
      items: [
        'R2 (Responsible Recycling) Certification',
        'e-Stewards Certification',
        'ISO 14001 Environmental Management',
        'OHSAS 18001 Safety Standards',
        'NIST Cybersecurity Framework',
        'SOC 2 Security Compliance'
      ]
    }
  ];

  const complianceAreas = [
    {
      area: 'Waste Classification',
      description: 'Proper identification and classification of all waste types',
      requirements: ['Hazardous waste determination', 'Universal waste classification', 'Special waste categories'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
    },
    {
      area: 'Transportation',
      description: 'DOT compliance for hazardous and non-hazardous material transport',
      requirements: ['Driver certification', 'Vehicle placarding', 'Shipping documentation'],
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400'
    },
    {
      area: 'Documentation',
      description: 'Complete record keeping and reporting requirements',
      requirements: ['Manifest tracking', 'Biennial reports', 'Exception reporting'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400'
    },
    {
      area: 'Facility Operations',
      description: 'Compliance with all facility operating permits and requirements',
      requirements: ['Permit conditions', 'Inspection protocols', 'Emergency procedures'],
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400'
    }
  ];

  const penalties = [
    { violation: 'Improper Waste Classification', penalty: '$27,500 - $55,000 per day' },
    { violation: 'Missing Documentation', penalty: '$1,100 - $5,500 per violation' },
    { violation: 'Transportation Violations', penalty: '$5,000 - $175,000 per violation' },
    { violation: 'Permit Violations', penalty: '$37,500 - $75,000 per day' },
    { violation: 'Data Security Breaches', penalty: '$100 - $50,000 per record' }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(rgba(30, 60, 114, 0.8), rgba(42, 82, 152, 0.8)), url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=800&fit=crop&crop=center")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          py: 8,
          color: 'white',
        }}
      >
        <Container maxWidth="lg" sx={{ mx: 'auto' }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3rem' },
                }}
              >
                Licensing & Compliance Support
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  opacity: 0.9,
                  lineHeight: 1.6,
                  mb: 4,
                }}
              >
                Navigate the complex regulatory landscape with confidence. Our compliance 
                experts ensure your operations meet all federal, state, and local requirements 
                while minimizing risk and avoiding costly penalties.
              </Typography>
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/contact"
                sx={{
                  backgroundColor: '#00bcd4',
                  '&:hover': { backgroundColor: '#0097a7' },
                  fontSize: '1.1rem',
                  px: 4,
                  py: 1.5,
                }}
              >
                Get Compliance Review
              </Button>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  height: 300,
                  width: '100%',
                  borderRadius: 3,
                  border: '3px solid rgba(0,188,212,0.3)',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500"
                  alt="Licensing & Compliance Support"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Compliance Alert */}
      <Box sx={{ py: 4, backgroundColor: '#fff3cd' }}>
        <Container maxWidth="lg">
          <Alert
            severity="warning"
            sx={{
              fontSize: '1.1rem',
              backgroundColor: 'transparent',
              border: '2px solid #ffc107',
              '& .MuiAlert-icon': {
                color: '#ff8f00',
              },
            }}
          >
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
              Regulatory Compliance is Critical
            </Typography>
            Non-compliance can result in significant penalties, legal liability, and operational shutdowns. 
            Stay ahead of changing regulations with our expert compliance support services.
          </Alert>
        </Container>
      </Box>

      {/* Our Services */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              mb: 6,
              color: '#1e3c72',
            }}
          >
            Comprehensive Compliance Services
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 3,
                    borderRadius: 3,
                    boxShadow: 3,
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 6,
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        backgroundColor: '#d32f2f',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3,
                        color: 'white',
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Regulatory Framework */}
      <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              mb: 6,
              color: '#1e3c72',
            }}
          >
            Regulatory Framework
          </Typography>
          <Grid container spacing={4}>
            {regulations.map((section, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper sx={{ p: 4, borderRadius: 3, height: '100%' }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: '#d32f2f' }}>
                    {section.category}
                  </Typography>
                  <List>
                    {section.items.map((item, idx) => (
                      <ListItem key={idx} sx={{ py: 0.5, pl: 0 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <Security sx={{ color: '#d32f2f', fontSize: 18 }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={item}
                          sx={{
                            '& .MuiListItemText-primary': {
                              fontSize: '0.9rem',
                              fontWeight: 500,
                            }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Compliance Areas */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              mb: 6,
              color: '#1e3c72',
            }}
          >
            Key Compliance Areas
          </Typography>
          <Grid container spacing={4}>
            {complianceAreas.map((area, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: 6,
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box
                    sx={{
                      height: 200,
                      backgroundImage: `url(${area.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                      {area.area}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {area.description}
                    </Typography>
                    <Box>
                      {area.requirements.map((req, idx) => (
                        <Chip
                          key={idx}
                          label={req}
                          size="small"
                          variant="outlined"
                          sx={{
                            mr: 1,
                            mb: 1,
                            borderColor: '#d32f2f',
                            color: '#d32f2f',
                            fontSize: '0.75rem',
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Penalty Information */}
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
            Cost of Non-Compliance
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: '#666',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Understanding the financial risks of non-compliance helps justify investment in proper compliance programs.
          </Typography>
          <Paper sx={{ p: 4, borderRadius: 3 }}>
            <Grid container spacing={3}>
              {penalties.map((penalty, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      p: 2,
                      border: '1px solid #e0e0e0',
                      borderRadius: 2,
                      '&:hover': {
                        backgroundColor: '#fff5f5',
                        borderColor: '#d32f2f',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Warning sx={{ color: '#d32f2f', mr: 2 }} />
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {penalty.violation}
                      </Typography>
                    </Box>
                    <Typography variant="h6" sx={{ color: '#d32f2f', fontWeight: 'bold' }}>
                      {penalty.penalty}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* Benefits */}
      <Box
        sx={{
          py: 6,
          backgroundColor: '#e8f5e8',
          border: '2px solid #4caf50',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: '#2e7d32' }}>
                Compliance Benefits
              </Typography>
              <Typography variant="h6" sx={{ mb: 3, color: '#666' }}>
                Proper compliance management protects your business from penalties while 
                demonstrating environmental responsibility to stakeholders and customers.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Chip label="Risk Mitigation" sx={{ backgroundColor: '#4caf50', color: 'white' }} />
                <Chip label="Penalty Avoidance" sx={{ backgroundColor: '#4caf50', color: 'white' }} />
                <Chip label="Reputation Protection" sx={{ backgroundColor: '#4caf50', color: 'white' }} />
                <Chip label="Operational Excellence" sx={{ backgroundColor: '#4caf50', color: 'white' }} />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Security sx={{ fontSize: 80, color: '#4caf50', mb: 2 }} />
                <Typography variant="h6" sx={{ color: '#2e7d32', fontWeight: 'bold' }}>
                  Protected Operations
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
          py: 8,
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
              Ensure Complete Regulatory Compliance
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
              Don't risk costly penalties and legal liability. Get expert compliance support 
              and peace of mind knowing your operations meet all regulatory requirements.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/contact"
                sx={{
                  backgroundColor: '#00bcd4',
                  '&:hover': { backgroundColor: '#0097a7' },
                  px: 4,
                  py: 1.5,
                }}
              >
                Schedule Compliance Review
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                to="/services"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                  px: 4,
                  py: 1.5,
                }}
              >
                View All Services
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default LicensingCompliance;
