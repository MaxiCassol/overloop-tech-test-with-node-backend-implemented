import { DataTypes } from 'sequelize';

import sequelize from '../connectors/sequelize';

export default sequelize.define('article', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    title: { type: DataTypes.TEXT, allowNull: false },
    content: { type: DataTypes.TEXT, allowNull: false }
}, {
    timestamps: false
});
