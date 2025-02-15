import type{ Library } from '../model/Library';
import * as repo from "../repository/BookRepository";


export function getBookByGroup(group:string): Promise<Library[]> {
    return repo.getBookByGroup(group);
}

export function getAllBooks():Promise<Library[]> {
    return repo.getAllBooks();
}

export function getBookById(id:number): Library | undefined {
    return repo.getBookById(id);
}

export function addBook(newBook: Library): Promise<Library>{
    return repo.addBook(newBook);
}

