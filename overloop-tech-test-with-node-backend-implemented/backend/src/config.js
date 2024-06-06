import path from 'path';

export default {
    port: process.env.PORT || 5000,
    dbPath: process.env.DB_PATH || path.join(__dirname, '..', 'db.sqlite')
};
