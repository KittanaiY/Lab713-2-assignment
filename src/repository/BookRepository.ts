import type{ Library } from '../model/Library';

export function getBookByGroup(group:string): Promise<Library[]> {
    const filteredBooks = library.filter((book) => book.groups.includes(group));
    return Promise.resolve(filteredBooks);
}

export function getAllBooks():Promise<Library[]> {
    return Promise.resolve(library);
}

export function getBookById(id:number): Library | undefined {
    return library.find((book) => book.id === id);
}

export function addBook(newBook: Library): Promise<Library>{
    newBook.id = library.length + 1;
    library.push(newBook);
    return Promise.resolve(newBook);
}

const library: Library[] = [
    {
        id: 1,
        title: "The Great Gatsby",
        author_name: "F. Scott Fitzgerald",
        description: "A novel set in the Jazz Age that tells the story of Jay Gatsby's unrequited love for Daisy Buchanan.",
        groups: ["Classic", "Fiction"]
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author_name: "Harper Lee",
        description: "A novel about the serious issues of rape and racial inequality told through the eyes of young Scout Finch.",
        groups: ["Classic", "Fiction"]
    },
    {
        id: 3,
        title: "1984",
        author_name: "George Orwell",
        description: "A dystopian novel set in a totalitarian society ruled by Big Brother.",
        groups: ["Dystopian", "Fiction"]
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author_name: "Jane Austen",
        description: "A romantic novel that also critiques the British landed gentry at the end of the 18th century.",
        groups: ["Classic", "Romance"]
    },
    {
        id: 5,
        title: "The Catcher in the Rye",
        author_name: "J.D. Salinger",
        description: "A novel about the experiences of a young man named Holden Caulfield in New York City.",
        groups: ["Classic", "Fiction"]
    },
    {
        id: 6,
        title: "Moby-Dick",
        author_name: "Herman Melville",
        description: "A novel about the voyage of the whaling ship Pequod and its captain, Ahab, who is obsessed with hunting the giant white whale Moby Dick.",
        groups: ["Classic", "Adventure"]
    }
]