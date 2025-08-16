import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Chip,
} from '@mui/material';
import {
  CompareArrows,
  Assignment,
  Factory,
  LocalShipping,
  Build,
  Computer,
  Nature,
  TrendingUp,
  Gavel,
  ArrowForward,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      icon: <CompareArrows />,
      title: 'Conveyor-Based Material Sorting',
      description: 'We operate precision conveyor systems optimized for high-speed separation of plastics, cardboard, shrink wrap, metals, and mixed warehouse by-products. Combining automated sensors with manual oversight, we deliver clean, value-grade material streams.',
      features: ['99%+ Accuracy', 'High-Speed Processing', 'Multiple Material Types', 'Real-time Monitoring'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500',
      link: '/services/conveyor-sorting',
      category: 'Processing'
    },
    {
      icon: <Assignment />,
      title: 'Recycling Consulting & Audits',
      description: 'Our audit team provides practical waste stream evaluation, facility layout optimization, and zero-waste strategy design. We offer flow analysis, financial ROI modeling, and staff education—turning operational inefficiencies into recoverable income.',
      features: ['Waste Stream Analysis', 'Cost Optimization', 'Compliance Review', 'Custom Solutions'],
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500',
      link: '/services/recycling-consulting',
      category: 'Consulting'
    },
    {
      icon: <Factory />,
      title: 'Industrial Waste Handling',
      description: 'Handling non-hazardous industrial by-products such as packaging film, pallets, and protective wrapping, we offer safe onsite collection, staging, and routing for recycling or responsible disposal.',
      features: ['Hazardous Materials', 'Bulk Processing', 'Safety Protocols', 'Documentation'],
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=500',
      link: '/services/industrial-waste',
      category: 'Processing'
    },
    {
      icon: <LocalShipping />,
      title: 'Pickup & Logistics Services',
      description: '24/7 collection and transportation services with GPS tracking and optimized routing for maximum efficiency.',
      features: ['24/7 Availability', 'GPS Tracking', 'Scheduled Pickups', 'Emergency Response'],
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=500',
      link: '/services/pickup-logistics',
      category: 'Logistics'
    },
    {
      icon: <Build />,
      title: 'Baling & Compaction',
      description: 'Professional baling and compaction services to optimize material density and transportation efficiency.',
      features: ['Material Optimization', 'Transport Efficiency', 'Quality Control', 'Custom Sizing'],
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500',
      link: '/services/baling-compaction',
      category: 'Processing'
    },
    {
      icon: <Computer />,
      title: 'E-Waste Collection & Processing',
      description: 'Secure and environmentally responsible electronic waste collection, data destruction, and material recovery.',
      features: ['Data Security', 'Certified Destruction', 'Material Recovery', 'Compliance Reports'],
      image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500',
      link: '/services/e-waste-collection',
      category: 'Specialized'
    },
    {
      icon: <Nature />,
      title: 'Pallet & Wood Recycling',
      description: 'Comprehensive wood waste processing including pallet repair, recycling, and biomass conversion.',
      features: ['Pallet Repair', 'Wood Chipping', 'Biomass Fuel', 'Sustainable Processing'],
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500',
      link: '/services/pallet-wood-recycling',
      category: 'Specialized'
    },
    {
      icon: <TrendingUp />,
      title: 'Value Recovery & Resale',
      description: 'Strategic material recovery and resale programs to maximize returns on your waste streams.',
      features: ['Market Analysis', 'Quality Grading', 'Resale Programs', 'Revenue Sharing'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500',
      link: '/services/value-recovery',
      category: 'Financial'
    },
    {
      icon: <Gavel />,
      title: 'Licensing & Compliance Support',
      description: 'Expert guidance on regulatory compliance, licensing requirements, and environmental reporting.',
      features: ['Regulatory Guidance', 'Permit Support', 'Compliance Audits', 'Documentation'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500',
      link: '/services/licensing-compliance',
      category: 'Consulting'
    },
  ];

  const categories = ['All', 'Processing', 'Consulting', 'Logistics', 'Specialized', 'Financial'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

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
            Our Comprehensive Services
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              maxWidth: 800,
              mx: 'auto',
              opacity: 0.9,
              lineHeight: 1.6,
            }}
          >
            From material sorting to value recovery, we provide end-to-end waste management 
            solutions tailored to your business needs. Explore our full range of services below.
          </Typography>
        </Container>
      </Box>

      {/* Category Filter */}
      <Box sx={{ py: 4, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'filled' : 'outlined'}
                sx={{
                  fontSize: '1rem',
                  px: 2,
                  py: 1,
                  backgroundColor: selectedCategory === category ? '#00bcd4' : 'transparent',
                  color: selectedCategory === category ? 'white' : '#1e3c72',
                  borderColor: '#00bcd4',
                  '&:hover': {
                    backgroundColor: selectedCategory === category ? '#0097a7' : 'rgba(0,188,212,0.1)',
                  },
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {filteredServices.map((service, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
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
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <IconButton
                        sx={{
                          backgroundColor: '#00bcd4',
                          color: 'white',
                          mr: 2,
                          '&:hover': { backgroundColor: '#0097a7' },
                        }}
                      >
                        {service.icon}
                      </IconButton>
                      <Chip
                        label={service.category}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(0,188,212,0.1)',
                          color: '#00bcd4',
                          fontWeight: 600,
                        }}
                      />
                    </Box>
                    
                    <Typography 
                      variant="h6" 
                      component="h3" 
                      sx={{ fontWeight: 'bold', mb: 2 }}
                    >
                      {service.title}
                    </Typography>
                    
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ mb: 3, lineHeight: 1.6 }}
                    >
                      {service.description}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                        Key Features:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {service.features.map((feature, idx) => (
                          <Chip
                            key={idx}
                            label={feature}
                            size="small"
                            variant="outlined"
                            sx={{
                              fontSize: '0.75rem',
                              borderColor: '#e0e0e0',
                              color: '#666',
                            }}
                          />
                        ))}
                      </Box>
                    </Box>

                    <Button
                      component={Link}
                      to={service.link}
                      variant="contained"
                      fullWidth
                      endIcon={<ArrowForward />}
                      sx={{
                        backgroundColor: '#00bcd4',
                        '&:hover': { backgroundColor: '#0097a7' },
                        fontWeight: 600,
                        py: 1.5,
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
          background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
          py: 8,
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
              Need a Custom Solution?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
              Every business has unique waste management needs. Let us create a tailored 
              solution that maximizes your efficiency and sustainability goals.
            </Typography>
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
              Request Custom Quote
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Services;
