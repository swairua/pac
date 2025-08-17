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
  Compress,
  TrendingUp,
  Scale,
  Engineering,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function BalingCompaction() {
  const services = [
    {
      icon: <Compress />,
      title: 'Material Compaction',
      description: 'High-pressure compaction to maximize density and reduce volume'
    },
    {
      icon: <Build />,
      title: 'Custom Baling',
      description: 'Specialized baling services for different material types and sizes'
    },
    {
      icon: <Scale />,
      title: 'Weight Optimization',
      description: 'Precise weighing and optimization for maximum transport efficiency'
    },
    {
      icon: <Engineering />,
      title: 'Equipment Services',
      description: 'On-site baling equipment rental and maintenance services'
    }
  ];

  const materials = [
    {
      category: 'Paper Products',
      items: ['Cardboard', 'Office Paper', 'Newspapers', 'Magazines'],
      density: '800-1200 lbs/bale',
      image: 'https://images.pexels.com/photos/6169029/pexels-photo-6169029.jpeg?w=400'
    },
    {
      category: 'Plastic Materials',
      items: ['PET Bottles', 'HDPE Containers', 'Film Plastic', 'Mixed Plastics'],
      density: '600-1000 lbs/bale',
      image: 'https://images.pexels.com/photos/3735205/pexels-photo-3735205.jpeg?w=400'
    },
    {
      category: 'Metal Scrap',
      items: ['Aluminum Cans', 'Steel Scrap', 'Copper Wire', 'Mixed Metals'],
      density: '1500-3000 lbs/bale',
      image: 'https://images.pexels.com/photos/27312813/pexels-photo-27312813.jpeg?w=400'
    },
    {
      category: 'Textiles',
      items: ['Clothing', 'Fabric Scraps', 'Industrial Textiles', 'Rags'],
      density: '400-800 lbs/bale',
      image: 'https://images.pexels.com/photos/9853462/pexels-photo-9853462.jpeg?w=400'
    }
  ];

  const benefits = [
    'Reduce Transportation Costs by 60-80%',
    'Maximize Container Utilization',
    'Improve Storage Efficiency',
    'Enhance Material Quality',
    'Streamline Logistics Operations',
    'Increase Revenue from Sales',
    'Reduce Handling Requirements',
    'Environmental Impact Reduction'
  ];

  const equipmentSpecs = [
    { type: 'Horizontal Baler', capacity: '10-30 tons/hour', baleSize: '48" x 42" x 30"' },
    { type: 'Vertical Baler', capacity: '5-15 tons/hour', baleSize: '42" x 30" x variable' },
    { type: 'Two-Ram Baler', capacity: '15-40 tons/hour', baleSize: '60" x 48" x 48"' },
    { type: 'Compactor', capacity: '20-60 tons/hour', baleSize: 'Custom sizing' }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(rgba(30, 60, 114, 0.8), rgba(42, 82, 152, 0.8)), url("https://images.pexels.com/photos/2967770/pexels-photo-2967770.jpeg?w=1920&h=800&fit=crop&crop=center")',
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
                Baling & Compaction Services
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  opacity: 0.9,
                  lineHeight: 1.6,
                  mb: 4,
                }}
              >
                Maximize your material value and reduce transportation costs with our 
                professional baling and compaction services. Our high-density processing 
                optimizes storage, shipping, and revenue generation.
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
                Get Processing Quote
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
                  src="https://images.pexels.com/photos/5962644/pexels-photo-5962644.jpeg?w=500"
                  alt="Baling & Compaction"
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
            Professional Processing Services
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

      {/* Materials We Process */}
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
            Materials We Process
          </Typography>
          <Grid container spacing={4}>
            {materials.map((material, index) => (
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
                      backgroundImage: `url(${material.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                      {material.category}
                    </Typography>
                    <Chip
                      label={material.density}
                      size="small"
                      sx={{
                        backgroundColor: '#00bcd4',
                        color: 'white',
                        mb: 2,
                      }}
                    />
                    <Box>
                      {material.items.map((item, idx) => (
                        <Chip
                          key={idx}
                          label={item}
                          size="small"
                          variant="outlined"
                          sx={{
                            mr: 1,
                            mb: 1,
                            borderColor: '#e0e0e0',
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

      {/* Benefits & Equipment */}
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
                Processing Benefits
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
                Equipment Specifications
              </Typography>
              <Paper sx={{ p: 4, borderRadius: 3 }}>
                {equipmentSpecs.map((spec, index) => (
                  <Box key={index} sx={{ mb: 3, pb: 2, borderBottom: index < equipmentSpecs.length - 1 ? '1px solid #e0e0e0' : 'none' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#00bcd4' }}>
                      {spec.type}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                      <strong>Capacity:</strong> {spec.capacity}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Bale Size:</strong> {spec.baleSize}
                    </Typography>
                  </Box>
                ))}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Process Flow */}
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
            Our Processing Workflow
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                step: '1',
                title: 'Material Inspection',
                description: 'Quality assessment and contamination removal before processing'
              },
              {
                step: '2',
                title: 'Preparation',
                description: 'Sorting and preparation for optimal baling efficiency'
              },
              {
                step: '3',
                title: 'Baling/Compaction',
                description: 'High-pressure processing to achieve maximum density'
              },
              {
                step: '4',
                title: 'Quality Control',
                description: 'Final inspection and bale securing for transport'
              },
              {
                step: '5',
                title: 'Documentation',
                description: 'Weight certification and shipping documentation'
              },
              {
                step: '6',
                title: 'Logistics',
                description: 'Efficient loading and transportation coordination'
              }
            ].map((process, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
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

      {/* Cost Savings */}
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
                Maximize Your ROI with Professional Baling
              </Typography>
              <Typography variant="h6" sx={{ mb: 3, color: '#666' }}>
                Our baling services can reduce your transportation costs by up to 80% 
                while increasing material value through improved density and quality.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Chip label="80% Cost Reduction" sx={{ backgroundColor: '#4caf50', color: 'white' }} />
                <Chip label="5x Storage Efficiency" sx={{ backgroundColor: '#4caf50', color: 'white' }} />
                <Chip label="Higher Material Value" sx={{ backgroundColor: '#4caf50', color: 'white' }} />
                <Chip label="Faster Processing" sx={{ backgroundColor: '#4caf50', color: 'white' }} />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ textAlign: 'center' }}>
                <TrendingUp sx={{ fontSize: 80, color: '#4caf50', mb: 2 }} />
                <Typography variant="h6" sx={{ color: '#2e7d32', fontWeight: 'bold' }}>
                  Proven Results
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
              Professional Baling & Compaction Services
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
              Transform your material handling operations with our expert baling and 
              compaction services. Reduce costs, improve efficiency, and maximize value.
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
                Request Processing Quote
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

export default BalingCompaction;
