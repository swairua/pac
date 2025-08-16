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
  Nature,
  Build,
  LocalFireDepartment,
  Carpenter,
  Park,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function PalletWoodRecycling() {
  const services = [
    {
      icon: <Build />,
      title: 'Pallet Repair & Refurbishment',
      description: 'Professional repair services to extend pallet lifespan and reduce costs'
    },
    {
      icon: <Carpenter />,
      title: 'Custom Pallet Manufacturing',
      description: 'New pallets built to your exact specifications from recycled materials'
    },
    {
      icon: <LocalFireDepartment />,
      title: 'Biomass Fuel Production',
      description: 'Convert unusable wood waste into renewable biomass fuel pellets'
    },
    {
      icon: <Park />,
      title: 'Landscape Products',
      description: 'Mulch, wood chips, and decorative products from processed wood waste'
    }
  ];

  const palletTypes = [
    {
      type: 'Standard GMA Pallets',
      size: '48" x 40"',
      description: 'Most common pallet size for general shipping',
      condition: 'Grade A, B, C available',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400'
    },
    {
      type: 'Euro Pallets',
      size: '47.2" x 31.5"',
      description: 'European standard pallets for international shipping',
      condition: 'EPAL certified available',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400'
    },
    {
      type: 'Heavy Duty Pallets',
      size: 'Custom sizes',
      description: 'Reinforced pallets for heavy industrial applications',
      condition: 'Custom construction',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400'
    },
    {
      type: 'Specialty Pallets',
      size: 'Various sizes',
      description: 'Custom pallets for unique shipping requirements',
      condition: 'Made to order',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400'
    }
  ];

  const processFlow = [
    'Collection & Transportation',
    'Sorting & Grading',
    'Dismantling & Preparation',
    'Quality Assessment',
    'Repair & Refurbishment',
    'Manufacturing & Processing',
    'Quality Control',
    'Distribution & Delivery'
  ];

  const woodProducts = [
    'Recycled Lumber',
    'Wood Chips & Mulch',
    'Biomass Fuel Pellets',
    'Landscape Borders',
    'Playground Surfacing',
    'Garden Mulch',
    'Biomass Energy Fuel',
    'Compost Amendments'
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(rgba(30, 60, 114, 0.8), rgba(42, 82, 152, 0.8)), url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=800&fit=crop&crop=center")',
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
                Pallet & Wood Recycling
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  opacity: 0.9,
                  lineHeight: 1.6,
                  mb: 4,
                }}
              >
                Comprehensive wood waste processing services from pallet repair to biomass 
                fuel production. We transform your wood waste into valuable resources while 
                promoting sustainable forestry practices.
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
                Start Wood Recycling
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
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500"
                  alt="Pallet & Wood Recycling"
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
            Wood Recycling Services
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
                        backgroundColor: '#4caf50',
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

      {/* Pallet Types */}
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
            Pallet Types We Handle
          </Typography>
          <Grid container spacing={4}>
            {palletTypes.map((pallet, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
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
                      backgroundImage: `url(${pallet.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {pallet.type}
                    </Typography>
                    <Chip
                      label={pallet.size}
                      size="small"
                      sx={{
                        backgroundColor: '#4caf50',
                        color: 'white',
                        mb: 2,
                      }}
                    />
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {pallet.description}
                    </Typography>
                    <Typography variant="caption" sx={{ fontStyle: 'italic', color: '#666' }}>
                      {pallet.condition}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Process & Products */}
      <Box sx={{ py: 8 }}>
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
                Processing Workflow
              </Typography>
              <Paper sx={{ p: 4, borderRadius: 3 }}>
                <List>
                  {processFlow.map((step, index) => (
                    <ListItem key={index} sx={{ py: 1 }}>
                      <ListItemIcon>
                        <Box
                          sx={{
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            backgroundColor: '#4caf50',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.9rem',
                            fontWeight: 'bold',
                          }}
                        >
                          {index + 1}
                        </Box>
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
                Wood Products
              </Typography>
              <Paper sx={{ p: 4, borderRadius: 3 }}>
                <Grid container spacing={2}>
                  {woodProducts.map((product, index) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Nature sx={{ color: '#4caf50', mr: 1, fontSize: 20 }} />
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {product}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Environmental Impact */}
      <Box
        sx={{
          py: 6,
          backgroundColor: '#e8f5e8',
          border: '2px solid #4caf50',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: '#2e7d32' }}>
                Environmental Impact
              </Typography>
              <Typography variant="h6" sx={{ mb: 3, color: '#666' }}>
                Our wood recycling services prevent thousands of tons of wood waste from 
                entering landfills while reducing the demand for virgin timber resources.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Chip label="95% Landfill Diversion" sx={{ backgroundColor: '#4caf50', color: 'white' }} />
                <Chip label="Sustainable Forestry" sx={{ backgroundColor: '#4caf50', color: 'white' }} />
                <Chip label="Carbon Footprint Reduction" sx={{ backgroundColor: '#4caf50', color: 'white' }} />
                <Chip label="Renewable Energy" sx={{ backgroundColor: '#4caf50', color: 'white' }} />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Nature sx={{ fontSize: 80, color: '#4caf50', mb: 2 }} />
                <Typography variant="h6" sx={{ color: '#2e7d32', fontWeight: 'bold' }}>
                  Sustainable Solutions
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
              Sustainable Wood Waste Solutions
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
              Transform your wood waste into valuable resources with our comprehensive 
              recycling services. From pallet repair to biomass fuel production.
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
                Start Recycling
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

export default PalletWoodRecycling;
