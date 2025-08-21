export class Book{
    tile: string;
    author: string;
    year: number;

    constructor(title: string, author:string, year: number){
        this.tile = title;
        this.author = author;
        this.year = year;
    }
}