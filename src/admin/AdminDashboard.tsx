import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Alert,
  CircularProgress,
  Tabs,
  Tab,
} from '@mui/material';
import {
  Email,
  Phone,
  Business,
  Person,
  Refresh,
  Visibility,
  Edit,
  CheckCircle,
  Cancel,
  Pending,
} from '@mui/icons-material';
import { useState } from 'react';
import { useQuoteRequests, useContactSubmissions, type QuoteRequest, type ContactSubmission } from '../hooks/useDatabase';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`admin-tabpanel-${index}`}
      aria-labelledby={`admin-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

function AdminDashboard() {
  const [currentTab, setCurrentTab] = useState(0);
  const [selectedRequest, setSelectedRequest] = useState<QuoteRequest | null>(null);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [statusDialogOpen, setStatusDialogOpen] = useState(false);
  const [newStatus, setNewStatus] = useState('');

  const { 
    requests, 
    loading: requestsLoading, 
    error: requestsError, 
    refreshRequests, 
    updateStatus 
  } = useQuoteRequests();

  const { 
    submissions, 
    loading: submissionsLoading, 
    error: submissionsError, 
    refreshSubmissions 
  } = useContactSubmissions();

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  const handleViewRequest = (request: QuoteRequest) => {
    setSelectedRequest(request);
  };

  const handleViewSubmission = (submission: ContactSubmission) => {
    setSelectedSubmission(submission);
  };

  const handleUpdateStatus = async () => {
    if (selectedRequest && newStatus) {
      try {
        await updateStatus(selectedRequest.id, newStatus);
        setStatusDialogOpen(false);
        setSelectedRequest(null);
        setNewStatus('');
      } catch (error) {
        console.error('Failed to update status:', error);
      }
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending': return 'warning';
      case 'reviewed': return 'info';
      case 'contacted': return 'primary';
      case 'completed': return 'success';
      case 'cancelled': return 'error';
      default: return 'default';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending': return <Pending />;
      case 'completed': return <CheckCircle />;
      case 'cancelled': return <Cancel />;
      default: return <Pending />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Summary stats
  const totalRequests = requests.length;
  const pendingRequests = requests.filter(r => r.status === 'pending').length;
  const completedRequests = requests.filter(r => r.status === 'completed').length;
  const totalSubmissions = submissions.length;

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', py: 4 }}>
      <Container maxWidth="xl">
        <Typography variant="h3" component="h1" sx={{ mb: 4, fontWeight: 'bold', color: '#1e3c72' }}>
          PAC Admin Dashboard
        </Typography>

        {/* Summary Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography color="textSecondary" gutterBottom>
                      Total Quote Requests
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1e3c72' }}>
                      {totalRequests}
                    </Typography>
                  </Box>
                  <Email sx={{ fontSize: 40, color: '#00bcd4' }} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography color="textSecondary" gutterBottom>
                      Pending Requests
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ff9800' }}>
                      {pendingRequests}
                    </Typography>
                  </Box>
                  <Pending sx={{ fontSize: 40, color: '#ff9800' }} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography color="textSecondary" gutterBottom>
                      Completed
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4caf50' }}>
                      {completedRequests}
                    </Typography>
                  </Box>
                  <CheckCircle sx={{ fontSize: 40, color: '#4caf50' }} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography color="textSecondary" gutterBottom>
                      Contact Forms
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1e3c72' }}>
                      {totalSubmissions}
                    </Typography>
                  </Box>
                  <Person sx={{ fontSize: 40, color: '#00bcd4' }} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Tabs */}
        <Paper sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={currentTab} onChange={handleTabChange} aria-label="admin tabs">
              <Tab 
                label={`Quote Requests (${totalRequests})`} 
                id="admin-tab-0"
                aria-controls="admin-tabpanel-0"
              />
              <Tab 
                label={`Contact Submissions (${totalSubmissions})`} 
                id="admin-tab-1"
                aria-controls="admin-tabpanel-1"
              />
            </Tabs>
          </Box>

          {/* Quote Requests Tab */}
          <TabPanel value={currentTab} index={0}>
            <Box sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  Quote Requests
                </Typography>
                <Button
                  variant="outlined"
                  startIcon={<Refresh />}
                  onClick={refreshRequests}
                  disabled={requestsLoading}
                >
                  Refresh
                </Button>
              </Box>

              {requestsError && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  {requestsError}
                </Alert>
              )}

              {requestsLoading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                  <CircularProgress />
                </Box>
              ) : (
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Company</TableCell>
                        <TableCell>Service</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {requests.map((request) => (
                        <TableRow key={request.id} hover>
                          <TableCell>{request.name}</TableCell>
                          <TableCell>{request.email}</TableCell>
                          <TableCell>{request.company || 'N/A'}</TableCell>
                          <TableCell>{request.service}</TableCell>
                          <TableCell>
                            <Chip
                              icon={getStatusIcon(request.status)}
                              label={request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                              color={getStatusColor(request.status) as any}
                              size="small"
                            />
                          </TableCell>
                          <TableCell>{formatDate(request.created_at)}</TableCell>
                          <TableCell>
                            <IconButton
                              size="small"
                              onClick={() => handleViewRequest(request)}
                              sx={{ mr: 1 }}
                            >
                              <Visibility />
                            </IconButton>
                            <IconButton
                              size="small"
                              onClick={() => {
                                setSelectedRequest(request);
                                setNewStatus(request.status);
                                setStatusDialogOpen(true);
                              }}
                            >
                              <Edit />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </Box>
          </TabPanel>

          {/* Contact Submissions Tab */}
          <TabPanel value={currentTab} index={1}>
            <Box sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  Contact Submissions
                </Typography>
                <Button
                  variant="outlined"
                  startIcon={<Refresh />}
                  onClick={refreshSubmissions}
                  disabled={submissionsLoading}
                >
                  Refresh
                </Button>
              </Box>

              {submissionsError && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  {submissionsError}
                </Alert>
              )}

              {submissionsLoading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                  <CircularProgress />
                </Box>
              ) : (
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Company</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {submissions.map((submission) => (
                        <TableRow key={submission.id} hover>
                          <TableCell>{submission.name}</TableCell>
                          <TableCell>{submission.email}</TableCell>
                          <TableCell>{submission.company || 'N/A'}</TableCell>
                          <TableCell>
                            <Chip
                              label={submission.type.charAt(0).toUpperCase() + submission.type.slice(1)}
                              color="primary"
                              size="small"
                            />
                          </TableCell>
                          <TableCell>{formatDate(submission.created_at)}</TableCell>
                          <TableCell>
                            <IconButton
                              size="small"
                              onClick={() => handleViewSubmission(submission)}
                            >
                              <Visibility />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </Box>
          </TabPanel>
        </Paper>

        {/* View Request Dialog */}
        <Dialog
          open={Boolean(selectedRequest)}
          onClose={() => setSelectedRequest(null)}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>Quote Request Details</DialogTitle>
          <DialogContent>
            {selectedRequest && (
              <Grid container spacing={2} sx={{ pt: 1 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Person />
                    <Typography><strong>Name:</strong> {selectedRequest.name}</Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Email />
                    <Typography><strong>Email:</strong> {selectedRequest.email}</Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Business />
                    <Typography><strong>Company:</strong> {selectedRequest.company || 'N/A'}</Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Phone />
                    <Typography><strong>Phone:</strong> {selectedRequest.phone || 'N/A'}</Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Typography sx={{ mb: 2 }}><strong>Service:</strong> {selectedRequest.service}</Typography>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Typography sx={{ mb: 2 }}><strong>Message:</strong></Typography>
                  <Paper sx={{ p: 2, backgroundColor: '#f5f5f5' }}>
                    <Typography variant="body2">
                      {selectedRequest.message || 'No message provided'}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography><strong>Status:</strong></Typography>
                  <Chip
                    icon={getStatusIcon(selectedRequest.status)}
                    label={selectedRequest.status.charAt(0).toUpperCase() + selectedRequest.status.slice(1)}
                    color={getStatusColor(selectedRequest.status) as any}
                    sx={{ mt: 1 }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography><strong>Created:</strong> {formatDate(selectedRequest.created_at)}</Typography>
                  <Typography><strong>Updated:</strong> {formatDate(selectedRequest.updated_at)}</Typography>
                </Grid>
              </Grid>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setSelectedRequest(null)}>Close</Button>
            <Button
              variant="contained"
              onClick={() => {
                if (selectedRequest) {
                  setNewStatus(selectedRequest.status);
                  setStatusDialogOpen(true);
                }
              }}
            >
              Update Status
            </Button>
          </DialogActions>
        </Dialog>

        {/* View Contact Submission Dialog */}
        <Dialog
          open={Boolean(selectedSubmission)}
          onClose={() => setSelectedSubmission(null)}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>Contact Submission Details</DialogTitle>
          <DialogContent>
            {selectedSubmission && (
              <Grid container spacing={2} sx={{ pt: 1 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Person />
                    <Typography><strong>Name:</strong> {selectedSubmission.name}</Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Email />
                    <Typography><strong>Email:</strong> {selectedSubmission.email}</Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Business />
                    <Typography><strong>Company:</strong> {selectedSubmission.company || 'N/A'}</Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Phone />
                    <Typography><strong>Phone:</strong> {selectedSubmission.phone || 'N/A'}</Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Typography sx={{ mb: 2 }}><strong>Service:</strong> {selectedSubmission.service || 'N/A'}</Typography>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Typography sx={{ mb: 2 }}><strong>Message:</strong></Typography>
                  <Paper sx={{ p: 2, backgroundColor: '#f5f5f5' }}>
                    <Typography variant="body2">
                      {selectedSubmission.message || 'No message provided'}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Typography><strong>Submitted:</strong> {formatDate(selectedSubmission.created_at)}</Typography>
                </Grid>
              </Grid>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setSelectedSubmission(null)}>Close</Button>
          </DialogActions>
        </Dialog>

        {/* Update Status Dialog */}
        <Dialog open={statusDialogOpen} onClose={() => setStatusDialogOpen(false)}>
          <DialogTitle>Update Status</DialogTitle>
          <DialogContent>
            <TextField
              select
              fullWidth
              label="Status"
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value)}
              sx={{ mt: 2 }}
            >
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="reviewed">Reviewed</MenuItem>
              <MenuItem value="contacted">Contacted</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
              <MenuItem value="cancelled">Cancelled</MenuItem>
            </TextField>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setStatusDialogOpen(false)}>Cancel</Button>
            <Button variant="contained" onClick={handleUpdateStatus}>
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
}

export default AdminDashboard;
