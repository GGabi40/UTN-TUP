import express from 'express';
import bookRoutes from './routes/booksRoutes.js';
import { PORT } from './config.js';
import sequelize from './db.js';
import './models/BooksModel.js';

const app = express();

app.use(express.json()); // permite que Express entienda el cuerpo (body) de las peticiones JSON
// express.json() debe estar ANTES de las rutas

app.use(bookRoutes);

try {
    await sequelize.authenticate();
    await sequelize.sync(); // crea las tablas si no existen

    app.listen(PORT, () => {
        console.log(`Funcionando en: http://localhost:${PORT}`);
    });
    
} catch (error) {
    console.log('Error al inicializar. ', error);
}
