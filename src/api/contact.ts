import { 
  createContactSubmission, 
  getContactSubmissions,
  initializeDatabase 
} from '../lib/database';

// Initialize database on first load
let isInitialized = false;

async function ensureInitialized() {
  if (!isInitialized) {
    await initializeDatabase();
    isInitialized = true;
  }
}

export async function submitContactForm(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message?: string;
  type?: string;
}) {
  try {
    await ensureInitialized();
    const result = await createContactSubmission(data);
    return {
      success: true,
      data: result,
      message: 'Contact form submitted successfully'
    };
  } catch (error) {
    console.error('Contact submission error:', error);
    return {
      success: false,
      error: 'Failed to submit contact form',
      details: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

export async function fetchContactSubmissions(limit = 50, offset = 0) {
  try {
    await ensureInitialized();
    const submissions = await getContactSubmissions(limit, offset);
    return {
      success: true,
      data: submissions,
      total: submissions.length
    };
  } catch (error) {
    console.error('Fetch contact submissions error:', error);
    return {
      success: false,
      error: 'Failed to fetch contact submissions',
      details: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}
