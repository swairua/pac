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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import {
  LocalShipping,
  CheckCircle,
  Schedule,
  GpsFixed,
  Phone,
  Security,
  Route,
  Assessment,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function PickupLogistics() {
  const services = [
    {
      icon: <Schedule />,
      title: 'Scheduled Pickups',
      description: 'Regular collection services tailored to your business schedule'
    },
    {
      icon: <Phone />,
      title: 'On-Demand Service',
      description: 'Emergency and urgent pickup requests available 24/7'
    },
    {
      icon: <GpsFixed />,
      title: 'GPS Tracking',
      description: 'Real-time tracking of all vehicles and shipments'
    },
    {
      icon: <Route />,
      title: 'Route Optimization',
      description: 'AI-powered routing for maximum efficiency and cost savings'
    }
  ];

  const serviceAreas = [
    'Metropolitan Area (Same Day)',
    'Regional Coverage (Next Day)',
    'State-wide Service (2-3 Days)',
    'National Network (3-5 Days)',
    'Cross-Border Transport',
    'Port & Terminal Access'
  ];

  const vehicleTypes = [
    {
      type: 'Standard Trucks',
      capacity: '10-15 tons',
      description: 'General waste and recyclables',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400'
    },
    {
      type: 'Flatbed Trailers',
      capacity: '25-40 tons',
      description: 'Large equipment and bulk materials',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400'
    },
    {
      type: 'Specialized Containers',
      capacity: '5-20 tons',
      description: 'Hazardous and sensitive materials',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'
    },
    {
      type: 'Roll-off Containers',
      capacity: '10-40 cubic yards',
      description: 'Construction and demolition debris',
      image: 'https://images.unsplash.com/photo-1519273954205-cff4bd8b78ae?w=400'
    }
  ];

  const pricingTable = [
    { service: 'Regular Pickup', frequency: 'Weekly', price: '$150-300' },
    { service: 'Bi-weekly Service', frequency: 'Every 2 weeks', price: '$200-400' },
    { service: 'Monthly Collection', frequency: 'Monthly', price: '$300-600' },
    { service: 'On-Demand', frequency: 'As needed', price: '$100-250' },
    { service: 'Emergency Service', frequency: '24/7 Available', price: '$200-500' }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(rgba(30, 60, 114, 0.8), rgba(42, 82, 152, 0.8)), url("https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1920&h=800&fit=crop&crop=center")',
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
                Pickup & Logistics Services
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  opacity: 0.9,
                  lineHeight: 1.6,
                  mb: 4,
                }}
              >
                Reliable, efficient collection and transportation services with 24/7 availability. 
                Our GPS-tracked fleet and optimized routing ensure your materials are collected 
                safely and delivered on time, every time.
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
                  src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=500"
                  alt="Pickup & Logistics Services"
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
            Advanced Logistics Solutions
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

      {/* Vehicle Fleet */}
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
            Our Vehicle Fleet
          </Typography>
          <Grid container spacing={4}>
            {vehicleTypes.map((vehicle, index) => (
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
                      backgroundImage: `url(${vehicle.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {vehicle.type}
                    </Typography>
                    <Chip
                      label={vehicle.capacity}
                      size="small"
                      sx={{
                        backgroundColor: '#00bcd4',
                        color: 'white',
                        mb: 2,
                      }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {vehicle.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Service Areas & Pricing */}
      <Box sx={{ py: 8 }}>
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
                Service Coverage
              </Typography>
              <Paper sx={{ p: 4, borderRadius: 3 }}>
                <List>
                  {serviceAreas.map((area, index) => (
                    <ListItem key={index} sx={{ py: 1 }}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: '#00bcd4' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={area}
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
                Service Pricing
              </Typography>
              <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
                <Table>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                      <TableCell sx={{ fontWeight: 'bold' }}>Service Type</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Frequency</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Price Range</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {pricingTable.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.service}</TableCell>
                        <TableCell>{row.frequency}</TableCell>
                        <TableCell sx={{ color: '#00bcd4', fontWeight: 'bold' }}>
                          {row.price}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Technology Features */}
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
            Advanced Technology Features
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                icon: <GpsFixed />,
                title: 'Real-Time GPS Tracking',
                description: 'Monitor your shipments in real-time with our advanced tracking system',
                features: ['Live location updates', 'Estimated arrival times', 'Route optimization', 'Delivery confirmations']
              },
              {
                icon: <Assessment />,
                title: 'Digital Reporting',
                description: 'Comprehensive digital documentation and reporting for all pickups',
                features: ['Electronic manifests', 'Photo documentation', 'Weight tracking', 'Compliance records']
              },
              {
                icon: <Security />,
                title: 'Chain of Custody',
                description: 'Complete documentation from pickup to final destination',
                features: ['Secure documentation', 'Digital signatures', 'Audit trails', 'Compliance certificates']
              }
            ].map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
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
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                      {feature.description}
                    </Typography>
                    <Box>
                      {feature.features.map((item, idx) => (
                        <Chip
                          key={idx}
                          label={item}
                          size="small"
                          variant="outlined"
                          sx={{
                            mr: 1,
                            mb: 1,
                            borderColor: '#00bcd4',
                            color: '#00bcd4',
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

      {/* Emergency Service */}
      <Box
        sx={{
          py: 6,
          backgroundColor: '#ffebee',
          border: '2px solid #f44336',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: '#c62828' }}>
                24/7 Emergency Pickup Service
              </Typography>
              <Typography variant="h6" sx={{ mb: 3, color: '#666' }}>
                Need immediate pickup? Our emergency response team is available around 
                the clock for urgent collection and transportation needs.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Chip label="Spill Response" color="error" />
                <Chip label="Equipment Failure" color="error" />
                <Chip label="Urgent Deadlines" color="error" />
                <Chip label="Same-Day Service" color="error" />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#d32f2f', mb: 1 }}>
                  (555) 123-4568
                </Typography>
                <Typography variant="h6" sx={{ color: '#666' }}>
                  Emergency Pickup Line
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
              Reliable Pickup & Logistics Solutions
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
              Trust our experienced team and modern fleet to handle all your collection 
              and transportation needs. Schedule your first pickup today!
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

export default PickupLogistics;
