import Article from './Article';
import Author from './Author';
import Region from './Region';

Article.belongsTo(Author);
Author.hasMany(Article);

Article.belongsToMany(Region, { through: 'articles_regions'});
Region.belongsToMany(Article, { through: 'articles_regions'});

export default {
    Article,
    Author,
    Region
};
