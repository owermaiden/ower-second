import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post';
import { PostService } from '../post.service';
import { Observable, of } from 'rxjs';

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
      (response : Post[]) => this.posts = response
    )
  }

  numbers : Observable<number> = of(1,2,3,4,5,6,7,8,9);  // numbers.stream().
  
  words: Observable<string> = new Observable<string>(
    (observer) => {
      observer.next("hello");
      observer.next("world");
      setTimeout(() => {
        observer.next("Final")
      },10000);
    }
  );

}
