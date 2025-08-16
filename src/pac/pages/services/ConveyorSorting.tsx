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
  Speed,
  GpsFixed,
  Analytics,
  Computer,
  Security,
  Recycling,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function ConveyorSorting() {
  const features = [
    {
      icon: <Speed />,
      title: 'High-Speed Processing',
      description: 'Process up to 50 tons per hour with our advanced conveyor systems'
    },
    {
      icon: <GpsFixed />,
      title: '99%+ Accuracy',
      description: 'AI-powered optical sorting achieves industry-leading accuracy rates'
    },
    {
      icon: <Analytics />,
      title: 'Real-Time Monitoring',
      description: 'Live performance dashboards and quality control metrics'
    },
    {
      icon: <Computer />,
      title: 'AI Integration',
      description: 'Machine learning algorithms continuously improve sorting efficiency'
    }
  ];

  const materials = [
    'Plastics (PET, HDPE, PP, PS)',
    'Paper & Cardboard',
    'Glass (Clear, Brown, Green)',
    'Metals (Aluminum, Steel)',
    'Electronics Components',
    'Textiles & Fabrics',
    'Wood & Biomass',
    'Mixed MSW Streams'
  ];

  const specifications = [
    { label: 'Processing Capacity', value: '50 tons/hour' },
    { label: 'Sorting Accuracy', value: '99.5%+' },
    { label: 'Material Types', value: '8+ Categories' },
    { label: 'Conveyor Length', value: '100+ meters' },
    { label: 'Operating Hours', value: '24/7 Available' },
    { label: 'Quality Control', value: 'Real-time Monitoring' }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(rgba(30, 60, 114, 0.8), rgba(42, 82, 152, 0.8)), url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=800&fit=crop&crop=center")',
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
                Conveyor-Based Material Sorting
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  opacity: 0.9,
                  lineHeight: 1.6,
                  mb: 4,
                }}
              >
                We operate high-capacity conveyor sorting lines purpose-built for warehouse and distribution center waste streams. From intake to bale, every load is processed to maximize recovery rates and reduce disposal costs. Our systems combine automated sorting tools with manual quality control so that plastics, corrugate, films, metals and mixed materials are accurately separated and routed to the correct downstream markets.
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
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500"
                  alt="Conveyor-Based Material Sorting"
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

      {/* Key Features */}
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
            Advanced Sorting Technology
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
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
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Technical Specifications */}
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
                Technical Specifications
              </Typography>
              <Paper sx={{ p: 4, borderRadius: 3 }}>
                <Grid container spacing={3}>
                  {specifications.map((spec, index) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={index}>
                      <Box>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                          {spec.label}
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#00bcd4' }}>
                          {spec.value}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
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
                Supported Materials
              </Typography>
              <Paper sx={{ p: 4, borderRadius: 3 }}>
                <List>
                  {materials.map((material, index) => (
                    <ListItem key={index} sx={{ py: 1 }}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: '#00bcd4' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={material}
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

      {/* Process Overview */}
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
            How Our Sorting Process Works
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                step: '01',
                title: 'Material Intake',
                description: 'Mixed materials are fed onto our high-speed conveyor system'
              },
              {
                step: '02',
                title: 'Optical Scanning',
                description: 'Advanced sensors and cameras analyze each item in real-time'
              },
              {
                step: '03',
                title: 'AI Classification',
                description: 'Machine learning algorithms identify material type and quality'
              },
              {
                step: '04',
                title: 'Precision Sorting',
                description: 'Automated systems direct materials into appropriate collection bins'
              },
              {
                step: '05',
                title: 'Quality Control',
                description: 'Final inspection ensures sorting accuracy and material purity'
              },
              {
                step: '06',
                title: 'Output Processing',
                description: 'Sorted materials are prepared for downstream processing or sale'
              }
            ].map((process, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    height: '100%',
                    border: '2px solid #e0e0e0',
                    '&:hover': {
                      borderColor: '#00bcd4',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Chip
                      label={process.step}
                      sx={{
                        backgroundColor: '#00bcd4',
                        color: 'white',
                        fontWeight: 'bold',
                        mr: 2,
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {process.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {process.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Benefits */}
      <Box
        sx={{
          background: 'linear-gradient(rgba(30, 60, 114, 0.8), rgba(42, 82, 152, 0.8)), url("https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1920&h=600&fit=crop&crop=center")',
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
          <Typography
            variant="h4"
            component="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              mb: 6,
            }}
          >
            Benefits of Our Conveyor Sorting System
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                icon: <Recycling />,
                title: 'Maximum Recovery',
                description: 'Achieve 95%+ material recovery rates from waste streams'
              },
              {
                icon: <Security />,
                title: 'Consistent Quality',
                description: 'Automated sorting ensures consistent output quality'
              },
              {
                icon: <Speed />,
                title: 'High Throughput',
                description: 'Process large volumes quickly and efficiently'
              },
              {
                icon: <Analytics />,
                title: 'Data Insights',
                description: 'Detailed analytics help optimize your waste streams'
              }
            ].map((benefit, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0,188,212,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      color: '#00bcd4',
                    }}
                  >
                    {benefit.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {benefit.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
              Ready to Optimize Your Material Sorting?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, color: '#666', maxWidth: 600, mx: 'auto' }}>
              Contact us today to learn how our conveyor-based sorting system can transform 
              your waste management operations and maximize material recovery.
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

export default ConveyorSorting;
