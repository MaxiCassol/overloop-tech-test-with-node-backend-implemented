import Author from '../models/Author';

export default {
    list: async (req, res, next) => {
        try {
            const authors = await Author.findAll();
            return res.json(authors);
        } catch (err) {
            next(err);
        }
    },
    get: async (req, res, next) => {
        try {
            const author = await Author.findByPk(req.params.authorId);

            if (!author)
                return res.sendStatus(404);

            return res.json(author);
        } catch (err) {
            next(err);
        }
    },
    create: async (req, res, next) => {
        try {
            const author = await Author.create(req.body);
            return res.json(author);
        } catch (err) {
            next(err);
        }
    },
    update: async (req, res, next) => {
        try {
            await Author.update(req.body, { where: { id: req.params.authorId } });
            const author = await Author.findByPk(req.params.authorId);
            return res.json(author);
        } catch (err) {
            next(err);
        }
    }
};
