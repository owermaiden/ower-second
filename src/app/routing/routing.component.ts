import { Component } from '@angular/core';
import { Mentor } from '../shared/mentor';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent {

  mentors: Mentor[] = [
    new Mentor(1,'Ower', 12),
    new Mentor(2,'Sahin', 23),
    new Mentor(3,'Matt', 4)
  ];
}
