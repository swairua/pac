// Simple test to verify database connection
import { testConnection, initializeDatabase } from './lib/database';

async function testDb() {
  try {
    console.log('🔍 Testing database connection...');
    const result = await testConnection();
    console.log('✅ Database connected successfully!');
    console.log('📋 Database version:', result.version);
    
    console.log('🔧 Initializing database schema...');
    await initializeDatabase();
    console.log('✅ Database schema initialized!');
    
    console.log('🎉 Database setup complete!');
    console.log('💡 You can now use the admin panel at /admin');
    
  } catch (error) {
    console.error('❌ Database test failed:', error);
    console.error('🔧 Please check your DATABASE_URL environment variable');
  }
}

// Auto-run the test
testDb();
