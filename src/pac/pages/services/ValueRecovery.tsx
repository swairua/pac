import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
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
  TrendingUp,
  AttachMoney,
  Assessment,
  Handshake,
  Analytics,
  MonetizationOn,
  BarChart,
  ShowChart,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function ValueRecovery() {
  const services = [
    {
      icon: <Analytics />,
      title: 'Market Analysis',
      description: 'Real-time commodity pricing and market trend analysis for optimal timing'
    },
    {
      icon: <Assessment />,
      title: 'Material Grading',
      description: 'Professional quality assessment to maximize material value and pricing'
    },
    {
      icon: <Handshake />,
      title: 'Buyer Network',
      description: 'Extensive network of certified buyers for all material types'
    },
    {
      icon: <MonetizationOn />,
      title: 'Revenue Sharing',
      description: 'Transparent revenue sharing programs with competitive payment terms'
    }
  ];

  const commodityPrices = [
    { material: 'Aluminum Cans', price: '$0.85-1.20', unit: 'per lb', trend: 'up' },
    { material: 'Copper Wire', price: '$3.20-3.80', unit: 'per lb', trend: 'up' },
    { material: 'Cardboard (OCC)', price: '$0.08-0.12', unit: 'per lb', trend: 'stable' },
    { material: 'Steel Scrap', price: '$0.18-0.25', unit: 'per lb', trend: 'up' },
    { material: 'High-Grade Paper', price: '$0.05-0.08', unit: 'per lb', trend: 'down' },
    { material: 'PET Bottles', price: '$0.12-0.18', unit: 'per lb', trend: 'stable' }
  ];

  const revenuePrograms = [
    {
      program: 'Standard Revenue Share',
      description: '70/30 split after processing costs',
      minimumVolume: '5 tons/month',
      paymentTerms: 'NET 30 days',
      benefits: ['Market-rate pricing', 'Monthly reporting', 'Quality bonuses']
    },
    {
      program: 'Premium Partnership',
      description: '80/20 split with volume bonuses',
      minimumVolume: '25 tons/month',
      paymentTerms: 'NET 15 days',
      benefits: ['Premium pricing', 'Weekly reporting', 'Priority processing', 'Volume bonuses']
    },
    {
      program: 'Enterprise Program',
      description: 'Custom revenue sharing terms',
      minimumVolume: '100+ tons/month',
      paymentTerms: 'NET 7 days',
      benefits: ['Custom pricing', 'Daily reporting', 'Dedicated account manager', 'Strategic planning']
    }
  ];

  const materialCategories = [
    {
      category: 'High-Value Metals',
      materials: ['Copper', 'Aluminum', 'Stainless Steel', 'Brass'],
      avgReturn: '$800-2,400/ton',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'
    },
    {
      category: 'Paper Products',
      materials: ['Office Paper', 'Cardboard', 'Newspapers', 'Magazines'],
      avgReturn: '$60-150/ton',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400'
    },
    {
      category: 'Plastic Resins',
      materials: ['PET Bottles', 'HDPE', 'PP Films', 'Mixed Plastics'],
      avgReturn: '$180-420/ton',
      image: 'https://images.unsplash.com/photo-1572010160670-e54c77a2b120?w=400'
    },
    {
      category: 'Electronic Components',
      materials: ['Circuit Boards', 'Precious Metals', 'Rare Earth Elements'],
      avgReturn: '$1,200-8,500/ton',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400'
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp sx={{ color: '#4caf50', fontSize: 18 }} />;
      case 'down':
        return <ShowChart sx={{ color: '#f44336', fontSize: 18, transform: 'rotate(180deg)' }} />;
      default:
        return <BarChart sx={{ color: '#ff9800', fontSize: 18 }} />;
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(rgba(30, 60, 114, 0.8), rgba(42, 82, 152, 0.8)), url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=800&fit=crop&crop=center")',
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
                Value Recovery & Resale
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  opacity: 0.9,
                  lineHeight: 1.6,
                  mb: 4,
                }}
              >
                Maximize returns from your waste streams through strategic material recovery 
                and resale programs. Our market expertise and buyer network ensure you get 
                the best value for your recyclable materials.
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
                Maximize Your Returns
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
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500"
                  alt="Value Recovery & Resale"
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
            Value Recovery Services
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

      {/* Market Pricing */}
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
            Current Market Pricing
          </Typography>
          <TableContainer component={Paper} sx={{ borderRadius: 3, mb: 4 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#1e3c72' }}>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Material</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Current Price</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Unit</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Trend</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {commodityPrices.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ fontWeight: 600 }}>{item.material}</TableCell>
                    <TableCell sx={{ color: '#4caf50', fontWeight: 'bold' }}>
                      {item.price}
                    </TableCell>
                    <TableCell>{item.unit}</TableCell>
                    <TableCell>{getTrendIcon(item.trend)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            *Prices updated daily based on current market conditions. Actual pricing may vary based on quality and volume.
          </Typography>
        </Container>
      </Box>

      {/* Material Categories */}
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
            High-Value Material Categories
          </Typography>
          <Grid container spacing={4}>
            {materialCategories.map((category, index) => (
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
                      backgroundImage: `url(${category.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                      {category.category}
                    </Typography>
                    <Chip
                      label={category.avgReturn}
                      sx={{
                        backgroundColor: '#4caf50',
                        color: 'white',
                        mb: 2,
                        fontWeight: 'bold',
                      }}
                    />
                    <Box>
                      {category.materials.map((material, idx) => (
                        <Chip
                          key={idx}
                          label={material}
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

      {/* Revenue Programs */}
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
            Revenue Sharing Programs
          </Typography>
          <Grid container spacing={4}>
            {revenuePrograms.map((program, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    p: 3,
                    borderRadius: 3,
                    border: index === 1 ? '3px solid #4caf50' : '2px solid #e0e0e0',
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 6,
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {index === 1 && (
                    <Chip
                      label="MOST POPULAR"
                      sx={{
                        position: 'absolute',
                        top: -12,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#4caf50',
                        color: 'white',
                        fontWeight: 'bold',
                      }}
                    />
                  )}
                  <CardContent>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#1e3c72' }}>
                      {program.program}
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 2, color: '#4caf50' }}>
                      {program.description}
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        <strong>Minimum Volume:</strong> {program.minimumVolume}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 2 }}>
                        <strong>Payment Terms:</strong> {program.paymentTerms}
                      </Typography>
                    </Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                      Program Benefits:
                    </Typography>
                    {program.benefits.map((benefit, idx) => (
                      <Chip
                        key={idx}
                        label={benefit}
                        size="small"
                        sx={{
                          mr: 1,
                          mb: 1,
                          backgroundColor: index === 1 ? '#4caf50' : '#00bcd4',
                          color: 'white',
                        }}
                      />
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Success Metrics */}
      <Box
        sx={{
          py: 6,
          backgroundColor: '#e8f5e8',
          border: '2px solid #4caf50',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: '#2e7d32' }}>
                Proven Results & Returns
              </Typography>
              <Typography variant="h6" sx={{ mb: 3, color: '#666' }}>
                Our clients typically see 40-60% increased revenue from their waste streams 
                through our value recovery programs and market optimization strategies.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Chip label="40-60% Revenue Increase" sx={{ backgroundColor: '#4caf50', color: 'white' }} />
                <Chip label="Market-Leading Prices" sx={{ backgroundColor: '#4caf50', color: 'white' }} />
                <Chip label="Fast Payment Terms" sx={{ backgroundColor: '#4caf50', color: 'white' }} />
                <Chip label="Transparent Reporting" sx={{ backgroundColor: '#4caf50', color: 'white' }} />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <AttachMoney sx={{ fontSize: 80, color: '#4caf50', mb: 2 }} />
                <Typography variant="h6" sx={{ color: '#2e7d32', fontWeight: 'bold' }}>
                  Maximum Returns
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
              Start Maximizing Your Material Value
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
              Join our value recovery program and start earning significant returns from 
              your waste streams. Our experts will help you optimize every material type.
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
                Start Earning Today
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

export default ValueRecovery;
