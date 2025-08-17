import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Avatar,
} from '@mui/material';
import { ArrowForward, Person, CalendarToday } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      slug: 'conveyor-sorting-cuts-warehouse-waste-costs',
      title: 'How Conveyor-Based Sorting Cuts Warehouse Waste Costs — and Boosts Sustainability',
      excerpt: 'Warehouses generate large, predictable waste streams. Learn how conveyor-based sorting and downstream densification creates a triple win: lower costs, higher material recovery revenue, and better environmental performance.',
      image: 'https://images.pexels.com/photos/9575021/pexels-photo-9575021.jpeg?w=600',
      author: 'PAC Recycling Team',
      date: '2024-12-27',
      category: 'Operations',
      readTime: '12 min read',
    },
    {
      id: 2,
      slug: 'e-waste-data-security-guide-texas-businesses',
      title: 'E-Waste & Data Security: A Practical Guide for Texas Businesses',
      excerpt: 'Protect your data and comply with Texas rules. Learn NIST-based sanitization, certified destruction, Certificates of Destruction, and procurement best practices for e-waste.',
      image: 'https://images.pexels.com/photos/2644597/pexels-photo-2644597.jpeg?w=600',
      author: 'PAC Compliance Team',
      date: '2024-12-20',
      category: 'Compliance',
      readTime: '15 min read',
    },
    {
      id: 3,
      slug: 'future-of-recycling-ai-automation',
      title: 'The Future of Recycling: How AI and Automation Are Transforming Waste Management',
      excerpt: 'Discover how artificial intelligence and automated sorting systems are revolutionizing the recycling industry, increasing efficiency and reducing contamination rates.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'Technology',
      readTime: '8 min read',
    },
    {
      id: 4,
      slug: 'corporate-e-waste-compliance-guide',
      title: 'Corporate E-Waste Compliance: A Complete Guide for Businesses',
      excerpt: 'Navigate the complex landscape of e-waste regulations and learn how proper electronic waste management can protect your business while supporting environmental goals.',
      image: 'https://images.pexels.com/photos/8866761/pexels-photo-8866761.jpeg?w=600',
      author: 'Michael Chen',
      date: '2024-01-08',
      category: 'Compliance',
      readTime: '12 min read',
    }
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
            PAC Insights & News
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              maxWidth: 600,
              mx: 'auto',
              opacity: 0.9,
              lineHeight: 1.6,
            }}
          >
            Stay informed about the latest trends, technologies, and best practices 
            in waste management and recycling. Expert insights from industry leaders.
          </Typography>
        </Container>
      </Box>

      {/* Featured Articles */}
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
            Latest Articles
          </Typography>
          <Grid container spacing={4}>
            {blogPosts.map((post) => (
              <Grid size={{ xs: 12, md: 6 }} key={post.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height={300}
                    image={post.image}
                    alt={post.title}
                    sx={{
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
                      <Chip
                        label={post.category}
                        size="small"
                        sx={{
                          backgroundColor: '#00bcd4',
                          color: 'white',
                          fontWeight: 600,
                        }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {post.readTime}
                      </Typography>
                    </Box>
                    
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 'bold',
                        mb: 2,
                        lineHeight: 1.3,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {post.title}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mb: 3,
                        lineHeight: 1.6,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {post.excerpt}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
                      <Avatar sx={{ width: 32, height: 32, backgroundColor: '#00bcd4' }}>
                        <Person />
                      </Avatar>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {post.author}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <CalendarToday sx={{ fontSize: 14, color: '#666' }} />
                          <Typography variant="caption" color="text.secondary">
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Button
                      component={Link}
                      to={`/blog/${post.slug}`}
                      variant="contained"
                      fullWidth
                      endIcon={<ArrowForward />}
                      sx={{
                        backgroundColor: '#00bcd4',
                        '&:hover': { backgroundColor: '#0097a7' },
                        fontWeight: 600,
                        py: 1.5,
                      }}
                    >
                      Read Full Article
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Newsletter Signup */}
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
              Stay Updated with Industry Insights
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
              Subscribe to our newsletter for the latest trends, regulations, and best practices 
              in waste management and recycling.
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
              Subscribe to Newsletter
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Blog;
