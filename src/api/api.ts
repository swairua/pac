// Client-side API functions that make HTTP requests to our backend

// For demo purposes, we'll simulate API calls with local storage
// In a real app, these would make HTTP requests to your backend

interface QuoteRequestData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  message?: string;
}

interface ContactSubmissionData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message?: string;
  type?: string;
}

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Generate unique ID
const generateId = () => Date.now() + Math.random();

// Quote Request API
export const quoteAPI = {
  async submit(data: QuoteRequestData) {
    await delay(500); // Simulate network delay
    
    try {
      const quote = {
        id: generateId(),
        ...data,
        status: 'pending',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
      
      // Store in localStorage for demo
      const quotes = JSON.parse(localStorage.getItem('quotes') || '[]');
      quotes.push(quote);
      localStorage.setItem('quotes', JSON.stringify(quotes));
      
      return {
        success: true,
        data: quote,
        message: 'Quote request submitted successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to submit quote request',
        details: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  },

  async getAll() {
    await delay(300); // Simulate network delay
    
    try {
      const quotes = JSON.parse(localStorage.getItem('quotes') || '[]');
      return {
        success: true,
        data: quotes.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to fetch quote requests',
        details: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  },

  async updateStatus(id: number, status: string) {
    await delay(200); // Simulate network delay
    
    try {
      const quotes = JSON.parse(localStorage.getItem('quotes') || '[]');
      const index = quotes.findIndex((q: any) => q.id === id);
      
      if (index === -1) {
        throw new Error('Quote not found');
      }
      
      quotes[index].status = status;
      quotes[index].updated_at = new Date().toISOString();
      localStorage.setItem('quotes', JSON.stringify(quotes));
      
      return {
        success: true,
        data: quotes[index],
        message: 'Quote status updated successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to update quote status',
        details: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
};

// Contact Submission API
export const contactAPI = {
  async submit(data: ContactSubmissionData) {
    await delay(500); // Simulate network delay
    
    try {
      const submission = {
        id: generateId(),
        ...data,
        type: data.type || 'contact',
        status: 'pending',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
      
      // Store in localStorage for demo
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push(submission);
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
      
      return {
        success: true,
        data: submission,
        message: 'Contact form submitted successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to submit contact form',
        details: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  },

  async getAll() {
    await delay(300); // Simulate network delay
    
    try {
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      return {
        success: true,
        data: submissions.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to fetch contact submissions',
        details: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
};

// Initialize with some demo data if empty
export function initializeDemoData() {
  if (!localStorage.getItem('quotes')) {
    const demoQuotes = [
      {
        id: 1,
        name: 'John Smith',
        email: 'john.smith@company.com',
        company: 'ABC Manufacturing',
        phone: '+1-555-0123',
        service: 'Conveyor-Based Material Sorting',
        message: 'We need help sorting mixed warehouse waste efficiently.',
        status: 'pending',
        created_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: 2,
        name: 'Sarah Johnson',
        email: 'sarah.johnson@logistics.com',
        company: 'Global Logistics Inc',
        phone: '+1-555-0456',
        service: 'E-Waste Collection & Processing',
        message: 'Need secure e-waste disposal for 500+ computers.',
        status: 'reviewed',
        created_at: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
      }
    ];
    localStorage.setItem('quotes', JSON.stringify(demoQuotes));
  }

  if (!localStorage.getItem('contactSubmissions')) {
    const demoSubmissions = [
      {
        id: 1,
        name: 'Mike Davis',
        email: 'mike.davis@warehouse.com',
        company: 'Warehouse Solutions',
        phone: '+1-555-0789',
        service: 'General Inquiry',
        message: 'Interested in your recycling consulting services.',
        type: 'contact',
        status: 'pending',
        created_at: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
      }
    ];
    localStorage.setItem('contactSubmissions', JSON.stringify(demoSubmissions));
  }
}

// Auto-initialize demo data
if (typeof window !== 'undefined') {
  initializeDemoData();
}
