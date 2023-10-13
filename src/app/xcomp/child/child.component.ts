import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mentor } from 'src/app/shared/mentor';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() selectedC: Mentor | undefined;
@Output() likeEvent = new EventEmitter<number>();

onLike(){
  if(this.selectedC) this.selectedC.likeCount!++;
  this.likeEvent.emit(this.selectedC?.id);
}

}
