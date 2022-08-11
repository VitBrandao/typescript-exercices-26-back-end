"use strict";
// routes/books.routes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const book_controller_1 = __importDefault(require("../controllers/book.controller"));
const book_middleware_1 = __importDefault(require("../middlewares/book.middleware"));
const booksSlashId = '/books/:id';
const router = (0, express_1.Router)();
const booksController = new book_controller_1.default();
router.get('/books', booksController.getAll);
// router.get('/books/:id', booksController.getById);
// router.post('/books/', validationBook, booksController.create);
// router.put('/books/:id', validationBook, booksController.update);
router.get(booksSlashId, booksController.getById);
router.post('/books/', book_middleware_1.default, booksController.create);
router.put(booksSlashId, book_middleware_1.default, booksController.update);
router.delete(booksSlashId, booksController.remove);
exports.default = router;
