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
} from '@mui/material';
import {
  Build,
  CheckCircle,
  Engineering,
  Inventory,
  LocalShipping,
  Assessment,
  Security,
  Schedule,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function ConveyorDismantling() {
  const services = [
    {
      icon: <Assessment />,
      title: 'Site Assessment & Project Planning',
      description: 'Detailed teardown sequencing, lift plans, and timeline coordination to minimize impact on production and safety risks'
    },
    {
      icon: <Build />,
      title: 'Safe Dismantling & Lifting',
      description: 'Certified rigging and mechanical teams perform the physical breakdown with lockout/tagout protocols and dust/spill controls'
    },
    {
      icon: <Inventory />,
      title: 'Component Inventory & Tagging',
      description: 'Every part is cataloged for possible refurbishment, resale, or scrap, with serial and condition notes'
    },
    {
      icon: <LocalShipping />,
      title: 'Transport & Temporary Storage',
      description: 'Secure crating and transport planning or temporary storage at our facility pending disposition'
    }
  ];

  const benefits = [
    'Minimal Production Downtime',
    'Safe & Compliant Dismantling',
    'Component Value Recovery',
    'Environmental Compliance',
    'Complete Documentation',
    'Certified Rigging Teams',
    'Secure Storage Options',
    'Equipment Resale Support'
  ];

  const processSteps = [
    'Initial Site Assessment',
    'Safety Planning & Permits',
    'Component Inventory',
    'Safe Dismantling Process',
    'Parts Cataloging & Tagging',
    'Transport & Storage',
    'Value Recovery Analysis',
    'Final Documentation'
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(rgba(30, 60, 114, 0.8), rgba(42, 82, 152, 0.8)), url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=800&fit=crop&crop=center")',
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
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3rem' },
                }}
              >
                Conveyor Dismantling & Removal
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  opacity: 0.9,
                  lineHeight: 1.6,
                  mb: 4,
                }}
              >
                Retiring or replacing conveyors requires precision planning and safe execution. Our dismantling teams develop a project plan, secure appropriate lifting gear, and follow strict safety and environmental controls to dismantle conveyors with minimal downtime.
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
                Request Quote
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
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
                <Engineering sx={{ fontSize: 120, color: '#00bcd4' }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
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
            Our Dismantling Services
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
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

      {/* Process Overview */}
      <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 'bold',
                  mb: 4,
                  color: '#1e3c72',
                }}
              >
                Our Process
              </Typography>
              <Paper sx={{ p: 4, borderRadius: 3 }}>
                <List>
                  {processSteps.map((step, index) => (
                    <ListItem key={index} sx={{ py: 1 }}>
                      <ListItemIcon>
                        <Chip
                          label={index + 1}
                          sx={{
                            backgroundColor: '#00bcd4',
                            color: 'white',
                            fontWeight: 'bold',
                            width: 32,
                            height: 32,
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText 
                        primary={step}
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
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 'bold',
                  mb: 4,
                  color: '#1e3c72',
                }}
              >
                Key Benefits
              </Typography>
              <Paper sx={{ p: 4, borderRadius: 3 }}>
                <List>
                  {benefits.map((benefit, index) => (
                    <ListItem key={index} sx={{ py: 1 }}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: '#00bcd4' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={benefit}
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

      {/* CTA */}
      <Box sx={{ py: 8, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
              Need Professional Conveyor Dismantling?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, color: '#666', maxWidth: 600, mx: 'auto' }}>
              Contact us today to discuss your conveyor dismantling project and receive a detailed quote with timeline and component recovery plan.
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
                Get Quote
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                to="/services"
                sx={{
                  borderColor: '#00bcd4',
                  color: '#00bcd4',
                  '&:hover': {
                    backgroundColor: 'rgba(0,188,212,0.1)',
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

export default ConveyorDismantling;
