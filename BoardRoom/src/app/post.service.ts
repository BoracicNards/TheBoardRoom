import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  feed: Post[] = [];
  discussion: Post[] = [];
  
  publishPost(post: Post){
    this.feed.push(post);
  }
  getFeed(){
    return this.feed;
  }
  deletePost(post: Post){
    const index = this.feed.indexOf(post);
    this.feed.splice(index, 1);
  }
  publishDisc(post: Post){
    this.discussion.push(post);
  }
  getDiscussion(){
    return this.discussion;
  }
  deleteDiscussion(post: Post){
    const index = this.discussion.indexOf(post);
    this.discussion.splice(index, 1);
  }
}
