import express, {Request, Response} from 'express'
import {Library, getAllBooks, getBookByGroup, getBookById, addBook} from './services/BookService'

const app = express()
const port = 3000

app.use(express.json());

app.get('/test', (req: Request, res: Response) => {
    const id = req.query.id;
    const output = `id: ${id}`;
    res.send(output);
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

app.get("/library", (req,res)=> {
    if (req.query.groups) {
        const groups = req.query.groups as string;
        const filteredBook = getBookByGroup(groups);
        res.json(filteredBook);
    } else{
        res.json(getAllBooks);
    }
});

app.get("/library/:id", (req,res)=>{
    const id = parseInt(req.params.id);
    const book = getBookById(id);
    if(book){
        res.json(book);
    } else{
        res.status(404).send('Book not found');
    }

})

app.post("/library", (req, res) => {
    const newBook: Library = req.body;
    addBook(newBook);
    res.json(newBook);
});