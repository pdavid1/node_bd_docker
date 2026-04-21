const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/conexion");

const Categorias = sequelize.define(
  'Categorias',
  {
    // Model attributes are defined here
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
      },      
  },
  {
    // Other model options go here
  },
);

Categorias.sync()

module.exports = Categorias;