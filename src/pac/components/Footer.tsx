import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  LinkedIn,
  Phone,
  Email,
  LocationOn,
  Recycling,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        color: 'white',
        pt: 6,
        pb: 3,
        mt: 'auto',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <img
                src="/logo.png"
                alt="PAC Recycle Works Logo"
                style={{ height: 40, width: 'auto', marginRight: 8 }}
              />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#00bcd4' }}>
                  PAC
                </Typography>
                <Typography variant="caption" sx={{ fontSize: '0.7rem', letterSpacing: '0.5px' }}>
                  RECYCLE WORKS LLC
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
              Leading provider of comprehensive recycling and waste management solutions. 
              We help businesses achieve their sustainability goals while maximizing value recovery.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton sx={{ color: '#00bcd4', '&:hover': { color: 'white' } }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: '#00bcd4', '&:hover': { color: 'white' } }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: '#00bcd4', '&:hover': { color: 'white' } }}>
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link
                component={RouterLink}
                to="/"
                color="inherit"
                underline="hover"
                sx={{ '&:hover': { color: '#00bcd4' } }}
              >
                Home
              </Link>
              <Link
                component={RouterLink}
                to="/about"
                color="inherit"
                underline="hover"
                sx={{ '&:hover': { color: '#00bcd4' } }}
              >
                About Us
              </Link>
              <Link
                component={RouterLink}
                to="/services"
                color="inherit"
                underline="hover"
                sx={{ '&:hover': { color: '#00bcd4' } }}
              >
                Services
              </Link>
              <Link
                component={RouterLink}
                to="/blog"
                color="inherit"
                underline="hover"
                sx={{ '&:hover': { color: '#00bcd4' } }}
              >
                Blog
              </Link>
              <Link
                component={RouterLink}
                to="/contact"
                color="inherit"
                underline="hover"
                sx={{ '&:hover': { color: '#00bcd4' } }}
              >
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Services */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Our Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link
                component={RouterLink}
                to="/services/conveyor-sorting"
                color="inherit"
                underline="hover"
                sx={{ '&:hover': { color: '#00bcd4' } }}
              >
                Material Sorting
              </Link>
              <Link
                component={RouterLink}
                to="/services/recycling-consulting"
                color="inherit"
                underline="hover"
                sx={{ '&:hover': { color: '#00bcd4' } }}
              >
                Recycling Consulting
              </Link>
              <Link
                component={RouterLink}
                to="/services/industrial-waste"
                color="inherit"
                underline="hover"
                sx={{ '&:hover': { color: '#00bcd4' } }}
              >
                Industrial Waste
              </Link>
              <Link
                component={RouterLink}
                to="/services/e-waste-collection"
                color="inherit"
                underline="hover"
                sx={{ '&:hover': { color: '#00bcd4' } }}
              >
                E-Waste Processing
              </Link>
              <Link
                component={RouterLink}
                to="/services/value-recovery"
                color="inherit"
                underline="hover"
                sx={{ '&:hover': { color: '#00bcd4' } }}
              >
                Value Recovery
              </Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOn sx={{ color: '#00bcd4', fontSize: 20 }} />
                <Typography variant="body2">
                  6611 Supply Row Unit A<br />
                  Houston, Texas 77011
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone sx={{ color: '#00bcd4', fontSize: 20 }} />
                <Typography variant="body2">
                  +1 (832) 630-0738
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email sx={{ color: '#00bcd4', fontSize: 20 }} />
                <Typography variant="body2">
                  contact@pacrecycleworks.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.2)' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="rgba(255,255,255,0.8)">
            © {currentYear} PAC Recycle Works LLC. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link
              component={RouterLink}
              to="/terms"
              color="rgba(255,255,255,0.8)"
              underline="hover"
              variant="body2"
              sx={{ '&:hover': { color: '#00bcd4' } }}
            >
              Terms & Conditions
            </Link>
            <Link
              component={RouterLink}
              to="/privacy"
              color="rgba(255,255,255,0.8)"
              underline="hover"
              variant="body2"
              sx={{ '&:hover': { color: '#00bcd4' } }}
            >
              Privacy Policy
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
