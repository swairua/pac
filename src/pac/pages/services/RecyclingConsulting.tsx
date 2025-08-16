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
  CheckCircle,
  Analytics,
  Assessment,
  TrendingUp,
  PieChart,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function RecyclingConsulting() {
  const services = [
    {
      icon: <Analytics />,
      title: 'Waste Stream Analysis',
      description: 'Comprehensive evaluation of your current waste streams and material flows'
    },
    {
      icon: <Assessment />,
      title: 'Efficiency Audits',
      description: 'Detailed assessment of recycling processes and cost-saving opportunities'
    },
    {
      icon: <TrendingUp />,
      title: 'Program Optimization',
      description: 'Strategic recommendations to improve recycling rates and reduce costs'
    },
    {
      icon: <PieChart />,
      title: 'Performance Reporting',
      description: 'Regular monitoring and reporting on recycling program effectiveness'
    }
  ];

  const benefits = [
    'Increased Recycling Rates (20-40% improvement)',
    'Reduced Waste Management Costs',
    'Enhanced Environmental Compliance',
    'Improved Sustainability Metrics',
    'Staff Training and Education',
    'Custom Implementation Plans',
    'Ongoing Support and Monitoring',
    'ROI-Focused Recommendations'
  ];

  const industries = [
    'Manufacturing & Industrial',
    'Healthcare & Medical',
    'Retail & Commercial',
    'Educational Institutions',
    'Government & Municipal',
    'Hospitality & Food Service',
    'Construction & Demolition',
    'Technology & Electronics'
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(rgba(30, 60, 114, 0.8), rgba(42, 82, 152, 0.8)), url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&h=800&fit=crop&crop=center")',
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
                Recycling Consulting & Audits
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  opacity: 0.9,
                  lineHeight: 1.6,
                  mb: 4,
                }}
              >
                PAC Recycle Works LLC provides pragmatic consulting to transform waste liabilities into recoverable assets. We audit material flows, quantify waste streams, and design tailored interventions—everything from simple segregation layouts to full conveyor integration plans. Our audits produce actionable roadmaps with ROI projections, implementation timelines, and recommended vendor lists.
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
                Schedule Consultation
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
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500"
                  alt="Recycling Consulting"
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
            Comprehensive Consulting Services
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
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

      {/* Benefits & Industries */}
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
                Program Benefits
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
                Industries We Serve
              </Typography>
              <Paper sx={{ p: 4, borderRadius: 3 }}>
                <Grid container spacing={2}>
                  {industries.map((industry, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Chip
                        label={industry}
                        variant="outlined"
                        sx={{
                          width: '100%',
                          py: 2,
                          height: 'auto',
                          borderColor: '#00bcd4',
                          color: '#1e3c72',
                          fontWeight: 600,
                          '&:hover': {
                            backgroundColor: 'rgba(0,188,212,0.1)',
                          },
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
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
            Our Consulting Process
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                step: '1',
                title: 'Initial Assessment',
                description: 'Comprehensive evaluation of current waste streams and processes',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
              },
              {
                step: '2',
                title: 'Data Analysis',
                description: 'Detailed analysis of waste composition, costs, and recycling potential',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400'
              },
              {
                step: '3',
                title: 'Recommendations',
                description: 'Custom action plan with specific improvement strategies',
                image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400'
              },
              {
                step: '4',
                title: 'Implementation',
                description: 'Ongoing support and monitoring to ensure program success',
                image: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=400'
              }
            ].map((process, index) => (
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
                      backgroundImage: `url(${process.image})`,
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
                      {process.step}
                    </Box>
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                      {process.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {process.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
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
              Ready to Optimize Your Recycling Program?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
              Get a free consultation and discover how our expert analysis can help you 
              reduce costs, improve efficiency, and enhance your environmental impact.
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
                Schedule Free Consultation
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

export default RecyclingConsulting;
