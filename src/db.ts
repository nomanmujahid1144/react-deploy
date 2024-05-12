import { Pool } from 'pg';

// Connection string provided by Vercel
const connectionString = "postgres://default:GNPaX5WmRh9u@ep-square-meadow-a488ghyx.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"

// Create a pool
const pool = new Pool({
    connectionString: connectionString,
});

export default pool;
