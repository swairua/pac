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
} from '@mui/material';
import {
  Computer,
  CheckCircle,
  DeleteForever,
  Description,
  Shield,
  Recycling,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function EWasteCollection() {
  const services = [
    {
      icon: <Computer />,
      title: 'IT Equipment Collection',
      description: 'Computers, servers, laptops, tablets, and networking equipment'
    },
    {
      icon: <DeleteForever />,
      title: 'Secure Data Destruction',
      description: 'DOD-compliant data wiping and physical destruction services'
    },
    {
      icon: <Description />,
      title: 'Compliance Documentation',
      description: 'Certificates of destruction and environmental compliance reports'
    },
    {
      icon: <Recycling />,
      title: 'Material Recovery',
      description: 'Precious metals and rare earth element recovery and refining'
    }
  ];

  const acceptedItems = [
    'Desktop Computers & Workstations',
    'Laptops & Tablets',
    'Servers & Networking Equipment',
    'Monitors & Displays',
    'Printers & Copiers',
    'Mobile Phones & Smartphones',
    'Audio/Video Equipment',
    'Medical Electronics',
    'Industrial Controls',
    'Test & Measurement Equipment'
  ];

  const certifications = [
    'R2 (Responsible Recycling) Certified',
    'ISO 14001 Environmental Management',
    'NIST 800-88 Data Sanitization Standards',
    'DOD 5220.22-M Data Wiping Protocol',
    'SOC 2 Type II Security Compliance',
    'EPA Hazardous Waste Management'
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(rgba(30, 60, 114, 0.8), rgba(42, 82, 152, 0.8)), url("https://images.unsplash.com/photo-1580910051074-3eb694886505?w=1920&h=800&fit=crop&crop=center")',
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
                E-Waste Collection & Processing
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  opacity: 0.9,
                  lineHeight: 1.6,
                  mb: 4,
                }}
              >
                Secure, compliant, and environmentally responsible electronic waste disposal. 
                We ensure your sensitive data is completely destroyed while maximizing material 
                recovery and maintaining full regulatory compliance.
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
                Schedule Pickup
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
                  src="https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500"
                  alt="E-Waste Collection & Processing"
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

      {/* Security Alert */}
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
              Data Security is Our Priority
            </Typography>
            All electronic devices undergo secure data destruction using DOD-approved methods 
            before processing. We provide certificates of destruction for your compliance records.
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
            Comprehensive E-Waste Services
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

      {/* Accepted Items & Certifications */}
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
                What We Accept
              </Typography>
              <Paper sx={{ p: 4, borderRadius: 3 }}>
                <List>
                  {acceptedItems.map((item, index) => (
                    <ListItem key={index} sx={{ py: 1 }}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: '#00bcd4' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={item}
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
                Certifications & Compliance
              </Typography>
              <Paper sx={{ p: 4, borderRadius: 3 }}>
                <List>
                  {certifications.map((cert, index) => (
                    <ListItem key={index} sx={{ py: 1 }}>
                      <ListItemIcon>
                        <Shield sx={{ color: '#00bcd4' }} />
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
            Our Secure E-Waste Process
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                step: '1',
                title: 'Secure Collection',
                description: 'Chain of custody documentation begins at pickup with secure transport'
              },
              {
                step: '2',
                title: 'Data Destruction',
                description: 'DOD-compliant data wiping and physical destruction of storage devices'
              },
              {
                step: '3',
                title: 'Material Processing',
                description: 'Disassembly and sorting of components for maximum material recovery'
              },
              {
                step: '4',
                title: 'Documentation',
                description: 'Certificates of destruction and compliance reports provided'
              }
            ].map((process, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    height: '100%',
                    textAlign: 'center',
                    border: '2px solid #e0e0e0',
                    '&:hover': {
                      borderColor: '#00bcd4',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      backgroundColor: '#00bcd4',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                    }}
                  >
                    {process.step}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {process.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {process.description}
                  </Typography>
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
              Secure E-Waste Disposal Made Simple
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
              Don't let outdated electronics become a security risk. Schedule your secure 
              e-waste pickup today and get complete peace of mind.
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
                Schedule Pickup
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

export default EWasteCollection;
