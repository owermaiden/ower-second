import { Injectable } from '@angular/core';
import { Mentor } from './shared/mentor';
import { HttpClient } from  '@angular/common/http';
import { BehaviorSubject, Observable, Subject, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  
  mentors: Mentor[] = [    
    new Mentor(1,'Ower', 12),
    new Mentor(2,'Sahin', 43),
    new Mentor(3,'Matt', 2)
];

  baseUrl:string = 'http://localhost:8080/api/v1/mentors';

  // selectedMentor : Mentor = this.mentors[0]; // We are having problem to get the change...
  // selectedMentor$: Subject<Mentor> = new Subject(); // Subject is a special kind of Observable 
  selectedMentor$: BehaviorSubject<Mentor> = new BehaviorSubject<Mentor>(this.mentors[0]);

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

  onSelectMentor(mentor: Mentor){
    let index = this.mentors.findIndex(d => d.id === mentor.id);
    // this.selectedMentor = this.mentors[index];
    this.selectedMentor$.next(this.mentors[index]);
  }



  likeMentor(liked: Mentor){
    let index = this.mentors.findIndex(mentor => mentor.id === liked.id);
    this.mentors[index]!.likeCount! += 1;
  }
}

interface ResponseType{
  data: Mentor[]
}
