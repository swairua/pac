import { testConnection, initializeDatabase } from '../lib/database';

async function initDb() {
  try {
    console.log('Testing database connection...');
    await testConnection();
    console.log('✅ Database connection successful');

    console.log('Initializing database schema...');
    await initializeDatabase();
    console.log('✅ Database schema initialized');

    console.log('🎉 Database setup complete!');
    console.log('You can now access the admin panel at: /admin');
  } catch (error) {
    console.error('❌ Database setup failed:', error);
    process.exit(1);
  }
}

// Run if this file is executed directly
if (require.main === module) {
  initDb();
}

export default initDb;
