import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  Link,
} from '@mui/material';

function PrivacyPolicy() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
          py: 6,
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
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Privacy Policy
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              opacity: 0.9,
            }}
          >
            Effective Date: September 1, 2025
          </Typography>
        </Container>
      </Box>

      {/* Content */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Paper sx={{ p: { xs: 3, md: 6 }, borderRadius: 3 }}>
            
            {/* Contact Information */}
            <Box sx={{ mb: 4, p: 3, backgroundColor: '#f8f9fa', borderRadius: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#1e3c72' }}>
                Company Contact Information
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Company:</strong> PAC Recycle Works LLC ("PAC", "we", "us", "our")
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Privacy:</strong> <Link href="mailto:privacy@pacrecycleworks.com">privacy@pacrecycleworks.com</Link>
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Legal:</strong> <Link href="mailto:legal@pacrecycleworks.com">legal@pacrecycleworks.com</Link>
              </Typography>
              <Typography variant="body1">
                <strong>Mailing:</strong> 6611 Supply Row Unit A, Houston, Texas 77011, USA
              </Typography>
            </Box>

            {/* 1. Overview */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                1. Overview / Scope
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                This Privacy Policy explains how PAC collects, uses, discloses, stores, and secures personal information in connection with our recycling, IT asset disposition, logistics, consulting, and website services. It applies to personal information received from: (a) clients and their authorized agents; (b) visitors to our websites and portals; (c) individuals whose devices or materials are processed by us; and (d) job applicants and business contacts.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                We process personal data to deliver services, to comply with legal obligations, to protect people and property, and to operate our business. Where specific laws provide greater rights (for example, California privacy laws), we describe how those rights are honored below.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 2. Personal Information We Collect */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                2. Personal Information We Collect (Categories)
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 3 }}>
                We collect the following categories of personal information, depending on the service or interaction:
              </Typography>
              
              <Box sx={{ ml: 2 }}>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                  <strong>A. Identity & Contact Data:</strong> name, job title, company, email, phone, business address, billing/shipping address.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                  <strong>B. Transactional & Contract Data:</strong> service agreements, invoices, shipping manifests, chain-of-custody records.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                  <strong>C. Device & Asset Identifiers:</strong> device serial numbers, asset tags, MAC addresses, IMEI, model numbers—collected when devices, equipment, or pallets are transferred to PAC.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                  <strong>D. Sensitive Data (limited, only if provided):</strong> health data (only where required by client and processed under HIPAA obligations), authentication credentials, or password hashes (never stored in plain text).
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                  <strong>E. Website & Technical Data:</strong> IP address, browser type, cookies, page interactions, and form submissions.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                  <strong>F. Images & Video:</strong> photos or CCTV recorded on site or during pick up (for security and proof of condition).
                </Typography>
              </Box>
              
              <Typography variant="body1" sx={{ lineHeight: 1.7, mt: 3 }}>
                We do not intentionally collect more sensitive personal information (e.g., race, religion) unless explicitly required for a permitted business purpose and documented in a contract.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 3. How We Collect */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                3. How We Collect Personal Information
              </Typography>
              <Box sx={{ ml: 2 }}>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 1 }}>
                  • Directly from you (when you request services, submit material for recycling, sign a work order, or interact with our website).
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 1 }}>
                  • From your authorized agents (third-party logistics providers, IT asset owners, or brokers).
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 1 }}>
                  • From devices and tags delivered to our facilities (automated capture of serials and asset tags during intake).
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 1 }}>
                  • From third parties (credit checkers for billing, processors, or publicly available sources for contact info).
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                  • Automatically when you visit our website (cookies, analytics, server logs).
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 4. Purposes */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                4. Purposes for Which We Use Personal Information
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                We use personal information for the following legitimate business purposes:
              </Typography>
              <Box sx={{ ml: 2 }}>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 1 }}>
                  • To deliver and manage our Services (intake, sorting, processing, transportation, disposition, reporting).
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 1 }}>
                  • To prepare chain-of-custody, weight tickets, certificates of destruction, and compliance documents.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 1 }}>
                  • To perform identity verification and title transfer checks on materials.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 1 }}>
                  • To carry out billing, collections, and insurance/claims processing.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 1 }}>
                  • To comply with legal and regulatory obligations (e.g., hazardous materials handling, TCEQ requirements, export/import controls).
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 1 }}>
                  • To secure data-bearing devices (sanitization, destruction) and provide Certificates of Data Destruction when requested.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 1 }}>
                  • To provide customer support and respond to inquiries, disputes, or breach notices.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                  • To operate, secure, and improve our website and services (analytics, fraud prevention).
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 5. Legal Bases */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                5. Legal Bases & Lawful Processing
              </Typography>
              <Box sx={{ ml: 2 }}>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 1 }}>
                  • For U.S. clients and site visitors, PAC relies primarily on contract performance, legitimate business interests, and legal compliance as the lawful bases for processing.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 1 }}>
                  • For EU/EEA data subjects (if any), PAC will rely on contract performance, legitimate interest, or consent where required, and will honor GDPR data-subject rights described below.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                  • For California and other state-law-covered residents, PAC will honor the rights and notices required by applicable state privacy laws (see Section 9).
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 6. Special Handling */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                6. Special Handling: Data-Bearing Devices & Media Sanitization
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                When handling devices that may contain personal or sensitive data, PAC follows recognized media-sanitization practices. We offer (and document) sanitization or destruction according to NIST SP 800-88 Rev.1 (Clear, Purge, Destroy) and provide Certificates of Data Destruction on request. Clients must indicate if devices have protected health information (PHI) or other regulated data so PAC can apply applicable legal safeguards.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 7. Sharing */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                7. Sharing Personal Information (Who We Share With)
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                We may share personal information with third parties for the following purposes:
              </Typography>
              <Box sx={{ ml: 2 }}>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 1 }}>
                  • <strong>Service providers & processors:</strong> logistics carriers, downstream recyclers, disposal facilities, testing labs, secure destruction vendors, payment processors.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 1 }}>
                  • <strong>Buyers and brokers:</strong> downstream commodity buyers or refurbishers (limited to required device identifiers and grade/condition).
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 1 }}>
                  • <strong>Regulatory authorities and law enforcement:</strong> to comply with subpoenas, warrants, permits, or legal obligations.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 1 }}>
                  • <strong>Business transfers:</strong> in connection with any merger, sale, or transfer of business assets (with appropriate notices).
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                  • <strong>Subcontractors:</strong> for on-site services (dismantling, transport, shredding) under contract that requires confidentiality and security.
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mt: 2 }}>
                When we disclose personal information to service providers, we require contractual safeguards (data processing agreements) and limit use to the agreed purposes.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 8. Cookies */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                8. Cookies & Online Tracking
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                Our website uses cookies and similar technologies to operate the website, provide analytics, remember preferences, and for security. You can manage cookie preferences through your browser or via any cookie-preference tool we provide. We do not sell personal information for advertising purposes—unless we notify you and obtain required opt-outs for jurisdictions like California.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 9. Rights */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                9. Rights of Individuals (Access, Correction, Deletion, Opt-Outs)
              </Typography>
              
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                California and other state law residents:
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 3 }}>
                Residents of states with privacy laws (for example, California) have rights to request access to the categories of personal information collected, deletion, correction, and to opt out of the sale or sharing of personal information where applicable. PAC implements reasonable request verification procedures before responding. For California residents, please submit requests to: <Link href="mailto:privacy@pacrecycleworks.com">privacy@pacrecycleworks.com</Link>. We will respond within timelines required by applicable law.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                EU/EEA data subjects:
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 3 }}>
                Where GDPR applies, you may request access, correction, restriction, portability, objection to processing (including profiling), and lodge complaints with a supervisory authority. To exercise rights or to designate an authorized agent, contact <Link href="mailto:privacy@pacrecycleworks.com">privacy@pacrecycleworks.com</Link>.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Verification & Limits:
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                For all requests, we will verify the requester's identity and may refuse or limit requests when permitted by law (e.g., to protect another's rights, for safety, or where deletion would prevent compliance with legal obligations).
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 10. Data Retention */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                10. Data Retention & Deletion
              </Typography>
              <Box sx={{ ml: 2 }}>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 1 }}>
                  • <strong>Operational records & chain of custody:</strong> retained for a minimum of 7 years (set to meet audit, insurance, and contract requirements—typical industry practice is 3–7 years).
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 1 }}>
                  • <strong>Device/asset records & certificates:</strong> retained as required for client and regulatory needs.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 1 }}>
                  • <strong>Website logs & analytics:</strong> retained for a limited period (e.g., 12–24 months) for security and analytics.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                  • When a deletion request is valid and feasible (and not prevented by law or contractual obligations), PAC will delete personal information from active systems and provide certification where feasible; exceptions include backups, legal holds, and records needed for tax, safety, or compliance.
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 11. Security */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                11. Data Security Measures
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                PAC employs administrative, technical, and physical safeguards designed to protect personal information appropriate to the sensitivity of the data and the nature of our operations. Examples of measures we use include:
              </Typography>
              <Box sx={{ ml: 2 }}>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 1 }}>
                  • Role-based access controls and strong authentication for staff and vendors.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 1 }}>
                  • Encryption of data at rest and in transit where feasible.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 1 }}>
                  • Network and endpoint monitoring, logging, and incident response plans.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 1 }}>
                  • Physical site security, CCTV, and restricted access at intake and processing areas.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                  • Staff training on data handling, chain of custody, and media sanitization procedures.
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mt: 2 }}>
                We follow recognized guidance for security and data handling, including FTC recommendations for data security and industry sanitization standards for media.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 12. Breach Notification */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                12. Breach Notification
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                If PAC becomes aware of a security breach affecting personal data, we will follow our incident response plan and applicable breach-notification laws. For Texas residents and Texas-based incidents, PAC will comply with Texas's data-breach notification requirements and notify affected individuals and the Texas Attorney General as required. Where other state or federal laws apply, PAC will follow the applicable notification timelines and content requirements.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 13-19. Remaining sections */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                13. International Transfers
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                When personal information is transferred outside the U.S., PAC will implement appropriate safeguards (standard contractual clauses or other lawful transfer mechanisms) where required by law and will limit transfer to processors that provide adequate protections.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                14. Children
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                Our services are business-oriented and not directed at children under 16. We do not knowingly collect personal information from minors under applicable age thresholds. If we learn that we have inadvertently collected such information, we will delete it promptly.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                15. Employment & Applicant Data
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                We collect only the information necessary to consider employment or contractor candidates (CV, contact, references). Applicant data is retained only as needed for recruitment, legal compliance, or with consent for future opportunities.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                16. Third-Party Links & Processors
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                Our site may link to third-party websites. PAC is not responsible for the privacy practices of external sites. We vet major processors, require written contracts and security obligations, and maintain a list of subprocessors upon request.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                17. Changes to This Policy
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                We may update this Privacy Policy to reflect legal or business changes. We will post the revised policy with an updated effective date and, where required by law, we will provide direct notice to affected individuals.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                18. How to Contact Us / Exercise Your Rights
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                To make data requests, ask privacy questions, report a potential data breach, or request a copy of our processing agreements:
              </Typography>
              <Box sx={{ ml: 2 }}>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 1 }}>
                  • <strong>Email:</strong> <Link href="mailto:privacy@pacrecycleworks.com">privacy@pacrecycleworks.com</Link>
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 1 }}>
                  • <strong>Legal:</strong> <Link href="mailto:legal@pacrecycleworks.com">legal@pacrecycleworks.com</Link>
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                  • <strong>Mail:</strong> PAC Recycle Works LLC, Attn: Privacy Officer, 6611 Supply Row Unit A, Houston, Texas 77011, USA
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mt: 2 }}>
                We verify requests before processing. If you are not satisfied with our response, you may lodge a complaint with the appropriate supervisory authority (e.g., state Attorney General or GDPR supervisory authority).
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                19. Special Notices (HIPAA & PHI)
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                If PAC processes protected health information (PHI) on behalf of a covered entity, we will enter a Business Associate Agreement (BAA) that defines permitted uses and safeguards in line with HIPAA requirements. PAC follows HHS guidance and NIST SP 800-88 for media sanitization when handling devices that may contain PHI.
              </Typography>
            </Box>

            {/* Last Updated */}
            <Box sx={{ mt: 6, p: 3, backgroundColor: '#f8f9fa', borderRadius: 2, textAlign: 'center' }}>
              <Typography variant="body2" sx={{ color: '#666' }}>
                This Privacy Policy was last updated on September 1, 2025.
                <br />
                For questions or concerns, please contact us at{' '}
                <Link href="mailto:privacy@pacrecycleworks.com">privacy@pacrecycleworks.com</Link>
              </Typography>
            </Box>

          </Paper>
        </Container>
      </Box>
    </Box>
  );
}

export default PrivacyPolicy;
