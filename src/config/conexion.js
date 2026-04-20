const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('bd_base_defecto', 'root', 'root', {
    host: 'base_datos_mysql',
    port: 3306,
    dialect: 'mysql'
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('La conexión se ha establecido correctamente.');
    } catch (error) {
        console.error('No se pudo conectar con la base de datos:', error);
    }
}

testConnection();

module.exports = sequelize;