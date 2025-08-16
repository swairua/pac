import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
} from '@mui/material';

function TermsConditions() {
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
            Terms & Conditions
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
            Please review our terms and conditions for using PAC Recycle Works services
          </Typography>
        </Container>
      </Box>

      {/* Terms Content */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper sx={{ p: 6, borderRadius: 3, boxShadow: 3 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
            Last updated: January 1, 2024
          </Typography>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
            1. Acceptance of Terms
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
            By engaging PAC Recycle Works LLC ("Company," "we," "us," or "our") for waste management 
            and recycling services, you ("Client," "Customer," or "you") agree to be bound by these 
            Terms and Conditions. If you do not agree to these terms, please do not use our services.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
            2. Services Description
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
            PAC Recycle Works provides comprehensive waste management and recycling services including but not limited to:
          </Typography>
          <Box component="ul" sx={{ mb: 4, pl: 3 }}>
            <Typography component="li" sx={{ mb: 1 }}>Conveyor-based material sorting</Typography>
            <Typography component="li" sx={{ mb: 1 }}>Recycling consulting and audits</Typography>
            <Typography component="li" sx={{ mb: 1 }}>Industrial waste handling</Typography>
            <Typography component="li" sx={{ mb: 1 }}>Pickup and logistics services</Typography>
            <Typography component="li" sx={{ mb: 1 }}>E-waste collection and processing</Typography>
            <Typography component="li" sx={{ mb: 1 }}>Value recovery and resale programs</Typography>
            <Typography component="li" sx={{ mb: 1 }}>Licensing and compliance support</Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
            3. Client Responsibilities
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
            Clients are responsible for:
          </Typography>
          <Box component="ul" sx={{ mb: 4, pl: 3 }}>
            <Typography component="li" sx={{ mb: 1 }}>Providing accurate information about waste materials</Typography>
            <Typography component="li" sx={{ mb: 1 }}>Ensuring materials are properly segregated when required</Typography>
            <Typography component="li" sx={{ mb: 1 }}>Complying with all applicable laws and regulations</Typography>
            <Typography component="li" sx={{ mb: 1 }}>Providing safe access to collection points</Typography>
            <Typography component="li" sx={{ mb: 1 }}>Timely payment of invoices</Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
            4. Pricing and Payment
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
            Pricing is based on current market rates and service requirements. Payment terms are NET 30 
            days unless otherwise specified in writing. Late payments may incur additional charges. 
            We reserve the right to suspend services for accounts with overdue balances.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
            5. Environmental Compliance
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
            All services are performed in accordance with federal, state, and local environmental 
            regulations. We maintain all necessary permits and certifications. Clients warrant that 
            materials provided for processing comply with applicable regulations and do not contain 
            prohibited substances.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
            6. Data Security and Confidentiality
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
            For e-waste services involving data destruction, we employ industry-standard security 
            protocols. We provide certificates of destruction and maintain strict confidentiality. 
            However, clients remain responsible for removing sensitive data before disposal when possible.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
            7. Limitation of Liability
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
            Our liability is limited to the direct costs of services provided. We are not liable for 
            indirect, consequential, or punitive damages. Maximum liability shall not exceed the total 
            amount paid for services in the preceding 12 months.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
            8. Insurance and Indemnification
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
            We maintain comprehensive general liability and environmental impairment insurance. 
            Clients agree to indemnify us against claims arising from misrepresentation of materials 
            or violation of applicable laws by the client.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
            9. Force Majeure
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
            Neither party shall be liable for delays or failures in performance due to circumstances 
            beyond their reasonable control, including but not limited to natural disasters, 
            government actions, labor disputes, or material shortages.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
            10. Termination
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
            Either party may terminate services with 30 days written notice. Immediate termination 
            is permitted for material breach of contract, non-payment, or safety violations. 
            All outstanding obligations survive termination.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
            11. Governing Law
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
            These terms are governed by the laws of the state where services are performed. 
            Any disputes shall be resolved through binding arbitration in accordance with the 
            rules of the American Arbitration Association.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
            12. Modifications
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
            We reserve the right to modify these terms at any time. Changes will be effective 30 days 
            after notification. Continued use of services after modification constitutes acceptance 
            of the new terms.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
            Contact Information
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
            For questions about these Terms and Conditions, please contact us:
          </Typography>
          <Box sx={{ pl: 2 }}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>PAC Recycle Works LLC</strong>
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              123 Industrial Blvd, Recycling City, RC 12345
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Phone: (555) 123-4567
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Email: legal@pacrecycleworks.com
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default TermsConditions;
