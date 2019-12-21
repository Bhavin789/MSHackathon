import DataTypes from "sequelize";
import sequelize from "./sequelize";

const markup = sequelize.define(
  "markup",
  {
    title: DataTypes.STRING
  },
  {}
);

console.log(markup);


export default markup;