import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  posts: Post[] = [];

  constructor(private service: PostService){}

  ngOnInit(): void {
    this.service.getPosts().subscribe(
      response => this.posts = response
    )
  }

}
