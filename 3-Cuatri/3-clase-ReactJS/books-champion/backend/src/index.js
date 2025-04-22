import express from 'express';
import { PORT } from './config.js';
import sequelize from './db.js';
import booksRoutes from './routes/books.routes.js';
import './models/BooksModel.js';

const app = express();

try {
    await sequelize.authenticate();
    app.use(express.json());
    app.use(booksRoutes);

    app.listen(PORT, () => {
        console.log(`Funcionando en: http://localhost:${PORT}`);
    });
    
} catch (error) {
    console.log('Error al inicializar. ', error);
}
