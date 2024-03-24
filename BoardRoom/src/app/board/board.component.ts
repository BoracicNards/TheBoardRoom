import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit {
  feed: Post[] =[];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.feed = this.postService.getFeed();
  }
}
