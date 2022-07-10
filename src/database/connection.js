const Sequelize = require('Sequelize');
require("dotenv").config();

const sequelize = new Sequelize(process.env.PG_DATABASE, PG_USER, PG_PASSWORD, {host: process.env.PG_HOST, dialect: 'postgres'});

module.exports = sequelize;