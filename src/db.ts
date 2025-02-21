import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: 'localhost', // The name of the MySQL service in docker-compose.yml
  user: 'root',
  password: 'rootpassword',
  database: 'events',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;