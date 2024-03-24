/*
Class for User objects that contains all information needed for any given User.
Information to be displayed on profile.
*/
import { Post } from "./post";


export class User {
    id: number = 0;
    name: string;
    xp_tag: string[];
    current_tag: string[];
    bio: string;
    pfp: string;
    posts: Post[]

    constructor(name: string, xp_tag: string[], curr_tag: string[],
        bio: string, pfp: string){
            this.name = name;
            this.xp_tag = xp_tag;
            this.current_tag = curr_tag;
            this.bio = bio;
            this.pfp = pfp;
            this.posts = [];
    }

    getName(){
        return this.name;
    }
    getXpTags(){
        return this.xp_tag;
    }
    getCurrTags(){
        return this.current_tag;
    }
    getBio(){
        return this.bio;
    }
    getPfpPath(){
        return this.pfp;
    }
    getID(){
        return this.id;
    }
    //Updates bio
    setBio(newBio: string){
        this.bio = newBio;
    }
    //Changes file path to new profile picture
    setPfpPath(newPath: string){
        this.pfp = newPath;
    }
    //Appends XP tag to array of experience tags
    addXpTag(tag: string){
        this.xp_tag.push(tag)
    }
    //Finds index of tag to be removed and then removes single item from array
    removeXpTag(tag: string){
        const index = this.xp_tag.indexOf(tag);
        this.xp_tag.splice(index, 1)
    }
    //Adds current tag to end of current tag array
    addCurrTag(tag: string){
        this.current_tag.push(tag);
    }
    //Finds index of current tag to be removed and then removes single element
    removeCurrTag(tag: string){
        const index = this.current_tag.indexOf(tag);
        this.current_tag.splice(index, 1);
    }
    getPosts(){
        return this.posts;
    }
    //Adds new post to array of Posts made by a certain user
    addPost(post: Post){
        this.posts.push(post);
    }
}
