import express, {Request, Response} from 'express'
const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

interface Library {
    title: string;
    author_name: string;
    description: string;
    groups: string;
}

const library: Library[] = [
    {
        title: "The Great Gatsby",
        author_name: "F. Scott Fitzgerald",
        description: "A novel set in the Jazz Age that tells the story of Jay Gatsby's unrequited love for Daisy Buchanan.",
        groups: "Classic, Fiction"
    },
    {
        title: "To Kill a Mockingbird",
        author_name: "Harper Lee",
        description: "A novel about the serious issues of rape and racial inequality told through the eyes of young Scout Finch.",
        groups: "Classic, Fiction"
    },
    {
        title: "1984",
        author_name: "George Orwell",
        description: "A dystopian novel set in a totalitarian society ruled by Big Brother.",
        groups: "Dystopian, Fiction"
    },
    {
        title: "Pride and Prejudice",
        author_name: "Jane Austen",
        description: "A romantic novel that also critiques the British landed gentry at the end of the 18th century.",
        groups: "Classic, Romance"
    },
    {
        title: "The Catcher in the Rye",
        author_name: "J.D. Salinger",
        description: "A novel about the experiences of a young man named Holden Caulfield in New York City.",
        groups: "Classic, Fiction"
    },
    {
        title: "Moby-Dick",
        author_name: "Herman Melville",
        description: "A novel about the voyage of the whaling ship Pequod and its captain, Ahab, who is obsessed with hunting the giant white whale Moby Dick.",
        groups: "Classic, Adventure"
    }
]

app.get("/library", (req,res)=> {
    res.json(library);
});