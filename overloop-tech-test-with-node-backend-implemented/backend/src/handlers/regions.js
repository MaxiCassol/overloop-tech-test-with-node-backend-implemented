import Region from '../models/Region';

export default {
    list: async (req, res, next) => {
        try {
            const regions = await Region.findAll();
            return res.json(regions);
        } catch (err) {
            next(err);
        }
    }
};
