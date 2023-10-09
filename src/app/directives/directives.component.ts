import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  isDisabled: boolean = true;
  count: number | undefined; 


  onClick(){
    this.isDisabled = !this.isDisabled;
  }
}
