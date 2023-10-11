import { Component } from '@angular/core';
import { Mentor } from '../shared/mentor';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  isDisabled: boolean = true;
  count: number | undefined; 
  isAuthorized: boolean = true;
  mentors: string[] = ['Ower', 'Sahin', 'Matt'];
  myMentors: Mentor[] = [
    new Mentor(1,'Ower', 12),
    new Mentor(2,'Sahin', 43),
    new Mentor(3,'Matt', 2)
  ];
  iMentors: IMentor[] = [
    { name: 'Ower' , likeCount: 12 },   // JSON 
    { name: 'Sahin' , likeCount: 23 },
    { name: 'Matt' , likeCount: 23 }
  ];


  onClick(){
    this.isDisabled = !this.isDisabled;
    this.iMentors[0].likeCount++;
  }
}

interface IMentor {
  name: string,
  likeCount: number
}
