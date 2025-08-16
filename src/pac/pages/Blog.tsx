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
      slug: 'future-of-recycling-ai-automation',
      title: 'The Future of Recycling: How AI and Automation Are Transforming Waste Management',
      excerpt: 'Discover how artificial intelligence and automated sorting systems are revolutionizing the recycling industry, increasing efficiency and reducing contamination rates.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'Technology',
      readTime: '8 min read',
      content: `
        The recycling industry is undergoing a technological revolution that promises to transform how we handle waste and recover valuable materials. At the forefront of this transformation are artificial intelligence (AI) and automation technologies that are making recycling more efficient, accurate, and economically viable than ever before.

        ## The Challenge with Traditional Recycling

        Traditional recycling methods have long struggled with contamination issues and inefficient sorting processes. Manual sorting is labor-intensive, slow, and prone to human error. These limitations have resulted in lower recovery rates and higher processing costs, making recycling less economically attractive for many materials.

        ## AI-Powered Optical Sorting

        Modern AI-powered optical sorting systems use advanced machine learning algorithms to identify and separate different types of materials with unprecedented accuracy. These systems can:

        - Achieve 99%+ sorting accuracy rates
        - Process up to 50 tons of material per hour
        - Identify materials by color, shape, size, and even chemical composition
        - Learn and adapt to new material types automatically

        ## The Benefits of Automation

        Automated recycling systems offer numerous advantages over traditional methods:

        ### Increased Efficiency
        Automated systems can operate 24/7 without breaks, dramatically increasing throughput and reducing processing times.

        ### Improved Accuracy
        AI systems don't get tired or distracted, maintaining consistent sorting accuracy throughout their operation.

        ### Cost Reduction
        While the initial investment is significant, automated systems reduce long-term operational costs by minimizing labor requirements and increasing material recovery rates.

        ### Enhanced Safety
        Automation reduces human exposure to potentially hazardous materials and eliminates many workplace safety risks.

        ## Real-World Applications

        At PAC Recycle Works, we've implemented state-of-the-art conveyor-based sorting systems that exemplify these technological advances. Our facility processes mixed waste streams and achieves industry-leading recovery rates while maintaining the highest quality standards.

        ## Looking Ahead

        The future of recycling technology looks even more promising. Emerging technologies include:

        - Robotic sorting arms with advanced gripping capabilities
        - Chemical fingerprinting for precise material identification
        - Blockchain technology for supply chain tracking
        - IoT sensors for real-time monitoring and optimization

        ## Conclusion

        As we face increasing environmental challenges and resource scarcity, AI and automation in recycling represent crucial tools for building a sustainable future. These technologies not only improve the economics of recycling but also help us achieve higher diversion rates from landfills and maximize the value of our waste streams.

        The companies that embrace these technologies today will be the leaders in tomorrow's circular economy. At PAC Recycle Works, we're committed to staying at the forefront of these innovations to provide our clients with the most advanced and effective recycling solutions available.
      `
    },
    {
      id: 2,
      slug: 'corporate-e-waste-compliance-guide',
      title: 'Corporate E-Waste Compliance: A Complete Guide for Businesses',
      excerpt: 'Navigate the complex landscape of e-waste regulations and learn how proper electronic waste management can protect your business while supporting environmental goals.',
      image: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=600',
      author: 'Michael Chen',
      date: '2024-01-08',
      category: 'Compliance',
      readTime: '12 min read',
      content: `
        As businesses increasingly rely on electronic devices, the challenge of managing electronic waste (e-waste) has become more critical than ever. Proper e-waste management isn't just an environmental responsibility—it's a legal requirement that can significantly impact your business operations and reputation.

        ## Understanding E-Waste Regulations

        E-waste regulations vary by jurisdiction, but most frameworks focus on several key areas:

        ### Data Security Requirements
        - Secure data destruction before disposal
        - Chain of custody documentation
        - Compliance with data protection laws (GDPR, CCPA, etc.)

        ### Environmental Compliance
        - Proper handling of hazardous materials
        - Certified recycling processes
        - Waste tracking and reporting

        ### Corporate Responsibility
        - Extended producer responsibility programs
        - Sustainability reporting requirements
        - Stakeholder accountability

        ## Common Compliance Challenges

        Many businesses struggle with e-waste compliance due to:

        1. **Lack of Awareness**: Not understanding the full scope of applicable regulations
        2. **Inadequate Tracking**: Poor documentation of e-waste disposal processes
        3. **Data Security Gaps**: Insufficient data destruction protocols
        4. **Vendor Management**: Working with non-certified disposal companies

        ## Building a Compliant E-Waste Program

        ### Step 1: Inventory and Assessment
        - Catalog all electronic devices and their lifecycles
        - Identify devices containing sensitive data
        - Assess current disposal practices

        ### Step 2: Policy Development
        - Create comprehensive e-waste policies
        - Establish data destruction protocols
        - Define roles and responsibilities

        ### Step 3: Vendor Selection
        - Choose R2 or e-Stewards certified recyclers
        - Verify proper licensing and insurance
        - Establish service level agreements

        ### Step 4: Implementation
        - Train staff on proper procedures
        - Implement tracking systems
        - Establish regular pickup schedules

        ### Step 5: Monitoring and Reporting
        - Track disposal metrics
        - Maintain compliance documentation
        - Regular program audits

        ## Best Practices for Data Security

        When disposing of electronic devices, data security should be your top priority:

        - Use NIST 800-88 compliant data wiping methods
        - Require physical destruction of storage devices when necessary
        - Obtain certificates of data destruction
        - Maintain detailed chain of custody records

        ## The Cost of Non-Compliance

        Non-compliance with e-waste regulations can result in:

        - Significant financial penalties
        - Legal liability for data breaches
        - Reputational damage
        - Lost business opportunities
        - Environmental remediation costs

        ## Working with Professional E-Waste Partners

        Partnering with certified e-waste management companies provides several advantages:

        - **Expertise**: Deep knowledge of current regulations
        - **Infrastructure**: Proper facilities and equipment
        - **Documentation**: Comprehensive reporting and certificates
        - **Insurance**: Protection against potential liabilities

        ## ROI of Proper E-Waste Management

        While compliance requires investment, proper e-waste management can provide returns through:

        - Risk mitigation and reduced liability
        - Improved sustainability metrics
        - Enhanced brand reputation
        - Potential revenue from material recovery
        - Operational efficiencies

        ## Future Trends in E-Waste Compliance

        The regulatory landscape continues to evolve with trends including:

        - Stricter data protection requirements
        - Extended producer responsibility expansion
        - Circular economy mandates
        - Enhanced tracking and reporting requirements

        ## Conclusion

        E-waste compliance is not just about following regulations—it's about building sustainable business practices that protect your company, your customers, and the environment. By implementing comprehensive e-waste management programs and working with certified partners, businesses can turn compliance challenges into competitive advantages.

        At PAC Recycle Works, we specialize in helping businesses navigate the complex world of e-waste compliance. Our certified processes and comprehensive documentation ensure that your e-waste disposal meets all regulatory requirements while maximizing material recovery and value.

        Don't let e-waste compliance become a burden—make it a strategic advantage for your business.
      `
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
