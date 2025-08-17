import * as React from "react";
import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ExpandLess,
  ExpandMore,
  Recycling,
  Facebook,
  Twitter,
  LinkedIn,
  CompareArrows,
  Assignment,
  Factory,
  LocalShipping,
  Build,
  Computer,
  Nature,
  TrendingUp,
  Gavel
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

const services = [
  { name: 'Conveyor-Based Material Sorting', path: '/services/conveyor-sorting', icon: <CompareArrows /> },
  { name: 'Recycling Consulting & Audits', path: '/services/recycling-consulting', icon: <Assignment /> },
  { name: 'Industrial Waste Handling', path: '/services/industrial-waste', icon: <Factory /> },
  { name: 'Pickup & Logistics Services', path: '/services/pickup-logistics', icon: <LocalShipping /> },
  { name: 'Baling & Compaction', path: '/services/baling-compaction', icon: <Build /> },
  { name: 'E-Waste Collection & Processing', path: '/services/e-waste-collection', icon: <Computer /> },
  { name: 'Pallet & Wood Recycling', path: '/services/pallet-wood-recycling', icon: <Nature /> },
  { name: 'Value Recovery & Resale', path: '/services/value-recovery', icon: <TrendingUp /> },
  { name: 'Licensing & Compliance Support', path: '/services/licensing-compliance', icon: <Gavel /> },
];

function Header() {
  const [servicesMenuAnchor, setServicesMenuAnchor] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleServicesMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setServicesMenuAnchor(event.currentTarget);
  };

  const handleServicesMenuClose = () => {
    setServicesMenuAnchor(null);
  };

  const handleMobileDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileServicesToggle = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  const navigationItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'SERVICES', path: '/services', hasDropdown: true },
    { name: 'BLOG', path: '/blog' },
    { name: 'CONTACT US', path: '/contact' },
  ];

  const mobileMenu = (
    <Drawer
      variant="temporary"
      anchor="left"
      open={mobileOpen}
      onClose={handleMobileDrawerToggle}
      ModalProps={{ keepMounted: true }}
      sx={{
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: 250,
          background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
          color: 'white',
        },
      }}
    >
      <List>
        {navigationItems.map((item) => (
          <div key={item.name}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={
                  item.hasDropdown
                    ? handleMobileServicesToggle
                    : () => {
                        navigate(item.path);
                        setMobileOpen(false);
                      }
                }
              >
                <ListItemText primary={item.name} />
                {item.hasDropdown && (
                  mobileServicesOpen ? <ExpandLess /> : <ExpandMore />
                )}
              </ListItemButton>
            </ListItem>
            {item.hasDropdown && (
              <Collapse in={mobileServicesOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {services.map((service) => (
                    <ListItem key={service.path} disablePadding>
                      <ListItemButton
                        sx={{ pl: 4 }}
                        onClick={() => {
                          navigate(service.path);
                          setMobileOpen(false);
                          setMobileServicesOpen(false);
                        }}
                      >
                        <ListItemText primary={service.name} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </List>
    </Drawer>
  );

  return (
    <>
      <Box sx={{ 
        background: '#000', 
        py: 0.5, 
        display: 'flex', 
        justifyContent: 'flex-end',
        px: 2
      }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton size="small" sx={{ color: 'white' }}>
            <Facebook />
          </IconButton>
          <IconButton size="small" sx={{ color: 'white' }}>
            <Twitter />
          </IconButton>
          <IconButton size="small" sx={{ color: 'white' }}>
            <LinkedIn />
          </IconButton>
        </Box>
        <Button
          variant="contained"
          size="small"
          sx={{
            ml: 2,
            backgroundColor: '#00bcd4',
            '&:hover': { backgroundColor: '#0097a7' },
            textTransform: 'none',
            fontSize: '0.75rem',
          }}
          onClick={() => navigate('/contact')}
        >
          CONTACT US
        </Button>
      </Box>
      
      <AppBar
        position="sticky"
        sx={{
          background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Box 
            component={Link} 
            to="/" 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              textDecoration: 'none', 
              color: 'inherit' 
            }}
          >
            <img
              src="/logo.png"
              alt="PAC Recycle Works Logo"
              style={{ height: 50, width: 'auto', marginRight: 8 }}
            />
            <Box>
              <Typography variant="h5" component="div" sx={{ 
                fontWeight: 'bold', 
                color: '#00bcd4',
                fontSize: '1.5rem'
              }}>
                PAC
              </Typography>
              <Typography variant="caption" sx={{ 
                color: 'white', 
                fontSize: '0.7rem',
                letterSpacing: '0.5px'
              }}>
                RECYCLE WORKS LLC
              </Typography>
            </Box>
          </Box>

          {isMobile ? (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleMobileDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 3 }}>
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <Box
                      onMouseEnter={handleServicesMenuOpen}
                      onMouseLeave={handleServicesMenuClose}
                    >
                      <Button
                        onClick={handleServicesMenuOpen}
                        sx={{
                          fontWeight: 600,
                          fontSize: '0.875rem',
                          color: 'white',
                          '&:hover': {
                            color: '#00bcd4',
                            backgroundColor: 'rgba(255,255,255,0.1)'
                          }
                        }}
                      >
                        {item.name} ▼
                      </Button>
                      <Menu
                        anchorEl={servicesMenuAnchor}
                        open={Boolean(servicesMenuAnchor)}
                        onClose={handleServicesMenuClose}
                        MenuListProps={{
                          onMouseLeave: handleServicesMenuClose,
                        }}
                        sx={{
                          '& .MuiPaper-root': {
                            mt: 1,
                            minWidth: 320,
                            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                            borderRadius: 2,
                          },
                        }}
                      >
                        <MenuItem
                          component={Link}
                          to="/services"
                          onClick={handleServicesMenuClose}
                          sx={{
                            fontWeight: 600,
                            borderBottom: '1px solid #e0e0e0',
                            py: 2,
                            '&:hover': {
                              backgroundColor: 'rgba(0,188,212,0.1)',
                            }
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                            <Recycling sx={{ mr: 2, color: '#00bcd4' }} />
                            All Services
                          </Box>
                        </MenuItem>
                        {services.map((service) => (
                          <MenuItem
                            key={service.path}
                            component={Link}
                            to={service.path}
                            onClick={handleServicesMenuClose}
                            sx={{
                              py: 1.5,
                              '&:hover': {
                                backgroundColor: 'rgba(0,188,212,0.1)',
                                '& .MuiSvgIcon-root': {
                                  color: '#00bcd4',
                                }
                              }
                            }}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                              <Box sx={{ mr: 2, color: '#666', display: 'flex' }}>
                                {service.icon}
                              </Box>
                              {service.name}
                            </Box>
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  ) : (
                    <Button
                      component={Link}
                      to={item.path}
                      sx={{
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        color: 'white',
                        '&:hover': {
                          color: '#00bcd4',
                          backgroundColor: 'rgba(255,255,255,0.1)'
                        }
                      }}
                    >
                      {item.name}
                    </Button>
                  )}
                </div>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      
      {mobileMenu}
    </>
  );
}

export default Header;
