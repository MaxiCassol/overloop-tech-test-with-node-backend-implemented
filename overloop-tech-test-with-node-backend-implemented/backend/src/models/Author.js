import { DataTypes } from 'sequelize';

import sequelize from '../connectors/sequelize';

export default sequelize.define('author', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    firstName: { type: DataTypes.TEXT, allowNull: false },
    lastName: { type: DataTypes.TEXT, allowNull: false }
}, {
    timestamps: false
});
