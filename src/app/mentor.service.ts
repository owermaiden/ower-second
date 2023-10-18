import { Injectable } from '@angular/core';
import { Mentor } from './shared/mentor';
import { HttpClient } from  '@angular/common/http';
import { Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  
  mentors: Mentor[] = [];

  baseUrl:string = 'http://localhost:8080/api/v1/mentors';

  selectedMentor : Mentor = this.mentors[0];

  constructor(private http: HttpClient) { }


  fetchMentor$(){
    this.http.get<ResponseType>(this.baseUrl)
      .pipe(
        map(response => response.data), // Function
      )
      .subscribe({
        next: (data) => this.mentors = data,
        error: (error) => console.log(error), // fallback method
        complete: () => console.log("completed")
    });
  }

  

  likeMentor(liked: Mentor){
    let index = this.mentors.findIndex(mentor => mentor.id === liked.id);
    this.mentors[index]!.likeCount! += 1;
  }
}

interface ResponseType{
  data: Mentor[]
}
