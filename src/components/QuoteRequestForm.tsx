import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  CircularProgress,
} from '@mui/material';
import { Send } from '@mui/icons-material';
import { useState } from 'react';
import { useQuoteSubmission } from '../hooks/useDatabase';

interface QuoteRequestFormProps {
  open: boolean;
  onClose: () => void;
  preSelectedService?: string;
}

function QuoteRequestForm({ open, onClose, preSelectedService }: QuoteRequestFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: preSelectedService || '',
    message: '',
  });

  const { submit, isSubmitting, error } = useQuoteSubmission();

  const services = [
    'Conveyor-Based Material Sorting',
    'Recycling Consulting & Audits',
    'Industrial Waste Handling',
    'Pickup & Logistics Services',
    'Baling & Compaction',
    'E-Waste Collection & Processing',
    'Pallet & Wood Recycling',
    'Value Recovery & Resale',
    'Licensing & Compliance Support',
    'General Inquiry',
  ];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: any) => {
    setFormData(prev => ({
      ...prev,
      service: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!formData.name || !formData.email || !formData.service) {
      return;
    }

    try {
      await submit(formData);
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: preSelectedService || '',
        message: '',
      });
      onClose();
      // Show success message (you can customize this)
      alert('Quote request submitted successfully! We will contact you within 24 hours.');
    } catch (error) {
      console.error('Failed to submit quote request:', error);
    }
  };

  // Update service when preSelectedService changes
  React.useEffect(() => {
    if (preSelectedService) {
      setFormData(prev => ({
        ...prev,
        service: preSelectedService,
      }));
    }
  }, [preSelectedService]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ backgroundColor: '#1e3c72', color: 'white' }}>
        Request a Quote
      </DialogTitle>
      <DialogContent sx={{ pt: 3 }}>
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}
        
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Company Name"
                name="company"
                value={formData.company}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <FormControl fullWidth required>
                <InputLabel>Service of Interest</InputLabel>
                <Select
                  value={formData.service}
                  label="Service of Interest"
                  onChange={handleSelectChange}
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                      {service}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Project Details"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={4}
                placeholder="Tell us about your project requirements, estimated volumes, timeline, and any specific needs..."
                variant="outlined"
              />
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: 3 }}>
        <Button onClick={onClose} disabled={isSubmitting}>
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          disabled={isSubmitting || !formData.name || !formData.email || !formData.service}
          endIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <Send />}
          sx={{
            backgroundColor: '#00bcd4',
            '&:hover': { backgroundColor: '#0097a7' },
            px: 4,
          }}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default QuoteRequestForm;
