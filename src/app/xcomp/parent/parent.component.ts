import { Component } from '@angular/core';
import { Mentor } from 'src/app/shared/mentor';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  mentors: Mentor[] = [
    new Mentor(1,'Ower', 12),
    new Mentor(2,'Sahin', 23),
    new Mentor(3,'Matt', 4)
  ];
  isDisabled: boolean = false;

  selectedP: Mentor | undefined;

  onSelect(mentor: Mentor){
    this.selectedP = mentor;
  }

  onClick(event : Event){
    console.log(event);
  }

  onLike(id : number){
   let index = this.mentors.findIndex(mentor => mentor.id === id);
   this.mentors[index].name = `${this.mentors[index].name} liked `;
  }
}
