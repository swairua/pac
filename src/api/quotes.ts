import { 
  createQuoteRequest, 
  getQuoteRequests, 
  updateQuoteRequestStatus,
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

export async function submitQuoteRequest(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  message?: string;
}) {
  try {
    await ensureInitialized();
    const result = await createQuoteRequest(data);
    return {
      success: true,
      data: result,
      message: 'Quote request submitted successfully'
    };
  } catch (error) {
    console.error('Quote submission error:', error);
    return {
      success: false,
      error: 'Failed to submit quote request',
      details: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

export async function fetchQuoteRequests(limit = 50, offset = 0) {
  try {
    await ensureInitialized();
    const requests = await getQuoteRequests(limit, offset);
    return {
      success: true,
      data: requests,
      total: requests.length
    };
  } catch (error) {
    console.error('Fetch quotes error:', error);
    return {
      success: false,
      error: 'Failed to fetch quote requests',
      details: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

export async function updateQuoteStatus(id: number, status: string) {
  try {
    await ensureInitialized();
    const result = await updateQuoteRequestStatus(id, status);
    return {
      success: true,
      data: result,
      message: 'Quote status updated successfully'
    };
  } catch (error) {
    console.error('Update status error:', error);
    return {
      success: false,
      error: 'Failed to update quote status',
      details: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}
