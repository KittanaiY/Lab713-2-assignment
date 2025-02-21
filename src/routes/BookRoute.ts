import express, {Request, Response} from 'express'
import { getAllBooks, getBookByGroup, getBookById, addBook} from '../services/BookService'
import type { Library } from '../model/Library'
import exp from "constants";

const router = express.Router();

router.get("/", async(req,res)=> {
    if (req.query.genre) {
        const genre = req.query.genre as string;
        const filteredBook = await getBookByGroup(genre);
        res.json(filteredBook);
    } else{
        res.json(await getAllBooks());
    }
});

router.get("/:id", async(req,res)=>{
    const id = parseInt(req.params.id);
    const book = await getBookById(id);
    if(book){
        res.json(book);
    } else{
        res.status(404).send('Book not found');
    }

})

router.post("/", async(req, res) => {
    const newBook: Library = req.body;
    await addBook(newBook);
    res.json(newBook);
});

export default router;