export class User {
    id: number = 0;
    name: string;
    xp_tag: string[];
    current_tag: string[];
    bio: string;
    pfp: string;

    constructor(name: string, xp_tag: string[], curr_tag: string[],
        bio: string, pfp: string){
            this.name = name;
            this.xp_tag = xp_tag;
            this.current_tag = curr_tag;
            this.bio = bio;
            this.pfp = pfp;
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
    setBio(newBio: string){
        this.bio = newBio;
    }
    setPfpPath(newPath: string){
        this.pfp = newPath;
    }
    addXpTag(tag: string){
        this.xp_tag.push(tag)
    }
    removeXpTag(tag: string){
        const index = this.xp_tag.indexOf(tag);
        this.xp_tag.splice(index, 1)
    }
    addCurrTag(tag: string){
        this.current_tag.push(tag);
    }
    removeCurrTag(tag: string){
        const index = this.current_tag.indexOf(tag);
        this.current_tag.splice(index, 1);
    }
}
