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
  Avatar,
  Paper,
} from '@mui/material';
import {
  CheckCircle,
  GroupWork,
  EmojiEvents,
  Security,
  Nature,
  TrendingUp,
  Build,
} from '@mui/icons-material';

function AboutUs() {
  const values = [
    {
      icon: <Build />,
      title: 'Innovation in Recycling',
      description: 'Advanced conveyor sorting, baling, and compaction technologies to maximize efficiency.',
    },
    {
      icon: <Security />,
      title: 'Compliance & Trust',
      description: 'Robust licensing, reporting, and ESG documentation for full regulatory confidence.',
    },
    {
      icon: <TrendingUp />,
      title: 'Value Recovery',
      description: 'Monetize surplus assets, pallets, and e-waste with resale and recycling networks.',
    },
    {
      icon: <GroupWork />,
      title: 'Sustainable Partnerships',
      description: 'Long-term consulting and audits tailored to client operations and goals.',
    },
  ];

  const milestones = [
    {
      year: '2015',
      title: 'Company Founded',
      description: 'PAC Recycle Works LLC was established with a vision to transform waste management.',
    },
    {
      year: '2017',
      title: 'EPA Certification',
      description: 'Achieved full EPA certification and expanded our service offerings.',
    },
    {
      year: '2019',
      title: 'Advanced Sorting Facility',
      description: 'Opened our state-of-the-art conveyor-based material sorting facility.',
    },
    {
      year: '2021',
      title: 'E-Waste Expansion',
      description: 'Launched comprehensive e-waste collection and processing services.',
    },
    {
      year: '2023',
      title: 'Zero Landfill Achievement',
      description: 'Achieved 100% landfill diversion rate across all client operations.',
    },
  ];

  const stats = [
    { number: '5,000+', label: 'Tons Diverted from landfills annually' },
    { number: '100%', label: 'Certified E-Waste Processing' },
    { number: '50+', label: 'Industries Trusted by Nationwide' },
    { number: '24/7', label: 'Our Commitment to Sustainability' },
  ];

  const certifications = [
    'EPA Certified Recycling Facility',
    'ISO 14001 Environmental Management',
    'R2 (Responsible Recycling) Certified',
    'OHSAS 18001 Safety Management',
    'State Waste Management License',
    'DOT Hazardous Materials Certified',
  ];

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
            About PAC Recycle Works
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
            PAC Recycle Works LLC is a sustainability-driven recycling and material recovery company,
            specializing in secure, compliant, and cost-effective solutions for businesses and industries.
            We combine cutting-edge conveyor-based sorting, responsible e-waste handling, and value recovery
            to help clients achieve measurable ESG goals.
          </Typography>
        </Container>
      </Box>

      {/* Mission & Vision */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  height: '100%',
                  background: 'linear-gradient(135deg, #00bcd4 0%, #0097a7 100%)',
                  color: 'white',
                  borderRadius: 3,
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
                    Our Mission
                  </Typography>
                  <Typography variant="h6" sx={{ lineHeight: 1.6 }}>
                    To provide innovative, sustainable waste management and recycling solutions 
                    that help businesses achieve their environmental goals while maximizing 
                    economic value through responsible resource recovery.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  height: '100%',
                  background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
                  color: 'white',
                  borderRadius: 3,
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
                    Our Vision
                  </Typography>
                  <Typography variant="h6" sx={{ lineHeight: 1.6 }}>
                    To be the leading waste management partner, creating a circular economy 
                    where nothing is wasted, everything has value, and businesses thrive 
                    through sustainable practices.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 6, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid size={{ xs: 6, md: 3 }} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h2"
                    component="div"
                    sx={{
                      fontWeight: 'bold',
                      color: '#00bcd4',
                      mb: 1,
                      fontSize: { xs: '2rem', md: '3rem' },
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography variant="h6" sx={{ color: '#666', fontWeight: 600 }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Our Values */}
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
            Who We Are
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
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
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        sx={{
                          backgroundColor: '#00bcd4',
                          mr: 2,
                          width: 56,
                          height: 56,
                        }}
                      >
                        {value.icon}
                      </Avatar>
                      <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                        {value.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ lineHeight: 1.6, color: '#666' }}>
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Our Commitment */}
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
            Our Commitment
          </Typography>
          <Paper sx={{ p: 6, borderRadius: 3, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ lineHeight: 1.8, color: '#666' }}>
              We don't just recycle materials—we create sustainable cycles of value, compliance,
              and impact for the communities we serve.
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}

export default AboutUs;
