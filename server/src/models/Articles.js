import sequelize from "../db/dbConfig.js";
import { DataTypes } from "sequelize";

export const Article = sequelize.define('Article', {
  id: { 
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  text: {
    type: DataTypes.STRING,
    allowNull:false
  },
  image: {
    type: DataTypes.STRING
  }
});