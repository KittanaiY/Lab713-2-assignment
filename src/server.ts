import express, {Request, Response} from 'express'
import { getAllBooks, getBookByGroup, getBookById, addBook} from './services/BookService'
import type { Library } from './model/Library'
import multer from 'multer';
import { uploadFile } from './services/UploadFileService';

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
    if (req.query.genre) {
        const genre = req.query.genre as string;
        const filteredBook = await getBookByGroup(genre);
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

const upload = multer({ storage: multer.memoryStorage() });

app.post('/upload', upload.single('file'), async (req: any, res: any) =>{
    try{
        const file = req.file;
        if (!file) {
            return res.status(400).send('No file uploaded.');
        }

        const bucket = 'Books';
        const filePath = `uploads`;

        const ouputUrl = await uploadFile(bucket, filePath, file);

        res.status(200).send(ouputUrl);
        } catch (error) {
            res.status(500).send('Error uploading file.');
        } 
});