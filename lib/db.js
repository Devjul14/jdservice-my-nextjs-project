import mysql from "mysql2/promise";

let pool;

if (!pool) {
  pool = mysql.createPool({
    host: "localhost", // Set your host here
    user: "root", // Set your DB username
    password: "root", // Set your DB password
    database: "jd_services", // Your DB name
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
}

export default pool;
