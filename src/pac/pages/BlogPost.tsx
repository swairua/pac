import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Avatar,
  Paper,
} from '@mui/material';
import { ArrowBack, Person, CalendarToday, AccessTime } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';

function BlogPost() {
  const { slug } = useParams<{ slug: string }>();

  // Blog post data
  const blogPosts = {
    'conveyor-sorting-cuts-warehouse-waste-costs': {
      title: 'How Conveyor-Based Sorting Cuts Warehouse Waste Costs — and Boosts Sustainability',
      image: 'https://images.pexels.com/photos/9575021/pexels-photo-9575021.jpeg?w=800',
      author: 'PAC Recycling Team',
      date: '2024-12-27',
      category: 'Operations',
      readTime: '12 min read',
      content: `
        Warehouses and distribution centers generate large, predictable waste streams: corrugated cardboard, plastic film, wooden pallets, protective packaging and occasional e-waste. Left unmanaged, those waste flows drive disposal costs, take up space, and create regulatory headaches. But when facilities deploy conveyor-based sorting and downstream densification (baling/compaction), the result is a triple win: lower costs, higher material recovery (revenue), and better environmental performance.

        Below we explain how conveyor-based sorting works, why it outperforms manual or ad-hoc programs, and how to think about ROI if you're evaluating a pilot or permanent installation.

        ## What is conveyor-based sorting — in plain terms?

        Conveyor-based sorting combines mechanical conveyors with a layer of separation technologies (optical/NIR sensors, magnets, air knives, and manual quality control stations). Materials flow on belts at controlled speed and are identified by sensors or people and diverted into dedicated chutes, bins, or balers.

        Modern sensor-based optical sorters can distinguish polymers (PET vs. HDPE vs. film), colors, and contaminants quickly, increasing purity and reducing rejection at buyers' facilities. These systems are now used in material recovery facilities and advanced commercial recycling operations because they scale throughput and improve commodity value.

        ## Why conveyor sorting beats manual-only approaches

        ### 1. Higher purity = higher sales price

        Optical sorting and targeted film lines reduce cross-contamination (plastic mixed into paper, food contaminated cardboard), which protects the commodity grade and avoids price penalties or rejected loads. Industry leaders report substantially higher purity using modern sensor sorting.

        ### 2. Lower labor costs and faster throughput

        Automated pre-sort reduces repetitive, low-value manual sorting. Humans focus on quality control where they add most value. That shift reduces labor hours per ton and lowers error rates.

        ### 3. Better data & traceability

        Conveyor intake integrated with a simple ERP or weigh-scale + barcode system gives you chain-of-custody, weight tickets, and commodity reports — the paperwork buyers and auditors expect. This improves procurement confidence and helps with ESG reporting.

        ### 4. Integrates with densification

        When sorting feeds balers and compactors, transport efficiency improves (fewer truckloads), which reduces hauling costs and CO₂ emissions.

        Each of these outcomes translates directly into dollars saved or dollars gained — the two levers investors and operations teams care about.

        ## The big line items in the savings equation

        When you model savings from a conveyor + sort line, consider these revenue and cost components:

        - Recovered commodity revenue (sale of baled cardboard, HDPE, film, metals)
        - Reduced hauling fees (fewer truck trips because bales are denser)
        - Lower disposal/landfill fees (less mixed waste to tip)
        - Labor savings (less manual sorting, fewer overtime hours)
        - Increased compliance value (avoiding fines, meeting procurement specs)
        - Incremental operating cost (electricity, maintenance, operator payroll, servicing sensors)

        Reliable sources show that baling and compaction alone often pay for themselves quickly via freight and handling savings; case studies report substantial monthly freight reductions after switching to baling workflows.

        ## A simple sample ROI (illustrative)

        Below is an example scenario to show how to approach payback calculations. These numbers are illustrative — your site's results will differ by volume, local commodity prices, and hauling rates. Do not treat this as a quotation.

        **Assumptions (example):**
        - Upfront equipment & installation (conveyor + basic optical sensor + integration): $120,000
        - Monthly operating costs (operators, electricity, maintenance): $5,000/month
        - Monthly savings/revenues realized after installation:
          - Hauling & disposal savings: $3,000/month
          - Labor reductions: $2,000/month
          - Resale of recovered materials: $4,000/month

        **Step-by-step math:**
        1. Sum monthly savings/revenues: 3,000 + 2,000 + 4,000 = 9,000
        2. Subtract monthly operating costs: 9,000 − 5,000 = 4,000 → Net monthly benefit = $4,000
        3. Compute payback period (months): 120,000 ÷ 4,000 = 30 → Payback = 30 months (2.5 years)

        This example shows a 2.5-year payback — attractive for capital projects with multi-year life. In many real cases, lower initial cost pilots (modular conveyors, leased balers) or higher commodity prices shorten payback substantially. Case studies exist where baling alone cut monthly freight by many thousands of dollars.

        ## Non-financial benefits you should count

        - **Regulatory readiness & audit trails** — easier permitting and TCEQ/municipal compliance if you can show chain-of-custody and recycling certificates. (Helpful when pursuing government or large corporate buyers.)
        - **ESG & procurement wins** — cleaner materials and verified diversion rates support sustainability reporting and RFPs.
        - **Lower carbon footprint** — densification reduces truckloads and greenhouse gas emissions; recycling itself reduces life-cycle emissions compared with virgin production. EPA data shows recycling programs deliver measurable GHG reductions and broad economic benefits.

        ## Practical implementation checklist for warehouses

        If you're evaluating conveyor-based sorting, use this checklist to prepare:

        1. **Baseline audit** — quantify material types, volumes, contamination rates across shifts. (This guides sorting tech selection.)
        2. **Space & flow assessment** — identify intake/receiving and staging space for conveyors, sort lines, and balers.
        3. **Pilot vs. full install** — start with a modular pilot (one sort line + baler) to validate assumptions and refine SOPs.
        4. **Buyer network** — pre-arrange buyers for recovered streams; specs matter (weight, purity). ISRI commodity specs are a useful industry reference.
        5. **Permits & compliance** — confirm local regulations for recycling operations and on-site processing; in Texas, consult TCEQ guidance when uncertain.
        6. **Staff training & SOPs** — define QC roles, contamination handling, and safety (lockout/tagout for maintenance).
        7. **Data & reporting** — set up weigh tickets, bale tracking, and monthly recovery reports for ROI monitoring.

        ## Choosing the right technology & partner

        Not all conveyors or optical sorters are equal. Key selection factors:

        - **Throughput capacity** (tph or tons per hour) to match your peak load
        - **Sensor accuracy** (NIR, color cameras, X-ray when needed). Tomra and other leading vendors publish technical specs showing improved purity and throughput for packaging and film streams
        - **Maintainability & spare parts availability** — uptime matters
        - **Integration with balers/compactors** — ensure the downstream equipment accepts the sorted flows without re-handling
        - **Data integration** — ability to export weights/grades to your ERP for invoices and ESG reports

        Partner with a systems integrator experienced in both conveyors and recycling markets — they'll help size the line, identify buyers, and set realistic KPIs.

        ## Quick tips to improve outcomes fast

        - **Source-separate at point of generation** (corrugate vs. film) — even modest separation reduces contamination significantly
        - **Calibrate optical sorters to your mix** — sensors must be trained to your specific material composition
        - **Bale to buyer specs** — buyers will pay premiums for correct bale weight, density, and low contamination. Use ISRI specs as a guide

        ## Closing & next steps

        Conveyor-based sorting is not a magic bullet, but when matched to the right volumes, integrated with baling/compaction, and supported by a buyer network, it is a proven route to lower costs, new revenue, and stronger ESG performance.

        If you'd like, PAC Recycle Works can:
        - Run a free baseline audit (we measure your streams and estimate savings)
        - Provide a pilot equipment package & payback model tailored to your site
        - Deliver a buyer-ready bale specification and connection to commodity buyers

        **Ready to optimize your warehouse waste management?** Book a 30-minute site assessment or request our Warehouse Recycling ROI Calculator (downloadable spreadsheet).
      `
    },
    'e-waste-data-security-guide-texas-businesses': {
      title: 'E-Waste & Data Security: A Practical Guide for Texas Businesses',
      image: 'https://images.pexels.com/photos/2644597/pexels-photo-2644597.jpeg?w=800',
      author: 'PAC Compliance Team',
      date: '2024-12-20',
      category: 'Compliance',
      readTime: '15 min read',
      content: `
        Improper disposal of electronic equipment is a top cause of data breaches, regulatory liability, and reputational damage. For Texas businesses, secure e-waste handling isn't optional — it's a core compliance and procurement requirement. This guide walks you through practical steps to secure data-bearing devices, choose certified processors, and obtain the documentation (Certificates of Destruction) your auditors and customers expect.

        Key authorities and standards discussed below include NIST SP 800-88 (media sanitization guidance), Texas regulatory guidance for electronics recycling, and commonly used ITAD certifications (R2, e-Stewards).

        ## 1. The baseline standard: NIST SP 800-88 (what to follow)

        When you need to render data unrecoverable, follow NIST SP 800-88 Rev. 1. It defines three practical levels for media sanitization — Clear, Purge, and Destroy — and explains which method fits different device types and confidentiality needs (e.g., overwrite, cryptographic erase, physical destruction). Using NIST's framework helps you justify your sanitization choice to auditors and customers.

        **Practical takeaway:** For most business devices containing sensitive data, either a verified cryptographic erase (if supported) or physical destruction of storage media is acceptable. Keep a signed Certificate of Destruction with device identifiers.

        ## 2. Texas-specific rules & recycling context

        Texas treats some used electronics as regulated waste depending on how they are handled and transported. The Texas Commission on Environmental Quality (TCEQ) publishes guidance on electronics recycling, program rules, and when registration or manifests may be required. If you operate collection programs or process electronics at scale, confirm relevant TCEQ rules (e.g., local permit or registration needs).

        **Practical takeaway:** Before running collection or takeback programs, check the TCEQ guidance and recordkeeping requirements. If you export devices or ship large volumes across state lines, ensure downstream processors are licensed and compliant.

        ## 3. On-site vs. facility-based destruction — choose by risk profile

        ### On-site sanitization/destruction
        Best when clients demand chain-of-custody control and minimal transport of sensitive media. It's ideal for high-security items. Methods include drive shredding, degaussing (for magnetic media), or verified crypto-erase for SSDs that support it.

        ### Facility-based destruction
        Efficient for large volumes; requires strict intake control, secure storage, and verified destruction lines (shredders, crushers) at the processor's site.

        **Procurement tip:** If you approve a vendor for facility-based destruction, require the right to audit, require a sample verification, and insist on NIST-aligned certificates. Vendors should permit verification sampling and provide signed Certificates of Destruction with serials/asset tags.

        ## 4. Certifications: R2 vs e-Stewards — what they mean for you

        Third-party certifications show that a processor adheres to higher environmental and downstream-management standards. R2 focuses on risk-based management that includes data security and environmental practices; e-Stewards is stricter on downstream exports and disposal practices. For government or health-sector contracts, ask which certification the processor holds and match that to your procurement or compliance needs.

        **Practical takeaway:** Require R2 or e-Stewards (or equivalent) certification in high-sensitivity procurements; if your client prohibits overseas export of e-waste, e-Stewards is often preferred.

        ## 5. Certificates of Destruction — what they must include

        A robust Certificate of Destruction (CoD) is critical documentation. At minimum, a CoD should include:

        - Client name and contact
        - Date of destruction
        - Facility name & certifying agent (vendor signature)
        - Method used (e.g., physical shred, degauss, cryptographic erase) referencing NIST SP 800-88 level (Clear / Purge / Destroy)
        - Itemized list of destroyed devices (serial number, asset tag, model) — or if volume is large, item ranges + manifest/weight ticket references
        - Witnessing or verification statement and unique certificate ID

        NIST even provides a sample certificate format you can adapt to meet audit requirements.

        ### Sample Certificate of Data Destruction (Short Form)

        **Certificate ID:** ____________________  
        **Date of Destruction:** ___/___/_____  
        **Client:** _____________________________  
        **Processed by:** PAC Recycle Works LLC (Facility: ______________)  
        **Method used (NIST 800-88):** ☐ Clear ☐ Purge ☐ Destroy  
        **Destruction method details:** _________________________________________  
        **Device list (serial / asset tag / model) or attachment:** ___________________  

        I certify that the items listed above were destroyed in accordance with the method and date stated.

        **Authorized Signature:** ___________________ **Title:** ____________ **Date:** _______

        ## 6. Data breach & notification obligations (Texas)

        If a breach occurs involving personal data, Texas law requires notification without unreasonable delay (and typically within 60 days unless law enforcement requests delay). Encrypted data may be exempt if encryption keys were not compromised. Maintain incident response playbooks that integrate vendor-supplied CoDs and verification for investigations.

        **Practical takeaway:** Keep CoDs and chain-of-custody records organized and quickly retrievable — they're often needed during breach investigations to show proper disposition.

        ## 7. Procurement & contract clauses to require

        When drafting vendor agreements or purchase orders, include:

        - Requirement for NIST SP 800-88–aligned sanitization or specified destruction method
        - Obligation to provide a signed Certificate of Destruction with serials/asset tags
        - Right to audit and right to sample test destroyed media (random verification)
        - Indemnity for data breaches caused by processor negligence
        - Certification requirement (R2, e-Stewards) where applicable

        **Sample clause (short):** "Contractor shall sanitize or destroy data-bearing media in accordance with NIST SP 800-88 Rev. 1 and provide a signed Certificate of Destruction listing serial numbers/asset tags for all devices destroyed. Contractor shall permit the Client or its auditor to perform verification sampling on request."

        ## 8. Practical checklist for Texas businesses

        1. **Inventory devices** and record serials/asset tags before transfer
        2. **Classify sensitivity** (does it contain PHI, PCI, or other regulated data?)
        3. **Choose method** (on-site shred for highest assurance; crypto-erase for encrypted/managed devices where supported)
        4. **Select certified processor** (R2/e-Stewards) and confirm audit rights
        5. **Require and file** Certificates of Destruction and chain-of-custody
        6. **Retain records** for your compliance period (3–7 years typical; confirm sector rules)
        7. **Update procurement templates** with the sample clause above

        ## Ready to secure your e-waste disposal?

        PAC Recycle Works offers comprehensive e-waste solutions that meet NIST standards and Texas compliance requirements. We provide:

        - NIST SP 800-88 compliant data sanitization
        - Certified Certificates of Destruction
        - R2 certified processing
        - On-site and facility-based destruction options
        - Complete chain-of-custody documentation

        **Contact us today** for a free e-waste compliance review and sample Certificate of Destruction template.
      `
    },
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
        
        if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**') && trimmedLine.includes(':')) {
          return (
            <Typography key={index} variant="h6" component="h4" sx={{ mt: 2, mb: 1, fontWeight: 'bold', color: '#1e3c72' }}>
              {trimmedLine.replace(/\*\*/g, '')}
            </Typography>
          );
        }
        
        if (trimmedLine.startsWith('- ')) {
          return (
            <Typography key={index} component="li" sx={{ ml: 3, mb: 1 }}>
              {trimmedLine.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
            </Typography>
          );
        }
        
        if (trimmedLine.match(/^\d+\./)) {
          return (
            <Typography key={index} component="li" sx={{ ml: 3, mb: 1, listStyleType: 'decimal' }}>
              {trimmedLine.replace(/^\d+\.\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
            </Typography>
          );
        }
        
        // Handle bold text
        if (trimmedLine.includes('**')) {
          return (
            <Typography 
              key={index} 
              variant="body1" 
              sx={{ mb: 2, lineHeight: 1.7 }}
              dangerouslySetInnerHTML={{
                __html: trimmedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              }}
            />
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
