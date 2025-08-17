import { useState, useEffect } from 'react';
import { submitQuoteRequest, fetchQuoteRequests, updateQuoteStatus } from '../api/quotes';
import { submitContactForm, fetchContactSubmissions } from '../api/contact';

export interface QuoteRequest {
  id: number;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  message?: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message?: string;
  type: string;
  status: string;
  created_at: string;
  updated_at: string;
}

// Hook for submitting quote requests
export function useQuoteSubmission() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (data: {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    service: string;
    message?: string;
  }) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      const result = await submitQuoteRequest(data);
      if (!result.success) {
        throw new Error(result.error);
      }
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit quote request';
      setError(errorMessage);
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submit, isSubmitting, error };
}

// Hook for fetching quote requests (admin)
export function useQuoteRequests() {
  const [requests, setRequests] = useState<QuoteRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRequests = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await fetchQuoteRequests();
      if (result.success) {
        setRequests(result.data as QuoteRequest[]);
      } else {
        throw new Error(result.error);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch quote requests';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: number, status: string) => {
    try {
      const result = await updateQuoteStatus(id, status);
      if (result.success) {
        setRequests(prev => prev.map(req => 
          req.id === id ? { ...req, status, updated_at: new Date().toISOString() } : req
        ));
      } else {
        throw new Error(result.error);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update status';
      setError(errorMessage);
      throw err;
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return { requests, loading, error, refreshRequests: fetchRequests, updateStatus };
}

// Hook for submitting contact forms
export function useContactSubmission() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (data: {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    service?: string;
    message?: string;
    type?: string;
  }) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      const result = await submitContactForm(data);
      if (!result.success) {
        throw new Error(result.error);
      }
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit contact form';
      setError(errorMessage);
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submit, isSubmitting, error };
}

// Hook for fetching contact submissions (admin)
export function useContactSubmissions() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSubmissions = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await fetchContactSubmissions();
      if (result.success) {
        setSubmissions(result.data as ContactSubmission[]);
      } else {
        throw new Error(result.error);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch contact submissions';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  return { submissions, loading, error, refreshSubmissions: fetchSubmissions };
}
