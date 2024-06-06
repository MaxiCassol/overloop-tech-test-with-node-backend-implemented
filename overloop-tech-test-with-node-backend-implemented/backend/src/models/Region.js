import { DataTypes } from 'sequelize';

import sequelize from '../connectors/sequelize';

export default sequelize.define('region', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    code: { type: DataTypes.STRING(2), unique: true, allowNull: false },
    name: { type: DataTypes.TEXT, allowNull: false }
}, {
    timestamps: false
});
