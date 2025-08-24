import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  Link,
} from '@mui/material';

function TermsConditions() {
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
            Terms & Conditions
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
            
            {/* Company Information */}
            <Box sx={{ mb: 4, p: 3, backgroundColor: '#f8f9fa', borderRadius: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#1e3c72' }}>
                Company Information
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Company:</strong> PAC Recycle Works LLC ("Company", "we", "us")
              </Typography>
              <Typography variant="body1">
                <strong>Client:</strong> Any person or entity receiving services from Company ("Client", "you")
              </Typography>
            </Box>

            {/* 1. Definitions */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                1. Definitions
              </Typography>
              <Box sx={{ ml: 2 }}>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                  <strong>Services</strong> — any material intake, collection, transportation, assessment, sorting, dismantling, processing, baling, storage, refurbishment, resale, data sanitization, reporting, or compliance assistance provided by Company.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                  <strong>Material(s)</strong> — all commodities, devices, equipment, parts, pallets, packaging, electronic devices, waste, scrap, and other items delivered to Company.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                  <strong>Hazardous Material</strong> — any material regulated as hazardous under federal or state law (including RCRA), or that exhibits characteristics such as ignitability, corrosivity, reactivity, or toxicity.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                  <strong>Chain of Custody (CoC)</strong> — documentary records tracking Materials from client pickup to final disposition.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                  <strong>Certified Processing</strong> — processing under recognized standards (e.g., R2 or e-Stewards) or equivalent client-requested processes.
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 2. Scope of Services */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                2. Scope of Services & Service Acceptance
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                <strong>2.1.</strong> Company will perform Services described in the accepted work order, SOW, or service agreement (the "Agreement"). The Agreement controls over these T&C in case of conflict.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                <strong>2.2.</strong> Company's acceptance of Materials is subject to inspection at intake. Company may refuse, quarantine, or set price adjustments for Materials that are misrepresented, contaminated, hazardous, or otherwise outside the accepted scope.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                <strong>2.3.</strong> Materials accepted become the property of Company only after formal acceptance and transfer of title, unless otherwise agreed in writing.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 3. Client Responsibilities */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                3. Client Responsibilities & Representations
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                <strong>3.1.</strong> Prior to delivery, Client shall:
              </Typography>
              <Box sx={{ ml: 4 }}>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 1 }}>
                  a. Disclose the full nature, quantity, and condition of Materials.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 1 }}>
                  b. Remove unauthorized or personal property not intended for recycling.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                  c. Segregate hazardous vs. non-hazardous materials where applicable and label accordingly.
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                <strong>3.2.</strong> Client represents that it is legally authorized to transfer title to the Materials and that the Materials are not stolen, subject to liens, or otherwise encumbered.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                <strong>3.3.</strong> Client must secure all required export/import authorizations for Materials leaving the United States (if any).
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                <strong>3.4.</strong> Failure to disclose hazardous or restricted materials that triggers additional costs, regulatory action, or remediation will be the Client's responsibility, including indemnity for Company's costs.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 4. Pricing */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                4. Pricing, Fees & Payment Terms
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                <strong>4.1.</strong> Service fees are set out in the Work Order/SOW. Additional fees apply for: contamination, hazardous identification and handling, unexpected separation, remediation, storage beyond agreed terms, return shipments, and regulatory administration.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                <strong>4.2.</strong> Payment terms: invoices are due NET 30 unless otherwise stated. Overdue amounts accrue interest at 1.5% per month (or the maximum lawful rate) and Client is responsible for collection costs.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                <strong>4.3.</strong> Company may require deposits, milestone payments, or payment in full before Services commence for high-risk jobs (e.g., large e-waste bulk pickups or equipment decommissioning).
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 5. Scheduling */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                5. Scheduling, Access & On-Site Work
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                <strong>5.1.</strong> Client is responsible for providing safe, timely access to the site, utilities, and any necessary permits. Delays due to site access, lack of equipment, or Client personnel availability may incur standby charges.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                <strong>5.2.</strong> For on-site dismantling or decommissioning, Client will ensure site safety and provide any site-specific PPE or site permits required by local authorities. Company will comply with OSHA standards and expects Client to maintain general site safety practices.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 6. Data Security */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                6. Data Security, Media Sanitization & Certificates
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                <strong>6.1.</strong> For e-waste and data-bearing devices, Company follows industry-standard media sanitization and destruction procedures. Where requested, Company will perform data sanitization to standards such as NIST SP 800-88 Rev.1 (Clear, Purge, Destroy) and provide Certificates of Data Destruction. Verification testing is available upon request.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                <strong>6.2.</strong> Client must remove or account for any personally identifiable information (PII) or sensitive data prior to transfer, unless the Agreement includes a data-sanitization service. Company is not liable for residual data on devices if Client declined or obstructed sanitization.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 7. Hazardous Materials */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                7. Hazardous Materials & Regulatory Compliance
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                <strong>7.1.</strong> Client must not deliver Materials that are hazardous without prior written disclosure and an agreed hazardous-materials handling plan. Company will comply with federal hazardous waste rules (RCRA) for any hazardous materials encountered; such materials may require different treatment, storage, transportation, manifesting, and reporting.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                <strong>7.2.</strong> Materials regulated as municipal solid waste, transfer station material recovery, or industrial solid waste may require Company or Client to obtain registration or permits under Texas rules (30 TAC Chapter 330 and related provisions). Clients must cooperate with Company to ensure necessary TCEQ registrations or permits are in place when applicable.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 8. Environmental Permits */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                8. Environmental Permits & Licensing
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                <strong>8.1.</strong> Company will maintain required permits and registrations for its facilities and operations as required by the Texas Commission on Environmental Quality (TCEQ) and federal law. Client is responsible for any site-specific permits required at Client facilities for on-site Services.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                <strong>8.2.</strong> Where third-party processing, export, or disposal is necessary, Company will select licensed processors unless the Client authorizes an alternative. Company will provide manifesting and disposition documentation.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 9. Certifications */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                9. Certifications & Best Practices
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                <strong>9.1.</strong> Company follows recognized industry standards and may obtain or use third-party certifications (e.g., R2 or e-Stewards) for electronics recycling and IT asset disposition as requested or where maintained by Company. These certifications are voluntary best practices that support responsible downstream management; Clients should discuss certification needs at contracting.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 10. Warranties */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                10. Warranties & Disclaimers
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                <strong>10.1.</strong> <strong>Company Warranty:</strong> Company warrants that Services will be performed in a professional manner consistent with industry practice.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                <strong>10.2.</strong> <strong>Client Warranty:</strong> Client warrants it has the right to transfer title and that all provided information about Materials is true and complete.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                <strong>10.3.</strong> <strong>Disclaimer:</strong> Except for the limited warranty above, Company disclaims all other warranties, express or implied (including merchantability or fitness for a particular purpose). Company does not warrant the ultimate resale price or recovery value of Materials.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 11. Liability */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                11. Liability & Indemnity
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                <strong>11.1.</strong> <strong>Limitation of Liability:</strong> Except for damages arising from gross negligence or willful misconduct, Company's aggregate liability arising from Services shall not exceed the total fees paid by Client for the specific work order giving rise to liability.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                <strong>11.2.</strong> <strong>Indemnity:</strong> Client shall indemnify, defend, and hold Company harmless from all losses, claims, damages, fines, or costs (including reasonable attorneys' fees) arising from Client's breach of representations, undisclosed hazardous materials, theft/encumbrances, or regulatory penalties from Client's acts or omissions.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 12. Insurance */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                12. Insurance & Risk Allocation
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                <strong>12.1.</strong> Company maintains commercial general liability and pollution/environmental liability insurance to industry standards for its operations; proof of insurance is available upon request. Client is encouraged to maintain adequate property, liability, and environmental insurance for their premises and materials.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                <strong>12.2.</strong> Claims for loss or damage must be reported in writing within 7 days of discovery. Late claims may be denied.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 13. Records */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                13. Records, Reporting & Audit Rights
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                <strong>13.1.</strong> Company will provide CoC documentation, weight tickets, recycling certificates, and disposition reports as agreed.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                <strong>13.2.</strong> Client may audit or request copies of records with reasonable notice; Company may redact commercially sensitive information or third-party pricing. Audit frequency and scope will be agreed in the applicable Agreement.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 14. Confidentiality */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                14. Confidentiality & Data Protection
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                <strong>14.1.</strong> Each party will maintain the confidentiality of Confidential Information and will not disclose it except to employees, contractors, or regulators who need to know and who are bound by confidentiality. "Confidential Information" does not include information that is public or independently developed.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                <strong>14.2.</strong> For personal data or PII, Company will process and protect data consistent with applicable U.S. federal and Texas data-protection laws and with contractual requirements; Client remains responsible for notices to data subjects where required.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 15. Termination */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                15. Termination & Suspension
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                <strong>15.1.</strong> Either party may terminate the Agreement for material breach if not cured within 30 days after written notice. Company may suspend Services immediately if Client delivers hazardous or misrepresented Materials, or fails to pay.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                <strong>15.2.</strong> Upon termination, Client must pay for all Services performed and any costs of disposition, storage, or return of Materials. Company may charge reasonable removal or storage fees.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 16. Force Majeure */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                16. Force Majeure
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                Neither party is liable for failure due to causes beyond its reasonable control (e.g., natural disasters, strikes, government actions). The affected party must give prompt notice and make reasonable efforts to resume performance.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 17. Governing Law */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                17. Governing Law & Dispute Resolution
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                <strong>17.1.</strong> <strong>Governing Law:</strong> This Agreement is governed by the laws of the State of Texas, without regard to conflict of law rules.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                <strong>17.2.</strong> <strong>Dispute Resolution:</strong> Parties will attempt good-faith negotiation; if unresolved within 30 days, disputes will be resolved in the state or federal courts located in Harris County, Texas (or through binding arbitration if agreed).
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 18. Amendments */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                18. Amendments & Assignment
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                <strong>18.1.</strong> Amendments must be in writing and signed by both parties.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                <strong>18.2.</strong> Client may not assign the Agreement without Company's written consent. Company may assign to an affiliate or purchaser.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 19. Notices */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                19. Notices
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                All notices must be in writing to the addresses in the Work Order or to <Link href="mailto:legal@pacrecycleworks.com">legal@pacrecycleworks.com</Link> (or other designated legal contact) and are effective on receipt.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 20. Miscellaneous */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#1e3c72' }}>
                20. Miscellaneous
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                <strong>20.1.</strong> <strong>Entire Agreement:</strong> This document and the signed Work Order constitute the entire agreement between the parties.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                <strong>20.2.</strong> <strong>Severability:</strong> If any provision is invalid, remaining provisions remain effective.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                <strong>20.3.</strong> <strong>Survival:</strong> Provisions concerning confidentiality, indemnity, records, and liability survive termination.
              </Typography>
            </Box>

            {/* Contact Information */}
            <Box sx={{ mt: 6, p: 3, backgroundColor: '#f8f9fa', borderRadius: 2, textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#1e3c72' }}>
                Contact Information
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>PAC Recycle Works LLC</strong>
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                6611 Supply Row Unit A, Houston, Texas 77011
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Phone:</strong> +1(281) 643-8645
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Legal:</strong> <Link href="mailto:legal@pacrecycleworks.com">legal@pacrecycleworks.com</Link>
              </Typography>
              <Typography variant="body2" sx={{ color: '#666', mt: 2 }}>
                Last updated: September 1, 2025
              </Typography>
            </Box>

          </Paper>
        </Container>
      </Box>
    </Box>
  );
}

export default TermsConditions;
