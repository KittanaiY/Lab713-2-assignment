import express, {Request, Response} from 'express'
import { getAllBooks, getBookByGroup, getBookById, addBook} from './services/BookService'
import type { Library } from './model/Library'

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

app.get("/library", async(req,res)=> {
    if (req.query.groups) {
        const groups = req.query.groups as string;
        const filteredBook = await getBookByGroup(groups);
        res.json(filteredBook);
    } else{
        res.json(await getAllBooks());
    }
});

app.get("/library/:id", async(req,res)=>{
    const id = parseInt(req.params.id);
    const book = await getBookById(id);
    if(book){
        res.json(book);
    } else{
        res.status(404).send('Book not found');
    }

})

app.post("/library", async(req, res) => {
    const newBook: Library = req.body;
    await addBook(newBook);
    res.json(newBook);
});