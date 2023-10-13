import { Component, Input } from '@angular/core';
import { Mentor } from 'src/app/shared/mentor';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() selectedC: Mentor | undefined;

}
