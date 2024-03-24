import { User } from "./user";
import { Comment } from "./comment";

export class Post {
    id: number = 0;
    //author: User;
    title: string;
    desc: string;
    //file: string;
    comments: Comment[]
    tags: string[];

    constructor(title: string, desc: string, tags: string[]){ //file: string, user: User){
            this.title = title;
            this.desc = desc;
            this.tags = tags;
            //this.file = file;
            //this.author = user;
            this.comments = [];
    }
    getTitle(){
        return this.title;
    }
    getDesc(){
        return this.desc;
    }
    // getFilePath(){
    //     return this.file;
    // }
    // getAuthor(){
    //     return this.author;
    // }
    getComments(){
        return this.comments;
    }
    // setFilePath(newPath: string){
    //     this.file = newPath;
    // }
}
