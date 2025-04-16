import { Router } from "express";
import { Books } from "../models/BooksModel.js";

// Rutas para hacer consultas sobre libros

const router = Router();

//       req -> request  /  res -> response
router.get('/books', async (req, res) => {
    try {
        const books = await Books.findAll(); // envia a la bbdd
        res.status(201).json(books); //  status 201: éxito

    } catch (error) {
        res.status(500).json({ message: 'Error: ',error }); // status 500: error
    }
});

// info de un solo elemento
router.get('/books/:id', (req, res) => {
    const { id } = req.params;
    res.send('Info de libro ', id);
})

// Post -> Subir
router.post('/books', async (req, res) => {
    try {
        const { title, author, rating, pageCount, summary, imageUrl, available } = req.body;
        
        const newBook = await Books.create({
            title,
            author,
            rating,
            pageCount,
            summary,
            imageUrl,
            available,
          });

        res.status(201).json(newBook); //  status 201: éxito
    } catch (error) {
        console.error("Error al crear el libro:", error);
        res.status(500).json({ message: "Error al crear el libro", error }); // status 500: error
    }
})

router.put('/books/:id', (req, res) => {
    // recibe el id por medio del request,
    // desestructura id de req.params;
    const { id } = req.params;
    res.send('Modificando libro ', id);
})

router.delete('/books/:id', (req, res) => {
    const { id } = req.params;
    res.send('Borrando libro ', id);
})

export default router; // importar en index.js y app.use()