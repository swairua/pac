import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Avatar,
  Divider,
  Paper,
} from '@mui/material';
import { ArrowBack, Person, CalendarToday, AccessTime } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';

function BlogPost() {
  const { slug } = useParams<{ slug: string }>();

  // Sample blog post data (in a real app, this would come from an API)
  const blogPosts = {
    'future-of-recycling-ai-automation': {
      title: 'The Future of Recycling: How AI and Automation Are Transforming Waste Management',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
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
    'corporate-e-waste-compliance-guide': {
      title: 'Corporate E-Waste Compliance: A Complete Guide for Businesses',
      image: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=800',
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

        ## Conclusion

        E-waste compliance is not just about following regulations—it's about building sustainable business practices that protect your company, your customers, and the environment. At PAC Recycle Works, we specialize in helping businesses navigate the complex world of e-waste compliance.
      `
    }
  };

  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h1" sx={{ textAlign: 'center' }}>
          Article not found
        </Typography>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button component={Link} to="/blog" variant="contained">
            Back to Blog
          </Button>
        </Box>
      </Container>
    );
  }

  const formatContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        const trimmedLine = line.trim();
        if (!trimmedLine) return <br key={index} />;
        
        if (trimmedLine.startsWith('## ')) {
          return (
            <Typography key={index} variant="h4" component="h2" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: '#1e3c72' }}>
              {trimmedLine.replace('## ', '')}
            </Typography>
          );
        }
        
        if (trimmedLine.startsWith('### ')) {
          return (
            <Typography key={index} variant="h5" component="h3" sx={{ mt: 3, mb: 2, fontWeight: 'bold', color: '#00bcd4' }}>
              {trimmedLine.replace('### ', '')}
            </Typography>
          );
        }
        
        if (trimmedLine.startsWith('- ')) {
          return (
            <Typography key={index} component="li" sx={{ ml: 3, mb: 1 }}>
              {trimmedLine.replace('- ', '')}
            </Typography>
          );
        }
        
        if (trimmedLine.match(/^\d+\./)) {
          return (
            <Typography key={index} component="li" sx={{ ml: 3, mb: 1, listStyleType: 'decimal' }}>
              {trimmedLine.replace(/^\d+\.\s*/, '')}
            </Typography>
          );
        }
        
        return (
          <Typography key={index} variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
            {trimmedLine}
          </Typography>
        );
      });
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ py: 4, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Button
            component={Link}
            to="/blog"
            startIcon={<ArrowBack />}
            sx={{ mb: 3, color: '#00bcd4' }}
          >
            Back to Blog
          </Button>
          
          <Box sx={{ mb: 3 }}>
            <Chip
              label={post.category}
              sx={{
                backgroundColor: '#00bcd4',
                color: 'white',
                fontWeight: 600,
                mb: 2,
              }}
            />
          </Box>
          
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 'bold',
              mb: 3,
              color: '#1e3c72',
              fontSize: { xs: '2rem', md: '2.5rem' },
              lineHeight: 1.2,
            }}
          >
            {post.title}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Avatar sx={{ width: 40, height: 40, backgroundColor: '#00bcd4' }}>
                <Person />
              </Avatar>
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {post.author}
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <CalendarToday sx={{ fontSize: 16, color: '#666' }} />
              <Typography variant="body2" color="text.secondary">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <AccessTime sx={{ fontSize: 16, color: '#666' }} />
              <Typography variant="body2" color="text.secondary">
                {post.readTime}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Featured Image */}
      <Box
        sx={{
          height: 400,
          backgroundImage: `url(${post.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Article Content */}
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Paper sx={{ p: 6, borderRadius: 3, boxShadow: 3 }}>
          <Box sx={{ '& > *:first-of-type': { mt: 0 } }}>
            {formatContent(post.content)}
          </Box>
        </Paper>
      </Container>

      {/* CTA Section */}
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
              Ready to Get Started?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
              Contact PAC Recycle Works today to learn how we can help your business 
              achieve its sustainability and compliance goals.
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
                Contact Us
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
                Our Services
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default BlogPost;
