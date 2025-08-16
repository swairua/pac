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
  Alert,
  Chip,
} from '@mui/material';
import {
  Factory,
  CheckCircle,
  Security,
  LocalShipping,
  Warning,
  Engineering,
  Science,
  Shield,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function IndustrialWaste() {
  const services = [
    {
      icon: <Factory />,
      title: 'Manufacturing Waste',
      description: 'Comprehensive handling of production waste streams and byproducts'
    },
    {
      icon: <Science />,
      title: 'Chemical Processing',
      description: 'Safe disposal and treatment of chemical waste and hazardous materials'
    },
    {
      icon: <Engineering />,
      title: 'Equipment Decommissioning',
      description: 'Professional dismantling and recycling of industrial equipment'
    },
    {
      icon: <Shield />,
      title: 'Compliance Management',
      description: 'Full regulatory compliance and documentation for all waste streams'
    }
  ];

  const wasteTypes = [
    'Metal Shavings & Scrap',
    'Chemical Byproducts',
    'Industrial Solvents',
    'Construction Debris',
    'Machinery & Equipment',
    'Electronic Components',
    'Plastic Manufacturing Waste',
    'Textile & Fabric Waste',
    'Packaging Materials',
    'Process Water Treatment Residuals'
  ];

  const certifications = [
    'EPA Hazardous Waste Generator License',
    'DOT Hazardous Materials Transportation',
    'RCRA Treatment & Disposal Permits',
    'OSHA Safety Compliance Certified',
    'ISO 14001 Environmental Management',
    'State Industrial Waste Permits'
  ];

  const processSteps = [
    {
      title: 'Site Assessment',
      description: 'Comprehensive evaluation of waste generation and handling processes',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400'
    },
    {
      title: 'Waste Characterization',
      description: 'Detailed analysis and classification of all waste materials',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400'
    },
    {
      title: 'Treatment & Processing',
      description: 'Safe processing using appropriate treatment technologies',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400'
    },
    {
      title: 'Final Disposal',
      description: 'Responsible disposal or recycling according to regulations',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'
    }
  ];

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
                Industrial Waste Handling
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  opacity: 0.9,
                  lineHeight: 1.6,
                  mb: 4,
                }}
              >
                Specialized management of complex industrial waste streams with complete 
                regulatory compliance. Our expert team handles everything from hazardous 
                chemicals to large-scale manufacturing byproducts safely and efficiently.
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
                Get Expert Assessment
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
                  src="https://images.unsplash.com/photo-1581093458791-9f3c3250e7ef?w=500"
                  alt="Industrial Waste Handling"
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

      {/* Safety Alert */}
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
              Safety & Compliance First
            </Typography>
            All industrial waste handling follows strict EPA guidelines and OSHA safety protocols. 
            Our certified technicians ensure complete compliance and worker safety at every step.
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
            Specialized Industrial Services
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
                        backgroundColor: '#00bcd4',
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

      {/* Waste Types & Certifications */}
      <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 'bold',
                  mb: 4,
                  color: '#1e3c72',
                }}
              >
                Industrial Waste Types
              </Typography>
              <Paper sx={{ p: 4, borderRadius: 3 }}>
                <Grid container spacing={2}>
                  {wasteTypes.map((type, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <CheckCircle sx={{ color: '#00bcd4', mr: 1, fontSize: 20 }} />
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {type}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 'bold',
                  mb: 4,
                  color: '#1e3c72',
                }}
              >
                Licenses & Certifications
              </Typography>
              <Paper sx={{ p: 4, borderRadius: 3 }}>
                <List>
                  {certifications.map((cert, index) => (
                    <ListItem key={index} sx={{ py: 1 }}>
                      <ListItemIcon>
                        <Security sx={{ color: '#00bcd4' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={cert}
                        sx={{
                          '& .MuiListItemText-primary': {
                            fontWeight: 500,
                          }
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Process */}
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
            Our Industrial Waste Process
          </Typography>
          <Grid container spacing={4}>
            {processSteps.map((step, index) => (
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
                      backgroundImage: `url(${step.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: '#00bcd4',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                      }}
                    >
                      {index + 1}
                    </Box>
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {step.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Emergency Response */}
      <Box
        sx={{
          py: 6,
          backgroundColor: '#e3f2fd',
          border: '2px solid #2196f3',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: '#1565c0' }}>
                24/7 Emergency Response
              </Typography>
              <Typography variant="h6" sx={{ mb: 3, color: '#666' }}>
                Industrial accidents happen. When they do, our emergency response team 
                is ready to provide immediate containment and cleanup services.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Chip label="Spill Response" color="primary" />
                <Chip label="Containment" color="primary" />
                <Chip label="Emergency Cleanup" color="primary" />
                <Chip label="24/7 Availability" color="primary" />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#d32f2f', mb: 1 }}>
                  (555) 123-4568
                </Typography>
                <Typography variant="h6" sx={{ color: '#666' }}>
                  Emergency Hotline
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
              Expert Industrial Waste Management
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
              Trust our certified experts to handle your most challenging industrial 
              waste streams safely, efficiently, and in full compliance with regulations.
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
                Request Assessment
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

export default IndustrialWaste;
