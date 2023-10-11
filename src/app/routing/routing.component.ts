import { Component } from '@angular/core';
import { Mentor } from '../shared/mentor';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent {

  mentors: Mentor[] = [
    new Mentor('Ower', 12),
    new Mentor('Sahin', 23),
    new Mentor('Matt', 4)
  ];
}
