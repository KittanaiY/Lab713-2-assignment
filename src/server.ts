import express, {Request, Response} from 'express'
const app = express()
const port = 3000

app.use(express.json());

function getBookByGroup(group:string): Library[] {
    const filteredBooks = library.filter((book) => book.groups.includes(group));
    return filteredBooks;
}

function getAllBooks():Library[] {
    return library;
}

function getBookById(id:number): Library | undefined {
    return library.find((book) => book.id === id);
}

function addBook(newBook: Library): Library{
    newBook.id = library.length + 1;
    library.push(newBook);
    return newBook;
}

app.get('/test', (req: Request, res: Response) => {
    const id = req.query.id;
    const output = `id: ${id}`;
    res.send(output);
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

interface Library {
    id:number;
    title: string;
    author_name: string;
    description: string;
    groups: string;
}

const library: Library[] = [
    {
        id: 1,
        title: "The Great Gatsby",
        author_name: "F. Scott Fitzgerald",
        description: "A novel set in the Jazz Age that tells the story of Jay Gatsby's unrequited love for Daisy Buchanan.",
        groups: "Classic, Fiction"
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author_name: "Harper Lee",
        description: "A novel about the serious issues of rape and racial inequality told through the eyes of young Scout Finch.",
        groups: "Classic, Fiction"
    },
    {
        id: 3,
        title: "1984",
        author_name: "George Orwell",
        description: "A dystopian novel set in a totalitarian society ruled by Big Brother.",
        groups: "Dystopian, Fiction"
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author_name: "Jane Austen",
        description: "A romantic novel that also critiques the British landed gentry at the end of the 18th century.",
        groups: "Classic, Romance"
    },
    {
        id: 5,
        title: "The Catcher in the Rye",
        author_name: "J.D. Salinger",
        description: "A novel about the experiences of a young man named Holden Caulfield in New York City.",
        groups: "Classic, Fiction"
    },
    {
        id: 6,
        title: "Moby-Dick",
        author_name: "Herman Melville",
        description: "A novel about the voyage of the whaling ship Pequod and its captain, Ahab, who is obsessed with hunting the giant white whale Moby Dick.",
        groups: "Classic, Adventure"
    }
]

app.get("/library", (req,res)=> {
    if (req.query.groups) {
        const groups = req.query.groups;
        const filteredBook = getBookByGroup(groups as string);
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