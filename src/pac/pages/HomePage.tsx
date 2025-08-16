import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Recycling,
  Factory,
  LocalShipping,
  Assignment,
  Computer,
  CompareArrows,
  Gavel,
  Build,
  TrendingUp,
  ArrowForward,
  CheckCircle,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const featuredServices = [
    {
      icon: <CompareArrows />,
      title: 'Material Sorting',
      description: 'Advanced conveyor-based sorting systems for maximum efficiency',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400',
      link: '/services/conveyor-sorting'
    },
    {
      icon: <Assignment />,
      title: 'Recycling Consulting',
      description: 'Expert audits and consulting to optimize your recycling programs',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400',
      link: '/services/recycling-consulting'
    },
    {
      icon: <Factory />,
      title: 'Industrial Waste',
      description: 'Comprehensive industrial waste handling and processing solutions',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400',
      link: '/services/industrial-waste'
    },
    {
      icon: <Computer />,
      title: 'E-Waste Processing',
      description: 'Secure and environmentally responsible e-waste collection',
      image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400',
      link: '/services/e-waste-collection'
    },
    {
      icon: <TrendingUp />,
      title: 'Value Recovery',
      description: 'Maximize returns through strategic value recovery and resale',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400',
      link: '/services/value-recovery'
    }
  ];

  const benefits = [
    'EPA Certified & Compliant',
    'Zero Landfill Guarantee',
    '24/7 Logistics Support',
    'Comprehensive Reporting',
    'Sustainable Solutions',
    'Cost-Effective Processing'
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(rgba(30, 60, 114, 0.8), rgba(42, 82, 152, 0.8)), url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&crop=center")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, mx: 'auto' }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2,
                }}
              >
                Efficient, Sustainable & Compliant Conveyor-Based Recycling
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  mb: 4,
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  lineHeight: 1.5,
                }}
              >
                Transforming warehouse waste into value through precision sorting, logistics expertise, and environmental integrity.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  to="/services"
                  sx={{
                    backgroundColor: '#00bcd4',
                    '&:hover': { backgroundColor: '#0097a7' },
                    fontSize: '1.1rem',
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Explore Our Services
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component={Link}
                  to="/contact"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: '#00bcd4',
                      backgroundColor: 'rgba(0,188,212,0.1)',
                    },
                    fontSize: '1.1rem',
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Get a Quote
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: { xs: 4, md: 0 },
                }}
              >
                <Box
                  sx={{
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    background: 'rgba(0,188,212,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '3px solid rgba(0,188,212,0.3)',
                  }}
                >
                  <Recycling sx={{ fontSize: 120, color: '#00bcd4' }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box sx={{ py: 6, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            sx={{
              textAlign: 'center',
              mb: 4,
              fontWeight: 'bold',
              color: '#1e3c72',
            }}
          >
            Why Choose PAC Recycle Works?
          </Typography>
          <Grid container spacing={2}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 2,
                    backgroundColor: 'white',
                    borderRadius: 2,
                    boxShadow: 1,
                    '&:hover': {
                      boxShadow: 3,
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CheckCircle sx={{ color: '#00bcd4', fontSize: 30 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {benefit}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured Services Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              fontWeight: 'bold',
              color: '#1e3c72',
            }}
          >
            Our Featured Services
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
            Comprehensive solutions for all your recycling and waste management needs
          </Typography>
          
          <Grid container spacing={4}>
            {featuredServices.map((service, index) => (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                    },
                    borderRadius: 3,
                    overflow: 'hidden',
                  }}
                >
                  <CardMedia
                    component="img"
                    height={200}
                    image={service.image}
                    alt={service.title}
                    sx={{
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2,
                        gap: 1,
                      }}
                    >
                      <IconButton
                        sx={{
                          backgroundColor: '#00bcd4',
                          color: 'white',
                          '&:hover': { backgroundColor: '#0097a7' },
                        }}
                      >
                        {service.icon}
                      </IconButton>
                      <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                      {service.description}
                    </Typography>
                    <Button
                      component={Link}
                      to={service.link}
                      variant="text"
                      endIcon={<ArrowForward />}
                      sx={{
                        color: '#00bcd4',
                        fontWeight: 600,
                        '&:hover': {
                          backgroundColor: 'rgba(0,188,212,0.1)',
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          background: 'linear-gradient(rgba(30, 60, 114, 0.9), rgba(42, 82, 152, 0.9)), url("https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1920&h=600&fit=crop&crop=center")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          py: 8,
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                Ready to Transform Your Waste Management?
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>
                Contact us today for a free consultation and discover how PAC Recycle Works 
                can help your business achieve its sustainability and profitability goals.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  to="/contact"
                  sx={{
                    backgroundColor: '#00bcd4',
                    '&:hover': { backgroundColor: '#0097a7' },
                    fontSize: '1.2rem',
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Get Free Consultation
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default HomePage;
