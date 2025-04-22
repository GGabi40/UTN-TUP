import {
  createBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
} from "../services/books.services.js";

import { Router } from "express";

const router = Router(); // inicializar Router


router.get("/books", getAllBooks);

router.get("/books/:id", getBookById);

router.post("/books", createBook);

router.put("/books/:id", updateBook);

router.delete("/books/:id", deleteBook);

export default router;
