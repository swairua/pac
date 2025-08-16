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
  Timeline,
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
      icon: <Nature />,
      title: 'Environmental Responsibility',
      description: 'We are committed to protecting the environment through sustainable waste management practices and zero-landfill solutions.',
    },
    {
      icon: <Security />,
      title: 'Compliance & Safety',
      description: 'All our operations meet or exceed EPA standards, ensuring complete regulatory compliance and workplace safety.',
    },
    {
      icon: <TrendingUp />,
      title: 'Value Maximization',
      description: 'We help businesses recover maximum value from their waste streams through innovative processing and resale programs.',
    },
    {
      icon: <GroupWork />,
      title: 'Partnership Approach',
      description: 'We work closely with our clients to develop customized solutions that meet their specific business needs.',
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
    { number: '500+', label: 'Clients Served' },
    { number: '95%', label: 'Waste Diverted from Landfills' },
    { number: '1M+', label: 'Tons Processed Annually' },
    { number: '24/7', label: 'Customer Support' },
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
            Leading the industry in sustainable waste management and recycling solutions since 2015. 
            We transform waste into value while protecting our environment for future generations.
          </Typography>
        </Container>
      </Box>

      {/* Mission & Vision */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
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
            <Grid item xs={12} md={6}>
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
              <Grid item xs={6} md={3} key={index}>
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
            Our Core Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} md={6} key={index}>
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

      {/* Company Timeline */}
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
            Our Journey
          </Typography>
          <Box sx={{ position: 'relative' }}>
            {milestones.map((milestone, index) => (
              <Box key={index} sx={{ display: 'flex', mb: 4, alignItems: 'flex-start' }}>
                <Box
                  sx={{
                    backgroundColor: '#00bcd4',
                    color: 'white',
                    borderRadius: '50%',
                    width: 80,
                    height: 80,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    mr: 3,
                    flexShrink: 0,
                  }}
                >
                  {milestone.year}
                </Box>
                <Paper
                  sx={{
                    p: 3,
                    flexGrow: 1,
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                >
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {milestone.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    {milestone.description}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Certifications */}
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
            Certifications & Compliance
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 3 }}>
                    Industry Certifications
                  </Typography>
                  <List>
                    {certifications.map((cert, index) => (
                      <ListItem key={index} sx={{ py: 0.5 }}>
                        <ListItemIcon>
                          <CheckCircle sx={{ color: '#00bcd4' }} />
                        </ListItemIcon>
                        <ListItemText primary={cert} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 3 }}>
                    Quality Assurance
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                    Our commitment to excellence is reflected in our comprehensive quality 
                    management system and continuous improvement processes.
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <EmojiEvents sx={{ color: '#00bcd4', mr: 2 }} />
                    <Typography variant="body1">Industry Leadership Award 2023</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Security sx={{ color: '#00bcd4', mr: 2 }} />
                    <Typography variant="body1">Zero Safety Incidents Record</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Build sx={{ color: '#00bcd4', mr: 2 }} />
                    <Typography variant="body1">Continuous Process Improvement</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default AboutUs;
