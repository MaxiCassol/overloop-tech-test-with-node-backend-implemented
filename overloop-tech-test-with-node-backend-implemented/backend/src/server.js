import express from 'express';
import cors from 'cors';

import config from './config';
import sequelize from './connectors/sequelize';
import articles from './handlers/articles';
import authors from './handlers/authors';
import regions from './handlers/regions';

// Define models
import './models';

(async () => {
    // Init DB
    await sequelize.sync();

    const app = express();

    // Middlewares
    app.use(express.json());
    app.use(cors());

    // Routes
    app.get('/hello/', (req, res) => res.json({ status: 'ok' }));

    app.get('/articles', articles.list);
    app.get('/articles/:articleId', articles.get);
    app.post('/articles', articles.create);
    app.put('/articles/:articleId', articles.update);

    app.get('/authors', authors.list);
    app.get('/authors/:authorId', authors.get);
    app.post('/authors', authors.create);
    app.put('/authors/:authorId', authors.update);

    app.get('/regions', regions.list);

    app.listen(config.port, () => console.info(`Server listening on port ${config.port}`));
})();
