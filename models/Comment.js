const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/controllers');

class Comment extends Model {}

Comment.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  },
  {
    sequelize
  }
);

module.exports = Comment;
