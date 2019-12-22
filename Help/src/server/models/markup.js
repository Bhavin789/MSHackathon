import DataTypes from "sequelize";
import sequelize from "./sequelize";

const markup = sequelize.define(
  "markup",
  {
    title: DataTypes.STRING,
    latitude: DataTypes.INTEGER,
    longitude: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  },
  {}
);

console.log(markup);


export default markup;