// Server-side only database utility
import { neon } from '@neondatabase/serverless';

// This will work in Node.js environment only
const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_C96UfktgFPSl@ep-billowing-salad-af2ls6rb-pooler.c-2.us-west-2.aws.neon.tech/pac?sslmode=require&channel_binding=require';

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL is not set');
}

export const sql = neon(DATABASE_URL);

// Test connection function
export async function testConnection() {
  try {
    const result = await sql`SELECT version()`;
    console.log('Database connected:', result[0].version);
    return result[0];
  } catch (error) {
    console.error('Database connection failed:', error);
    throw error;
  }
}

// Initialize database schema
export async function initializeDatabase() {
  try {
    // Create quote_requests table
    await sql`
      CREATE TABLE IF NOT EXISTS quote_requests (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        company VARCHAR(255),
        phone VARCHAR(20),
        service VARCHAR(255) NOT NULL,
        message TEXT,
        status VARCHAR(50) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Create contact_submissions table
    await sql`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        company VARCHAR(255),
        phone VARCHAR(20),
        service VARCHAR(255),
        message TEXT,
        type VARCHAR(50) DEFAULT 'contact',
        status VARCHAR(50) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    console.log('Database schema initialized successfully');
  } catch (error) {
    console.error('Failed to initialize database schema:', error);
    throw error;
  }
}

// Quote request functions
export async function createQuoteRequest(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  message?: string;
}) {
  try {
    await initializeDatabase(); // Ensure tables exist
    const result = await sql`
      INSERT INTO quote_requests (name, email, company, phone, service, message)
      VALUES (${data.name}, ${data.email}, ${data.company || null}, ${data.phone || null}, ${data.service}, ${data.message || null})
      RETURNING id, created_at
    `;
    return result[0];
  } catch (error) {
    console.error('Failed to create quote request:', error);
    throw error;
  }
}

export async function getQuoteRequests(limit = 50, offset = 0) {
  try {
    await initializeDatabase(); // Ensure tables exist
    const result = await sql`
      SELECT * FROM quote_requests 
      ORDER BY created_at DESC 
      LIMIT ${limit} OFFSET ${offset}
    `;
    return result;
  } catch (error) {
    console.error('Failed to get quote requests:', error);
    throw error;
  }
}

export async function updateQuoteRequestStatus(id: number, status: string) {
  try {
    const result = await sql`
      UPDATE quote_requests 
      SET status = ${status}, updated_at = CURRENT_TIMESTAMP
      WHERE id = ${id}
      RETURNING *
    `;
    return result[0];
  } catch (error) {
    console.error('Failed to update quote request status:', error);
    throw error;
  }
}

// Contact submission functions
export async function createContactSubmission(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message?: string;
  type?: string;
}) {
  try {
    await initializeDatabase(); // Ensure tables exist
    const result = await sql`
      INSERT INTO contact_submissions (name, email, company, phone, service, message, type)
      VALUES (${data.name}, ${data.email}, ${data.company || null}, ${data.phone || null}, ${data.service || null}, ${data.message || null}, ${data.type || 'contact'})
      RETURNING id, created_at
    `;
    return result[0];
  } catch (error) {
    console.error('Failed to create contact submission:', error);
    throw error;
  }
}

export async function getContactSubmissions(limit = 50, offset = 0) {
  try {
    await initializeDatabase(); // Ensure tables exist
    const result = await sql`
      SELECT * FROM contact_submissions 
      ORDER BY created_at DESC 
      LIMIT ${limit} OFFSET ${offset}
    `;
    return result;
  } catch (error) {
    console.error('Failed to get contact submissions:', error);
    throw error;
  }
}
