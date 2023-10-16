import { Injectable } from '@angular/core';
import { Mentor } from './shared/mentor';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  
  mentors: Mentor[] = [
    new Mentor(1,'Ower', 12),
    new Mentor(2,'Sahin', 23),
    new Mentor(3,'Matt', 4)
  ];

  selectedMentor : Mentor = this.mentors[0];

  constructor() { }

  
}
