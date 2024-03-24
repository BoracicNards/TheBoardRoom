import { User } from "./user";

export class Comment {
    id: number = 0;
    author: User;
    datetime: Date;
    anon: boolean;
    content: string;
    isReply: boolean;

    constructor(author: User, anon: boolean, content: string, isReply: boolean){
        this.author = author;
        this.datetime = new Date();
        this.anon = anon;
        this.content = content;
        this.isReply = isReply;
    }
    
    getAuthor(){
        return this.author;
    }
    setAuthor(newAuthor: User){
        this.author = newAuthor;
    }
    getAnon(){
        return this.anon;
    }
    getContent(){
        return this.content;
    }
    getIsReply(){
        return this.isReply;
    }
}
