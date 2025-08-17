import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Divider,
  Alert,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import {
  Warning,
  Gavel,
  LocalShipping,
  Description,
  Policy,
  Security,
  ArrowBack,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function NonCompliancePenalties() {
  const penaltySummary = [
    {
      icon: <Policy />,
      violation: 'Improper waste classification',
      penalty: 'EPA/TCEQ exposure typically $10,000 → $95,000+ per day',
      details: '(statutory/administrative maxima vary by statute and recent inflation adjustments)',
    },
    {
      icon: <Description />,
      violation: 'Missing documentation / recordkeeping',
      penalty: 'Typical state/federal fines ≈ $1,000 → $7,500 per violation',
      details: '(many programs treat recordkeeping as a lower-range programmatic violation; federal Clean Air Act/other statutes allow higher maxima)',
    },
    {
      icon: <LocalShipping />,
      violation: 'Transportation (hazmat / DOT / FMCSA / PHMSA) violations',
      penalty: 'Typical range ≈ $250 → $50,000+ per violation',
      details: '(some serious violations escalate to six-figures) — agency and violation type determine where in the range you fall',
    },
    {
      icon: <Gavel />,
      violation: 'Permit violations (operating without required permit)',
      penalty: 'Typical state/federal exposure ≈ $10,000 → $95,000+ per day',
      details: '(state daily penalty policies commonly $10k–$25k/day; federal statutes historically $37,500/day and in some programs adjusted upward)',
    },
    {
      icon: <Security />,
      violation: 'Data security breaches (per-record cost)',
      penalty: 'Industry evidence: ~$173 per compromised record',
      details: '(2024 IBM/Ponemon average for certain record types); overall average breach cost measured in millions',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%)',
          py: 8,
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Button
            component={Link}
            to="/services/licensing-compliance"
            startIcon={<ArrowBack />}
            sx={{ mb: 3, color: 'white', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
          >
            Back to Licensing & Compliance
          </Button>
          
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
            Real Penalties for Non-Compliance
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
            Understanding the actual financial risks and legal exposure from regulatory violations. 
            These are evidence-based penalty ranges from real enforcement actions and statutory guidelines.
          </Typography>
        </Container>
      </Box>

      {/* Quick Summary Section */}
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
            Short Summary (Quick View)
          </Typography>

          <Grid container spacing={4}>
            {penaltySummary.map((item, index) => (
              <Grid size={{ xs: 12 }} key={index}>
                <Paper
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    border: '2px solid #d32f2f',
                    '&:hover': {
                      boxShadow: 6,
                      backgroundColor: '#fff5f5',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                    <Box
                      sx={{
                        backgroundColor: '#d32f2f',
                        color: 'white',
                        borderRadius: '50%',
                        p: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: 64,
                        minHeight: 64,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#1e3c72' }}>
                        {item.violation}
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, color: '#d32f2f' }}>
                        {item.penalty}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#666', fontStyle: 'italic' }}>
                        {item.details}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Divider sx={{ borderColor: '#d32f2f', borderWidth: 2 }} />

      {/* Detailed Evidence & Notes Section */}
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
            Detailed Evidence & Notes (by Category)
          </Typography>

          {/* 1. Improper Waste Classification */}
          <Box id="waste-classification" sx={{ mb: 6 }}>
            <Paper sx={{ p: 4, borderRadius: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: '#d32f2f' }}>
                1) Improper Waste Classification — evidence & range
              </Typography>
              
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#1e3c72' }}>
                Evidence-based numbers:
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                Federal RCRA/CERCLA/Toxic statutes historically provide civil-penalty maxima in the ~$37,500 per day range for many Subtitle C violations; EPA penalty matrices and recent adjustments (and other statutes) mean modern maxima can be higher (adjusted upward for inflation and specific statutes). Texas (TCEQ) penalty practice typically results in $10,000–$25,000 per day for many continuing violations, with discretion depending on permit status and severity.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#1e3c72' }}>
                Why the range:
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                Different statutes and programs (RCRA, Clean Air Act, CERCLA, state rules) have different ceilings and penalty matrices; courts/agencies also negotiate agreed orders.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#1e3c72' }}>
                Primary sources:
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                EPA RCRA penalty guidance and penalty-matrix guidance (statutory maxima cited). TCEQ penalty policy and guidance.
              </Typography>
            </Paper>
          </Box>

          {/* 2. Missing Documentation */}
          <Box id="missing-documentation" sx={{ mb: 6 }}>
            <Paper sx={{ p: 4, borderRadius: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: '#d32f2f' }}>
                2) Missing documentation / recordkeeping — evidence & range
              </Typography>
              
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#1e3c72' }}>
                Evidence-based numbers:
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                State program penalty matrices (example: NYDEC) list recordkeeping/reporting fines typically in the $1,500–$7,500 range for late, incomplete or missing reports; EPA enforcement guidance treats recordkeeping violations as programmatic and often toward the lower penalty band unless they materially impair enforcement. Clean-Air / reporting statutes can allow higher per-violation fines for serious/knowing failures.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#1e3c72' }}>
                Why the range:
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                "Missing documentation" is generally treated as a programmatic violation (lower range) unless it conceals a more serious compliance failure. Use the lower-to-mid range for budgeting routine documentation risks; prepare for higher if the violation is willful or conceals harm.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#1e3c72' }}>
                Primary sources:
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                NYDEC penalty matrix examples; EPA Enforcement Response Policy and programmatic-violation guidance.
              </Typography>
            </Paper>
          </Box>

          {/* 3. Transportation Violations */}
          <Box id="transportation-violations" sx={{ mb: 6 }}>
            <Paper sx={{ p: 4, borderRadius: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: '#d32f2f' }}>
                3) Transportation violations — evidence & range
              </Typography>
              
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#1e3c72' }}>
                Evidence-based numbers:
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                For hazardous materials transport, PHMSA guidance shows civil penalties with minimums in the hundreds and maximums historically at ~$50,000 per violation (and higher per-day maxima in severe cases); FMCSA's updated civil penalty amounts show many motor-carrier violations commonly in the low-thousands to ~$23k per violation (and higher for serious violations). Recent annual adjustments (2024–2025) have raised maximum statutory ceilings in some hazmat categories.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#1e3c72' }}>
                Why the range:
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                DOT/PHMSA/FMCSA each have separate penalty regimes; the penalty depends on the exact regulation violated (e.g., registration, shipping paper, placarding, training, packaging). Some serious hazmat violations with injuries or willful misconduct escalate to six-figure exposure in extreme cases.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#1e3c72' }}>
                Primary sources:
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                PHMSA hazmat penalty overview, FMCSA penalty update and rules.
              </Typography>
            </Paper>
          </Box>

          {/* 4. Permit Violations */}
          <Box id="permit-violations" sx={{ mb: 6 }}>
            <Paper sx={{ p: 4, borderRadius: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: '#d32f2f' }}>
                4) Permit violations — evidence & range
              </Typography>
              
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#1e3c72' }}>
                Evidence-based numbers:
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                State agencies like TCEQ impose daily administrative penalties for operating without required permits; policy examples show typical daily penalties $10,000 or more depending on program and statutory limits. At the federal level, environmental statutes have daily-per-violation civil penalties often in the $25k–$95k band (depending on program and recent inflation adjustments).
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#1e3c72' }}>
                Why the range:
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                Whether a state or federal statute applies, whether the site held any other permits, and whether the violation is continuous vs. discrete will determine the assessed daily penalty.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#1e3c72' }}>
                Primary sources:
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                TCEQ penalty policy, EPA penalty policy and examples for Clean Air/Clean Water statutes.
              </Typography>
            </Paper>
          </Box>

          {/* 5. Data Security Breaches */}
          <Box id="data-security-breaches" sx={{ mb: 6 }}>
            <Paper sx={{ p: 4, borderRadius: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: '#d32f2f' }}>
                5) Data security breaches — per-record and per-breach evidence
              </Typography>
              
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#1e3c72' }}>
                Evidence-based numbers:
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                The IBM / Ponemon Cost of a Data Breach research (2023–2024) is the industry benchmark: IBM reported costs ≈ $173 per compromised record (2024 figure cited for cost of stolen records in certain categories) and an average total breach cost in 2024 of $4.88M (global average; US higher). Per-record costs vary widely by record type (SSNs, health data, payment data are costlier) and industry.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#1e3c72' }}>
                Why the range:
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                Regulatory fines, litigation, breach-notification, credit monitoring, and class-action exposures will add to remediation costs — some court settlements or statutory fines can drive per-record liabilities much higher in specific cases, but the IBM per-record estimate is the best broadly cited, evidence-based benchmark for planning.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#1e3c72' }}>
                Primary sources:
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                IBM / Ponemon Cost of a Data Breach report and related IBM press materials.
              </Typography>
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* Call to Action */}
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
              Don't Risk These Penalties
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
              Protect your business with comprehensive compliance support. Our experts help you 
              avoid these costly violations and maintain full regulatory compliance.
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
                Get Compliance Review
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                to="/services/licensing-compliance"
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
                Back to Compliance Services
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default NonCompliancePenalties;
