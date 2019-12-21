'use strict';
module.exports = (sequelize, DataTypes) => {
  const markup = sequelize.define('markup', {
    title: DataTypes.STRING
  }, {});
  markup.associate = function(models) {
    // associations can be defined here
  };
  return markup;
};